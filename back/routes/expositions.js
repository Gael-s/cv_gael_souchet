const router = require("express").Router();
require("dotenv").config();

// const connection = require("../db_connection");

router.get("/avenir", (req, res) => {
    res.send("hello esposition à venir")
//   connection
//     .query("SELECT * FROM evenement", [req.query.type])
//     .then((data) => res.status(200).json(data))
//     .catch((err) =>
//       res.status(500).json({ messageError: `Sql error return ${err.message}` })
//     );
});

router.get("/passees", (req, res) => {
    res.send("hello esposition passées")
//   connection
//     .query("SELECT * FROM evenement", [req.query.type])
//     .then((data) => res.status(200).json(data))
//     .catch((err) =>
//       res.status(500).json({ messageError: `Sql error return ${err.message}` })
//     );
});

module.exports = router;
