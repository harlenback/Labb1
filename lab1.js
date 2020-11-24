// Artikelnummer som ska filtreras
let inputArticlenumber = 500;

class Products {
    constructor(articleNu, title, description, nuInStock, price) {
        this.articleNu = articleNu;
        this.title = title;
        this.description = description;
        this.nuInStock = nuInStock;
        this.price = price;
    }

    filterObjectProd(){
        if (this.articleNu === inputArticlenumber){
        console.log('filter artikelnummer: ' + this.articleNu + '. För produkten ' + this.title)}
    }

    print() {
        console.log(this.title + ' - ' + this.nuInStock);
    }
}

class Clothes extends Products {
    constructor(articleNu, title, description, nuInStock, price, size) {
        super(articleNu, title, description, nuInStock, price);
        this.size = size;
    }
}

class Toys extends Products {
    constructor(articleNu, title, description, nuInStock, price, ageFrom) {
        super(articleNu, title, description, nuInStock, price);
        this.ageFrom = ageFrom;
    }
}

let clothes1 = new Clothes(100, 'Tröja', 'Blå långärmad', 10, 199, 'L');
let toy1 = new Toys(200, 'Leksaksbil', 'Röd Ferrari', 5, 99, 3);
let toy2 = new Toys(300, 'Helikopter', 'Fjärrstyrd', 2, 399, 7);
let clothes2 = new Clothes(400, 'Byxa', 'Svarta Jeans', 9, 399, 'M');
let toy3 = new Toys(500, 'Google Stadia', 'Tv-spel', 100, 1399, 12);

class Stock {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    inventory() {
        console.log("All products");
        for ( let products of this.products ) {
            products.print();
        }
    }

    filterObject() {
        console.log("NU SKA DET FILTRERAS!!!");
        for ( let products of this.products ) {
            products.filterObjectProd();
        }
    }
}

let stock = new Stock();
let product = new Products();

// Adds clothes & Toys
stock.addProduct(clothes1);
stock.addProduct(toy1);
stock.addProduct(toy2);
stock.addProduct(clothes2);
stock.addProduct(toy3);

// ingen aning om ShoppingCart ska vara helt egen eller extend stock som nedan.
class ShoppingCart extends Stock {}

let shoppingcart = new ShoppingCart();
shoppingcart.addProduct(toy3);
shoppingcart.addProduct(clothes1);
console.log(shoppingcart);

// Har nog tänkt helt fel här...
class Customer {
    constructor(name = "", orderHistory = 0, shoppingCart) {
        this.name = name;
        this.orderHistory = orderHistory;
        this.shoppingCart = [];
    }
}

let customer1 = new Customer("PersonNamn1", 100);
let customer2 = new Customer("PersonName2");

console.log(customer1);
console.log(customer2);

// console.log(stock);
// stock.filterObject(); 

// Behöver jag koppla nedanstående för att lägga in med typ customer.addCustomer(customer1);
let customer = new Customer();
console.log(customer);