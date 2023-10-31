import express from 'express';
import { addComment, carouselImage, category, getProduct, likeProduct, getAllProducts, getsingleProduct } from '../controllers/product.js';
import { verifyAccessToken } from '../utils/generateToken.js';
const router = express.Router();


router.get('/get/:id', verifyAccessToken, getProduct)
router.patch('/like/:productId/:userId', verifyAccessToken, likeProduct)
router.patch('/comment/:productId/:userId', verifyAccessToken, addComment)
router.get('/category/', category)
router.get('/carousel', carouselImage)
router.get("/getAll/", getAllProducts)
router.get("/getSingle/:id", getsingleProduct)


export default router;

