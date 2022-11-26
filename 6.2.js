class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        return ((((otherRectangle.topLeftXPos<=this.topLeftXPos) && (this.topLeftXPos <=otherRectangle.topLeftXPos+Rect2.length) )||((this.topLefXtPos<=otherRectangle.topLeftXPos) && (otherRectangle.topLeftXPos<=this.topLeftXPos+this.length)))&&(((otherRectangle.topLeftYPos-otherRectangle.width<=this.topLeftYPos) && (this.topLeftYPos <=otherRectangle.topLeftYPos)) ||(this.topLeftYPos-this.width<=otherRectangle.topLeftYPos) &&(otherRectangle.topLeftYPos<=this.topLeftYPos)))
        
    }
}

let Rect1=new Rectangle(-5,5,2,7)
let Rect2=new Rectangle(5,3,2,4)



console.log(Rect1.collides(Rect2))