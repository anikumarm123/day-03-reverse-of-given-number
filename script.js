//reverse of given number//
let n = 1283;
let lastdigit;
let sum = 0;
console.log("  The Number is  "+n)
while(n > 0){
    lastdigit = n % 10;
    sum = (sum * 10)+lastdigit;
    n = n - lastdigit;
    n = n / 10;
}
console.log("  The Reverse of Number  "+sum);
