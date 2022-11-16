"use strict"


window.onload = function () {

  const mountainsList = document.getElementById("mountainsList")

  mountainsList.onchange = mountainSelectOnChange;

  populateMountain();

}

function populateMountain() {
  const mountainsList = document.getElementById("mountainsList");

  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Please Select a Mountain!";
  mountainsList.appendChild(defaultOption);

  for (let mountain of mountainsArray) {
    let newOption = document.createElement("option");

    newOption.textContent = mountain.name;
    mountainsList.appendChild(newOption);
  }
}

function mountainSelectOnChange() {

  const mountainsList = document.getElementById("mountainsList");
  const mountainDescriptions = document.getElementById("mountainDescriptions");
  let myDiv = document.getElementById("myDiv");
  let mountainSelect = mountainsList.value;


  for (let mountain of mountainsArray) {


    if (mountainSelect == mountain.name) {

      mountainDescriptions.innerHTML = "<span style='color: white;'>Name :</span>" + mountain.name + "<br/>" + "<span style='color: white;'>Elevation :</span>" + mountain.elevation + " ft" + "<br/>" + "<span style='color: white;'>Description :</span>" + mountain.desc;

      createDiv();
      myDiv.style.display = "block";

    } else if (mountainSelect == "") {
      mountainDescriptions.innerHTML = ""
      myDiv.style.display = "none";
    }
  }

}


function createDiv() {
  let myDiv = document.getElementById("myDiv");


  let newDiv = document.createElement("div");
  newDiv.id = "divId";
  newDiv.className = "col-3"

  myDiv.replaceChildren(newDiv);


  for (let images of mountainsArray) {

    if (mountainsList.value == images.name) {


      let newImg = document.createElement("img");
      newImg.id = "imgId";
      newImg.src = images.img;
      newImg.className = "card"

      newDiv.appendChild(newImg);

    }

  }

}
