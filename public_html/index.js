console.log("I was here");

const states = "/cities/00states.json";
function getStates() {
    fetch(states)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            console.log(responseJson);
            viewStates(responseJson);
            return responseJson;
        })
        .catch(err => console.log(err));
}
function viewStates(response) {
    console.log(response[0].state);
    let states = "";
    for (let i = 0; i < response.length; i++) {
        states += '<option value="' + response[i].code + '">' + response[i].state + '</option>';
    }
    document.getElementById("state").innerHTML = states;
}
function getCities(stateCode) {
    fetch("\cities\\" + stateCode + ".json")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            console.log(responseJson);
            viewCities(responseJson);
            return responseJson;
        })
        .catch(err => console.log(err));
}
function viewCities(response) {
    let cities = "";
    response.forEach(function (item) {
        cities += '<option value="' + item.lat + " " + item.long + '">' + item.city + '</option>';
    });
    document.getElementById("city").innerHTML = cities;
    document.getElementById("city").style.visibility = "visible";
}
getStates();