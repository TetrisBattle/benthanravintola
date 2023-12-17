import { Facebook as FacebookIcon } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Link, Typography } from '@thng/react'

export const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				mt: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				py: 2,
				px: 3,
				borderTop: (theme) =>
					`1px solid ${theme.palette.secondary.main}`,
			}}
		>
			<Typography>Ben Than Ravintola</Typography>
			<Link
				href='https://www.facebook.com/p/Vietnamilainen-Ben-Thanh-Ravintola-100054518168044/'
				target='_blank'
				sx={{
					color: (theme) => theme.palette.primary.contrastText,
					pl: 1,
				}}
			>
				<FacebookIcon />
			</Link>
		</Box>
	)
}
