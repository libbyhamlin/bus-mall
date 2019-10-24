import { productData } from '../src/api.js';
import { ProductArray } from '../src/product-array.js';
import { findById } from '../src/utils.js';

const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const productName = document.getElementById('product-name');
const products = new ProductArray(productData);

// console.log(products.getRandomProduct());

const userPicksArray = [];
// let randomProduct;
// let randomProduct2;
// let randomProduct3;

//Dynamically render HTML
const generateProduct = () => {
    const randomProduct = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();

    while (randomProduct.id === randomProduct2.id) {
        randomProduct2 = products.getRandomProduct();
    }

    let randomProduct3 = products.getRandomProduct();

    while (
        randomProduct3.id === randomProduct2.id ||
    randomProduct3.id === randomProduct.id
    ) {
        randomProduct3 = products.getRandomProduct();
    }

    productImageTags.forEach((imageTag, i) => {
        if (i === 0) {
            imageTag.src = randomProduct.image;
        } else if (i === 1) {
            imageTag.src = randomProduct2.image;
        } else if (i === 2) {
            imageTag.src = randomProduct3.image;
        }
    });

    productRadioTags.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.value = randomProduct.id;
        } else if (i === 1) {
            radioTag.value = randomProduct2.id;
        } else if (i === 2) {
            radioTag.value = randomProduct3.id;
        }
    // console.log(radioTag.value);
    });
};

generateProduct();

function trackUserPicks(productId) {
    let found = products.findById(userPicksArray, productId);
    if (!found) {
        found = {
            id: productId,
            timesClicked: 1,
            timesDisplayed: 1
        };
        userPicksArray.push(found);
    } else {
        found.timesClicked++;
        return;
    }
}

productRadioTags.forEach(radioTag => {
    radioTag.addEventListener('input', event => {
        if (event.target) {
            trackUserPicks(event.target.value);
        }
    });
});

export { userPicksArray };
