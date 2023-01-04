import '../styles/tailwind_config.css'
import '../styles/main.scss'

import { setupCounter } from '../../lib/counter.js'
import { gsapConfig } from './gsap_config'
import { SlideIn } from './gsap_config'
import { imgRight } from './gsap_config'

document.querySelector('#app').innerHTML = ``;
gsapConfig( document.querySelector( '.js-typography' ) );
SlideIn(    document.querySelector( '.js-slidein'    ) );
imgRight(   document.querySelector( '.js-imgright'   ) );
