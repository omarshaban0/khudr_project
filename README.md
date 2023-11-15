# khudr_project
# Welcome to the Khudr

![MERN Stack Photo](https://miro.medium.com/v2/resize:fit:720/format:webp/0*kxPYwfJmkXZ3iCWy.png)


This is a project meant for my web development class, where my goal was to provide a resource for amateur and intermediate gardeners to identify, treat, and prevent various diseases in their plants.


## Technologies Used
This is a **MERN Stack application** which is made up by four key technologies:

* [MongoDB](https://docs.mongodb.com/) - document base
* [express.js](https://expressjs.com/) - Node.js web framework
* [react.js](https://reactjs.org/) - a client-side JavaScript framework
* [node.js](https://nodejs.org/en/docs/) - an open source JavaScript web server/runtime


##### Other key technologies used include:

* [axios](https://www.npmjs.com/package/axios) - promise based HTTP client for browser and Node.js
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router ie) the router components for websites
* [nodemon](https://www.npmjs.com/package/nodemon) - automatically restarts node application when file changes are detected
* [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - frontend toolkit


#### More technologies will be added in the future as more features are added

## Project Setup
After cloning the repository to your machine:

Install dependencies in both client and server sides of the application:

`npm install`

To test components of the application:

#### Backend:

make environment file with the following keys' values:
```
ATLAS_URI= "path to mongodb url"
PORT = "port number"
```
Head to the backend directory of the project, and run:

`nodemon server`

#### Frontend:

Head to the frontend directory of the project, and run:

`npm start`

## Future Scope
1. I want to finish the last of the frontend, make it look as nice as possible
2. I am currently having issues linking the backend to the front end, which I need to fix. the frontend_presentation branch has dummy data that can be used to check out the frontend.

