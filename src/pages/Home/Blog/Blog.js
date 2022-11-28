import React from "react";

const Blog = () => {
  return (
    <div className="">
      <h2 className="text-center text-3xl font-semibold">
        Some Burning Questions
      </h2>
      <div className="text-center">
        <div className="border border-red-600 w-full my-3">
          <h3 className="text-2xl mb-3">
            1.What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            The logical state has a store to cover the information of the
            business logic that is essential to carry out the main functional
            requirements of the app. The store is predefined with the data
            schema to easily carry out actions like save, update, delete and
            view. The pieces of information stored here are required globally
            across the app.The server state handles the server-side data
            introduced by the HTTP request. The information contains data and
            request states like loading, fetching, and error.
          </p>
        </div>
        <div className="border border-red-600 w-full my-3">
          <h3 className="text-2xl mb-3">
            2. How does prototypical inheritance work?
          </h3>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object
          </p>
        </div>
        <div className="border border-red-600 w-full my-3">
          <h3 className="text-2xl mb-3">
            3. What is a unit test? Why should we write unit tests?
          </h3>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
        <div className="border border-red-600 w-full my-3">
          <h3 className="text-2xl mb-3">4.React vs. Angular vs. Vue?</h3>
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option. One of the main reasons for the popularity of React
            is that it works very efficiently with the DOM. Vue also uses the
            virtual DOM, but compared to React, Vue has better performance and
            stability. According to this data, Vue and React's performance
            difference is subtle since it is only a few milliseconds.Angular will fit best as a steeper learning curve is not a problem for these teams
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
