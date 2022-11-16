"use strict"

window.onload = function () {

    let SearchFilter = document.getElementById("SearchFilter");
    SearchFilter.onchange = addDropdowns;

    let searchByLocation = document.getElementById("searchByLocation");
    searchByLocation.onchange = searchByLocationOnChange;

    let searchByParkType = document.getElementById("searchByParkType");
    searchByParkType.onchange = searchByParkOnChange;


    document.getElementById("searchByLocation").style.display = "none";
    document.getElementById("searchByParkType").style.display = "none";

}

function addDropdowns() {

    document.getElementById("searchByLocation").style.display = "none";
    document.getElementById("searchByParkType").style.display = "none";

    let SearchFilter = document.getElementById("SearchFilter").value;


    if (SearchFilter == "Location") {
        document.getElementById("searchByLocation").style.display = "block";

        addOptionsOnLocation();


    } else if (SearchFilter == "Park Type") {

        document.getElementById("searchByParkType").style.display = "block";
        addOptionsOnPark()

    }

    else if (SearchFilter == "") {
        document.getElementById("searchByLocation").style.display = "none";
        document.getElementById("searchByParkType").style.display = "none";

    }



}


function addOptionsOnLocation() {

    let searchByLocation = document.getElementById("searchByLocation");

    let newOption = document.createElement("option");
    newOption.value = "";
    newOption.text = "Search By Location";
    searchByLocation.appendChild(newOption);

    for (let location of locationsArray) {
        let newOption = document.createElement("option");
        newOption.value = location;
        newOption.textContent = location;
        searchByLocation.appendChild(newOption);

    }
}


function addOptionsOnPark() {

    let searchByParkType = document.getElementById("searchByParkType");

    let option = document.createElement("option");
    option.value = "";
    option.text = "Search By Park Type";
    searchByParkType.appendChild(option);

    for (let park of parkTypesArray) {
        let parkOption = document.createElement("option");
        parkOption.value = "";
        parkOption.textContent = park;
        searchByParkType.appendChild(parkOption);

    }

}


function searchByLocationOnChange() {

    let searchByLocation = document.getElementById("searchByLocation").value;
    let parksDescription = document.getElementById("parksDescription");

    for (let place of nationalParksArray) {

        if (searchByLocation == place.State) {
            parksDescription.style.display = "block"
            parksDescription.innerHTML = "<span style='color: white;'>Name : </span>" + place.LocationName + "<br/>" + "<span style='color: white;'>Address : </span>" + place.Address + "<br/>" + "<span style='color: white;'>City : </span>" + place.City + "<br/>" + "<span style='color: white;'>State : </span>" + place.State + "<br/>" + "<span style='color: white;'>Zip Code : </span>" + place.ZipCode;

        } else if (searchByLocation == "") {

            parksDescription.style.display = "none"
        }

    }








}

function searchByParkOnChange() {

    let searchByParkType = document.getElementById("searchByParkType").value;
    let parksDescription = document.getElementById("parksDescription");

    for (let park of nationalParksArray) {


            

    }








}