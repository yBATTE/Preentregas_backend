import express from ('express');
import productsRouter from ('./routes/products');
import cartsRouter from ('./routes/carts');
import mongoose from "mongoose";

import { Cart, Message, Product } from './models';


// tengo q hacer la conexion todavia, para la reentrega lo dejo limpio tengo que repasar mucho todavia
mongoose.connect('mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
console.log('Conectado a la base de datos de MongoDB');
});

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
user: { type: String, required: true },
message: { type: String, required: true },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;


const app = express();

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
