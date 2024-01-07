import { useStore } from './useStore'

export const useTranslator = () => {
	const { translator } = useStore()
	return translator
}
