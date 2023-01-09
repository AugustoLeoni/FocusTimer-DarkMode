export default function Controls({
  forest,
  rain,
  coffeeShop,
  fireplace,
  buttonDarkMode,
  buttonLightMode
}) {

  let darkModeActive = false
  let selectedDarkModeCard
  let selectedCard = 'selected'
  
  function forestAudioBg() { 
    forest.classList.add(selectedCard)
    rain.classList.remove(selectedCard)
    coffeeShop.classList.remove(selectedCard)
    fireplace.classList.remove(selectedCard)

    handleBackground('forest')
  }

  function rainAudioBg() {
    forest.classList.remove(selectedCard)
    rain.classList.add(selectedCard)
    coffeeShop.classList.remove(selectedCard)
    fireplace.classList.remove(selectedCard)

    handleBackground('rain')
  }

  function coffeeShopAudioBg() {
    forest.classList.remove(selectedCard)
    rain.classList.remove(selectedCard)
    coffeeShop.classList.add(selectedCard)
    fireplace.classList.remove(selectedCard)

    handleBackground('coffeeShop')
  }

  function fireplaceAudioBg() {
    forest.classList.remove(selectedCard)
    rain.classList.remove(selectedCard)
    coffeeShop.classList.remove(selectedCard)
    fireplace.classList.add(selectedCard)

    handleBackground('fireplace')
  }

  function buttonDarkModeDisplay() {
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    darkModeActive = false
    
    forest.classList.remove(selectedCard)
    rain.classList.remove(selectedCard)
    coffeeShop.classList.remove(selectedCard)
    fireplace.classList.remove(selectedCard)
    
    selectedCard = handleBackgroundCardDrakMode()

    document.querySelector('body').style.background = 'white'

    for(let barStyle of document.querySelectorAll('.bar')) {
      barStyle.style.background = '#323238'
    }
    for(let barStyle of document.querySelectorAll('.ball')) {
      barStyle.style.background = '#323238'
    }

    for(let option of document.querySelectorAll('.options')) {
      option.classList.remove('dark-mode-timer')
    }

    for(let outrotste of document.querySelectorAll('.card')){
      outrotste.classList.remove('dark-mode-card')
    }

    document.querySelector('.timer').classList.remove('dark-mode-timer')

  }

  function buttonLightModeDisplay() {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    darkModeActive = true

    forest.classList.remove(selectedCard)
    rain.classList.remove(selectedCard)
    coffeeShop.classList.remove(selectedCard)
    fireplace.classList.remove(selectedCard)

    selectedCard = handleBackgroundCardDrakMode()

    document.querySelector('body').style.background = 'black'

    for(let barStyle of document.querySelectorAll('.bar')) {
      barStyle.style.background = 'white'
    }
    for(let barStyle of document.querySelectorAll('.ball')) {
      barStyle.style.background = 'white'
    }
    for(let option of document.querySelectorAll('.options')) {
      option.classList.add('dark-mode-timer')
    }

    for(let outrotste of document.querySelectorAll('.card')){
      outrotste.classList.add('dark-mode-card')
    }

    document.querySelector('.timer').classList.add('dark-mode-timer')
  }

  function handleBackground(card) {
    for(let cardSelected of document.querySelectorAll('.card')){
      let cardSelectedBar = '.' + cardSelected.classList[1] + ' .bar'
      let cardSelectedBall = '.' + cardSelected.classList[1] + ' .ball'

      if(cardSelected.classList[1] === card && !darkModeActive){
        document.querySelector(cardSelectedBar).style.background = 'white'
        document.querySelector(cardSelectedBall).style.background = 'white'
      } else if(darkModeActive) {
        document.querySelector(cardSelectedBar).style.background = 'white'
        document.querySelector(cardSelectedBall).style.background = 'white'
      } else {
        document.querySelector(cardSelectedBar).style.background = '#323238'
        document.querySelector(cardSelectedBall).style.background = '#323238'
      }
    }
  }

  function handleBackgroundCardDrakMode() {
    if(darkModeActive) {
      selectedDarkModeCard = 'secected-dark-mode'
    } else {
      selectedDarkModeCard = 'selected'
    }
    return selectedDarkModeCard
  }

  function handleBallSongPosition(event, reference) {
    reference.style.left = (event.layerX - 8) + 'px'
  }

  return {
    forestAudioBg,
    rainAudioBg,
    coffeeShopAudioBg,
    fireplaceAudioBg,
    buttonDarkModeDisplay,
    buttonLightModeDisplay,
    handleBallSongPosition
  }
}