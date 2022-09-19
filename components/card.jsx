import { chakra } from '@chakra-ui/react'

const Card = (props) => {
	return <chakra.div bg="bg-surface" borderRadius="md" shadow="xs" overflow="hidden" _dark={{ shadow: 'none' }} {...props} />
}

export default Card
