/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  // Tokenizes the expression into numbers and operators
  tokenize(expression) {
    return expression.match(/\d+|\+|\-|\*|\//g) || [];
  }

  // Converts infix notation to postfix notation
  toPostfix(tokens) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const output = [];
    const stack = [];

    tokens.forEach(token => {
      if (!isNaN(token)) {
        output.push(token);
      } else {
        while (
          stack.length > 0 &&
          precedence[token] <= precedence[stack[stack.length - 1]]
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    });

    while (stack.length > 0) {
      output.push(stack.pop());
    }

    return output;
  }

  // Evaluates the postfix expression and updates this.result
  evaluatePostfix(postfix) {
    const stack = [];

    postfix.forEach(token => {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            if (operand2 === 0) {
              throw new Error("Cannot divide by zero");
            }
            stack.push(operand1 / operand2);
            break;
        }
      }
    });

    if (stack.length !== 1) {
      throw new Error("Invalid expression");
    }

    this.result = stack.pop();
  }

  // Calculate method that utilizes the tokenizer, postfix conversion, and evaluation
  calculate(expression) {
    const tokens = this.tokenize(expression);
    const postfix = this.toPostfix(tokens);
    this.evaluatePostfix(postfix);
  }
}
module.exports = Calculator;
