import { Router } from "express";
import { changetype,addsupplier,addproductsgivenfreshfood,supplierswithF } from "./supplier.services.js";
const router = Router();


router.put('/changetype',changetype);
router.post('/addsupplier',addsupplier);
router.post('/addproductsgivenfreshfood',addproductsgivenfreshfood)
router.get('/supplierswithF',supplierswithF);

export default router;