import { Box, Button, Typography } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { useTranslator } from 'hooks/useTranslator'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

export const NotFound = observer(() => {
	const { tr } = useTranslator()

	return (
		<Box
			id='NotFound'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 3,
				mt: 3,
			}}
		>
			<Typography variant='h1'>{tr('PAGE_NOT_FOUND')}</Typography>
			<Button component={Link} to={RouteOption.Home}>
				{tr('RETURN_TO_HOME')}
			</Button>
		</Box>
	)
})
