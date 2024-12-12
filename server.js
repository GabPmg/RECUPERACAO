const connectDB = require("./config/database");
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());

app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/products', productRoutes);
app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`));
