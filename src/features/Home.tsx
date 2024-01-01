import { Stack, Typography, useTheme } from '@thng/react'
import { observer } from 'mobx-react-lite'
import sushiBuffetImg from 'assets/sushi_buffet.jpg'
import { lunch } from 'features/Lunch/lunch'
import { useStore } from 'hooks/useStore'

export const Home = observer(() => {
	const { translator } = useStore()
	const theme = useTheme()

	return (
		<Stack
			id='Home'
			sx={{
				maxWidth: (theme) => theme.breakpoints.values.sm,
				p: 2,
				mx: 'auto',
				gap: 2,
			}}
		>
			<Typography
				variant='h1'
				sx={{
					textAlign: 'center',
					fontSize: (theme) => theme.typography.pxToRem(32),
					fontWeight: (theme) => theme.typography.fontWeightMedium,
				}}
			>
				{translator.tr('COMPANY_NAME')}
			</Typography>

			<Typography>
				{translator.tr(
					'HOME_DESCRIPTION_BUFFET',
					lunch.time,
					lunch.price
				)}
			</Typography>

			<Typography>{translator.tr('HOME_DESCRIPTION_VIETNAM')}</Typography>

			<img
				src={sushiBuffetImg}
				alt='Sushi buffet'
				width='100%'
				height='100%'
				style={{
					maxWidth: theme.breakpoints.values.sm,
					marginInline: 'auto',
				}}
			/>
		</Stack>
	)
})
