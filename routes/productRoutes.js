const express = require('express');
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');  
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('photo'), productController.createProduct);

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.put('/:id', upload.single('photo'), productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
