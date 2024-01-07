import { createContext } from 'react'
import { RootStore } from 'stores/RootStore'
import { ProviderProps } from './ProviderProps'

const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)

export const StoreProvider = ({ children }: ProviderProps) => {
	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}
