import express from 'express';
import products from '../mocks/products';

const router = express.Router();

/* GET users listing. */
router.get('/api/products', (req, res, next) => {
  res.json(products);
});

router.get('/api/products/:id', (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

export default router;
