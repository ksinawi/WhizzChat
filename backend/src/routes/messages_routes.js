import express from "express";

import { getContacts, getMessages, sendMessage } from "../controllers/message_controllers.js";
import protectedRoute from "../middleware/protected_route.js"

const router = express.Router();

router.get("/user", protectedRoute, getContacts);

router.get("/:id", protectedRoute, getMessages);

router.post("/send/:id", protectedRoute, sendMessage);

export default router;