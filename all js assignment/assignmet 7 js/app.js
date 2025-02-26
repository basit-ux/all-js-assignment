function displayDateTime() {
    document.write(new Date().toString());
}

function greetUser(firstName, lastName) {
    document.write("Hello, " + firstName + " " + lastName + "!");
}

function addNumbers() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    return num1 + num2;
}

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 'Invalid operator';
    }
}

function square(number) {
    return number * number;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function displayCounting(start, end) {
    var output = "";
    for (var i = start; i <= end; i++) {
        output += i + " ";
    }
    document.write(output);
}

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

function variableArguments() {
    var args = Array.prototype.slice.call(arguments);
    document.write(args.join(', '));
}

function findLargest() {
    return Math.max.apply(null, arguments);
}

function areaOfRectangle(width, height) {
    return width * height;
}

function sortArray(arr) {
    return arr.sort();
}

function sumArray(arr) {
    return arr.reduce(function(acc, val) {
        return acc + val;
    }, 0);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}

function isPalindrome(str) {
    var cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

function capitalizeFirstLetter(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function longestWord(str) {
    return str.split(' ').reduce(function(longest, current) {
        return current.length > longest.length ? current : longest;
    }, "");
}

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

function uniqueCharacters(str) {
    return Array.from(new Set(str.split(''))).join('');
}

function countLetterOccurrences(str, letter) {
    return (str.match(new RegExp(letter, 'gi')) || []).length;
}

function calculateAge(birthYear, currentYear) {
    var age1 = currentYear - birthYear;
    var age2 = currentYear - birthYear - 1;
    document.write("You are either " + age1 + " or " + age2 + ".");
}

function calculateSupply(age, amountPerDay) {
    var maxAge = 100;
    var totalAmount = (maxAge - age) * 365 * amountPerDay;
    document.write("You will need " + totalAmount + " to last you until the ripe old age of " + maxAge + ".");
}

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area);
}

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheit + "°F");
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    document.write(fahrenheit + "°F is " + celsius + "°C");
}
