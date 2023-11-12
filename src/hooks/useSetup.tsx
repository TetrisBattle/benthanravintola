import { useMediaQuery, useTheme } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { useEffect } from 'react'

export const useSetup = () => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const { appStore } = useStore()

	useEffect(() => {
		appStore.setIsMobile(isMobile)
	}, [appStore, isMobile])
}
