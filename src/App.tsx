import { Box } from '@thng/react'
import { Footer } from 'features/Footer'
import { Header } from 'features/header/Header'
import { useSetupTheme } from 'hooks/useSetupTheme'
import { Outlet } from 'react-router-dom'

export const App = () => {
	useSetupTheme()

	return (
		<Box
			sx={{
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Header />
			<Outlet />
			<Footer />
		</Box>
	)
}
