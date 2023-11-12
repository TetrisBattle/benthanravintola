import { Root } from 'App/Root'
import { Etusivu } from 'features/Etusivu'
import { Menu } from 'features/Menu'
import { Kuvagalleria } from 'features/Kuvagalleria'
import { Yhteystiedot } from 'features/Yhteystiedot'
import { NotFound } from 'features/NotFound'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export enum RouteOption {
	NotFound = '/404',
	Etusivu = '/etusivu',
	Menu = '/menu',
	Kuvagalleria = '/kuvagalleria',
	Yhteystiedot = '/yhteystiedot',
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ path: RouteOption.NotFound, element: <NotFound /> },
			{
				path: '*',
				element: <Navigate replace to={RouteOption.NotFound} />,
			},
			{
				path: '/',
				element: <Navigate replace to={RouteOption.Etusivu} />,
			},
			{ path: RouteOption.Etusivu, element: <Etusivu /> },
			{ path: RouteOption.Menu, element: <Menu /> },
			{ path: RouteOption.Kuvagalleria, element: <Kuvagalleria /> },
			{ path: RouteOption.Yhteystiedot, element: <Yhteystiedot /> },
		],
	},
])

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
