import { productData } from './api.js';


const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const productName = document.getElementById('product-name');
const products = new ProductArray(productData);

// const randomProduct = trees.getRandomProduct(); - This is so they dpn't duplicate 

