import { Box, Button, Typography } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { Link } from 'react-router-dom'

export const NotFound = () => {
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
			<Typography variant='h1'>Sivua ei löytynyt!</Typography>
			<Button component={Link} to={RouteOption.Etusivu}>
				Palaa etusivulle
			</Button>
		</Box>
	)
}
