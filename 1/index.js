    const express = require("express");
    const { url } = require("inspector");
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


    app.get("/", (req,res) => {
        const endpoint = "http://webdev.it.kmitl.ac.th:4000/restaurant"
        fetch(endpoint)
            .then(response => response.json())
            .then(foods => {
                console.log(foods);
                res.render("menu",{data:foods})
            })
    })

    app.get("/detailed/:id",(req,res) => {
        const foodID = req.params.id
        const endpoint = `http://webdev.it.kmitl.ac.th:4000/detail/${foodID}`
        fetch(endpoint)
            .then(response => response.json())
            .then(foods => {
                console.log(foods);
                res.render("detailed",{data:foods})
            })
    })

    app.listen(port, () => {
        console.log("Server is started")
    })