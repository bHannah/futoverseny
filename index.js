import { FUTOK } from "./adatok.js";
letrehozTablazat();
osszesit();
torolEsemeny();
befutott();
const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat() {
  const FELADAT1 = document.getElementById("feladat_1");
  let txt = "<table>";
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `<tr id="${index}">`;
    txt += `<th>${FUTOK[index].nev}</th>`;
    txt += `<td>${FUTOK[index].nemzetiseg}</td>`;
    txt += `<td>${FUTOK[index].versenySzam}</td>`;
    txt += "</tr>";
  }
  txt += "</table>";
  FELADAT1.innerHTML = txt;
}

// 2. feladat
function osszesit() {
  let fel = 0;
  let telj = 0;
  let tizKm = 0;
  for (let index = 0; index < FUTOK.length; index++) {
    let elem = FUTOK[index].versenySzam;
    if (elem == "félmaraton") {
      fel += 1;
    } else if (elem == "maraton") {
      telj += 1;
    } else if (elem == "10 km") {
      tizKm += 1;
    }
  }
  const OSSZES = document.getElementById("feladat_2");
  OSSZES.innerHTML += `<p>félmaraton: ${fel} db</p>`;
  OSSZES.innerHTML += `<p>maraton: ${telj} db</p>`;
  OSSZES.innerHTML += `<p>10 km: ${tizKm} db</p>`;
}

// 3. feladat
function befutott(sor, adatok) {
  for (let i = 0; i < 8; i++) {
    document.getElementById(`${i}`).onclick = function () {
      let a = document.getElementById(`${i}`).value;
      kiiratas.innerHTML += a;
      return a;
    };
  }
}

// 4. feladat
function torolEsemeny() {
  const SZOVEG = document.getElementById("feladat_3");
  const GOMB = document.getElementById("feladat_3_tarolo");
  GOMB.addEventListener("click", function torles() {
    SZOVEG.innerHTML = "";
  });
}

// 5. feladat
function ellenoriz() {}
