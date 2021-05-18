// This file is using a json file from dataFiles as a database

import {v4 as uniqId} from "uuid";//uuid is package to generate universal unique identifier
import {getUserData,saveUserData} from "../service/user.js";

export const getUsers = (req,res)=>{
  const users = getUserData();
  res.send(users);
}

export const getUserById = (req, res)=>{
  const Users = getUserData();
  const userData = Users.find((data)=>data.id === req.params.id);
  res.send(userData);
}

export const saveUser = (req, res)=>{
  const existingUsers = getUserData();
  const userData = req.body;
// 1. check the minimal requirement(i.e all attributes are having values or not)
  if(userData.name==null || userData.age==null|| userData.username==null || userData.password==null){
    res.status(402).send({
      error:true,
      message:"User Data Missing. Include name, age, username, password"
    });
  }
// 2.check if username already exist
  const findExisting = existingUsers.find((data)=> data.username===userData.username);
  // if username not already exist then find method will return undefined
  // and boolean value of undefined is false
  // console.log(findExisting);

  // if findExisting is a object and not undefined
  if(findExisting){ // if true then there will be a conflict(means user already exists but we are trying to add the user)
    res.status(409).send({
      error:true,
      message:"Username already exists"
    });
  }
else{ // if findExisting is undefined i.e user not exist already
  const id = uniqId(); 
  existingUsers.push({...userData,id:id});
  saveUserData(existingUsers);
  res.send("user has added successfully");
}
}

export const deleteUserById = (req, res)=>{
    let users = getUserData(); //gettting users from json file using getUserData method
    users = users.filter((data)=>data.id !== req.params.id);
    saveUserData(users);
    res.send("user has deleted successfully");
}

export const updateNameById = (req,res)=>{
  const users = getUserData(); //gettting users from json file using getUserData method
  const user = users.find((data)=>data.id === req.params.id);
  user.name = req.body.name;
  saveUserData(users);
  res.send("user name has changed successfully");
}

export const updateById = (req, res)=>{
  let users = getUserData(); //gettting users from json file using getUserData method
   const user = users.find((data)=>data.id === req.params.id);
   user.name = req.body.name;
   user.age = req.body.age;
   saveUserData(users);
  res.send("user data has changed successfully");
}



//JSON DATA FORMAT FOR USER
// {
//   "name": "dipender",
//   "age": 22,
//   "username": "govind@gmail.com",
//   "password": "Aashiqui3@34",
//   "id": "a0550e95-f76b-416c-83a1-a1be3c1f3ecf"
// }