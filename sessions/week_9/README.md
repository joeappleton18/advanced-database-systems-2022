# Week 9 (Deploying to a Serverless Infrastructure)

:::tip
**Session Dependencies**

This week we are continuing with our wine tasting theme. Please ensure you have the latest version
of the project

You can clone this version using the following command:

- `git clone https://github.com/joeappleton18/db-starter-project.git --single-branch --branch week-8-solutions`
- This week we need to be working on a master branch. Run, `git checkout -b master`
  :::

This week marks the end of our journey in learning the basics of creating database applications. To complete this journey, we need to consider how we might deploy our application. As such, the primary question for this week is:

### How can I deploy my data-driven web applications to a secure and scalable infrastructure?

Deploying a web application used to be a slow and painful process. You would have to physically provision multiple servers (staging and production) and then use a protocol like FTP or SSH to upload changes and patches to our codebase. The issue with this approach, due to its cumbersome nature, deployments may happen infrequently. To live up to the agile manifesto of fast iterations and quick deployments we need a more versatile solution, and this solution comes in the form of a serverless infrastructures and cloud hosting.

## Modern Deployment Options

Both cloud hosting solutions (e.g., Digital Ocean) and serverless infrastructures (e.g., AWS, Google Cloud and Azure) circumvent the need for us to maintain any physical hardware, and both can scale along with increased application demand. The key difference between these two solutions is with cloud hosting we need to install and maintain the servers software, with a serverless solution this is handled for us. In summary, both are fine choices. However, the process of installing and patching software takes more human resource. As such, we are going to be exploring a serverless infrastructure for our wine tasting application.

## What is a serverless infrastructure

