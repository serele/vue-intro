'use strict'

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Pair of short socks',
        image: './assets/vmSocks-green.jpg',
        inventory: 8,
        onSale: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ["S", "M", "L", "XL"]
    }
})
