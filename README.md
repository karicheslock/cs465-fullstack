# CS-465 Full Stack Development with MEAN
# Architecture
## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
This project began with several static HTML pages that were loaded into Express with JavaScript being used to handle the models, routes, and controllers.  The single-page application was later added to handle adminstrative CRUD functionality and prevent multiple re-loads of the page for the user.
# Why did the backedn use a NoSQL MongoDB database?
A NoSQL database uses JSON objects to structure data, making the CRUD operations using JavaScript more straight-forward.  Also, the data structure in a NoSQL database is more flexible and requires less code to handle than a SQL database.  MongoDB is a widely used free resource which was helpful for this project.
# Functionality
## How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON stands for JavaScript Object Notation and refers to objects structured using JavaScript, which is standard for NoSQL databases.  Having data structured as JSON objects makes it usable for both frontend and backend development.
# Provide instances in the full stack process when you refactored code to improve functionality and efficiences, and name the benefits that come from reusable user interfact (UI) components.
One instance of refactoring in this code was in the use of handlebars to allow for modularizing the code and creating reusable pieces of code.  This code was also refactored to move functionality to the front end, or Angular side, and away from the back end, or Express side, to improve the user interface by making the code perform more seemlessly.  This benefits the user by preventing multiple re-loads of a page every time the user performs an action.
# Testing
## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
The methods used in this application were GET, PUT, and POST.  These methods show the interaction of the SPA with the API and demonstrate the CRUD operations of the SPA interacting with the MongoDB database.  Each method was tested with different API endpoints, with the PUT and POST methods being tested with additional security.  Basically, a user had to be logged in before a PUT or POST method was allowed.  Any endpoint that required a PUT or POST method required a security token that was generated when the user login.  Without that token, the request method would fail.  A GET request could be executed without the need for a user to log in, meaning that a token was not required.
# Reflection
## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I liked going through the whole process of full-stack development using the MEAN stack.  This course took a lot of knowledge I had been building throughout my courses and put them all together to produce one final finished project.  It was very rewarding to see a completed full stack application in the end.
