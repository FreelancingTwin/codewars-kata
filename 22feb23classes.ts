Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"


//create a simple class, with a constructor
//add default argument = 'regular' to that constructor
//assign a prop name to the argument so the class can access it.
  class Ball{
    constructor(ballType = 'regular'){
      this.ballType = ballType
    }
  }