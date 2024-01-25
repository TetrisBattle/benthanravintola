import { Menu as MenuIcon } from '@mui/icons-material'
import {
	Box,
	Drawer,
	IconButton,
	MenuItem,
	Toolbar,
	Typography,
} from '@thng/react'
import { RouteOption, routeTitle } from 'app/Routes'
import { useTranslator } from 'hooks/useTranslator'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LanguageSelector } from './LanguageSelector'
import { observer } from 'mobx-react-lite'

export const MobileHeader = observer(
	({ routes }: { routes: RouteOption[] }) => {
		const { tr } = useTranslator()
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
						{tr(routeTitle(location.pathname as RouteOption))}
					</Typography>
					<Box>
						<LanguageSelector />
						<IconButton
							onClick={toggleOpen}
							sx={{ color: 'inherit' }}
						>
							<MenuIcon />
						</IconButton>
					</Box>
				</Toolbar>

				<Drawer
					anchor='right'
					open={!!open}
					onClose={toggleOpen}
					sx={{
						'& .MuiDrawer-paper': {
							bgcolor: (theme) => theme.palette.primary.main,
							color: (theme) =>
								theme.palette.primary.contrastText,
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
							{tr(routeTitle(route))}
						</MenuItem>
					))}
				</Drawer>
			</>
		)
	}
)
