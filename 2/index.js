const express = require("express");
const path = require("path");
const port = 3000;

// Creating the Express server
const app = express(); 

// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res) => {
    const endpoint = "http://webdev.it.kmitl.ac.th:4000/books"
    fetch(endpoint)
        .then(response => response.json())
        .then(books => {
            console.log(books)
            res.render("index",{data:books})
        })
})





app.listen(port,() => {
    console.log("Server has started.")
})