/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateDomain(pronoun, adj, noun, ext) {
    let result = [];

    for (const i in pronoun) {
      for (const j in adj) {
        for (const k in noun) {
          for (const l in ext) {
            const pronombre = pronoun[i];
            const adjetivo = adj[j];
            const sustantivo = noun[k];
            const extension = ext[l];

            let domain = pronombre + adjetivo + sustantivo + extension;

            result.push(domain);
          }
        }
      }
    }

    return result;
  }

  let pronombres = ["the", "our"];
  let adjetivos = ["great", "big"];
  let sustantivos = ["jogger", "racoon"];
  let extensiones = [".com", ".net", ".us", ".io"];

  let domains = generateDomain(pronombres, adjetivos, sustantivos, extensiones);

  console.log(domains);

  document.querySelector("#domain").innerHTML = domains
    .map(domain => '<li class="list-group-item">' + domain + "</li>")
    .join("");
};
