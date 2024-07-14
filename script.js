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
const cikarma = document.getElementById("cikarma");
const toplama = document.getElementById("toplama");
const carpma = document.getElementById("carpma");
const bolme = document.getElementById("bolme");
const esit = document.getElementById("esit");
const nokta = document.getElementById("nokta");

let count = [];
esit.onclick = function () {
  let sonuc = 0;
  if (count.includes("+")) {
    let toplamalar = count.join("").split("+");
    for (let i = 0; i < toplamalar.length; i++) {
      sonuc += Number(toplamalar[i]);
    }
  } else if (count.includes("-")) {
    let cikarmalar = count.join("").split("-");
    for (let i = 0; i < cikarmalar.length; i++) {
      sonuc -= cikarmalar[i];
    }
  }
  ekran.textContent = sonuc;
};

bir.onclick = function () {
  count.push(1);
  ekran.textContent = count;
};
iki.onclick = function () {
  count.push(2);
  ekran.textContent = count.join("");
};
uc.onclick = function () {
  count.push(3);
  ekran.textContent = count.join("");
};
dort.onclick = function () {
  count.push(4);
  ekran.textContent = count.join("");
};
bes.onclick = function () {
  count.push(5);
  ekran.textContent = count.join("");
};
alti.onclick = function () {
  count.push(6);
  ekran.textContent = count.join("");
};
yedi.onclick = function () {
  count.push(7);
  ekran.textContent = count.join("");
};
sekiz.onclick = function () {
  count.push(8);
  ekran.textContent = count.join("");
};
dokuz.onclick = function () {
  count.push(9);
  ekran.textContent = count.join("");
};
sifir.onclick = function () {
  count.push(0);
  ekran.textContent = count.join("");
};
toplama.onclick = function () {
  count.push("+");
  ekran.textContent = count.join("");
};
cikarma.onclick = function () {
  count.push("-");
  ekran.textContent = count.join("");
};
nokta.onclick = function () {
  count.push(".");
  ekran.textContent = count.join("");
};
reset.onclick = function () {
  count.pop();
  ekran.textContent = count.join("");
};
power.onclick = function () {
  count = [];
  ekran.textContent = count;
};
