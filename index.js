function addingEventListener() {
  const input = document.getElementById("button");
  input.addEventListener("click", clickAlert);
}

function clickAlert() {
  alert("I was clicked!");
}

addingEventListener(); // Ensure this line is present to call the function
