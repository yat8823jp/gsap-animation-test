import '../styles/tailwind_config.css'
import '../styles/main.scss'

import { setupCounter } from '../../lib/main.js'
import { gsapConfig } from './gsap_config'

document.querySelector('#app').innerHTML = `
`;
gsapConfig( document.querySelector( '.js-typography' ) );
