// This file is using users array as a database

import {v4 as uniqId} from "uuid";//uuid is package to generate universal unique identifier
let users = [];

export const getUsers = (req,res)=>{
    res.send(users);
}

export const getUserById = (req, res)=>{
  const userId = req.params.id;
  const userData = users.find((data)=>data.id === userId);
  res.send(userData);
}

export const saveUser = (req, res)=>{
   const userData = req.body;
   const id = uniqId(); 
   users.push({...userData,id:id});
   res.send("user has added successfully");
}

export const deleteUserById = (req, res)=>{
    const userId = req.params.id;
    const updatedUsers = users.filter((data)=>data.id !== userId);
    users = updatedUsers;
    res.send("user has deleted successfully");
}

export const updateNameById = (req,res)=>{
  const userId = req.params.id;
  const bodyData = req.body;
  const user = users.find((data)=>data.id === userId);
  user.name = bodyData.name;
  res.send("user name has changed successfully");
}

export const updateById = (req, res)=>{
   const userId = req.params.id;
   const bodyData = req.body;
   const user = users.find((data)=>data.id === userId);
   user.name = bodyData.name;
   user.age = bodyData.age;
   user.married = bodyData.married;
  res.send("user data has changed successfully");
}



//JSON DATA FORMAT FOR USER
// {
//     "name":"govind",
//     "age":22,
//     "married":false
// }