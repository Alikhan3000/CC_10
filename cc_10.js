//Task 1: Creating a Product Class

class Product {                                 //created a class with 4 properties
    constructor(name, id, price, stock){
        this.name = name;                       
        this.id = id;
        this.price = price;
        this.stock = stock;
    }


getDetails(){                                   //this method returns a formatted string of product details 
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
};

updateStock(quantity){                          //this method decreases stock when order is placed 
    if (this.stock >= quantity) {               //used if statement to make sure that quantity is not larger than stock 
        this.stock = this.stock - quantity;
    }
}
} 
//test cases:
const prod1 = new Product("Laptop", 101, 1200, 10);

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


//Task 2: Creating an Order Class

class Order {                                   //created a class with 3 variables
    constructor(orderId, product, quantity){
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        if (this.product.stock >= quantity){    //used if statement to make sure that quantity is not larger than stock 
            this.product.updateStock(quantity); //used update stock function from the previous class to decrease stock 
        }
    }

getOrderDetails(){                              //this method returns order details; total price = (quantity * price) of the order placed
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price $${this.quantity * this.product.price}`};

}

//test data:
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());          //logged purchase details using test data
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());                //logged product information with the updated stock
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

//Task 3: Creating an Inventory Class

class Inventory {                                           //created a class that includes an array as a property
    constructor() {
        this.products = [];
    }

    addProduct(product){                                   //added a method that adds a product into the array using .push
        this.products.push(product)
    }

    listProducts(){                                        //this method logs all products' details of the products in the array using a loop and a function from Product class
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i].getDetails());
        }
    }            
    

}

//Test Cases:

const inventory = new Inventory();
inventory.addProduct(prod1);            //added a product into the array 
inventory.listProducts();               
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
