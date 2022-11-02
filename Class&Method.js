class Rectangle{
    constructor(w, h){
        this.width =  w;
        this.height = h;
        
    }
}
Rectangle.prototype.Area = function(){
    return this.width * this.height;
}

const AreaofRectangle = new Rectangle(5,6);

console.log(AreaofRectangle.Area());