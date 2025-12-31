var main = document.getElementById("main");
var s = "";
let arr = [
  "https://i.pinimg.com/736x/eb/b6/4e/ebb64e165c9f669aa6a65ad4053f4c48.jpg",
  "https://i.pinimg.com/736x/79/c3/28/79c3280a012b765f5ed9e46a850a1925.jpg",
  "https://i.pinimg.com/736x/e8/61/36/e86136cf105ea9b8736393d808abbe05.jpg",
  "https://i.pinimg.com/736x/b2/de/58/b2de58cc4273d6c73f5d7794bcb57a8d.jpg",
  "https://i.pinimg.com/736x/9b/b5/81/9bb581e10acfaa5ffb645a7992e4f90f.jpg",
  "https://i.pinimg.com/1200x/c6/aa/11/c6aa117432bb22282ad9241314538300.jpg",
  "https://i.pinimg.com/736x/fd/c7/f6/fdc7f6f7057fdd0f7a64c7fd726167f3.jpg",
  "https://i.pinimg.com/1200x/c6/aa/11/c6aa117432bb22282ad9241314538300.jpg",
  "https://i.pinimg.com/1200x/72/e8/0a/72e80a6bb1ed2594593f290d3c418154.jpg",
];

for (let i = 1; i <= 500; i++) {
  let r = Math.floor(Math.random() * arr.length);
  s += `<div class="card"><img src="${arr[r]}" alt="card image"></div>`;
}

main.innerHTML = s;
