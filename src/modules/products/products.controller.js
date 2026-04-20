import { Router } from "express";
import { addcategory,removecategory,addnotnull,updateprice,removeproduct,gettotalquantity,higheststock,productsneversold} from "./products.services.js";
const router = Router();

router.post('/addcategory', addcategory);
router.delete('/removecategory', removecategory);
router.post('/addnotnull',addnotnull);
router.post('/updateprice',updateprice);
router.delete('/removeproduct',removeproduct );
router.get('/gettotalquantity',gettotalquantity);
router.get('/higheststock',higheststock);
router.get('/productsneversold',productsneversold);

export default router;