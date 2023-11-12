import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { useSetup } from 'hooks/useSetup'

export const App = () => {
	useSetup()
	return <RouterProvider router={router} />
}
