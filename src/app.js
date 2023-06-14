/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  for (const i in pronoun) {
    for (const j in adj) {
      for (const k in noun) {
        const pronombre = pronoun[i];
        const adjetivo = adj[j];
        const sustantivo = noun[k];

        console.log(pronombre + adjetivo + sustantivo + "");
      }
    }
  }
};
