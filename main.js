var zip = document.getElementById("inlineFormInputZip").value;
//location name
var loc = "";
//temp in f
var f = "";
//current conditions
var cur = "";
//icon
var ic = "";
//PLAY FETCH

async function getdata(){
fetch("api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=b9cb3cec77c14b5037dec0def981f206").then((Response) =>{ return Response.json();}).then((data) =>{} )
// return response
}
onclick

function showpage(){
    document.getElementsByClassName
}

function getstuff(response){
    gettemp(response.main);
    getloc(response.name);
    getcur(response.weather);
    getic(response.weather);
}

function getloc(name){
    loc = name;
    document.getElementById("cityname").innerHTML = loc;
}

function gettemp(main){
    f = eval((main.temp - 273.15) * 9/5 + 32); 
    document.getElementById("temp").innerHTML = f;
}

function getcur(weather){
    cur = weather.main + " : "+ weather.description;
    document.getElementById("cond").innerHTML = cur;
}

function getic(weather){
    ic = weather.icon;
    document.getElementById("season").innerHTML = <img src= "http://openweathermap.org/img/w/" + ic +".png">
}

// function validate(){
//     if (zip.length == 5){//perform call}
//     else {document.getElementById("zipalert").setAttribute("class","alert alert-warning")

// }