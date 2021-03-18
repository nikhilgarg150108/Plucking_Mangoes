class String
{
    constructor (bodyA, pointB)
    {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            lenght:10
        }

        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    fly()
    {
        this.string.bodyA = null;
    }

    display()
    {
        fill(255);
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}