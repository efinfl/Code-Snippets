const express = require("express"); // imports express and defines express a const
const app = express(); // sets app const to express
const bodyParser = require("body-parser"); // imports body-parser and defines bodyParser const
const cors = require("cors"); //imports cors and defines cors const
const mongoose = require("mongoose"); // imports mongoose and defines mongoose const
const PORT = 4000; // defines "PORT"
const todoRoutes = express.Router(); // get access to expresses' Router method and define todoRoute const

let Todo = require("./todo.model");

app.use(cors()); // allows express to use the cors middleware
app.use(bodyParser.json()); // allows express to use bodyParser's json method

// connects via mongoose to access db in an object oriented way
mongoose.connect("mongodb://localhost:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;

//run method to console.log once(.once) a connection to the db is open to let user know connection is established
connection.once("open", function() {
  console.log(`MongoDB database connection established`);
});

// First endpoint retrieves all the todos from the db
todoRoutes.route("/").get(function(req, res) {
  //call a .get method at this endpoint
  Todo.find(function(err, todos) {
    // Retrieves all the todo item by using the Todo data model
    if (err) {
      // if an error, console.log it
      console.log(err);
    } else {
      // other wise take the returned todos items format into a json object
      res.json(todos);
    }
  });
});

// This endpoint returns a specific todo
todoRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id; // put the id specified in the URL in a variable
  Todo.findById(id, function(err, todo) { //uses that id to put the data into a json boject
    res.json(todo);
  });
});

// This endpoint adds(posts) an item to the db
todoRoutes.route("/add").post(function(req, res) {
  let todo = new Todo(req.body); //uses the Todo model to create a new instance using the body (content) of the request
  todo
    .save() //saves the new instance to the db
    // once thats done saving give a status for success or failure
    .then(todo => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new todo failed");
    });
});

//This endpoint updates a todo item
todoRoutes.route("/update/:id").post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (!todo) res.status(400).send("data is not found");
    else todo.todo_description = req.body.todo_description;
         todo.todo_response = req.body.todo_response;
         todo.todo_priority = req.body.todo_priority;
         todo.todo_completed = req.body.todo_completed;
    
    todo.save().then(todo=> {
        res.json("Todo updated")
    })
    .catch(err => {
        res.status(400).send("Update not possible.");
    });
  });
});

// Make todoRoutes const relative to an initial path ("/todos")
app.use("/todos", todoRoutes);

// set express (app) to listen on PORT(4000) and let user know it's running
app.listen(PORT, function() {
  console.log(`Server is running on PORT: ${PORT}`);
});
