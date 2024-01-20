const express=require('express');
const { request } = require('http');
const app=express();
const port=process.env.PORT || 3000
const path=require('path');
const hbs =require('hbs');


const static_path = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


app.use(express.static(static_path));
app.get("",(request,response)=>{
    response.render("index")
})

app.get("/about", (request, response) => {
    response.render("about");
});

app.get("/weather",(request,response)=>{
    response.render("weather");
})

app.get("*",(request,response)=>{
    response.status(404).render("error404");
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})