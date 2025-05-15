import User from "../models/user.model.js";
import Register from "../models/register.model.js";
import Event from "../models/event.model.js";

export const getUser = async (req, res) => {
  const user = req.user;
  res.status(200).send({ user });
};

export const registerEvent = async (req, res) => {
  const userId = req.user?.id;
  const { id } = req.params;

  if (!userId) {
    return res.status(400).send({ error: "User ID is required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).send({ error: "Event not found" });
    }

    if (user.enrolledEvents.includes(id)) {
      return res
        .status(400)
        .send({ error: "User is already registered for this event",event});
    }

    user.enrolledEvents.push(id);
    await user.save();

    res.status(200).send({ message: "Event registered successfully",event });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
