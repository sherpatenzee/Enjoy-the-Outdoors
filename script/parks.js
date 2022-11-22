"use strict"

window.onload = function () {

    let SearchFilter = document.getElementById("SearchFilter");
    SearchFilter.onchange = addDropdowns;

    let searchByLocation = document.getElementById("searchByLocation");
    searchByLocation.onchange = searchByLocationOnChange;

    let searchByParkType = document.getElementById("searchByParkType");
    searchByParkType.onchange = searchByParkOnChange;

    let resultLocation = document.getElementById("resultLocation");
    resultLocation.onchange = displayResultOnChange;

    document.getElementById("searchByLocation").style.display = "none";
    document.getElementById("searchByParkType").style.display = "none";
    document.getElementById("resultLocation").style.display = "none";
    document.getElementById("parksDescription").style.display = "none";
}

function addDropdowns() {

    document.getElementById("searchByLocation").style.display = "none";
    document.getElementById("searchByParkType").style.display = "none";
    document.getElementById("parksDescription").style.display = "none";
    document.getElementById("resultLocation").style.display = "none";

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
    newOption.text = "Please Select a State";
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

    searchByParkType.length = 0;
    let option = document.createElement("option");
    option.value = "";
    option.text = "Please Select a Park Type";
    searchByParkType.appendChild(option);


    for (let park of parkTypesArray) {
        let parkOption = document.createElement("option");
        parkOption.value = park;
        parkOption.textContent = park;
        searchByParkType.appendChild(parkOption);

    }

}


function searchByLocationOnChange() {

    document.getElementById("parksDescription").style.display = "none";

    let searchByLocation = document.getElementById("searchByLocation").value;

    let result = document.getElementById("resultLocation")

    result.length = 0;

    let newOption = document.createElement("option");
    newOption.value = "";
    newOption.text = "Please Select a Park ";
    result.appendChild(newOption);

    for (let place of nationalParksArray) {

        if (searchByLocation == place.State) {

            //let paragraph = document.createElement("p");
            let newOption = document.createElement("option");
            newOption.value = place.LocationName;
            newOption.text = place.LocationName;
            result.appendChild(newOption);

            result.style.display = "block";

        } else if (searchByLocation == "") {

            result.style.display = "none"
        }

    }



}


function searchByParkOnChange() {

    document.getElementById("resultLocation").style.display = "none";
    document.getElementById("parksDescription").style.display = "none";


    let searchByParkType = document.getElementById("searchByParkType").value;




    let result = document.getElementById("resultLocation");


    result.length = 0;

    let option = document.createElement("option");
    option.value = "";
    option.text = "Please Select a Park ";
    result.appendChild(option);

    for (let park of nationalParksArray) {

        if (park.LocationName.indexOf(searchByParkType) != -1 && searchByParkType != "") {

            let newOption = document.createElement("option");
            newOption.value = park.LocationName;
            newOption.text = park.LocationName;
            result.appendChild(newOption);

            result.style.display = "block";


        }

    }

}


function displayResultOnChange() {


    let result = document.getElementById("resultLocation");
    let parksDescription = document.getElementById("parksDescription");

    for (let park of nationalParksArray) {

        if (result.value == park.LocationName) {

            parksDescription.style.display = "block"
            parksDescription.innerHTML = "<span style='color: white;'>Name : </span>" + park.LocationName + "<br/>" + "<span style='color: white;'>Address : </span>" + park.Address + "<br/>" + "<span style='color: white;'>City : </span>" + park.City + "<br/>" + "<span style='color: white;'>State : </span>" + park.State + "<br/>" + "<span style='color: white;'>Zip Code : </span>" + park.ZipCode + "<br/>" + "<span style='color: white;'>Latitude : </span>" + park.Latitude + "<br/>" + "<span style='color: white;'>Longitude : </span>" + park.Longitude + "<br/>";

        } else if (result.value == "") {
            parksDescription.style.display = "none"

        }
        if (park.Visit != undefined && result.value == park.LocationName) {
            parksDescription.innerHTML += "<span style='color: white;'>Visit : </span> <a href =" + park.Visit + " target = '_blank'>" + park.Visit + "</a>"

        }

    }


}