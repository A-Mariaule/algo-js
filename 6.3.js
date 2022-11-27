class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if(this.topLeftXPos+this.length<otherRectangle.topLeftXPos||otherRectangle.topLeftXPos+otherRectangle.length<this.topLeftXPos||otherRectangle.topLeftYPos<this.topLeftYPos-this.width||this.topLeftYPos<otherRectangle.topLeftYPos-otherRectangle.width)
            return false
        else{
            return true
        }
    }
}

for(i=0;i<10;i++){
    randomx=Math.floor(Math.random() * 101);
    randomy=Math.floor(Math.random() * 101);
    random_width=Math.floor(Math.random() * 101);
    while(random_width==0){
        random_width=Math.floor(Math.random() * 101);
    }
    random_length=Math.floor(Math.random() * 101);
    while(random_length==0){
        random_length=Math.floor(Math.random() * 101);
    }  
    Rect_i=new Rectangle(randomx,randomy,random_width,random_length)
}

for(i=0;i<10;i++){
    j=0
    while(j!=i){
        Rect_j=Rect_i
        console.log(Rect_j)
    if (Rect_i.collides(Rect_j)){
        console.log("Le rectangle "+ Rect_i +"touche le rectangle"+ Rect_j)
        }
    j++
    }
}