const express = require('express'); //Import
const { selectUser } = require('./user');
const app = express();           //This is the express statement

//http://localhost:4000/users
app.get("/users", async(req, res)=> {

   const list = await selectUser();
   res.json(list);             //This returns the customer the json response.
});


app.listen(4000, ()=> console.log("server started"));