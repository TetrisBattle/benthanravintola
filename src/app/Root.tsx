import { Box } from '@thng/react'
import { Footer } from 'components/Footer'
import { Header } from 'components/header/Header'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

export const Root = observer(() => {
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
})
