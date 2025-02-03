const router = require("express").Router();
const {
  checkAdmin,
  checkAuth,
  /* checkAvailableBooking, */ //icebox for seats availability
} = require("../Middleware/auth");

const {
  getAllUsers,
  getOneUsers,
  updateUsers,
  deleteUsers,
  createUsers,
  createUsersInBulk,
  getBookingFromOneUser,
  getUser
} = require("../Controllers/Users.controller");

router.get("",getAllUsers);
router.get("/:username",getUser);
/*router.get("/:id",getBookingFromOneUser);
router.get("/:id",getOneUsers)*/
router.get("/:id", checkAuth, checkAdmin, getOneUsers); 
router.put("/:id", checkAuth, checkAdmin, updateUsers);
router.delete("/:id", deleteUsers);
router.post("", checkAuth, checkAdmin, createUsers);
router.post("/bulk", checkAuth, checkAdmin, createUsersInBulk);

module.exports = router;
