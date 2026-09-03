//rest operator in java script
function sum(...value){
     let total=0;
     for(let n of value){
        total =total+n;
     }
     return total;
    }
   console.log(`sum is:${sum(10,20,30,405,50)}`);// connecting string template
