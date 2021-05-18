import {v4 as uniqId} from "uuid"; // universal unique identifier

let books =[]; // arrray of books for storing books data

export const getBooks = (req,res)=>{
    res.send(books);
}
export const getBookById = (req, res)=>{
    const book = books.find((data)=>data.id === req.params.id);
    res.send(book);
}
export const saveBook = (req,res)=>{
    books.push({...req.body, id:uniqId()});
    res.send("book has saved successfully");
}
export const deleteByBookId = (req,res)=>{
    books = books.filter((data)=>data.id !== req.params.id);
    res.send("book has deleted successfully");
}
export const updateNameById = (req,res)=>{
    const book =  books.find((data)=>data.id === req.params.id);
    book.name = req.body.name;
    res.send("book name has updated succesfully");
}
export const updateBook = (req,res)=>{
    const book = books.find((data)=>data.id === req.params.id);
    book.name = req.body.name;
    book.author = req.body.author;
    res.send("book data has updated successfully");
}

//JSON data format for book
//     {
//         "name": "c languange",
//         "author": "Denish",
//     }

//     {
//         "name": "java",
//         "author": "alax",
//     }