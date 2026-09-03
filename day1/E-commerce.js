function Product(ID, name, Quantity, price) {
    this.Product_name = name;
    this.Product_id = ID;
    this.Quantity = Quantity;
    this.Price = price;

    this.total = function () {
        return this.Quantity * this.Price;
    };

    this.update_Quantity = function (newQuantity) {
        this.Quantity = newQuantity;
    };

    this.displayProduct = function () {
        console.log("product_ID: " + this.Product_id);
        console.log("product_name: " + this.Product_name);
        console.log("quantity: " + this.Quantity);
        console.log("price: " + this.Price);
        console.log("total: " + this.total());
    };
}

let product = new Product("DV1241", "dove", 42, 899);

console.log("p1");
product.displayProduct();

product.update_Quantity(200);

console.log("p1 after update");
product.displayProduct();
