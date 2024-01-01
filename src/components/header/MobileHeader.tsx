import { Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton, MenuItem, Toolbar, Typography } from '@thng/react'
import { RouteOption, routeTitle } from 'App/Routes'
import { useStore } from 'hooks/useStore'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const MobileHeader = ({ routes }: { routes: RouteOption[] }) => {
	const { translator } = useStore()
	const location = useLocation()
	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen((prev) => !prev)

	return (
		<>
			<Toolbar
				sx={{
					height: 64,
					px: 1,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					component='h1'
					variant='h2'
					sx={{
						fontWeight: (theme) =>
							theme.typography.fontWeightRegular,
					}}
				>
					{location.pathname === '/home'
						? translator.tr('COMPANY_NAME')
						: translator.tr(
								routeTitle(location.pathname as RouteOption)
							)}
				</Typography>
				<IconButton onClick={toggleOpen} sx={{ color: 'inherit' }}>
					<MenuIcon />
				</IconButton>
			</Toolbar>

			<Drawer
				anchor='right'
				open={!!open}
				onClose={toggleOpen}
				sx={{
					'& .MuiDrawer-paper': {
						bgcolor: (theme) => theme.palette.primary.main,
						color: (theme) => theme.palette.primary.contrastText,
					},
				}}
			>
				{routes.map((route) => (
					<MenuItem
						key={route}
						component={NavLink}
						to={route}
						onClick={toggleOpen}
						sx={{
							'&.active': (theme) => ({
								color: theme.palette.secondary.main,
							}),
						}}
					>
						{translator.tr(routeTitle(route))}
					</MenuItem>
				))}
			</Drawer>
		</>
	)
}
