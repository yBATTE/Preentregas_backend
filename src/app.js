import express from ('express');
import productsRouter from ('./routes/products');
import cartsRouter from ('./routes/carts');

const app = express();

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
