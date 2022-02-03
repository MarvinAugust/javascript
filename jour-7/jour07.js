// var fs = require("fs");
// fs.readFile("jour07.txt", function (err, data) {
//    if (err) {
//       console.error(err);
//       return;
//    }

//    console.log("Lecture en différé : " + data.toString());
// });



// let array = [1, 2, 3, 4, 5]

// var doubles = array.map(function(number) {
//     return number * 2;
//   });

//   console.log(doubles);




//   let longNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// var shortNames = longNames.map(function(names) {
//     // console.log(names.firstName + " " + names.lastName)
//     let name = [{name: names.firstName + " " + names.lastName}];
//     console.log(name);
//     return names ;
//   });

//   console.log(name);



// let array = [1, "Toto", 34, "javascript", 8];

// var numbers = array.filter(function (tableau) {
//     if (typeof tableau === "number") {
//         return tableau;
//     }
// });

// console.log(numbers);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let even = numbers.filter(function (num) {
//     if (num % 2 === 0 ) {

//     return num
//     }
// });

// console.log(even);


let cakes =
    [
        {
            name: "cake",
            flavor: "vanilla",
            status: "available"
        },
        {
            name: "brownie",
            flavor: "chocolate",
            status: "available"
        },
        {
            name: "pie",
            flavor: "strawberry",
            status: "available"
        },
        {
            name: "muffin",
            flavor: "pistachio",
            status: "available"
        },
        {
            name: "donut",
            flavor: "chocolate",
            status: "available"
        },
    ]

let sold = cakes.filter(function (cake) {
    if (cake.flavor === "chocolate") {
        cake.status = "Sold out"
        // console.log(cake);
        return true
    } else { 
        return false
    }
});

console.log(sold);