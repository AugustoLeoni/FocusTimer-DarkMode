export default function () {
  const forestAudio = new Audio('../sound/Floresta.wav')
  const rainAudio = new Audio('../sound/Chuva.wav')
  const coffeeShopAudio = new Audio('../sound/Cafeteria.wav')
  const fireplaceAudio = new Audio('../sound/Lareira.wav')
  
  let volumeIndentificationForest = 0.45
  let volumeIndentificationRain = 0.45
  let volumeIndentificationCoffeeShop = 0.45
  let volumeIndentificationFireplace = 0.45

  function pressButtonForestAudio() {
    forestAudio.play()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()

    handleAudioSong(forestAudio, volumeIndentificationForest)
    volumeCapture('forestAudio', volumeIndentificationForest)

    forestAudio.loop = true
  }

  function pressButtonRainAudio() {
    forestAudio.pause()
    rainAudio.play()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()

    handleAudioSong(rainAudio, volumeIndentificationRain)
    volumeCapture('rainAudio', volumeIndentificationRain)

    rainAudio.loop = true
  }

  function pressButtonCoffeeShopAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.play()
    fireplaceAudio.pause()

    handleAudioSong(coffeeShopAudio, volumeIndentificationCoffeeShop)
    volumeCapture('coffeeShopAudio', volumeIndentificationCoffeeShop)

    coffeeShopAudio.loop = true
  }

  function pressButtonFireplaceAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.play()

    handleAudioSong(fireplaceAudio, volumeIndentificationFireplace)
    volumeCapture('fireplaceAudio', volumeIndentificationFireplace)
  
    fireplaceAudio.loop = true
  }

  function volumeCapture(reference, vol) {
    if(reference == 'forestAudio'){
      volumeIndentificationForest = vol
    } else if(reference == 'rainAudio') {
      volumeIndentificationRain = vol
    } else if(reference == 'coffeeShopAudio') {
      volumeIndentificationCoffeeShop = vol
    } else if(reference == 'fireplaceAudio') {
      volumeIndentificationFireplace = vol
    } 
     return vol
  }

  function handleAudioSong(audio, referenceAudio) {
    audio.volume = referenceAudio
  }

  return {
    pressButtonForestAudio,
    pressButtonRainAudio,
    pressButtonCoffeeShopAudio,
    pressButtonFireplaceAudio,
    volumeCapture
  }
}