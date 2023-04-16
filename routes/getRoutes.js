const express=require('express');
const routerPosts=express.Router();

const {getAllData, insertData, GetData, deleteData, updateData}=require('../controller/getController');

routerPosts.get("/", getAllData);
routerPosts.get("/:id", GetData);
routerPosts.delete("/delete/:id",deleteData);
routerPosts.post("/insert",insertData);
routerPosts.put("/update/:id",updateData);


module.exports=routerPosts;

