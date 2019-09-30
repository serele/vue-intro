'use strict'

var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'Pair of short socks',
        selectedVariant: 0,                
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green.jpg',
                variantQuantity: 10,
                onSale: true
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpg',
                variantQuantity: 0,
                onSale: false
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0
    },
    methods: {
        addToCart: function () {
            if (this.inStock >= 1) {
                this.cart += 1                
                this.variants[this.selectedVariant].variantQuantity -=1
            }            
        },

        removeFromCart: function () {
            if (this.cart > 0) {
                this.cart -= 1
                this.variants[this.selectedVariant].variantQuantity +=1
            }
        },

        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        almostSoldOut() {
            if (this.variants[this.selectedVariant].variantQuantity <= 10)
                return true
        },
        onSale() {
            if (this.variants[this.selectedVariant].onSale)
                return true
        }
    }
})
