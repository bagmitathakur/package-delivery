class Box{
    constructor(x,y,width,height){        
var options={isStatic:true}



this.body=Bodies.rectangle(x,y,width,height);
World.add(world.this.body);

}
display(){
var position=this.body.position;
rectMode(CENTER);
rect(position.x,position.y,this.width,this.height);



}







}