const time = document.getElementById('time')
const Tacho = document.getElementById("tacho")


setInterval(() => {
    var date = new Date()
    if (date.getHours() >= 10 && date.getMinutes() >= 10) {
        time.innerHTML = date.getHours() + ":" + date.getMinutes();
    } else if (date.getHours() < 10 && date.getMinutes() >= 10) {
        time.innerHTML = "0" + date.getHours() + ":" + date.getMinutes()
    } else if (date.getHours() >= 10 && date.getMinutes() < 10) {
        time.tabIndex = time.innerHTML = date.getHours() + ":" + "0" + date.getMinutes()
    } else {
        time.tabIndex = time.innerHTML = "0" + date.getHours() + ":" + "0" + date.getMinutes()
    }
},1)
getLocation()
function getLocation() {
    if (navigator.geolocation) {


        //navigator.geolocation.getCurrentPosition(pos)
        navigator.geolocation.watchPosition(pos)

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function pos(Cpos) {
    console.log(Cpos.speed)
    Tacho.innerHTML = Math.floor(Cpos.coords.speed * 3.6)
}