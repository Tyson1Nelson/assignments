var shopper = {
    groceryStoreName: "smiths",
    shopperCardNumber: 42,
    isMember: true,
    itemsInCart: [
        {
            itemnName: "milk",
            type: "skim",
            catagory: "dairy",
            price: 4.28
        },
        {
            itemnName: "cheese",
            type: "swiss",
            catagory: "dairy",
            price: 6.30
        }
    ],
    totalPrice: function() {
        var totalPrice = 0;
        for (var i = 0; i < this.itemsInCart.length; i++){
            totalPrice = totalPrice + this.itemsInCart[i].price;
        }
        console.log(this.itemsInCart);
    }
};
shopper.Cart. = ("apples", "oranges", "banana's");
console.log(shopper);
