const { Router } = require("express");
const {
  inviteFriend,
  acceptFriend,
  rejectFriend,
} = require("../controllers/friendInvitation");
const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();
const friendInvitationSchema = Joi.object({
  email: Joi.string()
    .email()
    .message("Enter a valid email address!")
    .required(),
});

router.post(
  "/invite",
  verifyToken,
  validator.body(friendInvitationSchema),
  inviteFriend
);

router.patch(
  "/accept",
  verifyToken,
  validator.body(friendInvitationSchema),
  acceptFriend
);

router.patch(
  "/reject",
  verifyToken,
  validator.body(friendInvitationSchema),
  rejectFriend
);

module.exports = router;
