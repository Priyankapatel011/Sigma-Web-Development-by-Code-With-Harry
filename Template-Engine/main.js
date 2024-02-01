const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');            // ejs is a template engine used to save variables(siteName, searchText) inside a template

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", "all", "101"]
    res.render("index", {siteName : siteName, searchText : searchText, arr});
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Hey it's a brand of shoes"
    let searchText = "Choose your color"
    res.render("blogpost", {blogTitle : blogTitle, searchText : searchText});
})


app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
})

