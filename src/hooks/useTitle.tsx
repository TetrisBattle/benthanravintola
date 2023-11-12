import { RouteOption, routeToTitle } from 'App/Routes'
import { useLocation } from 'react-router-dom'

export const useTitle = () => {
	const location = useLocation()

	return location.pathname === '/etusivu'
		? 'Ben Thanh Ravintola'
		: routeToTitle(location.pathname as RouteOption)
}
