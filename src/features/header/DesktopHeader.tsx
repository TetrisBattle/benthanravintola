import { Box, Button, Toolbar } from '@thng/react'
import { RouteOption, routeTitle } from 'Routes'
import { useTranslator } from 'hooks/useTranslator'
import { NavLink } from 'react-router-dom'
import { LanguageSelector } from './LanguageSelector'
import { observer } from 'mobx-react-lite'

export const DesktopHeader = observer(
	({ routes }: { routes: RouteOption[] }) => {
		const { tr } = useTranslator()

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
						justifyContent: 'space-between',
					}}
				>
					<Box sx={{ ml: 4.25 }} />
					<Box>
						{routes.map((route) => (
							<Button
								key={route}
								component={NavLink}
								to={route}
								variant='text'
								sx={(theme) => ({
									height: 1,
									fontSize: (theme) =>
										theme.typography.pxToRem(20),
									fontWeight: (theme) =>
										theme.typography.fontWeightMedium,
									color: 'inherit',
									'&.active': {
										color: theme.palette.secondary.main,
									},
								})}
							>
								{tr(routeTitle(route))}
							</Button>
						))}
					</Box>
					<LanguageSelector />
				</Box>
			</Toolbar>
		)
	}
)
