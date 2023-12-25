//Write a program to print the marks of a student in an object using for loop
let obj={
    Pranay:98,
    Nishant:99,
    Shlok:100
}
for (const key in obj) {
    {
        const element = obj[key];
        console.log(key,element);
    }
}