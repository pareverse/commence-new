export default {
	global: {
		'*, *::before, *::after': {
			letterSpacing: 'inherit'
		},
		html: {
			scrollBehavior: 'smooth',
			lineHeight: 1.5,
			letterSpacing: '0.0125rem'
		},
		body: {
			bg: 'bg-surface',
			color: 'default'
		},
		'*::placeholder': {
			opacity: 1,
			color: 'placeholder'
		}
	}
}
