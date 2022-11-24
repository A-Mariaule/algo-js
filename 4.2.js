/**
 * This script display a random integer between 1 to 10.
 * the function rand10() return a random integer between 1 to 10
 * @param none
 * @returns a random integer between 1 to 10
 */


function rand10(){
    return Math.floor(Math.random()*10)+1;
}


//display the random number

console.log(rand10())