const express = require("express");
const app = express()

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});



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

//handling errors using middlewares
app.use((err,req,res, next)=>{
    console.log(err.stack);
    res.status(500).json({error: "Something went Wrong"})
});


app.listen(3000, ()=>console.log("Server running on port : 3000"));