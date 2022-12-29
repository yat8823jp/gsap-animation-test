import '../styles/main.css'
import javascriptLogo from '../../img/javaScript.svg'
import { setupCounter } from '../../lib/main.js'
import { gsapConfig } from './gsap_config'

document.querySelector('#app').innerHTML = `
<div class="c-inner">
	<ul class="p-typography js-typography">
		<li class="p-typography__item js-gsap-right">AAA</li>
		<li class="p-typography__item js-typography-2">BBB</li>
		<li class="p-typography__item js-typography-3">CCC</li>
	</ul>
</div>
`;
gsapConfig( document.querySelector('.js-gsap-right' ) );
setupCounter(document.querySelector('#counter'));
