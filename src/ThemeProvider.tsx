import { ThemeOptions } from '@thng/react'
import { BaseThemeProvider } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider = observer(({ children }: ThemeProviderProps) => {
	const {
		appStore: { isDarkMode },
	} = useStore()

	const red = '#820000'
	const yellow = '#EBD265'

	const theme: ThemeOptions = {
		palette: isDarkMode
			? {
					mode: 'dark',
			  }
			: {
					mode: 'light',
					primary: {
						main: red,
						contrastText: yellow,
					},
					secondary: {
						main: yellow,
					},
					background: {
						default: red,
					},
					text: {
						primary: yellow,
					},
			  },
	}

	return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
})
