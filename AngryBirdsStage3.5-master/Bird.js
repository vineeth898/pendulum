class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    //this.image = loadImage("sprites/bird.png");
  }

  display() {
     ellipse(this.body.position.x,this.body.position.y,150,150);
  }
}
