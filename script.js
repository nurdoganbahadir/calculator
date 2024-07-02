const power = document.getElementById("power");
const reset = document.getElementById("reset");
const ekran = document.getElementById("ekran");
const bir = document.getElementById("bir");
const iki = document.getElementById("iki");
const uc = document.getElementById("uc");
const dort = document.getElementById("dort");
const bes = document.getElementById("bes");
const alti = document.getElementById("alti");
const yedi = document.getElementById("yedi");
const sekiz = document.getElementById("sekiz");
const dokuz = document.getElementById("dokuz");
const sifir = document.getElementById("sifir");
const toplama = document.getElementById("toplama");

switch (toplama) {
  case toplama.onclick:
    ekran.textContent = bir + iki;
    break;

  default:
    break;
}

power.onclick = function () {
  ekran.textContent = " ";
};
reset.onclick = function () {
  ekran.textContent = "0";
};
