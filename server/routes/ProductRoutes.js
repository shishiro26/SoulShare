import express from 'express';
import { addComment, category, getProduct, likeProduct } from '../controllers/product.js';
const router = express.Router();


router.get('/get/:id', getProduct)
router.patch('/like/:productId/:userId', likeProduct)
router.patch('/comment/:productId/:userId', addComment)
router.get('/category/food/:userId', category)



export default router;

