import React from "react";
import SideBar from "./sidebar";

import "../App.css";

export default function Profile() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap2">
        <p>
          <h1>BIO</h1>
          <p>
            I am intrigued by how the internet works and how humans interact
            with computing devices to provide solutions to everyday problems. I
            am particularly interested in how these problems are broken down
            into smaller bits and creative resolutions are birthed. My goal is
            to be a creator of intuitive, interesting and impactful technology
            solutions working with a team of like minds. Over the past few
            months, this interest has led me on to{" "}
            <a href="https://lambdaschool.com/">LAMBDA</a> as a full stack web
            developer.
          </p>
          <p>
            During this period, I make use of HTML/CSS to structure websites,
            Java-script to add functionality, React to manage my application and
            Node JS to fire up site’s back-end. I work every day on different
            projects which are summed up into daily challenges and weekly
            sprints. At the end of every month I work remotely with a team of
            developers to develop web solutions to combat real life problems,
            this has to be done from scratch and completed within four days. I
            enjoy every step of the design process, from discussion and
            collaboration to concept and execution, but I find the most
            satisfaction in seeing the finished product do everything for you
            that it was created to do.
          </p>
          <p>
            I’ve always sought out opportunities and challenges that are
            meaningful to me. Although my professional path has taken a few
            twists and turns — from a database manager at an audit firm to
            customer engagement to retail banking — I've never stopped
            engaging my passion to help others and solve problems. Prior to
            joining Lambda, I had considerable work experience in banking and
            auditing. As a relationship manager leading a team of 5 to meet
            retail acquisition targets for a bank and also as a customer service
            personnel resolving customer complaints and providing information on
            requests. These two roles have sharpened my communication skills,
            fine-tuned my presentation experience and enhanced my leadership
            qualities.
          </p>
          <br />
          <h2>FRONT-END WEB DEVELOPMENT</h2>
          My current experience and skills in front-end include:
          <ul>
            <li>HTML/CSS/Bootstrap</li>
            <li>
              TypeScript/JavaScript development: bootstraping, refactoring,
              improving the structure, reliability, build setup;
            </li>
            <li>
              Full integration of front-end development using tools like Webpack
              with features like automatic code reload, code minifications,
              multiple environments support, CI/CD, automated testing of
              accessibility, server-side render and visual snapshots.{" "}
            </li>
            <li>
              Good sense of design and UX using figma and other prototype
              applications.{" "}
            </li>
            <li>
              Huge experience in several JS ecosystems, by having used in the
              past many libraries like NextJS, React, Redux, jQuery.{" "}
            </li>
          </ul>
          <br />
          <h2>BACK-END WEB DEVELOPMENT</h2>
          <p>
            In back-end, my current stack is NodeJS. I make use of Node JS,
            Express and MySQL to craft Web Servers and build API’s for
            consumption by client-side applications. I use these skills to be in
            charge of building out the back-end API for projects. I combine this
            with a vast knowledge in database querying; making use of mongoDB,
            sqlite or PostgreSQL.I also refactor existing applications, by improving
            code readibility, separating concerns into separate
            functions/classes/modules, taking the business logic out from your
            request/response layer into separate modules (DDD), and moving the
            app architecture into an event-based one.
          </p>
        </p>
      </div>
    </div>
  );
}
