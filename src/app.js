/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
};
let generateDomain = () => {
  let person = ["La", "Mi"];
  let subject = ["increible", "gran", "grandiosa"];
  let action = ["pagina", "web", "gato", "perro"];
  let object = [".com", ".org", ".net"];

  let perInx = Math.floor(Math.random() * person.length);
  let subInx = Math.floor(Math.random() * subject.length);
  let acInx = Math.floor(Math.random() * action.length);
  let obInx = Math.floor(Math.random() * object.length);

  return (
    person[perInx] +
    "" +
    subject[subInx] +
    "" +
    action[acInx] +
    "" +
    object[obInx]
  );
};