According to Amazon (AWS, the largest provider of such an infrastructure, ["A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS. "](https://aws.amazon.com/lambda/serverless-architectures-learn-more/). They claim that a serverless infrastructure affords us the following benefits:

- No operating systems to choose, secure, patch, or manage.
- No servers to right size, monitor, or scale out.
- No risk to your cost by over-provisioning.
- No risk to your performance by under-provisioning.

The above benefits are all well and good; however, AWS is notoriously complex, and has a steep learning curve. Case in point, consider their infrastructure diagram for a simple todo list application:

<img src="https://joeappleton18.github.io/data-management-2021-notes/images/aws-infrastructure.png" />

> > A, not so simple, serverless todo list. Adapted, from a digram provided by AWS.

Notice, in the above architectural digram, we have lambda functions (denoted by the lambda greek letter). These functions are discreet units of code that are executed through triggers. Lambda functions are an interesting proposition, as we only pay for them when they are invoked. However, such a set up is overkill for our little wine tasting application. As such, we are going to opt for services that offer a simplified abstraction layer over AWS.

## Our Infrastructure

![](./deployment-diagram.png)
> > The infrastructure we are setting up this week - utilising Cyclic  and MongoDB Atlas.

Rather than use AWS directly, we are going to be utilising two services that simplify its infrastructure - [Cyclic](https://www.cyclic.sh/) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register). Cyclic allows us to quickly deploy applications to a lightweight, secure, virtualised Unix container. Cyclic allows us to deploy applications by simply pushing our codebase to a main or master branch on a GitHub repository. While Cyclic will take care of running our node application, we'll use MongoDB Atlas to host our database. MongoDB atlas if a service offered by MongoDB which simplifies the process of provisioning and deploying cloud instances of MongoDB.

## Practical Session

We'll start the practical session by, first setting up our cloud database. Next, we'll move on to deploying our Node application to Heroku.

## Setting up our Cloud Database

Let's dive in and created a MongoDB Atlas account. This is a straight forward process:

<img src="https://joeappleton18.github.io/data-management-2021-notes/images/set-up-a-atlas-account.png" />

> > The first three steps in setting up a free Atlas Account.

- [Register a new account](https://www.mongodb.com/cloud/atlas/register).
- On the next screen, you'll get the opportunity to set up a new project, name it "wine" and select JavaScript as the language choice.
- Select select a Free, shared, cluster.
- Finally, choose an AWS cloud provider and click "Create Cluster"

<img src="https://joeappleton18.github.io/data-management-2021-notes/images/configuring-your-cluster.png" />

> > Configuring a cluster

- Next, we need to follow through the steps to configure our database cluster
- Under database access, set up an admin user and password
- Under network access, allow access from all IPs
- Finally clusters, click connect to cluster, click connect using NodeJS and grab the connection string

## Differentiating Between Development and Production - A little trip into DEV Ops

We need a way to allow us to differentiate between- We need to be able to differentiate between our production and development environment. In other words, we need to have two databases. One to hold our development data, and another to hold our production data.

To begin with, we need a way to allow our database seeder to seed a production and development database. This can be achieved through injecting a `NODE_ENV` variable into our seeder:

1. We are going to use `cross-env` to allow us to dynamically set env variable in our `package.json` file. Install it: `npm install -D cross-env`
2. Next, add a `MONGODB__PRODUCTION_URI` property to your `.env` file. You'll notice that the URI you've been using for staging contains the name of the database. As long as you've created a cluster with Atlas DB you can create several databases in this cluster by updating the database name in the connection string. Let's update our connection strings so we have tw database `wine` and `wineDEV`:

```JavaScript
MONGODB__PRODUCTION_URI=mongodb+srv://test:xxxx@cluster0.x08wt.mongodb.net/wine?retryWrites=true&w=majority
MONGODB_URI=mongodb+srv://xxxx:test@cluster0.x08wt.mongodb.net/wineDev?retryWrites=true&w=majority
```

3. We can now set up some environment specific node scripts in `package.json`:

```JavaScript
...
  "scripts": {
    "dev": "nodemon app.js",
    "seedProduction": "cross-env NODE_ENV=production node seeder.js",
    "seed": "node seeder.js"
  }
   ...
```

Notice how we are using `cross-env` to set the production environment. Also not, we are not setting a `NODE_ENV=development`.
I like to assume, unless explicitly stated, we are working in development.

- Now, we can update the seeder to handle the production environment:

```JavaScript
...
const { MONGODB_URI, MONGODB__PRODUCTION_URI } = process.env;
// don't copy and past this! It needs to be updated.
const client = new MongoClient(
  process.env.NODE_ENV === "production" ? MONGODB__PRODUCTION_URI : MONGODB_URI
);
...
```

- Notice how I am using the turnery operator to distinguish between production and dev.
- If all has gone well you should be able to seed production and development databases, by running:

```shell
npm run seed
npm run seedDevelopment
```

## Task 1 - Setting up Atlas DB and Seeding the Production Database

:::hint
If you already have a Atlas DB account, you can start from the second step.
:::

- Follow the steps above to set up a new database cluster
- From your Atlas dash, click `clusters/collections`, and delete any existing databases that are in there. You may have one called `myFirstDatabase`, delete this.
- Follow steps above to seed a production database.

## Setting up a Cyclic Deployment 

Now we have a database set up, we are ready to deploy our application to Cyclic. This is actually a very painless process:

### Making our Application Deployable

To make our application deployable, we only need to make a few tweaks:

- Ensure you are working on a master branch (see this weeks setup instruction, above)

- When our application is deployed, Cyclic will look in our `package.json` file for a start script. It uses this script to run our app. Let's create a start command:

```JavaScript
...
"scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js"
},
...
```

>> package.json - a start script instructing cyclic how to run our application


- Next we need a remote repository to host our wine application:

    - Create an empty GitHub repository and take note of the remote address (***note, it must be empty in order to work on the Cyclic free tier).
    - Point a terminal session to the root of your wine-tasting application and push your application to your new remote repository.
    - Ensure the changes to your work are committed

```bash

git checkout -b master     # ensure you are on a master branch 
git remote remove origin   # removes the existing remote 
git remote add origin <your repo address>  # set up a new remote 

git push origin master 

```
>> run the above in the root directory of you wine tasting application


### Set Up

- We are now ready to deploy our application to Cyclic

0. [Set up a new Cyclic Account](https://cyclic.sh)

1. [Go to Cyclic - Deploy New App](https://app.cyclic.sh/#/deploy?intro=true)


2. Click on Link Your Own
![Step 2 screenshot](https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/f8403484-68a9-4d23-9191-e0aa9d38132b/7b0a9fb0-0ba0-4eca-a61e-ee712ec7e772.png?crop=focalpoint&fit=crop&fp-x=0.2681&fp-y=0.3622&fp-z=2.5372&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980)


3. Click on Search your repositories and find your repository containing the room finder application
![Step 3 screenshot](https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/c09dd3e0-1d8f-4ca7-b0c4-b69bba2504cb/fd0304c9-9bd0-40d1-98d4-0fef1fdff48b.png?crop=focalpoint&fit=crop&fp-x=0.4952&fp-y=0.5735&fp-z=1.1277&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980)


4. Your application is now live! Well, sort of: we still need to set up an DB environment. take note of your applications URL and click to go to your application's dash.
![Step 4 screenshot](https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/2f086a4a-b08d-40bb-9568-dcde27436a66/9174fbe2-912e-4993-ba11-6ade689e4989.png?crop=focalpoint&fit=crop&fp-x=0.4792&fp-y=0.9464&fp-z=2.6235&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980)


5. Click on Variables
![Step 5 screenshot](https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/ee55aa2a-d0c2-42c2-b6cd-d10c8ccf46b0/9c4bbb6c-3a96-4e07-8542-2fef4154db01.png?crop=focalpoint&fit=crop&fp-x=0.5341&fp-y=0.2276&fp-z=2.7259&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980)


6. Add the MONGODB_URI environment variable. The value should be your production database's connection string. Click Add Variable and Save, when done
![Step 6 screenshot](https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/6f5069b5-f646-4477-b038-b33c95899d53/1a9c0b34-4a22-49d2-bb9a-278a01cb9bd2.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980)



## Task 2 - Deploying your Web Application

Follow the steps above to deploy your wine tasting application to Cyclic.



## Task 3 - Set up a Project for Your Assessment

Configure a new deployable project for your assessment
