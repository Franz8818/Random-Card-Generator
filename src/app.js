let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"];
let images = ["♦", "♥", "♠", "♣"];
// let variable_values = 0;
// let variables_images = 0;

window.onload = function() {
  //write your code here

  let variable_values = Math.floor(Math.random() * values.length);
  let variables_images = [Math.floor(Math.random() * images.length)];
  let color =
    images[variables_images] == "♦" || images[variables_images] == "♥"
      ? "red"
      : "black";
  let header = document.querySelector("#header");
  let headerColor = (document.querySelector("#header").style.color = color);
  let center = document.querySelector("#center");
  let centerColor = (document.querySelector("#center").style.color = color);
  let footer = document.querySelector("#footer");
  let footerColor = (document.querySelector("#footer").style.color = color);

  header.innerHTML = images[variables_images];
  center.innerHTML = values[variable_values];
  footer.innerHTML = images[variables_images];
};
