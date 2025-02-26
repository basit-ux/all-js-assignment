var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];

var totalAllItems = 0;

itemsArray.forEach(function(item) {
    
    var price = Number(item.price);
    var quantity = Number(item.quantity);
    var totalPrice = price * quantity;
    
    console.log("Total price for " + item.name + ": " + totalPrice);
    totalAllItems += totalPrice;
});

console.log("Total price for all items: " + totalAllItems);








var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];

var totalAllItems = 0;

itemsArray.forEach(item => {
    
    var price = Number(item.price);
    var quantity = Number(item.quantity);
    var totalPrice = price * quantity;
    
    console.log(`Total price for ${item.name}: ${totalPrice}`);
    totalAllItems += totalPrice;
});

console.log(`Total price for all items: ${totalAllItems}`);





var user = {
    name: "John Doe",
    email: "john@example.com",
    password: "securepassword",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
};


console.log("Age exists:", "age" in user);
console.log("Country exists:", "country" in user);
console.log("First name exists:", "firstName" in user);
console.log("Last name exists:", "lastName" in user);






function Item(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

var item1 = new Item("juice", 50, 3);
var item2 = new Item("cookie", 30, 9);
var item3 = new Item("shirt", 880, 1);
var item4 = new Item("pen", 100, 2);

console.log(item1, item2, item3, item4);


