export default function Timer({
  secondsDisplay,
  minutesDisplay
}) {
  let minutes = 5
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  let timerTimeOut

  function display() {
    stopCountdown()
    minutesDisplay.textContent = prompt('Digite os minutos:').padStart(2, "0")
    secondsDisplay.textContent = String(0).padStart(2, "0")
  }

  function countdown() {
    timerTimeOut = setTimeout(function() {
      stopCountdown()

      if(secondsDisplay.textContent <= 0 && minutesDisplay.textContent <= 0) {
        return
      } else if(secondsDisplay.textContent <= 0 && minutesDisplay.textContent > 0){
        secondsDisplay.textContent = 59
        minutesDisplay.textContent -= 1
      } else {
        secondsDisplay.textContent -= 1
      }
      minutesDisplay.textContent = minutesDisplay.textContent.padStart(2, '0')
      secondsDisplay.textContent = secondsDisplay.textContent.padStart(2, '0')
      countdown()
    }, 1000)
  }

  function stopCountdown() {
    clearTimeout(timerTimeOut)
  }

  function addTime() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
  }

  function decTime() {
    if((Number(minutesDisplay.textContent) - 5) < 0){
      minutesDisplay.textContent = String(0).padStart(2, "0")
      secondsDisplay.textContent = String(0).padStart(2, "0") 
    } else {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }
  }
  
  return {
    display,
    countdown,
    stopCountdown,
    addTime,
    decTime
  }
}