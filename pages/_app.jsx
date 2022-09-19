import { useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from 'theme'
import FontFace from 'components/font-face'
import AppLayout from 'layouts'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<>
			<Head>
				<title></title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="" />
				<link rel="icon" type="image/png" sizes="96x96" href="favicon.ico" />
			</Head>

			<SessionProvider session={session}>
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<FontFace />

						<ChakraProvider theme={theme}>
							<AppLayout authentication={Component.authentication}>
								<Component {...pageProps} />
							</AppLayout>
						</ChakraProvider>
					</Hydrate>

					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</SessionProvider>
		</>
	)
}

export default App
