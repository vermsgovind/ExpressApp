import fs from "fs";

export const getUserData = ()=>{
    const jsonData = fs.readFileSync("E:\\Full stack\\backend\\expressApp\\dataFiles\\users.json");
    // console.log(jsonData);
    return JSON.parse(jsonData);
};

export const saveUserData =(data)=>{
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync("E:\\Full stack\\backend\\expressApp\\dataFiles\\users.json",stringifyData )
};
