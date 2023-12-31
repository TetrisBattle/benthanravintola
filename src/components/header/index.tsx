import { AppBar } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { MobileHeader } from './MobileHeader'
import { DesktopHeader } from './DesktopHeader'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

export const Header = observer(() => {
	const {
		appStore: { isMobile },
	} = useStore()

	const headerRoutes = [
		RouteOption.Etusivu,
		RouteOption.Menu,
		RouteOption.Yhteystiedot,
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
				{isMobile ? (
					<MobileHeader routes={headerRoutes} />
				) : (
					<DesktopHeader routes={headerRoutes} />
				)}
			</AppBar>
		</>
	)
})
