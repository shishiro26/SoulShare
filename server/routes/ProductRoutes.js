import express from 'express';
import { addComment, category, getProduct, likeProduct } from '../controllers/product.js';
import { verifyAccessToken } from '../utils/generateToken.js';
const router = express.Router();


router.get('/get/:id', verifyAccessToken, getProduct)
router.patch('/like/:productId/:userId', verifyAccessToken, likeProduct)
router.patch('/comment/:productId/:userId', verifyAccessToken, addComment)
router.get('/category/food/:userId', verifyAccessToken, category)



export default router;

