const { Router } = require("express");
const {
  inviteFriend,
  acceptFriend,
} = require("../controllers/friendInvitation");
const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();
const friendInvitationSchema = Joi.object({
  email: Joi.string().email().message("Enter a valid email address!"),
});

router.post(
  "/invite",
  verifyToken,
  validator.body(friendInvitationSchema),
  inviteFriend
);

router.patch("/accept", verifyToken, acceptFriend);

module.exports = router;
