/**
* This script asks the length and width of a rectangle to the user then displays the surface of that rectangle 
*the function calcSurface take x (height) and y (width), return the surface of rectangle (x*y) 
* @param {Number} x The width/height of the rectangle
* @param {Number} y The width/height of the rectangle
* @return {Number}  The surface of the rectangle
*/

function calcSurface(x,y){
    return x*y
}
// asks the length and the height to the user
x=Number(prompt("Longueur du rectangle"));
y=Number(prompt("Largeur du rectangle"));
console.log(calcSurface(x,y))

