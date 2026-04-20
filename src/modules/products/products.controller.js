import { Router } from "express";
import { db } from "../../database/connection.js";
import { addcategory } from "./products.services.js";
const router = Router();

router.post('/addcategory', addcategory);

export default router;