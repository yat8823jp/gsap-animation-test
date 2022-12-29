import gsap from 'gsap'

export function gsapConfig( element ) {
	const right = gsap.timeline();
	right.to(
		element,
		{
			x: 400,
		}
	)
	.to(
		element,
		{
			y: 400
		},
		1
	);
}
