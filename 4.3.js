/**
 * This function  return a list of n random elements between 1 to 10.
 * @param  {Number} n an integer
 * @returns {Array} an list of n random number between 1 to 10.
 */


//return a random number between 1 to 10
function rand10(){
    return Math.floor(Math.random()*10)+1;
}

//return a list of n random elements between 1 to 10. 
function multiRand(n){
    list=[]
    for (let i=1 ; i<=n;i++){
        list.push(rand10())
    }
    return list
}

//ask a integer n to the user and display a list of n random  elements 
n=Number(prompt("Give a integer"))
console.log(multiRand(n))

