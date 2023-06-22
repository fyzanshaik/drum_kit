document.addEventListener('DOMContentLoaded', function() {
    var numberOfButtons = document.querySelectorAll("button").length;
    let audio;
    let count = 0;
    // console.log('sheshu')
    
    var buttons = document.querySelectorAll(".drum");
    document.addEventListener("keypress",function(event){
        value = event.key;
        playAudioAndChangeColor1(value);

      })
    
    for (var i = 0; i < buttons.length; i++) 
    {
      buttons[i].addEventListener("click", playAudioAndChangeColor);
      
      
    }

    function playAudioAndChangeColor() {
      this.style.color = "white";
      count++;
      var beat = this.innerHTML;
      switch (beat) {
        case 'w':
          audio = new Audio("./sounds/tom-1.mp3");
          break;
        case 'a':
          audio = new Audio("./sounds/tom-2.mp3");
          break;
        case 's':
          audio = new Audio("./sounds/tom-3.mp3");
          break;
        case 'd':
          audio = new Audio("./sounds/tom-4.mp3");
          break;
        case 'j':
          audio = new Audio("./sounds/snare.mp3");
          break;
        case 'k':
          audio = new Audio("./sounds/crash.mp3");
          break;
        case 'l':
          audio = new Audio("./sounds/kick-bass.mp3");
          break;
        default:
            console.log("Invalid element");  
      }
      audio.play();
      if (count === numberOfButtons) {
        resetButtonColors();
      }
    }

    function playAudioAndChangeColor1(value) {
        
        count++;
        
        switch (value) {
          case 'w':
            audio = new Audio("./sounds/tom-1.mp3");
            break;
          case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            break;
          case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            break;
          case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            break;
          case 'j':
            audio = new Audio("./sounds/snare.mp3");
            break;
          case 'k':
            audio = new Audio("./sounds/crash.mp3");
            break;
          case 'l':
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
          default:
              console.log("Invalid element");  
        }
        audio.play();
        if (count === numberOfButtons) {
          resetButtonColors();
        }
      }
  
    function resetButtonColors() {
      var buttons = document.querySelectorAll("button");
      for (var i = 0; i < numberOfButtons; i++) {
        buttons[i].style.color = "red";
      }
      count = 0;
    }
    
  
    
  });

