var numOfButtons = document.getElementsByClassName("car").length;

for (var i = 0; i < numOfButtons; i++) {
  document.getElementsByClassName("car")[i].addEventListener("click", function() {
    var buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

function buttonAnimation(whileActive){
  var selectedClass = document.querySelector("." + whileActive);
  selectedClass.classList.add("pressed");
  setTimeout(function(){
    selectedClass.classList.remove("pressed");
  }, 100);
}

function playSound (manufacturer){
  switch (manufacturer) {
    case 'lamborghini':
      var v10 = new Audio("sounds/huracan.mp3");
      v10.play();
      break;
    case 'porsche':
      var flat6 = new Audio("sounds/porsche.mp3");
      flat6.play();
      break;
    case 'ferrari':
      var v12 = new Audio("sounds/ferrari.mp3");
      v12.play();
      break;
    default:
      console.log(manufacturer);
  }
}
