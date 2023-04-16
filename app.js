const express=require('express');
const app=express();

// middleware
app.use(express.json());

// global error handling
app.use((err, req, res, next)=>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message:"Somethig went wrong",
    })
})

const user=require('./routes/getRoutes');
app.use("/api", user);

module.exports=app;
