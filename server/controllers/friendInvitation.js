const FriendInvitation = require("../models/FriendInvitation");
const User = require("../models/User");

exports.inviteFriend = async (req, res) => {
  try {
    const { email } = req.body;
    const userId = req.user;
    const user = await User.findById(userId);

    if (user.email.toLowerCase() === email.toLowerCase()) {
      return res.status(409).json("You can't invite to yourself.");
    }

    const receiver = await User.findOne({ email });
    if (!receiver)
      return res
        .status(409)
        .json("User with that email address doesn't exist!");

    const alreadyInvited = await FriendInvitation.findOne({
      senderId: user.id,
      receiverId: receiver.id,
    });
    
    if (alreadyInvited)
      return res
        .status(402)
        .json("You've already sent an invitation to that user!");

    const alreadyFriends = user.friends.find(
      (friendId) => friendId.toString() === receiver.id.toString()
    );

    if (alreadyFriends)
      return res
        .status(402)
        .json("You are already friends. Please, check your friends list.");
    

    await FriendInvitation.create({
      senderId: user.id,
      receiverId: receiver.id,
    });

    return res.json("Invitation sent successfully!");
  } catch (error) {
    const err = error?.response
      ? error.response
      : error.response?.data
      ? error.response.data
      : error?.data
      ? error.data
      : "Something went wrong, please try again!";
    const errorStatus = error?.status
      ? error.status
      : error?.http_status
      ? error.http_status
      : error?.http_code
      ? error.http_code
      : 500;
    return res.status(errorStatus).json(err);
  }
};
