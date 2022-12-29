import gsap from 'gsap';

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
