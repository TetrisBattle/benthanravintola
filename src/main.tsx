import React from 'react'
import ReactDOM from 'react-dom/client'
import { TranslatorProvider } from 'providers/TranslatorProvider'
import { StoreProvider } from 'providers/StoreProvider'
import { ThemeProvider } from 'providers/ThemeProvider'
import { App } from 'app/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TranslatorProvider>
			<StoreProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</StoreProvider>
		</TranslatorProvider>
	</React.StrictMode>
)
