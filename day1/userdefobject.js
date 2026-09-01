


// let stu= new Object();
// stu.name="vikas";
// stu.rollno=220 ;

// stu.stipend=function(){
//    // document.write(stipend);
//      console.log("stipend= 20000");
// }
// console.log(stu.name);
// console.log(stu.rollno);
// console.log(stu.stipend());


// //function constructor
// function student(name,rollnumber,pincode,city) {
//     this.name=name;
//     this.rollno=rollnumber;
//     this.pcode=pincode;
//     this.city=city;
// }
// let s1=new student("vikas",220,201304,"noida")
// console.log(s1);

class student{
    constructor (name,pincode){
        this.name=name;
        this.pincode=pincode;
    }
    display(){
        console.log(this.name);
        console.log(this.pincode);
    }
};
let s1=new student("vikas",201304);
s1.display();