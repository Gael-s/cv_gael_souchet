/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-else-return */
const router = require("express").Router();
require("dotenv").config();

const multer = require("multer");

const maxSize = 150000; // filesize in bytes
const upload = multer({ limits: { fileSize: maxSize } }).single(
  "nouveau tableau"
);

const connection = require("../db_connection");

// route bellatres
router.get("/bellatres", (req, res) => {
  const cat1 = "bellatres";
  connection
    .query("SELECT * FROM tableaux WHERE categorie=?", [cat1, req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// route humaintrophumain
router.get("/humaintrophumain", (req, res) => {
  const cat2 = "humain trop humain";
  connection
    .query("SELECT * FROM tableaux WHERE categorie=?", [cat2, req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// route beteshumaines
router.get("/beteshumaines", (req, res) => {
  const cat3 = "betes humaines";
  connection
    .query("SELECT * FROM tableaux WHERE categorie=?", [cat3, req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// route mochatres
router.get("/mochatres", (req, res) => {
  const cat4 = "mochatres";
  connection
    .query("SELECT * FROM tableaux WHERE categorie=?", [cat4, req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// route ajout tableaux
router.post("/ajouttableau", function (req, res) {
  upload(req, res, function (err) {
    const data = {
      nom: req.file.originalname,
      date: req.body.date,
      categorie: req.body.categorie,
      image: req.file.buffer,
    };
    if (err instanceof multer.MulterError) {
      res.status(404).json({
        message: "Erreur lors du chargement de l'image",
      });
    } else if (err) {
      res.status(404).json({
        message: "Erreur inconnu",
      });
    } else if (!req.file) {
      return res.end("File is required!");
    } else if (!data.date) {
      return res.status(403).json({
        message: "ajouter une date",
      });
    } else if (!data.categorie) {
      return res.status(403).json({
        message: "ajouter une catégorie",
      });
    } else {
      console.log(data);
      connection.query(
        "INSERT INTO tableaux ( nom, categorie, date, image ) VALUES (?, ?, ?, ?)",
        [data.nom, data.categorie, data.date, data.image],
        (error) => {
          if (error) {
            res.status(500).send({ message: "error 500" });
          } else {
            res.status(201).send({ message: "Tableau ajouté" });
          }
        }
      );
    }
  });
});

// route delete tableaux
router.delete("/supprimertableau", (req, res) => {
  const data = {
    nom: req.body.nom,
  };
  if (!data) {
    res.status(500).send({ message: "error 500" });
  } else {
    connection.query(
      "DELETE FROM tableaux WHERE nom=?",
      [data.nom],
      (error, response) => {
        if (error) {
          res.status(500).json({ message: "erreur pour supprimer le tableau" });
        } else if (response) {
          return res.status(200).json({ message: "tableau supprimé" });
        }
      }
    );
  }
});

module.exports = router;
