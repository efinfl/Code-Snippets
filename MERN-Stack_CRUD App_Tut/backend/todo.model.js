const mongoose = require("mongoose"); //imports mongoose and sets the mongoose const
const Schema = mongoose.Schema; // gets access to the Schema method from mongoose and sets schema const

// define the data structure to be built as an object
let Todo = new Schema({
    todo_description: {type: String},
    todo_responsible: {type: String},
    todo_priority: {type: String},
    todo_completed: {type: Boolean}
}); 

// Export the  model for use outside of this file using the .model method in mongoose and naming it "Todo" using the Todo schema created above
module.exports = mongoose.model("Todo", Todo)