const Product = require('../models/productmodel');

const addProduct = async (req, res) => {
  const { name, description, image } = req.body;
  const product = new Product({ name, description, image });
  await product.save();
  res.send(product);
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
};

const updateProduct = async (req, res) => {
  const { name, description, image } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, image },
    { new: true }
  );
  res.send(updatedProduct);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send({ message: 'Product deleted' });
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
