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

   document.getElementById("parksDescription").style.display = "none";

    let searchByLocation = document.getElementById("searchByLocation").value;

    let result = document.getElementById("resultLocation")

    result.length = 0;

    let newOption = document.createElement("option");
    newOption.value = "";
    newOption.text = "Please Select a Park " ;
    result.appendChild(newOption);

    for (let place of nationalParksArray) {

        if (searchByLocation == place.State) {

            let paragraph = document.createElement("p");
            let newOption = document.createElement("option");
            newOption.value = place.LocationName;
            newOption.text = place.LocationName;
            result.appendChild(newOption);

            document.getElementById("myDiv").appendChild(paragraph);

            result.style.display = "block";

        } else if (searchByLocation == "") {

            result.style.display = "none"
        }

    }



}



function searchByParkOnChange() {

    let searchByParkType = document.getElementById("searchByParkType").value;
    let parksDescription = document.getElementById("parksDescription");

    for (let park of nationalParksArray) {

        if (searchByParkType) {



            parksDescription.style.display = "block"
            parksDescription.innerHTML = "<span style='color: white;'>Name : </span>" + park.LocationName + "<br/>" + "<span style='color: white;'>Address : </span>" + park.Address + "<br/>" + "<span style='color: white;'>City : </span>" + park.City + "<br/>" + "<span style='color: white;'>State : </span>" + park.State + "<br/>" + "<span style='color: white;'>Zip Code : </span>" + park.ZipCode;

        }




    }



}


function displayResultOnChange() {

    let result = document.getElementById("resultLocation");
    let parksDescription = document.getElementById("parksDescription");

    for (let park of nationalParksArray) {

        if (result.value == park.LocationName) {

            console.log("hello")

            parksDescription.style.display = "block"
            parksDescription.innerHTML = "<span style='color: white;'>Name : </span>" + park.LocationName + "<br/>" + "<span style='color: white;'>Address : </span>" + park.Address + "<br/>" + "<span style='color: white;'>City : </span>" + park.City + "<br/>" + "<span style='color: white;'>State : </span>" + park.State + "<br/>" + "<span style='color: white;'>Zip Code : </span>" + park.ZipCode;

        } else if (result.value == "") {
            parksDescription.style.display = "none"

        }




    }



}