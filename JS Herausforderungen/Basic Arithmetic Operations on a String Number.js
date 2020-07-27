/*
Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").

Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.

eval() is not allowed. In case of division, whenever the second number equals "0" return -1.

For example:

"15 / 0"  ➞ -1

Examples
------------
arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24
arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0
arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144
arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1

Notes
------------
    All the inputs are only integers.
    The operators are * - + and /.
    Hint: Think about the single space that appears before and after the arithmetic operator.
    
arithmeticOperation("12 + 12"), 24)
arithmeticOperation("22 - 12"), 10)
arithmeticOperation("100 * 12"), 1200)
arithmeticOperation("120 / 10"), 12)
arithmeticOperation("122 / 0"), -1)
arithmeticOperation("10 * 20"), 200)
arithmeticOperation("10 - 10"), 0)
arithmeticOperation("10 - 12"), -2)
*/
function arithmeticOperation(n) {
	const [num1, operator, num2] = n.split(' ');
	const operations = { 
		'+' : +num1 + +num2,
		'-' : +num1 - num2,
		'*' : +num1 * num2,
		'/' : +num2 === 0 ? -1 : +num1 / num2
	};
	return operations[operator];
}
function arithmeticOperation(n) {
  const [n1, op, n2] = n.split(" ");
  switch (op) {
    case "+": return +n1 + +n2;
    case "-": return +n1 - +n2;
    case "*": return +n1 * +n2;
    case "/": return n2 === "0" ? -1 : +n1 / +n2;
  }
}
function arithmeticOperation(n) {
res= n.split(" ")
return (res[1]=="/" && res[2]=="0") ? -1 : 
(res[1]=="+") ? parseInt(res[0])+parseInt(res[2]) :
(res[1]=="*") ? parseInt(res[0])*parseInt(res[2]) :
(res[1]=="-") ? parseInt(res[0])-parseInt(res[2]) :
(res[1]=="/") ? parseInt(res[0])/parseInt(res[2]) : null
}
