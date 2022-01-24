class Chain{
    constructor(bodyA,bodyB) {

    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness: 0.1,
        length: 10,

    }
    this.chain =  Constraint.create (options);
    World.add(world, this.chain);
    }
display() {
  var point1 =  this.chain.bodyA.positiion 
  var point2 =  this.chain.bodyB.positiion
  line (point1.x,point2.x,point1.y,point2.y)
}
}