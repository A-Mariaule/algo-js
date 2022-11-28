/**
 * The function take two points and return the distance between.
 * @param {Array} A a point in the Cartesian coordinate system
 * @param {Array} B a point in the Cartesian coordinate system
 * @return d(A,B)=sqrt((y_b-y_a)^2+(x_b-x_a)^2)
 */


function calcDistance(A,B){
    x_A=A[0];
    x_B=B[0];
    y_A=A[1];
    y_B=B[1];
    dx=x_B-x_A
    dy=y_B-y_A
    d=Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))
    return d
}

// display the distance between two point
console.log(calcDistance([1,1],[2,2]))