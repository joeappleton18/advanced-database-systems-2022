(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"week-3-mongodb-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#week-3-mongodb-queries","aria-hidden":"true"}},[t._v("#")]),t._v(" Week 3 (MongoDB Queries)")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("Last week we considered how we could use NodeJS and the packages Express and ejs to construct the view layer of a data driven application. This week we will be continuing our journey by moving on to explore, the powers of the MongoDB data model.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.kaggle.com/zynicide/wine-reviews",target:"_blank",rel:"noopener noreferrer"}},[t._v("To assist us in gaining a better understanding of the powers of MongoDB, we are going to revisit our wine tasting dataset"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("For those of you that have explored this data set you would have observed some interesting properties. First, there are around 20k tastings with no attributed taster. Second, although there are ~130k records, there are only ~20 wine tasters - they've been busy! Observations such as this can be helpful in determining the utility of a data set.")])]),t._v(" "),s("h3",{attrs:{id:"task-0-windows-path-setting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-0-windows-path-setting","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 0 - Windows Path Setting")]),t._v(" "),s("p",[t._v("If you are using windows, now is a good time to add the MongoDB folder as an environment variable. Further to this, you should also install the MongoDB Tools.")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/31055637/getting-mongoimport-is-not-recognized-as-an-internal-or-external-command-ope",target:"_blank",rel:"noopener noreferrer"}},[t._v("There is a good stack overflow answer that you can read here"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("You will need to download "),s("a",{attrs:{href:"https://www.mongodb.com/try/download/database-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Tools"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Extract the zip file and move the contents to "),s("code",[t._v("C:\\Program Files\\MongoDB\\Server\\4.4\\bin\\")])])])]),t._v(" "),s("h2",{attrs:{id:"task-1-setting-up-our-sample-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-1-setting-up-our-sample-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 1 - Setting Up our Sample Application")]),t._v(" "),s("p",[t._v("For the rest of this unit, I will be providing you with a sample application which builds on our wine tasting dataset. I intend to ensure you are all starting with the same code base and will provide you with an up-to-date version the application each week. To get started this week:")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/joeappleton18/db-starter-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("Check the README.md instructions on the starter project to get started. This will tell you how to set everything up this week"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v('You\'ll notice you will need to seed the database and rename the ".env.example" file to ".env". Further to this, you will also need to run the database seeder.')])]),t._v(" "),s("li",[s("p",[t._v("You should take a look at the seeder.js file and ensure you have an idea how it works. Using a small side utility to seed a database is common.")])])]),t._v(" "),s("h2",{attrs:{id:"considering-the-current-data-shape"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#considering-the-current-data-shape","aria-hidden":"true"}},[t._v("#")]),t._v(" Considering the Current Data Shape")]),t._v(" "),s("p",[t._v('Currently each document in our "tastings" collection looks, along the lines of, this:')]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ObjectId("),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5f88b504513221bee048d3dd"')]),t._v(")"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"points"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"87"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nicosia 2013 Vulkà Bianco  (Etna)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn\'t overly expressive, offering unripened apple, citrus and dried sage alongside brisk acidity."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"taster_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kerin O’Keefe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"taster_twitter_handle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@kerinokeefe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"designation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vulkà Bianco"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variety"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"White Blend"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Etna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"province"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sicily & Sardinia"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Italy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"winery"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nicosia"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("blockquote",[s("blockquote",[s("p",[t._v("A single document from the tastings collection. Notice how MongoDB takes care of auto generating an ID for us.")])])]),t._v(" "),s("h2",{attrs:{id:"read"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read","aria-hidden":"true"}},[t._v("#")]),t._v(" Read")]),t._v(" "),s("p",[t._v("To get you all started, let's explore some basic read operations that we might want to run on our collection.")]),t._v(" "),s("p",[t._v("Access the MongoDB command line, and run the following:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("use wine\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tastings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Running the above command will return the first 20 records that match the query and a cursor to the remaining records. You'll notice in the command shell it will prompt you to 'type \"it\"' for more records.")]),t._v(" "),s("h3",{attrs:{id:"further-refining-our-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-refining-our-query","aria-hidden":"true"}},[t._v("#")]),t._v(" Further refining our query")]),t._v(" "),s("p",[t._v("Notice, above, how we passed into find what appears to be an empty object literal - "),s("code",[t._v("{}")]),t._v(". We can add name value pairings to this object to filter our results. Here are some basic examples:")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v('db.tastings.find({country: "Italy" })')])]),t._v(" returns all wine tastings from Italy")]),t._v(" "),s("li",[s("strong",[s("code",[t._v('db.tastings.find({country: "Italy", price: {$lt:10}})')])]),t._v(" returns all wine tastings from Italy where the price of the wine is less than 10")])]),t._v(" "),s("p",[t._v("For a full list of operations you should read the "),s("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/query/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink")],1),t._v(". However, here is a slightly more interesting example:")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("db.tastings.find({$or: [{country: 'France'}, {country: 'Italy'}]})")])]),t._v(" returns all wine tastings from Italy "),s("strong",[t._v("or")]),t._v(" France. We can also use the logical operators "),s("strong",[s("code",[t._v("$not, $and, $nor")])]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"mongo-allows-us-to-append-further-operations-to-a-given-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongo-allows-us-to-append-further-operations-to-a-given-query","aria-hidden":"true"}},[t._v("#")]),t._v(" Mongo allows us to append further operations to a given query")]),t._v(" "),s("p",[t._v("As mentioned, when we execute a query MongoDb returns a cursor. A cursor has a whole suite of methods that we can run to further refine our data.")]),t._v(" "),s("p",[t._v("Below are some useful methods, for a complete list of, what are know as cursor methods, "),s("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/method/js-cursor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("check the documentation"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("db.tastings.find({}).count()")])]),t._v(" returns the total number of records matching that query")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("db.tastings.find({}).limit(1)")])]),t._v(" limits the amount of records contained in the cursor's result set")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("db.tastings.find({}).pretty()")])]),t._v(" displays the results in an easy to read format")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("db.tastings.find({price: {$ne: null}}).sort({price: 1})")])]),t._v(" Sorts the results in price order. "),s("code",[t._v("price: 1")]),t._v(" tells MongoDB to display the results in ascending (increasing) order by price. "),s("code",[t._v("price: -1")]),t._v(", if you are feeling flush, displays the results in descending price order.")])])]),t._v(" "),s("h2",{attrs:{id:"task-2-reading-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-2-reading-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 2 - Reading Data")]),t._v(" "),s("p",[t._v("Use the notes above, and the "),s("a",{attrs:{href:"https://docs.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB documentation"),s("OutboundLink")],1),t._v(" to answer the following questions (you should aim to do so efficiently as possible):")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("How many records, in total, are there in the entire tastings collection?")])]),t._v(" "),s("li",[s("p",[t._v("How many wine records exist that originated from Italy where the price is greater than 80?")]),t._v(" "),s("ul",[s("li",[t._v("List the results in descending order, so you can see the most expensive bottle of wine first.")])])]),t._v(" "),s("li",[s("p",[t._v("How many wine records exist that originated from France or Italy, where the price is greater than 60?")])])]),t._v(" "),s("p",[s("strong",[t._v("Did you fly through these tasks! Here are some more advanced, optional, questions")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Can you use the "),s("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggregation pipeline"),s("OutboundLink")],1),t._v(" to determine the name of each wine taster and the count of the total tastings they have conducted?")])]),t._v(" "),s("li",[s("p",[t._v("How many different regions are there?")])]),t._v(" "),s("li",[s("p",[t._v('Can you work out the wine which has been tasted the most? I think it is "Gloria Ferrer NV Sonoma Brut Sparkling (Sonoma County)" which has been tasted 11 times.')])])]),t._v(" "),s("h2",{attrs:{id:"updating-and-writing-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-and-writing-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Updating and Writing Data")]),t._v(" "),s("p",[t._v("Updating and writing data is very simple. For instance, we can simply run the following operation:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tastings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toro Loco"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  taster_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Joe Appleton"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  taster_twitter_handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@joeappleton18"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  designation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vulkà Bianco"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  variety"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"White Blend"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  region_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Etna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("blockquote",[s("blockquote",[s("p",[t._v("FYI, Toro Loco is a very affordable wine from Aldi - I recommend it!")])])]),t._v(" "),s("p",[t._v("Let's assume the price changes on our bottle of Toro Loco to 20. We could update the record using the following command:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tastings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toro Loco"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The first part of the above command is our query - "),s("code",[t._v('{title: "Toro Loco"}')]),t._v(". The second, is the operations that we want to run on the record that our query returns - "),s("code",[t._v("[{ $set: { price: 20 } }]")])]),t._v(" "),s("p",[t._v("The above command will update the first record it finds! However, what if there are lots of tastings of ToroLoco. This means our data, while usable, is not exactly optimised. Data optimisation is something that we will look at later. For now, you just need to know that you can update multiple records:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tastings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateMany")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toro Loco"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("We can also unset document properties:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tastings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateMany")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toro Loco"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $unset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The above query removes the price property from our Toro Loco documents.")]),t._v(" "),s("p",[t._v("A further useful operation is constructing new properties using other properties on the existing record:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tastings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateMany")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toro Loco"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" oldPrice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$price"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v('The above query sets the value of the current to "oldPrice", then updates the price to 30.')]),t._v(" "),s("h2",{attrs:{id:"task-3-updating-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-3-updating-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 3 - Updating Data")]),t._v(" "),s("p",[t._v("This, final task, starts off by getting you to perform simple update operations and moves on to more complex ones. We can use update operations to clean our data.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('Can you update the price "Gloria Ferrer NV Sonoma Brut Sparkling (Sonoma County)" to 11?')])]),t._v(" "),s("li",[s("p",[t._v("Can you figure out how to to move regions to an embedded array on each document in the tastings collection. After completion, you records should all look like this:")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Toro Loco'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    regions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Etna'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'France'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"advanced-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-tasks","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced Tasks")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Can you figure out how to use the "),s("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/group/#pipe._S_group",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggregation pipeline"),s("OutboundLink")],1),t._v(" to output the details of each wine taster (e.g. name, twitter handle and number of tastings) to a new collection called tasters - this will take a little bit of research.")])]),t._v(" "),s("li",[s("p",[t._v("Finally, continue to explore our data set and run some more advanced queries that will further clean the data")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);