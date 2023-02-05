// tady je místo pro náš program

//jmeno + prijmeni uzivatele
let jmeno = document.querySelector(".jmeno");
let jmenoUzivatele = prompt("Zadej své celé jméno: ");

jmeno.innerHTML = jmenoUzivatele;

//vek uzivatele
let vek = document.querySelector(".vek");
let rok = 2023;
let vekUzivatele = Number(prompt("Zadej svůj rok narození: "));
let vypocetVeku = (rok - vekUzivatele);

vek.innerHTML = vypocetVeku;

//vypis jmena, prijmeni a vek 
//document.body.innerHTML += "<p>" + jmenoUzivatele + " " + vypocetVeku + "</p>";

//oblibena barva uzivatele
let barva = document.querySelector(".barva");
let barvaUzivatele = prompt("Zadej svou oblíbenou barvu v anglickém jazyce: ");


barva.innerHTML = barvaUzivatele;

//prebarveny text
barva.style.color += barvaUzivatele;
jmeno.style.color += barvaUzivatele;
vek.style.color += barvaUzivatele;


