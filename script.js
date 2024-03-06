
function starting() {
  function changeVisibility() {
    document.getElementById("start").style.visibility = "hidden";

  }
  changeVisibility()
  alert("YOU ARE TO ENTER DEAD ZONE");
  confirm("Wear your PROTECTIVE GEAR at ALL TIMES");
  var age = prompt("ENTER YOUR AGE");
  
  if (age >= 18) {
    alert("You can start the game NOW!");
    confirm("START GAME")
  } 
  else {
    alert("Sorry, you are not old enough. GOOD BYE!");
  }
  const newButton = document.createElement('button');
  newButton.textContent = 'START GAME';
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', () => {
    alert('GAME OVER........R.I.P');
  });
}