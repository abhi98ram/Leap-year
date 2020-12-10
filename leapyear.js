var readlineSync = require("readline-sync");

var chalk = require("chalk");



console.log(chalk.green( "Let us play a game!!!!"));
console.log("\n");
var username = readlineSync.question("What is your name  ");
console.log("\n");
console.log(username + chalk.bold.yellow( " Let us play a game!!!!"));
console.log("\n");
var year = readlineSync.question("What is Year of birth ");
console.log("\n");
play(year);
function play(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(chalk.bold.underline(year) + ' is a leap year');
        console.log("\n");
        console.log(username + chalk.green(' You were born in a leap year'));
        console.log("\n");
        console.log('Thank you for playing this game');
    } else {
        console.log(chalk.bold.underline(year) + ' is not a leap year');
        console.log("\n");
        console.log(username + chalk.green(' You were not born in a leap year'));
        console.log("\n");
        console.log('Thank you for playing this game');
    }

  

}