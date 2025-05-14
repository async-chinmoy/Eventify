import express from "express";
import {createEvent, getEvents, getEventbyId,deleteEvent, updateEvent} from "../controllers/event.controller.js"

const router = express.Router();

router.post('/createEvent', createEvent)
router.get('/getEvents', getEvents)
router.get('/getEvents/:id', getEventbyId)
router.put('/updateEvent/:id/delete', deleteEvent)
router.put('/updateEvent/:id/edit', updateEvent)

export default router