import Sound from './sounds.js'
import Controls from './controls.js'
import Event from './events.js'
import Timer from './timer.js'
import {
  minutesDisplay,
  secondsDisplay,
  forest,
  rain,
  coffeeShop,
  fireplace,
  buttonDarkMode,
  buttonLightMode
} from './elements.js'

const sound = Sound()
const controls = Controls({
  forest,
  rain,
  coffeeShop,
  fireplace,
  buttonDarkMode,
  buttonLightMode
})

const timer = Timer({
  secondsDisplay,
  minutesDisplay
})

Event({controls, sound, timer})


