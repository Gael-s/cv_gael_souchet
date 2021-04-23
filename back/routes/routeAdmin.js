/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
const router = require('express').Router();
const bcrypt = require("bcryptjs");
const express = require("express")
const jwt = require('jsonwebtoken');
const cors = require("cors");
const { PRIVATEKEY } = require('../env');

// const isAdmin = require("../middlewares/adminAcces");

const connection = require("../db_connection");

router.use(cors());

const getToken = () => {
    const token = jwt.sign({ admin: true }, PRIVATEKEY, {expiresIn: 120 * 60});
    return token;
  }

router.post("/", express.json(), (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    if (!user) {
      return res.status(404).json({
        type: "Not Found",
        message: "Erreur de login ou de mot de passe",
      });
    }
    connection.query(
      "SELECT password FROM users WHERE email=?",
      [user.email],
      async (errTwo, resTwo) => {
        if (errTwo) {
          res
            .status(444)
            .json({ message: "error 444 pas de réponse du serveur" });
        }
        if (!resTwo[0]) {
          return res.status(404).json({
            status: "Not Found",
            message: "Erreur de login ou de mot de passe",
          });
        }
        const encodedHash = resTwo[0].password;
        const isCorrect = await bcrypt.compare(user.password, encodedHash);
        if (isCorrect) {
          const token = getToken();
          return res.status(200).json({
            status: "Success",
            message: "Vous êtes connecté",
            data: user.email,
            token,
          });
        } else {
          return res.status(403).json({
            message:
              "Erreur de connexion, vérifier votre mot de passe ou votre login",
          });
        }
      }
    );
  });


router.post("/newadmin", (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
      };
      return bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(user.password, salt).then((hash) => {
          connection.query(
            "INSERT INTO users ( email, password ) VALUES (?, ?)",
            [user.email, hash],
            (error) => {
              if (error) return res.status(500).json({ message: "error 500" });
              return res.status(201).json({ message: "Utilisateur enregistré" });
            }
          );
        });
      });
    });



module.exports = router;
