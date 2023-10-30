import { AppBar, Box, Toolbar, Typography } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { HeaderButton } from './HeaderButton'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
	const headerRoutes = [RouteOption.Home, RouteOption.About]

	return (
		<AppBar>
			<Toolbar sx={{ height: 64, px: 1 }}>
				<Typography
					variant='h1'
					sx={{
						pl: 1,
						fontSize: 32,
					}}
				>
					ClientApp
				</Typography>
				<Box
					sx={{
						width: 1,
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					<Box
						sx={{
							height: 1,
							pr: 1,
							display: {
								xs: 'none',
								sm: 'flex',
							},
						}}
					>
						{headerRoutes.map((route) => (
							<HeaderButton
								key={'headerButton-' + route}
								route={route}
							/>
						))}
					</Box>
					<HeaderMenu routes={headerRoutes} />
				</Box>
			</Toolbar>
		</AppBar>
	)
}
