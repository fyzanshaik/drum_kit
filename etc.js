document.addEventListener('DOMContentLoaded',function(){
    let audio;let userName = "";
    // var userName = prompt("What is your name?");
    
    document.getElementById("containButton").addEventListener("click", function() {
      var inputBox = document.getElementById("textInput");
      userName = inputBox.value;
      updateHeading();
    });
  
    document.getElementById("textInput").addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        var inputBox = document.getElementById("textInput");
        userName = inputBox.value;
        updateHeading();
        event.preventDefault(); // Prevent form submission on Enter key
      }
    });
  
  
    function updateHeading() {
      if (userName !== "") {
        document.querySelector("h1").textContent = userName + "'s 🥁 Kit!";
        console.log(userName);
      }
    }
    
    
    var buttons = document.querySelectorAll(".drum");
    
    var numberOfButtons = buttons.length;
    
    for(let i = 0;i<numberOfButtons;i++)
    {
        buttons[i].addEventListener("click",playAudio);
        
    }
    document.addEventListener("keydown",function(event) {playAudio(event)})
    
    function playAudio(event)
    {
        var source;
  
        if (event.type === "click") {
        // Button click event
            
            let buttonIdendity = source = this.innerHTML;
            console.log("This button was clicked: " + buttonIdendity);
        } else if (event.type === "keydown") {
        // Keydown event
            
            let keyIdentity = source = event.key;
            // var button1 = document.getElementById(".drum");
            
          
            
            console.log("This key was pressed: " + keyIdentity);
        }
        switch(source)
        {
        case 'w':
          audio = new Audio("./sounds/tom-1.mp3");audio.play();
          break;
        case 'a':
          audio = new Audio("./sounds/tom-2.mp3");audio.play();
          break;
        case 's':
          audio = new Audio("./sounds/tom-3.mp3");audio.play();
          break;
        case 'd':
          audio = new Audio("./sounds/tom-4.mp3");audio.play();
          break;
        case 'j':
          audio = new Audio("./sounds/snare.mp3");audio.play();
          break;
        case 'k':
          audio = new Audio("./sounds/crash.mp3");audio.play();
          break;
        case 'l':
          audio = new Audio("./sounds/kick-bass.mp3");audio.play();
          break;
        default:
            console.log("Invalid element");  
        }
        
    }
})