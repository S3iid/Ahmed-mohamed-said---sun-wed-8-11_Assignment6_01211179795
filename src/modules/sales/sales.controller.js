import { Router } from "express";
import { getallsales} from "sales.services.js";
const router = Router();

router.get('/getallsales', getallsales);


export default router;