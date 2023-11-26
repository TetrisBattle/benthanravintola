import { Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton, MenuItem, Toolbar, Typography } from '@thng/react'
import { RouteOption, routeToTitle } from 'App/Routes'
import { useTitle } from 'hooks/useTitle'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const MobileHeader = ({ routes }: { routes: RouteOption[] }) => {
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
					{useTitle()}
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
						{routeToTitle(route)}
					</MenuItem>
				))}
			</Drawer>
		</>
	)
}
