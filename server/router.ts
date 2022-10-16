import { Router } from "express";
import { getThoughts, createThought } from "./controllers/thought.controller";

const router = Router()

router.get('/thought', getThoughts)
router.post('/thought', createThought)

export default router
