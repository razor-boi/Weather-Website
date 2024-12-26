//Reqiuring the mongoose to connect with data base (mongo db)
const mongoose = require("mongoose");

//Connecting to database 
mongoose.connect("mongodb://localhost:27017/sunandan")
.then(() => console.log("connection successfull"))
.catch((err) => console.log("This is the fucking error",err));

//Now from here we are writing the schema 
//Schema is that which defines the structre of the a document

const project = new mongoose.Schema ({
    name:{
        type : String,
        required :true
    },
    ptype:String,
    wshow:Number,
    active:Boolean,
    created: {
        type:Date,
        default: Date.Now,
    }
})

//Creating a model 

const Project = new mongoose.model("Project",project)
