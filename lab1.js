class Products {
    constructor(articleNu, title, description, nuInStock, price) {
        this.articleNu = articleNu;
        this.title = title;
        this.description = description;
        this.nuInStock = nuInStock;
        this.price = price;
    }

    filterObject(){
        

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

    // Ingen aning varför jag har denna print (behöver jag den ens??)
    print() {
        super.print();
    }
}

class Toys extends Products {
    constructor(articleNu, title, description, nuInStock, price, ageFrom) {
        super(articleNu, title, description, nuInStock, price);
        this.ageFrom = ageFrom;
    }

    // Ingen aning varför jag har denna print (behöver jag den ens??)
    print() {
        super.print();
    }
}

let clothes1 = new Clothes(100, 'Tröja', 'Blå långärmad', 10, 199, 'L');
let toy1 = new Toys(200, 'Leksaksbil', 'Röd Ferrari', 5, 99, 3);
let toy2 = new Toys(300, 'Helikopter', 'Fjärrstyrd', 2, 399, 7);
let clothes2 = new Clothes(400, 'Byxa', 'Svarta Jeans', 9, 399, 'M');

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

}

let stock = new Stock();

// Adds clothes & Toys
stock.addProduct(clothes1);
stock.addProduct(toy1);
stock.addProduct(toy2);
stock.addProduct(clothes2);

// fler klasser
class ShoppingCart {}
class Customer {}

// sadsadsadsadsadsadsadsadölsakdlsaökdasöl
// stock.inventory();

console.log(stock);


// Denna kopierar jag
// let filteredItems = stock
// .filter( dd => dd.articleNu > 250 )
// .map( dd => dd.title );
// console.log(filteredItems); 


// let old_people = people
//     .filter( person => person.age > 25 )
//     .map( person => person.name );

// console.log(old_people);

