//alert('Hello World')

//Operator and Operand
var num1 = 22;
console.log(num1);
num1 = -num1;// - is the unary operator and num1 is operand, beacuse the - is working on only 1 operand its called uniary operator
console.log(num1);

var num2 = 25;
var result = 2 + num2;// + is the binary operator and num2 and 2 is operand, beacuse the + is working on only 2 operands its called binary operator
console.log(result);

var x = 12;
var y = 3;

//Arithmatic operations
console.log("Result of addition is " + (x+y));
console.log("Result of substraction is " + (x-y));
console.log("Result of multiplication is " + (x*y));
console.log("Result of division is " + (x/y));
console.log("Result of exponents is " + (x ** y));
// console.log("Result of x++ is " + (x++));
console.log("Result of ++x is " + (++x));

y = y ++;// y+1
y += 1;// y+1
y -= 1;// = y1
y *= y;// = y*y

console.log("Hello "+" - "+ " world");

var firstName = "John";
var lastName = "Doe"

console.log("Your 1st name is "+firstName+ " and last name is "+lastName+" hence your full name is "+firstName+" "+lastName);
console.log(`Your 1st name is ${firstName} and last name is ${lastName} hence your full name is ${firstName} ${lastName}`);
