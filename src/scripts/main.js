import '../styles/main.scss'
import javascriptLogo from '../../img/javaScript.svg'
import { setupCounter } from '../../lib/main.js'
import { gsapConfig } from './gsap_config'

document.querySelector('#app').innerHTML = `
  <ul class="p-typography">
    <li class="p-typography__item">AAA</li>
    <li class="p-typography__item">BBB</li>
    <li class="p-typography__item">CCC</li>
  </ul>
`

setupCounter(document.querySelector('#counter'))