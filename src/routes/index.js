 const express = require('express');
 const router = express.Router();



router.get('/', (req, res) => {
    res.render('index.html', {title: 'LCF COMPANY'})
});

router.get('/contact', (req, res, next) => {
    res.render('contact.html', {title: 'LCF CONTACTS'})
});
router.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.send('Hola')
    
   
})

module.exports = router;