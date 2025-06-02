
import Event from "../models/event.model.js";

export const createEvent = async (req, res) => {
  const { title, date, description, image,time, type} = req.body;

  try {
    if (!title || !date || !description || !image || !type||!time) {
      return res.status(400).send({ error: "Please fill all the fields" });
    }

    const eventCheck = await Event.findOne({ title });
    if (eventCheck) {
      return res.status(400).send({ error: "Event already exists" });
    }
    
    const newEvent = new Event({
      title,
      date,
      description,
      image,
      time,
      type,
      createdBy:req.user._id
    });

    await newEvent.save();

    res.status(201).send({ message: "Event created successfully",success:true ,newEvent });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error" ,success:false});
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy','name')
    res.status(200).send({ events });
  } catch (error) {
    console.log(error);
  }
};

export const getEventbyId = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id).populate('createdBy','name');
    res.status(200).send({ event });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEvent = async (req, res) =>{
    const {id}=req.params;

    try {
        const event = await Event.findByIdAndDelete(id);
        res.status(200).send({ message: "Event deleted successfully", event });
      } 
      
    catch (error) {
        console.log(error);
      }
}

export const updateEvent = async (req, res) =>{
    const {id} = req.params;
    const {title, date, description, image} = req.body
    try {
        const event  = await Event.findById(id);
        event.title = title;
        event.date = date;
        event.description = description;
        event.image = image;
        
        await event.save();
        res.status(200).send({ message: "Event updated successfully", event });

    } catch (error) {
        console.log(error);
    }
}