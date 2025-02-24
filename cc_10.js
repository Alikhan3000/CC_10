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