//Write a javascript program to find weather a number is divisible by either 2 or 3
let a=45;
c=a%2;
b=a%3;
if(c==0 && b==0){
    console.log("Given number is divisble by both 2 and 3");
}
else if(c==0 && b!=0){
    console.log("Given number is divisible by 2 but not by 3");
}
else if(c!=0 && b==0){
    console.log("Given numbe is divisible by 3 but not by 2");
}
else {
    console.log("Given number is not divisible by 2 and 3");
}
