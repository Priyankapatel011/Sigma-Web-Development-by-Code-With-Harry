const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', (req, res) => {         //    /blog
    res.send('Home Page about blog')
})

// define the about route
router.get('/about', (req, res) => {     //      /blog/about
    res.send('About blog')
})

// define the /blog/something
router.get('/blogpost/:slug', (req, res) => {               //    /blog/blogpost/slug
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router
