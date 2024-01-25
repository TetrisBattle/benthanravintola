import { Root } from 'App'
import { Home } from 'features/Home'
import { Menu } from 'features/menu/Menu'
import { Lunch } from 'features/lunch/Lunch'
import { Contact } from 'features/Contact'
import { NotFound } from 'features/NotFound'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Translation } from 'translations/Translator'

export enum RouteOption {
	Root = '/',
	NotFound = '/404',
	Home = '/home',
	Menu = '/menu',
	Lunch = '/lunch',
	Contact = '/contact',
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
				element: <Navigate replace to={RouteOption.Home} />,
			},
			{ path: RouteOption.Home, element: <Home /> },
			{ path: RouteOption.Menu, element: <Menu /> },
			{ path: RouteOption.Lunch, element: <Lunch /> },
			{ path: RouteOption.Contact, element: <Contact /> },
		],
	},
])

export const routeTitle = (route: RouteOption): Translation => {
	switch (route) {
		case RouteOption.Home:
			return 'HOME'
		case RouteOption.Menu:
			return 'MENU'
		case RouteOption.Lunch:
			return 'LUNCH'
		case RouteOption.Contact:
			return 'CONTACT'
		default:
			return 'ERROR'
	}
}
