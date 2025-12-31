let x = document.getElementById("ele1"); // pikachu
x.addEventListener("click", function() {
  x.style.color = "yellow";
  x.style.backgroundColor = "red";
});

x.addEventListener("mouseleave", function() {
  x.style.color = "black";
  x.style.backgroundColor = "white";
});

let y = document.getElementById("ele2"); // charizard
y.addEventListener("mouseenter", function() {
  y.style.color = "white";
  y.style.backgroundColor = "orange";
});


y.addEventListener("mouseleave", function() {
  y.style.color = "black";
  y.style.backgroundColor = "white";
});

let z = document.getElementById("ele3"); // mewtwo
z.addEventListener("click", function() {
  z.style.color = "white";
  z.style.backgroundColor = "purple";
});


z.addEventListener("click", function() {
  x.style.color = "white";
  x.style.backgroundColor = "green";
  x.innerHTML="Bulbasaur";
});

z.addEventListener("mouseleave", function() {
  z.style.color = "black";
  z.style.backgroundColor = "white";
});

