export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
    }

    findById(products, id) {
    // loop the array
        for (let i = 0; i < products.length; i++) {
            const item = products[i];

      // check the id against item.id
            if (item.id === id) {
                return item;
            }
        }

    // loop done, nothing found
        return null;
    }
}
