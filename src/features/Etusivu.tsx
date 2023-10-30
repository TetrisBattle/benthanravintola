import { Box, Button, Typography } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

export const Etusivu = observer(() => {
	const { appStore } = useStore()

	return (
		<Box id='Etusivu' sx={{ p: 3 }}>
			<Typography variant='h1'>Etusivu</Typography>
			<Button onClick={() => appStore.toggleDarkMode()}>Theme</Button>
		</Box>
	)
})
