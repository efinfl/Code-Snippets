# Steps to MERN-Stack-App
## 1. Create the React App and a css library (optional)
### Install
* npx create-react-app your-app-directory: *Installs React and creates the app directory*
* npm install bootstrap: *Installs bootstrap for use with React*
### Import into app.js

* import "bootstrap/dist/css/bootstrap.min.css";

### Other commands:
* yarn start: *Starts the development server*

* yarn build: *Bundles the app into static files for production.*

* yarn test: *Starts the test runner*

* yarn eject: *Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!*


* cd your-app-name: *Navigate to the app directory*

* yarn start *Start the app*

## 2. Set up React Router
### Install
* npm install react-router-dom: *Installs React Router*
### Import into app.js
* import { BrowserRouter as Router, Route, Link } from "react-router-dom":

## 3. Set Up Routes In App.js
### Bleow is an example
* < Route path="/" exact component={TodosList} />
* < Route path="/edit/:id" component={EditTodo} />
* < Route path="/create" component={CreateTodo} />

## 4. Create Components for Your Routes
* Create a new folder called components
* Create .js files for each route

*Example*

create-todo-component.js

edit-todo-component.js

list-todo-component.js
