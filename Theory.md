#1 What is Emmet?
-> Emmet is a tool that allows developers to write HTML and CSS faster by using abbreviations and shortcuts. It is implemented as a plugin for many text editors and integrated development environments (IDEs), including Visual Studio Code, Sublime Text, and WebStorm.
Using Emmet, developers can write HTML and CSS code more quickly by using abbreviations that represent common HTML and CSS patterns. For example, instead of writing out a full HTML tag with its attributes and content, a developer can use an Emmet abbreviation to generate the code automatically.
For example, to generate an unordered list with three list items, a developer could use the following Emmet abbreviation:
ul>li\*3
This abbreviation would be expanded by Emmet into the following HTML code:

<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
Emmet can also be used to generate CSS code, using abbreviations that represent common CSS patterns and properties.
Overall, Emmet is a powerful tool that can help developers write HTML and CSS code more quickly and efficiently.

#2 Difference b/w Library and Frameworks
->A library is a collection of pre-written code that provides a set of functions that can be used to perform specific tasks. A library is typically imported into a project and used as needed to perform specific tasks, rather than serving as the foundation or structure of the project.
A framework, on the other hand, is a more comprehensive set of tools that provides a structure or foundation for building a particular type of application. A framework defines the overall architecture and flow of an application and provides a set of conventions and guidelines for building the application.
The main difference between a library and a framework is that a library is a collection of tools that you can use to build an application, while a framework is a set of conventions and guidelines for building an application that is built on top of the library.
For example, React is a library for building user interfaces, while Angular is a framework for building web applications. In the case of React, you can use the library to build specific UI components as needed, while in the case of Angular, you build your application using the conventions and guidelines provided by the framework.

#3 What is CDN? Why do we use it?
->A Content Delivery Network (CDN) is a distributed network of servers that are placed in strategic locations around the world. CDNs are used to improve the performance and availability of websites and web-based applications by reducing the distance that data has to travel and distributing the load across multiple servers.
Here's how CDNs work:
A user accesses a website or web-based application that is being served by a CDN.
The CDN determines the physical location of the user and selects the server that is closest to the user to deliver the content.
The CDN delivers the content from the selected server to the user.
CDNs can improve the performance of websites and web-based applications by reducing the distance that data has to travel, which can reduce latency and improve the speed at which the content is delivered to the user. CDNs can also improve the availability of a website or web-based application by providing redundant copies of the content and distributing the load across multiple servers. This can help prevent a single point of failure, ensuring that the website or application remains available even if one of the servers goes offline.

#4 Why is React known as React?
React is a JavaScript library for building user interfaces that was developed by Facebook. It is known as "React" because it was designed to be reactive, meaning that it can automatically update and re-render components in response to changes in data.
React was first released in 2013 and has since become one of the most popular JavaScript libraries for building web applications. It is known for its declarative style of programming, which makes it easy for developers to reason about their code and predict how it will behave. It also has a large ecosystem of libraries and tools that make it easier to build complex, modern web applications.
React is used by many companies and organizations, including Facebook, Netflix, and Airbnb, to build fast, scalable, and maintainable web applications

#5 What is crossorigin in script tag?
->The crossorigin attribute is an optional attribute that can be used in the script tag when including external scripts in an HTML page. It indicates that the script should be fetched using a CORS request, which stands for Cross-Origin Resource Sharing.
CORS is a mechanism that allows a web page to make requests to a server from a different domain than the one that served the page. By default, web browsers block web pages from making requests to a server from a different domain due to security concerns. However, the server can opt-in to allow such requests by including the appropriate CORS headers in its responses.
The crossorigin attribute can be used to indicate that the script should be fetched using a CORS request, which allows the server to include the appropriate CORS headers in its response. This can be useful if the script is hosted on a different domain than the page and the server has opted-in to allowing CORS requests.
Here's an example of a script tag with the crossorigin attribute:

<script src="https://example.com/script.js" crossorigin></script>

In this example, the script tag includes the crossorigin attribute to indicate that the script should be fetched using a CORS request. This allows the server to include the appropriate CORS headers in its response, allowing the script to be executed in the browser.

#6 What is diference between React and ReactDOM?
->React is a JavaScript library for building user interfaces that was developed by Facebook. It provides a declarative approach to building UI components, allowing developers to describe the desired state of the UI and have React automatically update the DOM to reflect that state.
ReactDOM is a separate library that provides the connection between React and the DOM (Document Object Model). It provides the functions that React components use to render themselves in the DOM and update the DOM in response to changes in the component state.
In other words, React is a library for building UI components, while ReactDOM is a library for rendering those components in the DOM and updating the DOM when the component state changes.
Here's a simple example of how React and ReactDOM might be used together:
import React from 'react';
import ReactDOM from 'react-dom';
function HelloWorld() {
return <h1>Hello, World!</h1>;
}
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
In this example, the HelloWorld component is defined using React, and the ReactDOM.render function is used to render the component in the DOM by selecting the element with the id of root.

#7 What is difference between react.development.js and react.production.js files via CDN?
-> The react.development.js and react.production.js files are different versions of the React JavaScript library that are optimized for different environments.
The react.development.js file is a version of React that is optimized for development environments. It includes additional debugging and error checking features that can help developers find and fix issues in their code. It is typically larger in size than the production version of React, as it includes extra code to support these debugging and error checking features.
The react.production.js file is a version of React that is optimized for production environments. It does not include the additional debugging and error checking features that are included in the development version, and as a result, it is typically smaller in size. This version of React is intended for use in live, production environments where performance and reliability are important.
When including React in a web page or web-based application, it is generally recommended to use the production version of React in live, production environments, and the development version in development and testing environments. This can help ensure that the application is running efficiently and with the best possible performance in production, while still providing the debugging and error checking features that developers need during the development process.
You can include React in your web page or web-based application using a CDN (Content Delivery Network) by adding a script tag to your HTML with the appropriate URL for the version of React that you want to use.

#8 What is async and defer?
-> The async and defer attributes are optional attributes that can be used in the script tag when including external scripts in an HTML page. They are used to specify how the script should be executed in relation to the loading and rendering of the page.
The async attribute indicates that the script should be executed asynchronously, meaning that it will be loaded and executed in parallel with the rest of the page. This can improve the performance of the page by allowing the browser to continue rendering the page while the script is being loaded and executed. However, it also means that the script may not be executed in the order in which it appears in the HTML, and it may not be executed at all if it is not needed to render the page.
The defer attribute indicates that the script should be executed when the page has finished parsing. This ensures that the script is executed in the order in which it appears in the HTML, but it may not be executed until after the page has finished loading, which can impact the performance of the page.
Here's an example of a script tag with the async attribute:

<script src="https://example.com/script.js" async></script>

And here's an example of a script tag with the defer attribute:

<script src="https://example.com/script.js" defer></script>

It's generally recommended to use the async attribute for scripts that are not critical to the rendering of the page, as it allows the browser to load and execute the script asynchronously, improving the overall performance of the page. The defer attribute is typically used for scripts that are critical to the rendering of the page and need to be executed in a specific order.
