const express = require("express");
const app = express();
const port = process.env.PORT || 8000 ;
const path= require("path");
const hbs = require("hbs");

// Public Static Path
const staticpath = (path.join(__dirname ,"../public"))
const template_path = (path.join(__dirname ,"../src/views"))
// const partials_path = (path.join(__dirname ,"../src/partials"));

// Setting up view engine
app.set('view engine','hbs')
// app.set('views',template_path);
app.use(express.static(staticpath));



// hbs.registerPartials(partials_path);

// Routing
app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get('/weather' ,(req,res)=>{
    res.render('weather');
})
app.get("/midddleware" , (req,res)=>{
    res.render("midddleware");
})

app.listen(port ,(req,res)=>{
    console.log(`Listening at the port ${port}`);
})