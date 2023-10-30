import { Button } from '@thng/react'
import { RouteOption, routeToTitle } from 'App/Routes'
import { NavLink } from 'react-router-dom'

type HeaderButtonProps = {
	route: RouteOption
}

export const HeaderButton = ({ route }: HeaderButtonProps) => {
	return (
		<Button
			component={NavLink}
			to={route}
			variant='text'
			sx={(theme) => ({
				fontSize: '1.25rem',
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
