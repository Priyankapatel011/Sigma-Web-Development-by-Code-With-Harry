const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', (req, res) => {         //    /shop
    res.send('Home Page about shop')
})

// define the about route
router.get('/about', (req, res) => {     //      /shop/about
    res.send('About Shops')
})

// define the /blog/something
router.get('/shoppost/:slug', (req, res) => {               //    /shop/shoppost/slug
    res.send(`fetch the shoppost for ${req.params.slug}`)
})

module.exports = router
