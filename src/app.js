/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let suits = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  //write your code here
  randomCard();

  document.querySelector("#card").addEventListener("click", randomCard);
  console.log("Hello Rigo from the console!");
};

function randomCard() {
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  let suit = suits[Math.floor(Math.random() * suits.length)];

  let cardColor = suit == "♦" || suit == "♥" ? "red" : "black";

  let components;
  let top = document.querySelector("#top");
  top.style.color = cardColor;
  top.innerHTML = suit;
  let setNumber = document.querySelector("#number");
  setNumber.style.color = cardColor;
  setNumber.innerHTML = number;
  let bottom = document.querySelector("#bottom");
  bottom.style.color = cardColor;
  bottom.innerHTML = suit;
}
