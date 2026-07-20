const express = require("express");
const app = express()

app.get("/", (req,res) =>{
    res.send("Welcome to the Job tracker API");
});

app.get("/application/:id", (req,res) =>{
    res.send(`Fetching application with id ${req.params.id}`);
});

app.get("/application", (req,res) =>{
    const {status} = req.query;
    res.send(`Filtering by status : ${status}`);
});

app.listen(3000, ()=>console.log("Server running on port : 3000"));