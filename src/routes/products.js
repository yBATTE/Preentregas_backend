const express = require('express');
const fs = require('fs');

const router = express.Router();

import { Contenedor } from '../public/contenedor';

let fileRoute = 'productos';

let myProducts = new Contenedor(fileRoute);

// GET /api/products
// List all products
router.get('/', (req, res) => {
myProducts
        .getAll()
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
  // TODO: implement logic to read products from file and apply limit if provided
});

// GET /api/products/:pid
// Get a single product by id
router.get('/:pid', (req, res) => {
    myProducts
    .getById(parseInt(req.params.id))
    .then((e) => res.json(e))
    .catch((error) => console.log(error));
  // TODO: implement logic to read product from file by id
});

// POST /api/products
// Create a new product
router.post('/', (req, res) => {
    myProducts
    .save(req.body)
    .then((e) => res.json(e))
    .catch((error) => console.log(error));
  // TODO: implement logic to generate new id and save product to file
});

// PUT /api/products/:pid
// Update a product by id
router.put('/:pid', (req, res) => {
    myProducts
    .editById(parseInt(req.params.id), req.body)
    .then((e) => res.json(e))
    .catch((error) => console.log(error));
  // TODO: implement logic to read product from file by id, update it with values from req.body, and save it back to file
});

// DELETE /api/products/:pid
// Delete a product by id
router.delete('/:pid', (req, res) => {
    myProducts
    .deleteById(parseInt(req.params.id))
    .then((e) => res.json(e))
    .catch((error) => console.log(error));
  // TODO: implement logic to read products from file, remove the one with matching id, and save products back to file
});

export default router;
