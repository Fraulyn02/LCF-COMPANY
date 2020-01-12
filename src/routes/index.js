const { Router } = require ('express');
const router = Router();
const nodemailer = require('nodemailer');
require ('dotenv').config();


router.get('/', (req, res) => {
    res.render('index.html', {title: 'LCF COMPANY'})
});

router.get('/contact', (req, res, next) => {
    res.render('contact.html', {title: 'LCF CONTACTS'})
});
router.post('/contact', async (req, res, next) => {
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
   let mailOptions = await {
    from: 'angelo.david499@gmail.com',
    to: 'angelospotify2300@gmail.com',
    subject: 'Mensaje de LCF-COMPANY',
    html: `<h2>¡Tienes una nueva notificacion de tu pagina web!</h2>
    <h3>Detalles del contacto</h3>
    <ul>  
      <li><strong>Cliente:</strong> ${req.body.name}</li>
      <li><strong>Numero telefonico:</strong> ${req.body.phone}</li>
      <li><strong>Email:</strong> ${req.body.email}</li>
    </ul>
    <p><strong>Solicitud :</strong> ${req.body.message}</p>
    
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
   
   
   console.log(req.body)
   
})




module.exports = router;