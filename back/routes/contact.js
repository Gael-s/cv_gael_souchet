/* eslint-disable no-unused-vars */
const router = require("express").Router();
const nodemailer = require("nodemailer");

require("dotenv").config();
// Connexion a la boite mail
const transporter = nodemailer.createTransport({
  // host: "smtp.ethereal.email",
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  auth: {
    user: process.env.NODEMAILER_ADRESS,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

// verifier la connexion a la boite mail
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server mail ok");
  }
});

router.post("/sendmessage", (req, res) => {
  const Userdata = {
    email: req.body.email,
    nom: req.body.nom,
    userMessage: req.body.userMessage,
  };

  // préparation de l'envoie de l'email
  const mail = {
    from: "matur@hotmail.fr",
    to: process.env.CONTACT_MAIL,
    subject: "Quelqu'un vous a laissé un message sur votre site",
    html: `<p><h1>${Userdata.nom}</h1><h1>${Userdata.email}</h1> vous a laissé un message : <br> <br /> ${Userdata.userMessage}</p>`,
  };
  // envoie de l'email
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(404).json({
        message: "echec de l'envoi",
      });
    } else {
      res.status(200).json({
        message: "e-mail envoyé",
      });
    }
  });
});

module.exports = router;
