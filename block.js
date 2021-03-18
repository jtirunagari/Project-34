class Block
{
    constructor(x,y,w,h)
{
    var boxFeatures = {
        restitution: 0.8,
        friction:1.0,
        density: 20,
      }
      this.body=Bodies.rectangle(x,y,w,h,boxFeatures);
      World.add(myWorld,this.body)
      this.w=w
      this.h=h
      
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rectMode(CENTER)
strokeWeight(4)
stroke("black");
fill("red")
rect(0,0,this.w,this.h);
 pop()
}
}