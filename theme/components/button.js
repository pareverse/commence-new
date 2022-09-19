const baseStyle = {
	fontWeight: 'medium'
}

const variants = {
	outline: {
		borderColor: 'border',
		_hover: {
			bg: 'bg-hover'
		},
		_active: {
			bg: 'bg-active'
		}
	},
	ghost: {
		_hover: {
			bg: 'bg-hover'
		},
		_active: {
			bg: 'bg-active'
		}
	}
}

const sizes = {
	md: {
		fontSize: 'sm'
	},
	lg: {
		fontSize: 'md'
	},
	xl: {
		fontSize: 'lg'
	}
}

export default {
	baseStyle,
	variants,
	sizes
}
