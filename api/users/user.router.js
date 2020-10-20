const {
    controllerAddUser,
    controllerGetUsers
} = require("./user.controller");
  
const router = require("express").Router();

router.post("/", controllerAddUser);
router.get("/", controllerGetUsers);

module.exports = router;