require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//Server: users: getAll

app.get(('/'), (req, res)=>{

})

//users/:id

app.get(('/:id'), (req, res)=>{

})

//users POST create a new user

app.post(('/'), (req, res)=>{

})

// users PUT  update a user

app.put(('/:id'), (req, res)=>{
  
})

// users DELETE  delete a user

app.delete(('/:id'), (req, res)=>{

})

app.listen(PORT, console.log(`server is running on port : ${PORT}`));
