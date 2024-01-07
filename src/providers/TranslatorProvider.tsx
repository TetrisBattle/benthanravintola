import { createContext } from 'react'
import { Translator } from 'translations/Translator'
import { ProviderProps } from './ProviderProps'

const translator = new Translator()

export const TranslatorContext = createContext(translator)

export const TranslatorProvider = ({ children }: ProviderProps) => {
	return (
		<TranslatorContext.Provider value={translator}>
			{children}
		</TranslatorContext.Provider>
	)
}
