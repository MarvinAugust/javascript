// 01 - Number

// var integer = 102;

// var float = 13.9;

// console.log(integer);
// console.log(float);



// 02 - convert

// let basic = 34;

// let stringified = basic.toString();

// console.log(stringified)



// 03 - Round

// let num = 1.5;

// let rounded = Math.round(num);

// console.log(rounded)


// 04 - Comparaison

// let test = 143;

// let bis = 219;

// console.log(test < bis);
// console.log(test > bis);
// console.log(test === bis);
// console.log(test !== bis);
// console.log(test <= bis);



// 06 - Condition

// let limit = 50 ;
// let score = 64 ;

// if (limit <= score) {  
//     console.log("Ok good !");

//   } else {  
//     console.log("Oh noooo...");
//   }  



// 07 - Condition II

// let password = "azerty";

// if (password.length >= 5) {  
//     console.log("Password is secure");

//   } else {  
//     console.log("Password is not secure");
//   }  



// 08 - Condition III

// let limit = 50 ;
// let score = 64 ;
// let password = "azerty";


// if (limit <= score && password.length >= 5 ) {  
//     console.log("Everything is good");

//   } else if (limit <= score || password.length <= 5) {
//     console.log("Something is good");

//     } else { (limit >= score && password.length <= 5 )
//     console.log("Nothing is good");
//     }


// Bonus 1

// var min = 1;
// var max = 6;
// let result = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(result)

// if  ( result === 6 ){
//     console.log("Yes i win")

// } else {
//     console.log("So close...")
// }



// Bonus 2

// var month = "August";

// switch (month) {
// 	case "January": 
//     case "February": 
//     case "March": 
// 		console.log("Winter");
// 		break;
// 	case "April": 
//     case "May": 
//     case "June": 
// 		console.log("Spring");
// 		break;
// 	case "July": 
//     case "August":
//     case "September":
// 		console.log("Summer");
// 		break;
// 	case "October": 
//     case "November":
//     case "December":
// 		console.log("Fall");
// 		break;
// 	default: 
// 		console.log("That's not a month...");
// }


// Bonus 3



// let roundNumber = 3.5 ;

// if  ( roundNumber < 3.5 ){
//     roundNumber = Math.floor(roundNumber);
//     console.log(roundNumber)

// } else {
//     ( roundNumber >= 3.5 )
//     roundNumber = Math.ceil(roundNumber);
//     console.log(roundNumber)
// }




let roundNumber = 3.6 ;

if  ( roundNumber < 3.5 ){
    roundNumber = Math.floor(roundNumber);
    console.log(roundNumber)
    roundNumber = roundNumber.toString()
    console.log(roundNumber.substring())

} else {
    ( roundNumber >= 3.5 )
    roundNumber = Math.ceil(roundNumber);
    console.log(roundNumber)
    roundNumber = roundNumber.toString()
    console.log(roundNumber.substring())
}