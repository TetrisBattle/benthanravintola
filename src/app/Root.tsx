import { Box, Typography } from '@thng/react'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { useStore } from 'hooks/useStore'
import { useTitle } from 'hooks/useTitle'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

export const Root = observer(() => {
	const {
		appStore: { isMobile },
	} = useStore()
	const title = useTitle()

	return (
		<Box
			sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}
		>
			<Header />
			<Box sx={{ flexGrow: 1 }}>
				{!isMobile && (
					<Typography
						variant='h1'
						sx={{
							textAlign: 'center',
							pt: 1,
							fontSize: (theme) => theme.typography.pxToRem(32),
							fontWeight: (theme) =>
								theme.typography.fontWeightMedium,
						}}
					>
						{title}
					</Typography>
				)}

				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
})
