const inputs = document.querySelectorAll(" form input");
const prenom = document.querySelectorAll("input")[1];
const nom = document.querySelectorAll("input")[2];
const mail = document.querySelectorAll("input")[3];
const avatar = document.querySelectorAll("input")[4];
const age = document.querySelectorAll("input")[5];
const newP = document.createElement("div");

let i = 1;

setInterval(() => {
  let changeImage = "./assets/sport0" + i + ".jpg";
  document.querySelector("img").setAttribute("src", changeImage);
  if (i < 4) {
    i++;
  }
  if (i === 4) {
    i = 1;
  }
}, 3000);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !prenom.value &&
    !nom.value &&
    !mail.value &&
    !avatar.value &&
    !age.value
  ) {
    for (let i = 0; i < inputs.length; i++)
      inputs[i].style.border = "1px solid red";
  } else {
    document.querySelector(".info").innerText = "Opération réussie!";
    // newP.innerText = "Hey, je marche ?";
    document.querySelector(
      ".infoHide"
    ).innerHTML = `<div style = "display:flex; justify-content: space-around; border: 1px solid darkgrey; width: 80%; margin : 0 auto 0;"><div style = "margin-top: 55px"><p>
    Votre nom complet: ${prenom.value} ${nom.value}
  </p>
  <br>
  <p>Votre email: ${mail.value}</p>
  <br>
  <p>Votre age: ${age.value} ans</p>
  <br>
  <p>Informations corrects ?</p>
  <br>
  <div  style = "display:flex; justify-content: space-around;">
  <button id = "yes" type = "button" style = "background-color: green; color: white; border: none; width: 50px ; border-radius: 3px; height: 30px; padding: 5px; margin-top: 20px">Oui</button>
  <button id = "no" style = "background-color: red; color: white; border: none; width: 50px ; border-radius: 3px; height: 30px; padding: 5px">Non</button>
  </div>
  </div>
  <div><img src = "${avatar.value}" style = "border-radius: 150px; height: 240px; width : 240px"; objectif-fit: cover;></div>
  </div>
  `;
    //   .append((newP.innerText = "Hey, je marche?"));
    // document
    //   .querySelector(".infoHide")
    //   .append((newP.innerText = "Hey, je marche2?"));
    const yes2 = document.querySelector("#yes");
    const check = document.querySelector("form");
    yes2.addEventListener("click", (f) => {
      f.preventDefault();

      document.querySelector("form").remove(check);
      document.querySelector("h2").innerHTML = "";
      document.querySelector(".info").innerHTML = "";
      document.querySelector(
        ".infoHide"
      ).innerHTML = `<div style = "background-color: lightgreen; height : 40px; display:flex ; text-align: center; justify-content: center;"><h4 style = "color: white">Votre inscription a bien été enregistrer</h4></div>`;
    });
  }
});
