const dotenv=require('dotenv');
const app=require('./app');


dotenv.config({path: "./config.env"});


app.listen(process.env.PORT, ()=>{
    console.log(`Server Listening to Port Number: ${process.env.PORT}`)
})