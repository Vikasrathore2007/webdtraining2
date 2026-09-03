 let fname="vikas";
 let lname="rathore";
// console.log("my first name is:"+fname);
// console.log("my last name is:"+lname);
// console.log(`my first name is:${fname}`);
// console.log(`my name is:${fname}${lname}`);
function fullname( fname,lname){
    //console.log(fname);
    //console.log(lname);

    return ` MY name is :${fname}${lname}`;
}
let N=`hello ${ fullname(fname,lname)}`;
console.log(N);

