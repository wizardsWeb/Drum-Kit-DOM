var numberOfButtonElements = document.querySelectorAll(".drum").length;
for(var i =0; i<numberOfButtonElements; i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var clickedButton = this.innerHTML;
   buttonAnimation(clickedButton);
    switch(clickedButton){
        case 'w': 
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        case 'a': 
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case 's': 
        var audio = new Audio('sounds/snare.mp3');  
        audio.play();
        break;
        case 'd':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case 'j':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        case 'k':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case 'l':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        default:
        console.log("There is no button for this ! please add a button if you want to click !");
        break;
    }
});

document.addEventListener("keypress",function(event){
    buttonAnimation(event.key);
    switch(event.key){
        case 'w': 
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        case 'a': 
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case 's': 
        var audio = new Audio('sounds/snare.mp3');  
        audio.play();
        break;
        case 'd':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case 'j':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        case 'k':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case 'l':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        default:
        console.log("There is no button for this ! please add a button if you want to click !");
        break;
    }
})


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    

    setTimeout(function(){
        activeButton.classList.remove("pressed"), 900
    })
}



