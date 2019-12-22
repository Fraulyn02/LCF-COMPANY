 const express = require('express');
 const router = express.Router();



router.get('/', (req, res) => {
    res.render('index.html', {title: 'LCF COMPANY'})
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'LCF CONTACTS'})
});

module.exports = router;