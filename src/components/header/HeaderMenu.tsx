import { Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton, MenuItem } from '@thng/react'
import { RouteOption, routeToTitle } from 'App/Routes'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type HeaderMenuProps = {
	routes: RouteOption[]
}

export const HeaderMenu = ({ routes }: HeaderMenuProps) => {
	const [open, setOpen] = useState(false)

	const toggleOpen = () => setOpen((prev) => !prev)

	return (
		<>
			<IconButton
				onClick={toggleOpen}
				sx={{
					color: 'inherit',
					display: { sm: 'none' },
				}}
			>
				<MenuIcon />
			</IconButton>

			<Drawer anchor='right' open={!!open} onClose={toggleOpen}>
				{routes.map((route) => (
					<MenuItem
						key={'headerMenuItem-' + route}
						component={NavLink}
						to={route}
						onClick={toggleOpen}
						sx={{
							'&.active': (theme) => ({
								color: theme.palette.primary.main,
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
