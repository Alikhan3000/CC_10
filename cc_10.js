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
        this.orders = [];                               //added a new array in the Inventory class
    }

    addProduct(product){                                   //added a method that adds a product into the array using .push
        this.products.push(product)
    }

    listProducts(){                                        //this method logs all products' details of the products in the array using a loop and a function from Product class
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i].getDetails());
        }
    }            
    
    //Task 4: Implementing Order Management
    placeOrder(orderId, product, quantity){                //created a method with 3 variables
        if (product.stock >= quantity) {                            //creates a new order and adds it to orders if stock is available
            let purchase = new Order(orderId, product, quantity);
            this.orders.push(purchase)                              //used .push, which adds a new product to the end of the array
            
        }
    }

    listOrders () {
       for (let i = 0; i < this.orders.length; i++) {       //I used for loop for this method log all placed orders 
        console.log(this.orders[i].getOrderDetails());
    }}

    //Task 5: Implementing Product Restocking
    restockProduct (productId, quantity) {                   //added a method in the Inventory class with 2 variables
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === productId) {        //if ID is matched the quantity of stock is increased by the quantity
                this.products[i].stock += quantity;
                return;                                     //returned the output of the method 
            
    }
        }
    }}


//Test Cases:

const inventory = new Inventory();
inventory.addProduct(prod1);            //added a product into the array 
inventory.listProducts();               
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


//Task 4: Implementing Order Management


//test data: 

inventory.placeOrder(601, prod1, 2);    //a new product added to orders array
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"


//Task 5: Implementing Product Restocking

inventory.restockProduct(101, 5); //stock is increased by 5
console.log(prod1.getDetails());  //logged the updated product details 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"