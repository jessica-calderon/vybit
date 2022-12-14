const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addToFriends,
  removeFromFriends,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addToFriends)
  .delete(removeFromFriends);

module.exports = router;
