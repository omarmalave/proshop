import Product from '../models/product.js';

const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.json(products);
};

const getProductsById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
};

export { getProducts, getProductsById };
