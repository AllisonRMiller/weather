var zip = document.getElementById("inlineFormInputZip");
//location name
var loc = "";
//temp in f
var f = "";
var f2 = "";
//temp in c
var c = "";
var c2 = "";
//current conditions
var cur = "";
var cur2 = "";
var ct ="";
var ct2 = "";
var tb = "";
//sunrise and sunset
var sup = "";
var sdown = "";
//icon
var ic = "";
//
var err = "";


//WHAT HAPPENS ON CLICK??
document.getElementById("wbut").addEventListener("click", getdata);
document.getElementById("tbut").addEventListener("click", togglet);


//Call API
function getdata(e) {
    e.preventDefault()
    // console.log(zip.value)
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",us&appid=b9cb3cec77c14b5037dec0def981f206")
    .then((Response) => {
        return Response.json();
    })
    .then((data) => getstuff(data))
    .catch((err))
            
        
    // return response
}


// function store(){
//     if (typeof(Storage) !== "undefined") {
//         localStorage.setItem("lastname", "Smith");
//     } else {

// }


//Error popup
// function popalert() {
// //     err = error;
// //     var element = document.getElementById("zipalert");
// // //     document.getElementById("zipalert").innerHTML = err;
// //     element.classList.toggle("d-block");
// alert("Please try again <br>" + err)
//     element.innerHTML = err;
//     // document.getElementByClassName("alert").setAttribute = "alert alert-warning".innerHTML = err;
// }

//display app
function showpage() {

    var element = document.getElementById("appbody");
    element.classList.toggle("d-block");
    // $( "appbody" ).toggleClass( "d-block" );

    // document.getElementById("appbody").setAttribute = "container-fluid";
}


//run functions
function getstuff(data) {
    if (data.cod ==200) {
    gettemp(data.main);
    getloc(data.name);
    getcur(data.weather);
    // getic(data.weather);
    suns(data.sys);
    showpage();
} else {alert("Please try again " + data.message);}
}

//pull location name and populate page
function getloc(name) {
    loc = name;
    document.getElementById("cityname").innerHTML = loc;
}

//get temperature, convert, and populate page
function gettemp(main) {
    f = Math.round(eval((main.temp - 273.15) * 9 / 5 + 32));
    f2 = Math.round(eval((main.feels_like - 273.15) * 9 / 5 + 32));
    c = Math.round(eval(main.temp - 273.15));
    c2 = Math.round(eval(main.feels_like - 273.15));
    document.getElementById("temp").innerHTML = "Real temp: " +f + " <sup>\u2109";
    document.getElementById("rfeel").innerHTML = "Feels like: " + f2 + " <sup>\u2109";
}


function togglet() {
    var ct = document.getElementById("temp");
    var ct2 = document.getElementById("rfeel");
    var tb = document.getElementById("tbut");
    if (ct.innerHTML.includes("\u2109")) {
        ct.innerHTML = "Real temp: " +c + " <sup>\u2103";
        ct2.innerHTML = "Feels like: " + c2 + " <sup>\u2103";
        tb.innerHTML = "Get \u2109";
    } else {
        ct.innerHTML = "Real temp: " +f + " <sup>\u2109";
        ct2.innerHTML = "Feels like: " + f2 + " <sup>\u2109";
        tb.innerHTML = "Get \u2103";
    }
    // if (ct2.innerHTML === "Feels like: " + f2 + " <sup>\u2109") {
    //     ct2.innerHTML = "Feels like: " + c2 + " <sup>\u2103";
    // } else {
    //     ct2.innerHTML = "Feels like: " + f2 + " <sup>\u2109";
    // }
}    
//     document.getElementById("temp").innerHTML = "Real temp: " +f + " <sup>\u2109";
//     document.getElementById("rfeel").innerHTML = "Feels like: " + f2 + " <sup>\u2109";
// }


//         document.getElementById("temp").innerHTML = "Real temp: " +c + " <sup>\u2103";
//         document.getElementById("rfeel").innerHTML = "Feels like: " + c2 + " <sup>\u2103";
    
// }


//get weather conditions and populate page
function getcur(weather) {
    cur = weather[0].main;
    cur2 = weather[0].description;
    ic = weather[0].icon;
    document.getElementById("cond").innerHTML = "<img src= \"http://openweathermap.org/img/w/" + ic + ".png\"> <br>" + cur;
    document.getElementById("cond2").innerHTML = cur2;
}



// function getic(weather) {
//     ic = weather[0].icon;
//     document.getElementById("season").innerHTML = "<img src= \"http://openweathermap.org/img/w/" + ic + ".png\">"
// }

// function validate(){
//     if (zip.length == 5){//perform call}
//     else {document.getElementById("zipalert").setAttribute("class","alert alert-warning")

// }
function suns(sys){
    sup = new Date();
    sdown = new Date();
    console.log(sup);
    console.log(sdown);
    sup.setTime(sys.sunrise*1000);
    sdown.setTime(sys.sunset*1000);
    document.getElementById("sunup").innerHTML = "Sunrise: " + sup.toLocaleTimeString("en-us");
    document.getElementById("sundown").innerHTML = "Sunset: " + sdown.toLocaleTimeString("en-us");
    console.log(sup);
    console.log(sdown);
    console.log(sys.sunrise);
    console.log(sys.sunset);
}
