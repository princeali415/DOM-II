// Your code goes here

// Nav

const navigation = document.querySelector('.main-navigation')

navigation.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue'  
})
navigation.addEventListener('mouseout', function(event){
    event.target.style.color = 'black'  
})


