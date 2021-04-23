const express = require('express');
const cors = require('cors');


const handleServerInternalError = require('./middlewares/handleServerInternalError');
const handleValidationError = require('./middlewares/handleValidationError');
const handleRecordNotFoundError = require('./middlewares/handleRecordNotFoundError');

const mainRouter = require("./routes/index"); // fichier de config pour le router d'express
require("dotenv").config(); // fichier pour se connecter a la BD

const app = express();

// pre-route middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("x-powered-by", false);
app.use("/", express.static("public"));

// test serveur sur la route /
// app.get("/api", (req, res) => {
//   res.send("Hello world");
// });

// router - a modifier en fonction de la route que l'on veut mettre en place
app.use("/apicv", mainRouter);
// require('./routes')(app);


// post-route middlewares
app.set('x-powered-by', false);
app.use(handleRecordNotFoundError);
app.use(handleValidationError);
app.use(handleServerInternalError);
app.use('/public', express.static('public'));

// export du serveur
const server = app.listen(process.env.SERVER_PORT || 6000, () => {
  console.log(`Listening on port ${  server.address().port}`);
});

// process setup
process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('beforeExit', () => {
  app.close((error) => {
    if (error) console.error(JSON.stringify(error), error.stack);
  });
});