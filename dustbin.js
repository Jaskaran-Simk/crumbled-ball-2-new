class dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
            
        }
        
        this.bottomBody = Bodies.rectangle(990,380,190,20,options)
        this.rightBody = Bodies.rectangle(1090,340,20,100,options)
        this.leftBody = Bodies.rectangle(890,340,20,100,options)
      
        this.image = loadImage("dustbingreen.png")
 
      World.add(world, this.bottomBody);
      World.add(world, this.rightBody);
      World.add(world, this.leftBody);
      
    }

display(){
    push ();
    imageMode(CENTER)
  image(this.image,990,340,190,100)
    //rectMode(CENTER)
    //rect(990,380,190,20)
   // rect(1090,340,20,100)
    //rect(890,340,20,100)

    pop();
  }
};