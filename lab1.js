class Products {
    constructor(articleNu, title, description, price, nuInStock) {
        this.articleNu = articleNu;
        this.title = title;
        this.description = description;
        this.price = price;
        this.nuInStock = nuInStock;
    }

    print() {
        console.log(`Produkten har artikelnummer: ${this.articleNu} och titel: ${this.title}.Beskrivningen är: ${this.description}.Produkten kostar ${this.price} SEK och det är för tillfället ${this.nuInStock} i varulager.`);
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

class Stock {
    constructor(products = []) {
        this.products = products;
    }

    addProduct(articleNu, title, description, price, nuInStock) {
        this.products.push(new Products(articleNu, title, description, price, nuInStock));
    }

    addClothes(articleNu, title, description, price, nuInStock, size) {
        this.products.push(new Clothes(articleNu, title, description, price, nuInStock, size));
    }
      
    addToy(articleNu, title, description, price, nuInStock, ageFrom) {
        this.products.push(new Toys(articleNu, title, description, price, nuInStock, ageFrom));
    }

    inventory() {
        console.log("Alla produkter");
        for ( let products of this.products ) {
            products.print();
        }
    }

    filterarticleNu(value) {
      return this.products.filter((x) => x.articleNu === value)[0];
    }

    searchAfterObject(value) {
      for ( let products of this.products ) {
          if (products.articleNu === value){
            console.log(`Filtrerat artikelnummer: ${products.articleNu}. Gäller för produkten: ${products.title}`);
          }
      }
    }
}

class ShoppingCart {
    constructor() {
      this.shoppingCartArray = [];
    }
    
    printShoppingCart() {
      console.log(this.shoppingCartArray);
    }
    
    addToCart(productToAdd) {
      this.shoppingCartArray.push(stock.filterarticleNu(productToAdd));
    }
    
    removeFromCart(productToRemove) {
      this.shoppingCartArray.splice(
        this.shoppingCartArray.indexOf(
          this.shoppingCartArray.filter((x) => x.filterarticleNu === productToRemove)[0]
        ),
        1
      );
    }
    
    calcSumOfShoppingCart() {
      console.log(
        ` Total cost: ${this.shoppingCartArray
          .map((x) => x.price)
          .reduce((total, currVal) => total + currVal)}`
      );
    }
}
  
class Customer {
  constructor(name) {
    this.name = name;
    this.orderHistory = [];
    this.shoppingCart = new ShoppingCart();
  }
    
    makePurchase() {
      this.orderHistory.push({
        date: new Date().toDateString(),
        order: this.shoppingCart.shoppingCartArray,
      });
      for (let i = 0; i < this.shoppingCart.shoppingCartArray.length - 1; i++) {
        stock.filterarticleNu(this.shoppingCart.shoppingCartArray[i].articleNu)
          .nuInStock--;
        console.log(
          stock.filterarticleNu(this.shoppingCart.shoppingCartArray[i].articleNu)
        );
      }
      this.shoppingCart.shoppingCartArray = [];
      console.log(this.orderHistory);
    }
  }

let stock = new Stock();

// Lägger till produkter
stock.addProduct(01, "Bara en oanvändbar produkt", "Inget skit att ha!", 1, 100000);
stock.addClothes(100,"Tröja","Blå långärmad",10, 100,"L");
stock.addClothes(400, 'Byxa', 'Svarta Jeans', 20, 200, 'M');
stock.addToy(200,"Leksaksbil","Röd Ferrari", 30, 300, 3);
stock.addToy(300, 'Helikopter', 'Fjärrstyrd', 40, 400, 7);
stock.addToy(500, 'Google Stadia', 'Tv-spel', 100, 500, 12);

let newCustomer = new Customer("Kalle");
newCustomer.shoppingCart.addToCart(100);
newCustomer.shoppingCart.addToCart(200);
newCustomer.shoppingCart.addToCart(300);
// newCustomer.shoppingCart.addToCart(400);
// newCustomer.shoppingCart.addToCart(500);

// Metoder för att lägga till/ta bort produkter för kunden
console.log(newCustomer);
// newCustomer.shoppingCart.printShoppingCart();
newCustomer.shoppingCart.removeFromCart(200);
// newCustomer.shoppingCart.printShoppingCart();
// newCustomer.shoppingCart.calcSumOfShoppingCart();
// newCustomer.makePurchase();
console.log(newCustomer);

// Visa alla produkter som finns i Stock/Varulager:
// console.log(stock);

// Skriv ut alla produkter som finns i Stock/Varulager:
// stock.inventory();

// Filtrera utifrån artikelnumret/parametern
stock.searchAfterObject(200);
