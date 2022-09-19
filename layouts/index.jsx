import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const AppLayout = ({ children, authentication }) => {
	const router = useRouter()
	const { data: session, status } = useSession()

	if (status === 'loading') return

	if (authentication && authentication.required) {
		if (session) {
			if (router.pathname === '/login') {
				router.push('/')
				return
			}

			if (authentication.authorized && session.user.role !== authentication.authorized) {
				router.push(authentication.destination)
				return
			}

			return children
		} else {
			router.push('/login')
			return
		}
	} else {
		return children
	}
}

export default AppLayout
