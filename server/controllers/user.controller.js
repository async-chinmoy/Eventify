import User from "../models/user.model.js";
import Register from "../models/register.model.js";
import Event from "../models/event.model.js";

export const getUser = async (req, res) => {
  const user = req.user;
  res.status(200).send({ user });
};

export const register = async (req, res) => {
  const userId = req.user?.id ;
  const { id } = req.params;

  if (!userId) {
    return res.status(400).send({ error: "User ID is required" });
  }

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(400).send({ error: "Event does not exist" });
    }
    const registerCheck = await Register.findOne({
      user: userId,
      event: event._id,
    });

    if (registerCheck) {
      return res.status(400).send({
        error: "You have already registered for this event",
        registerCheck,
      });
    }

    const newRegister = new Register({
      user: userId,
      event: event._id,
      enrolled: true,
    });

    await newRegister.save();
    res.status(200).send({
      message: "You have registered for the event successfully",
      newRegister,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
