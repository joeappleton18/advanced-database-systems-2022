module.exports = {
  base: "/advanced-database-systems-2022/",
  dest: "docs",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Assessment 1",
        collapsable: true,
        children: [
          "/sessions/assessment_1_project with individual report_brief",
          "/sessions/assessment_support",
        ],
      },
      {
        title: "Overview",
        collapsable: true,
        children: ["/"],
      },

      {
        title: "All Video Practicals",
        collapsable: true,
        children: ["/video-practicals"],
      },

      {
        title: "Week 1 - Introduction to NodeJS and MongoDB",
        collapsable: true,
        children: ["sessions/week_1/lecture", "/sessions/week_1/"],
      },

      {
        title: "Week 2 - Exploring Node, Express and Templates",
        collapsable: true,
        children: ["sessions/week_2/lecture", "/sessions/week_2/"],
      },
      {
        title: "Week 3 - No Sql data planning and Modelling",
        collapsable: true,
        children: ["sessions/week_3/lecture", "/sessions/week_3/"],
      },
      {
        title: "Week 4  - Completing the MVC stack",
        collapsable: true,
        children: ["/sessions/week_4/lecture", "/sessions/week_4/"],
      },

      {
        title: "Week 5 - Getting to Grips With the Assessment",
        collapsable: true,
        children: ["/sessions/week_5/"],
      },

      {
        title: "Week 6 - Thinking About Updating Data",
        collapsable: true,
        children: ["/sessions/week_6_a/lecture", "/sessions/week_6_a/"],
      },

      {
        title: "Week 7 - Data Modeling and Relationships",
        collapsable: true,
        children: ["/sessions/week_7/lecture", "/sessions/week_7/"],
      },
      {
        title: "Week 8 - User Authentication",
        collapsable: true,
        children: ["/sessions/week_8/lecture", "/sessions/week_8/"],
      },

      {
        title: "Week 9 - Deploying to a Serverless Infrastructure",
        collapsable: true,
        children: ["/sessions/week_9/lecture", "/sessions/week_9/"],
      },

      {
        title: "Week 10 - Further Mongo Relations and Dynamic JavaScript",
        collapsable: true,
        children: ["/sessions/week_10/lecture", "/sessions/week_10/"],
      },
    ],
  },
};

/// Week 5 (Getting to Grips With the Assessment)
