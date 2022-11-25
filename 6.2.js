class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if(otherRectangle.topLeftXPos<=this.topLeftXPos<=otherRectangle.topLeftXPos+otherRectangle.length ||this.topLefXtPos<=otherRectangle.topLeftXPos<=this.topLeftXPos+this.length ){
            return True
        }
        else if(otherRectangle.topLeftYPos<=this.topLeftYPos<=otherRectangle.topLeftYPos ||this.topLeftYPos<=otherRectangle.topLeftYPos<=this.topLeftYPos)
    }
}