import { AppBar, Box, Toolbar } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { HeaderButton } from './HeaderButton'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
	const headerRoutes = [
		RouteOption.Etusivu,
		RouteOption.Menu,
		RouteOption.Kuvagalleria,
		RouteOption.Yhteystiedot,
	]

	return (
		<AppBar>
			<Toolbar sx={{ height: 64, px: 1 }}>
				<Box
					sx={{
						width: 1,
						display: 'flex',
						justifyContent: 'center',
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
				</Box>
				<HeaderMenu routes={headerRoutes} />
			</Toolbar>
		</AppBar>
	)
}
