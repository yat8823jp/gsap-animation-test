import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );

export function gsapConfig( element ) {
	gsap.timeline()
	.to(
		'.js-typography-1',
		{
			x: "10vw",
			opacity: 1,
			duration: .7,
			ease: "power3.out",
			delay: .5
		},
	)
	.to(
		'.js-typography-2',
		{
			x: "-10vw",
			opacity: 1,
			duration: .7
		},
		'-=0.5'
	)
	.to(
		'.js-typography-3',
		{
			x: "10vw",
			opacity: 1,
			duration: .7
		},
		'-=0.5'
	);	
}

export function SlideIn( element ) {
	gsap.set( '.js-slidein-1', { autoAlpha: 0 } );
	gsap.to (
		'.js-slidein-1',
		{
			x: 400,
			autoAlpha: 1,
			duration: .7,
			ease: "power3.out",
			scrollTrigger: {
				trigger: '.js-slidein',
				start: 'top center',
			},
			stagger: {
				from: "start",
				amount: 0.2
			}
		}
	);
}
