import { useContext } from 'react'
import { TranslatorContext } from 'providers/TranslatorProvider'

export const useTranslator = () => {
	return useContext(TranslatorContext)
}
