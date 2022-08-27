const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  addThought,
  updateThought,
  removeThought,
  addReactions,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThoughts).post(addThought);

router
  .route("/:thoughtId")
  .get(getThoughtsById)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReactions);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
