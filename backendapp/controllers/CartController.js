const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

const addtoCart = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const product = await Product.findById(req.body.productId);
        if (!product) {
        return res.status(404).send('Product not found');
        }
        let cart = await Cart.findOne({ user: user._id });
        if (!cart) {
        cart = new Cart({
            user: user._id,
            products: [{ product: product._id, quantity: 1 }],
        });
        cart = await cart.save();
        return res.status(201).send(cart);
        }
        const productIndex = cart.products.findIndex(
        (p) => p.product.toString() === product._id.toString()
        );
        if (productIndex === -1) {
        cart.products.push({ product: product._id, quantity: 1 });
        } else {
        cart.products[productIndex].quantity += 1;
        }
        cart = await cart.save();
        res.status(201).send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
    }

const removeFromCart = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const product = await Product.findById(req.body.productId);
        if (!product) {
        return res.status(404).send('Product not found');
        }
        let cart = await Cart.findOne({ user: user._id });
        if (!cart) {
        return res.status(404).send('Cart not found');
        }
        const productIndex = cart.products.findIndex(
        (p) => p.product.toString() === product._id.toString()
        );
        if (productIndex === -1) {
        return res.status(404).send('Product not found in cart');
        }
        cart.products.splice(productIndex, 1);
        cart = await cart.save();
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
    }

const getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const cart = await Cart.findOne({ user: user._id }).populate(
        'products.product'
        );
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
    }
