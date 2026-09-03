function bankAccount(cus_name, acc_num, cus_ID, balance) {
  this.name = cus_name;
  this.acc = acc_num;
  this.id = cus_ID;
  this.bal = balance;
  this.withdrawal = function (withdrawal) {
    if (withdrawal > balance){
         console.log("insufficent balance");}
    this.bal = this.bal - withdrawal;
    return this.balance;
  }
    this.deposit = function (deposit) {
      this.bal = this.bal + deposit;
      return this.bal;
    };
    this.displaybankaccount=function(){
        console.log("customer name:"+this.name);
        console.log("customer id :"+this.id);
        console.log("BALANCE :"+this.bal);
        console.log("account number:"+this.acc);
  };
}
   let Bankaccount= new bankAccount("vikas",50589,52881,1508)
   Bankaccount.deposit(20000);
    Bankaccount.withdrawal(100000);
      Bankaccount.displaybankaccount();

   Bankaccount.withdrawal(1000);
   Bankaccount.displaybankaccount();

