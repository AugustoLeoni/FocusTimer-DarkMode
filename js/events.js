import {
  timerDisplay,
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonDecTime,
  forest,
  rain,
  coffeeShop,
  fireplace,
  buttonDarkMode,
  buttonLightMode,
  forestSong,
  rainSong,
  coffeeShopSong,
  fireplaceSong,
  forestBall,
  rainBall,
  coffeShopBall,
  fireplaceBall
} from './elements.js'

export default function({controls, sound, timer}) {

  timerDisplay.addEventListener('click', function() {
    timer.display()
  })

  buttonPlay.addEventListener('click', function(){
    timer.countdown()
  })

  buttonPause.addEventListener('click', function(){
    timer.stopCountdown()
  })

  buttonAddTime.addEventListener('click', function(){
    timer.addTime()
  })

  buttonDecTime.addEventListener('click', function(){
    timer.decTime()
  })

  forest.addEventListener('click', function() {
    controls.forestAudioBg()
    sound.pressButtonForestAudio()
  })

  forest.addEventListener('dblclick', function (){
    forestBall.style.left = (45 - 8) + 'px'
    sound.volumeCapture('forestAudio', 0.45)
  })

  rain.addEventListener('click', function() {
    controls.rainAudioBg()
    sound.pressButtonRainAudio()
  })

  rain.addEventListener('dblclick', function (){
    rainBall.style.left = (45 - 8) + 'px'
    sound.volumeCapture('rainAudio', 0.45)
  })

  coffeeShop.addEventListener('click', function() {
    controls.coffeeShopAudioBg()
    sound.pressButtonCoffeeShopAudio()
  })

  coffeeShop.addEventListener('dblclick', function (){
    coffeShopBall.style.left = (45 - 8) + 'px'
    sound.volumeCapture('coffeeShopAudio', 0.45)
  })

  fireplace.addEventListener('click', function() {
    controls.fireplaceAudioBg()
    sound.pressButtonFireplaceAudio()
  })

  fireplace.addEventListener('dblclick', function (){
    fireplaceBall.style.left = (45 - 8) + 'px'
    sound.volumeCapture('fireplaceAudio', 0.45)
  })

  buttonDarkMode.addEventListener('click', function() {
    controls.buttonDarkModeDisplay()
  })

  buttonLightMode.addEventListener('click', function() {
    controls.buttonLightModeDisplay()
  })

  forestSong.addEventListener('click', function(e) {
    controls.handleBallSongPosition(e, forestBall)
    sound.volumeCapture('forestAudio', e.layerX / 100)
  })

  rainSong.addEventListener('click', function(e) {
    controls.handleBallSongPosition(e, rainBall)
    sound.volumeCapture('rainAudio', e.layerX / 100)
  })

  coffeeShopSong.addEventListener('click', function(e) {
    controls.handleBallSongPosition(e, coffeShopBall)
    sound.volumeCapture('coffeeShopAudio', e.layerX / 100)
  })

  fireplaceSong.addEventListener('click', function(e) {
    controls.handleBallSongPosition(e, fireplaceBall)
    sound.volumeCapture('fireplaceAudio', e.layerX / 100)
  })
}