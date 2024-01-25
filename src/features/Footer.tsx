import { Facebook as FacebookIcon } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Link, Typography } from '@thng/react'
import { useTranslator } from 'hooks/useTranslator'
import { observer } from 'mobx-react-lite'

export const Footer = observer(() => {
	const { tr } = useTranslator()

	return (
		<Box
			component='footer'
			sx={{
				mt: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: 40,
				py: 1,
				px: 3,
				borderTop: (theme) =>
					`1px solid ${theme.palette.secondary.main}`,
			}}
		>
			<Typography>{tr('COMPANY_NAME')}</Typography>
			<Link
				href='https://www.facebook.com/p/Vietnamilainen-Ben-Thanh-Ravintola-100054518168044/'
				target='_blank'
				sx={{
					color: (theme) => theme.palette.primary.contrastText,
					ml: 1,
					display: 'flex',
				}}
			>
				<FacebookIcon />
			</Link>
		</Box>
	)
})
