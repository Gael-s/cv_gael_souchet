const router = require("express").Router();
require("dotenv").config();
// const isAdmin = require("../middlewares/adminAcces");

const connection = require("../db_connection");

// Récuperer les le texte de la homepage
router.get("/", (req, res) => {
  connection
    .query("SELECT * FROM homepage", [req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// Modification du texte en BD
router.post("/update", (req, res) => {
  const data = {
    titre: req.body.titre,
    article: req.body.article,
  };

  connection.query(
    "UPDATE homepage SET titre=?, article=? WHERE id=?",
    [data.titre, data.article, 1],
    (error) => {
      if (error) {
        res.status(500).json({ message: "error 500" });
      } else {
        res.status(201).json({ message: "Article et titre mis à jour" });
      }
    }
  );
});

module.exports = router;
