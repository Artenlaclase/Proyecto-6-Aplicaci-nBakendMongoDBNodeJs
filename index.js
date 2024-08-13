const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/db');
const Product = require('./models/productModel');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/test', (req, res) => {
    res.send('La ruta de prueba funciona!');
});

app.listen(process.env.PORT, () => console.log('Servidor escuchando en el puerto ' + process.env.PORT));