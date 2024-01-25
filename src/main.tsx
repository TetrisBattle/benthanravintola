import React from 'react'
import ReactDOM from 'react-dom/client'
import { TranslatorProvider } from 'providers/TranslatorProvider'
import { StoreProvider } from 'providers/StoreProvider'
import { BaseThemeProvider } from '@thng/react'
import { RouterProvider } from 'react-router-dom'
import { router } from 'Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TranslatorProvider>
			<StoreProvider>
				<BaseThemeProvider>
					<RouterProvider router={router} />
				</BaseThemeProvider>
			</StoreProvider>
		</TranslatorProvider>
	</React.StrictMode>
)
