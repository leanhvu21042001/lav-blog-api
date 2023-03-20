/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      title: "Overview of TypeScript",
      content:
        "TypeScript is an open-source programming language that is built on top of JavaScript",
      tags: "TypeScript",
      slug: "overview-of-typescript",
    },
    {
      title: "Beginner's guide to Node.js programming",
      content:
        "Node.js is a popular JavaScript runtime environment that allows developers to build scalable server-side applications.",
      tags: "Node.js",
      slug: "beginner-s-guide-to-node-js-programming",
    },
    {
      title: "Introduction to React Native",
      content:
        "React Native is a popular framework for building mobile applications using React and JavaScript.",
      tags: "React Native",
      slug: "introduction-to-react-native",
    },
    {
      title: "Building a RESTful API with Express.js",
      content:
        "Express.js is a popular Node.js web framework that makes it easy to build scalable and maintainable APIs.",
      tags: "Express.js",
      slug: "building-a-restful-api-with-express-js",
    },
    {
      title: "Using MongoDB with Mongoose.js",
      content:
        "Mongoose.js is a popular object modeling library for Node.js that provides a simple way to interact with MongoDB databases.",
      tags: "MongoDB",
      slug: "using-mongodb-with-mongoose-js",
    },
    {
      title: "Getting started with Angular",
      content:
        "Angular is a popular framework for building dynamic web applications using TypeScript and HTML.",
      tags: "Angular",
      slug: "getting-started-with-angular",
    },
    {
      title: "Building a Full-Stack Application with React and Express",
      content:
        "Learn how to build a full-stack web application using React and Express.js.",
      tags: "React, Express.js",
      slug: "building-a-full-stack-application-with-react-and-express",
    },
    {
      title: "Introduction to Redux",
      content:
        "Redux is a popular state management library for JavaScript applications.",
      tags: "Redux",
      slug: "introduction-to-redux",
    },
    {
      title: "Authentication and Authorization in Node.js",
      content:
        "Learn how to implement authentication and authorization in a Node.js application using Passport.js.",
      tags: "Node.js, Passport.js",
      slug: "authentication-and-authorization-in-node-js",
    },
    {
      title: "Introduction to GraphQL",
      content:
        "GraphQL is a query language for APIs that provides a more efficient, powerful and flexible alternative to REST.",
      tags: "GraphQL",
      slug: "introduction-to-graphql",
    },
    {
      title: "Building a Real-Time Chat Application with Socket.IO",
      content:
        "Learn how to build a real-time chat application using Socket.IO and Node.js.",
      tags: "Socket.IO, Node.js",
      slug: "building-a-real-time-chat-application-with-socket-io",
    },
    {
      title: "Using Docker to Deploy a Node.js Application",
      content:
        "Learn how to use Docker to containerize and deploy a Node.js application.",
      tags: "Docker, Node.js",
      slug: "using-docker-to-deploy-a-node-js-application",
    },
    {
      title: "Introduction to Vue.js",
      content:
        "Vue.js is a progressive JavaScript framework for building user interfaces.",
      tags: "Vue.js",
      slug: "introduction-to-vue-js",
    },
    {
      title: "Creating Interactive Web Applications with D3.js",
      content:
        "D3.js is a popular JavaScript library for creating interactive and dynamic data visualizations on the web.",
      tags: "D3.js",
      slug: "creating-interactive-web-applications-with-d3-js",
    },
    {
      title: "Building a Microservices Architecture with Node.js",
      content:
        "Learn how to build a microservices architecture using Node.js and other popular tools.",
      tags: "Node.js, Microservices",
      slug: "building-a-microservices-architecture-with-node-js",
    },
    {
      title: "Using Redis as a Caching Layer in Node.js",
      content:
        "Learn how to use Redis as a caching layer in a Node.js application to improve performance.",
      tags: "Redis, Node.js",
      slug: "using-redis-as-a-caching-layer-in-node-js",
    },
    {
      title: "Introduction to Angular Material",
      content:
        "Angular Material is a UI component library for Angular that provides a set of reusable UI components.",
      tags: "Angular, Angular Material",
      slug: "introduction-to-angular-material",
    },
    {
      title: "Building a Serverless Application with AWS Lambda",
      content:
        "Learn how to build a serverless application using AWS Lambda and other AWS services.",
      tags: "AWS Lambda, Serverless",
      slug: "building-a-serverless-application-with-aws-lambda",
    },
    {
      title: "Building a Real-Time Dashboard with React and Firebase",
      content:
        "Learn how to build a real-time dashboard using React and Firebase.",
      tags: "React, Firebase",
      slug: "building-a-real-time-dashboard-with-react-and-firebase",
    },
    {
      title: "Building a Chatbot with Dialogflow",
      content:
        "Learn how to build a chatbot using Dialogflow, a natural language processing platform.",
      tags: "Dialogflow, Chatbot",
      slug: "building-a-chatbot-with-dialogflow",
    },
    {
      title: "Using Sass to Improve Your CSS Workflow",
      content:
        "Sass is a popular CSS preprocessor that makes it easy to write and manage CSS code.",
      tags: "Sass, CSS",
      slug: "using-sass-to-improve-your-css-workflow",
    },
    {
      title: "Introduction to Gatsby.js",
      content:
        "Gatsby.js is a static site generator that makes it easy to build fast and modern websites.",
      tags: "Gatsby.js",
      slug: "introduction-to-gatsby-js",
    },
    {
      title: "Building a Full-Stack Serverless Application with AWS Amplify",
      content:
        "Learn how to build a full-stack serverless application using AWS Amplify and other AWS services.",
      tags: "AWS Amplify, Serverless",
      slug: "building-a-full-stack-serverless-application-with-aws-amplify",
    },
    {
      title: "Using React Hooks for State Management",
      content:
        "React Hooks are a new addition to React that make it easy to manage state in functional components.",
      tags: "React, Hooks",
      slug: "using-react-hooks-for-state-management",
    },
    {
      title: "Building a Progressive Web App with React and Firebase",
      content:
        "Learn how to build a progressive web app using React and Firebase.",
      tags: "React, Firebase, PWA",
      slug: "building-a-progressive-web-app-with-react-and-firebase",
    },
  ]);
};