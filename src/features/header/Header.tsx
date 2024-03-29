import { AppBar, useMediaQuery, useTheme } from '@thng/react'
import { RouteOption } from 'Routes'
import { MobileHeader } from './MobileHeader'
import { DesktopHeader } from './DesktopHeader'

export const Header = () => {
	const theme = useTheme()

	const headerRoutes = [
		RouteOption.Home,
		RouteOption.Menu,
		RouteOption.Lunch,
		RouteOption.Contact,
	]

	return (
		<>
			<AppBar
				component='header'
				sx={{
					position: 'sticky',
					zIndex: (theme) => theme.zIndex.drawer,
					top: 0,
					boxShadow: 0,
					borderBottom: (theme) =>
						`1px solid ${theme.palette.secondary.main}`,
				}}
			>
				{useMediaQuery(theme.breakpoints.down('sm')) ? (
					<MobileHeader routes={headerRoutes} />
				) : (
					<DesktopHeader routes={headerRoutes} />
				)}
			</AppBar>
		</>
	)
}
