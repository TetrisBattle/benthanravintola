import { Box, Button, Toolbar } from '@thng/react'
import { RouteOption, routeToTitle } from 'App/Routes'
import { NavLink } from 'react-router-dom'

const HeaderButton = ({ route }: { route: RouteOption }) => {
	return (
		<Button
			component={NavLink}
			to={route}
			variant='text'
			sx={(theme) => ({
				fontSize: (theme) => theme.typography.pxToRem(20),
				fontWeight: (theme) => theme.typography.fontWeightMedium,
				color: 'inherit',
				'&.active': {
					color: theme.palette.secondary.main,
				},
			})}
		>
			{routeToTitle(route)}
		</Button>
	)
}

export const DesktopHeader = ({ routes }: { routes: RouteOption[] }) => {
	return (
		<Toolbar
			sx={{
				height: 64,
				px: 1,
				display: 'flex',
			}}
		>
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
					}}
				>
					{routes.map((route) => (
						<HeaderButton key={route} route={route} />
					))}
				</Box>
			</Box>
		</Toolbar>
	)
}
