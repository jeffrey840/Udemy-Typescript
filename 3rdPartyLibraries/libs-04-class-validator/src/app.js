"use strict";
exports.__esModule = true;
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var product_model_1 = require("./product.model");
var products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];
var newProd = new product_model_1.Product('', -5.99);
(0, class_validator_1.validate)(newProd).then(function (errors) {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
// const p1 = new Product('A Book', 12.99);
// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });
var loadedProducts = (0, class_transformer_1.plainToClass)(product_model_1.Product, products);
for (var _i = 0, loadedProducts_1 = loadedProducts; _i < loadedProducts_1.length; _i++) {
    var prod = loadedProducts_1[_i];
    console.log(prod.getInformation());
}
