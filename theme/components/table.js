const baseStyle = {
	table: {
		whiteSpace: 'nowrap'
	},
	th: {
		fontWeight: 'medium',
		textTransform: 'normal',
		letterSpacing: 'inherit',
		whiteSpace: 'nowrap'
	},
	thead: {
		outline: '1px dashed #E2E8F0',
		_dark: {
			outline: '1px dashed #2D3748'
		},
		th: {
			border: 'none',
			color: 'subtle'
		}
	},
	tbody: {
		td: {
			border: 'none',
			color: 'muted'
		}
	}
}

const sizes = {
	md: {
		th: {
			lineHeight: '1.25rem',
			fontSize: 'sm'
		},
		td: {
			fontSize: 'sm'
		}
	}
}

export default {
	baseStyle,
	sizes
}
