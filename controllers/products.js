const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('addproduct',{
        pageTitle: 'Add Product',
        path: '/admin/addproduct',
        formsCSS:true,
        productCSS: true,
        acriveAddProduct: true,
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    console.log("products", products);
    res.render('shop',{
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true

    });
}

