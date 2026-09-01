
<script>function Product(ID,name,quantity,price){
    this.Product_name=name;
    this.Product_id=ID;
    this.Quantity=Quantity;
    this.Price=price;
        function total(){
            return quantity*price;
        }
     update_Quantity=function(newQuantity){
            this.Quantity= newQuantity;
        }
        this.displayProduct=function(){
            console.log("product_ID"+this.ID);
            console.log("quantity"+this.quantity);
            console.log("price"+this.price);
            console.log("total"+this.total);
        }
}
let p1=new Product('DV1241','dove',42,899);
let p2=new Product('VM1241','vines',48,899);

console.log("p1");
p1.displayProduct();
p1.update_quantity(200);
console.log("p1 after update");
p1.displayProduct(); 
</script>


