import { Box, Button } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

export const Etusivu = observer(() => {
	const { appStore } = useStore()

	return (
		<Box id='Etusivu' sx={{ p: 3 }}>
			<Button onClick={appStore.toggleDarkMode}>Theme</Button>
		</Box>
	)
})
