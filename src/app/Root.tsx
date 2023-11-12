import { Typography } from '@thng/react'
import { Header } from 'components/Header'
import { useStore } from 'hooks/useStore'
import { useTitle } from 'hooks/useTitle'
import { Outlet } from 'react-router-dom'

export const Root = () => {
	const { appStore } = useStore()
	const title = useTitle()

	return (
		<>
			<Header />
			{!appStore.isMobile && (
				<Typography variant='h1' sx={{ textAlign: 'center', pt: 1 }}>
					{title}
				</Typography>
			)}

			<Outlet />
		</>
	)
}
