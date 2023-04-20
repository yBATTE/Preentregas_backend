import express from 'express';

import { Contenedor } from '../public/contenedor';
const { Router } = express;
const router = Router();

let fileRoute = 'carrito';

let myCart = new Contenedor(fileRoute);
let myProducts = new Contenedor('productos');

// POST /api/carts
// Create a new cart
router.post('/', (req, res) => {
  myCart
  .save({})
  .then((e) => res.json(e))
  .catch((error) => console.log(error));// TODO: implement logic to generate new id and save cart to file
});

// GET /api/carts/:cid
// Get a cart by id
router.get('/:cid', (req, res) => {
  myCart
  .getById(parseInt(req.params.id))
  .then((e) => {
      res.json(e);
  })
  .catch((error) => console.log(error));
  // TODO: implement logic to read cart from file by id
});

// POST /api/carts/:cid/product/:pid
// Add a product to a cart
router.post('/:cid/product/:pid', (req, res) => {
  let cart;
    let body = req.body.id_prod;

    myCart
        .getById(parseInt(req.params.id))
        .then((e) => {
            cart = e.element;

            if (!cart.products) {
                cart.products = [];
            }

            body.forEach((id_prod) => {
                myProducts.getById(id_prod).then((e) => {
                    cart.products.push(e.element);
                });
            });

            myCart.addToElement(parseInt(req.params.id), cart).then((e) => {
                res.json({
                    response: 'Products Added to the Cart',
                    cart,
                });
            });
        })
        .catch((error) => console.log(error));
  // TODO: implement logic to read cart from file by id, add product (with id only) to cart's products array or increment quantity if already present, and save cart back to file
});

export default router;
