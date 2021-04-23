const router = require("express").Router();
require("dotenv").config();

const multer = require("multer");

const maxSize = 50000 // filesize in bytes
const upload = multer({ limits: {fileSize: maxSize } });
// const isAdmin = require("../middlewares/adminAcces");

const connection = require("../db_connection");

// récupération des infos de la table lartiste
router.get("/", (req, res) => {
  connection
    .query("SELECT * FROM lartiste", [req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// Modification du texte bio et du titre en BD
router.post("/updatebio", (req, res) => {
  const data = {
    titre: req.body.titre,
    bio: req.body.bio,
  };
  connection.query(
    "UPDATE lartiste SET titre=?, bio=? WHERE id=?",
    [data.titre, data.bio, 1],
    (error) => {
      if (error) {
        res.status(500).json({ message: "error 500" });
      } else {
        res.status(201).json({ message: "Biographie modifié" });
      }
    }
  );
});

// Modification de la photo en BD
router.post(
  "/updatephoto",
  upload.single("photo de l'artiste"),
  (req, res) => {
    const data = {
      photo: req.file.buffer,
    };
    connection.query(
      "UPDATE lartiste SET photo=? WHERE id=?",
      [data.photo, 1],
      (error) => {
        if (error) {
          res.status(500).send({ message: "error 500" });
        } else {
          res.status(201).send({ message: "Photo modifié" });
        }
      }
    );
  }
);

module.exports = router;
