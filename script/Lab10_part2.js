var topPosition = 200;
var leftPosition = -200;

function runPuppy() {

  var puppy = document.getElementById("puppy");
  puppy.style.position = 'absolute';
  var x = puppy.offsetLeft;
  var y = puppy.offsetTop;
  // add if it reaches the screen end (you can check with screen.availwidth)

  var step = 1;
  if (y < screen.availHeight-130) {
    y += step;
    puppy.style.top = y + 'px';
  }

  if (x < screen.availWidth-110) {
    x += step;
    puppy.style.left = x + 'px';
  }


  console.log("height: " + y + " width: " + x);

  if (x == (screen.availWidth-110) && y == (screen.availHeight-130)) {
    reset();
  }

}

function reset() {
  puppy.style.top = '80px';
  puppy.style.left = '8px';
}