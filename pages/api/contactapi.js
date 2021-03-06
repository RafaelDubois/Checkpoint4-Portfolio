export default function contactapi (req, res) {
    require('dotenv').config()
     
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: process.env.email,
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: req.body.name,
        to: process.env.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.status(200).send('success')
  }