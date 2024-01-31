import { useEffect } from 'react'
import { useThemeStore } from '@thng/react'

export const useSetupTheme = () => {
	const themeStore = useThemeStore()
	const red = '#820000'
	const yellow = '#EBD265'

	useEffect(() => {
		themeStore.setIsDarkMode(false)

		themeStore.setLightThemeOptions({
			palette: {
				primary: {
					main: red,
					contrastText: yellow,
				},
				secondary: {
					main: yellow,
				},
				background: {
					paper: red,
					default: red,
				},
				text: {
					primary: yellow,
				},
			},
		})
	}, [themeStore])
}
