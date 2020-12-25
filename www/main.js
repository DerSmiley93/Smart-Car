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
}, 1)
getLocation()
function getLocation() {
    if (navigator.geolocation) {

        setInterval(() => {
            navigator.geolocation.getCurrentPosition(pos)
            navigator.geolocation.getCurrentPosition(pos)
            navigator.geolocation.getCurrentPosition(pos)
        },500)
        


    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

var speeds = new Array();

var i = 0;
function pos(location) {
    
    speeds[i] = location.coords.speed;
    i++;
    if(i == 3){
        i = 0;
        Tacho.innerHTML = ((speeds[0] + speeds[1] + speeds[2]) / 3) * 3.6;
    }
}