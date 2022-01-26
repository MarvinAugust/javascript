// 01 - Hello World

console.log("Hello World !");

var test 

//02 - String

test = "My name is Marvin";

console.log(test)

//03 - Concaténation

var name = "Marvin";

console.log("Nice to meet you " + name)

//04 - String Length

var testLength = "I'm very long !";

console.log(testLength.length)

//05 - Replace

var food = "croissant is meh";

food = food.replace("meh", "so good");

console.log(food)

//06 - Up and Down

var basic = "This is cool";

var basicUp = basic.toUpperCase();

console.log(basicUp);

var basicDown = basic.toLowerCase();

console.log(basic + "\n" + basicDown);

//07 - Split


var word = "banana"

var letters = word.split("")

console.log(letters)

//08 - Template

var age = 21;

var template = (`I'm ${age} years old`)

console.log(template);

//Bonus

var changed = "Bonjour";

var re = /o/gi;

var change = changed.replace(re, 'a');

console.log(change);