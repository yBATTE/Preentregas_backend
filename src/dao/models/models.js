import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({
    title:{
        type: String
    }
});


const messageSchema = new mongoose.Schema({
    message:{
        type: String
    }
});

const productSchema = new mongoose.Schema({
    title:{
        type: String},
    price:{
        type: Number
    }    
});


const Cart = mongoose.model('Cart', cartSchema);
const Message = mongoose.model('Message', messageSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
Cart,
Message,
Product,
};
