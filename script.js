setInterval(setClock, 1000)

const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

function setClock(){
    const date = new Date()
    const seconds= date.getSeconds()/60
    //if second is 45 then 45/60 = 0.75
    const minutes = (seconds + date.getMinutes())/60
    //if our minute is 30, we added 0.75 to 30 and then divided by 60 to get minutes every second it increases and done same process in hours
    const hours = (minutes + date.getHours())/12
    startClock(secondHand, seconds)
    startClock(minuteHand, minutes)
    startClock(hourHand, hours)
}
function startClock(element, time){
    element.style.setProperty('--rotation', time*360)
    //here if we have taken time as second then see the process
    // 1. we have to rotate 360 deg so if our second is 45 then the angle which it rotate is (45/60)*360....and hence we set the --rotation property to same as this
}
setClock()