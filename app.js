const digiTime = document.querySelector('p')
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function addZero(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

function setDigiClock () {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const time = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)
  digiTime.textContent = time
}

function setAnalogueClock() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90
  minsHand.style.transform = `rotate(${minsDegrees}deg)`
  const hour = now.getHours()
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDigiClock, 1000)
setInterval(setAnalogueClock, 1000)

setDigiClock() 
setAnalogueClock()
