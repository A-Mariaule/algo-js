class Circle {
    constructor(xPos,yPos,radius){
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
    }
    move(xOffset,yOffset){
        this.xPos=xOffset;
        this.yPos=yOffset;
    }
    get surface(){
         return Math.PI*(Math.pow(this.radius,2))
    }
}

let cercle = new Circle(4,4,10);
console.log(cercle.xPos)
console.log(cercle.yPos)
console.log(cercle.radius)
cercle.move(1,1)
console.log(cercle.xPos)
console.log(cercle.yPos)
console.log(cercle.surface)
