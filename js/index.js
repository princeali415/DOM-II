// Your code goes here

// Nav

const navigation = document.querySelector('.main-navigation')

navigation.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue'  
})
navigation.addEventListener('mouseout', function(event){
    event.target.style.color = 'black'  
})


// body

const body = document.querySelector('body')
body.addEventListener('keydown', function(event){
    event.target.style.background = 'yellow'
})
body.addEventListener('keyup', function(event){
    event.target.style.background = 'white'
})

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

window.addEventListener("dblclick", () => {
alert("Ouch, can you stop that");
});

// intro 

const intro = document.querySelector('.home')
intro.addEventListener('wheel', function(event){
    event.target.style.fontSize = '2rem'
})

// btn 

document.body.addEventListener("click", event => {
    if (event.target.className == "btn") {
      console.log("Clicked", event.target.textContent);
      event.target.style.background = 'green'
    }
  });

// mouse trail 

var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of 
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;
  
  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

body.addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
