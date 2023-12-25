//demonstrate the use of switch case statement in java script
console.log("1 for addition 2 for substraction");
let a= 2;
let b=5,c=10;
switch (a) {
    case 1:
        console.log(b+c);
        break;
    case 2:
        b>c?console.log(b-c):console.log(c-b);
        break;
    default:
        console.log("Enter a valid number");
        break;
}