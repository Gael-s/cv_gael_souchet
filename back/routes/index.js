const router = require("express").Router();

const routeAdmin = require("./routeAdmin");
const tableau = require("./tableau");
const expositions = require("./expositions");
const lartiste = require("./lartiste");
const homepage = require("./homepage");
const contact = require("./contact")

router.use("/admin", routeAdmin);
router.use("/tableau", tableau);
router.use("/expositions", expositions);
router.use("/lartiste", lartiste);
router.use("/homepage", homepage);
router.use("/contact", contact);


module.exports = router;
