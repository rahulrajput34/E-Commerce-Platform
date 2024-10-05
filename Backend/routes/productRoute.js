import { addProduct, listProducts, removeProducts, singleProducts } from '../controllers/productContoller.js';
import express from 'express';
import upload from '../middleware/multer.js';

// adding the routes to the products
const productRouter = express.Router();

// to add the images we need to send all the images in this route
// From using mutliple middle wares we can get image from the user fast
productRouter.post('/add', upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]), addProduct)
productRouter.post('/remove', removeProducts)
productRouter.post('/single', singleProducts)
productRouter.get('/list', listProducts)

export default productRouter;