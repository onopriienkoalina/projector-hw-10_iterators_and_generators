
//Задача 1 - ‘FizzBuzz’ через ітератор та генератор

// ітератор
/*const fizzBuzz = {
    [Symbol.iterator]() {
        let current = 1;
        return {
            next() {
                if (current > 100) {
                    return { 
                        done: true 
                    };
                }
                    let result = "";
                if (current % 3 === 0) {
                    result += "Fizz";
                }
                if (current % 5 === 0) {
                    result += "Buzz";
                }
                if (result === "") {
                    result = current;
                }
                current++;
                return {
                    value: result,
                    done: false
                };
            }
        };
    }
};

for (let value of fizzBuzz) {
    console.log(value);
}*/
  
// генератор
/*function fizzBuzz(num) {
    if (num % 15 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  }

function* fizzBuzzGenerator(start = 1, end = 100) {
    for (let i = start; i < end + 1; i++) {
        yield fizzBuzz(i);
    }
}

const fizzBuzzResult = {
    *[Symbol.iterator]() {
        yield* fizzBuzzGenerator();
    }
};

for (let value of fizzBuzzResult) {
    console.log(value);
}*/

//Задача 2 - генератор випадкових чисел

/*function* generateRandomNumbers(max, quantity) {
    for (let i = 0; i < quantity; i++) {
        yield Math.floor(Math.random() * max) + 1;
    }
}

const randomNumbers = generateRandomNumbers(100, 10);
for (let num of randomNumbers) {
    console.log(num);
}*/