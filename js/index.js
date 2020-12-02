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

//
