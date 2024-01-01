import { Box, Stack, Typography } from '@thng/react'
import maps from 'assets/google_maps.png'
import { useStore } from 'hooks/useStore'

const Section = ({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) => (
	<Box component='section'>
		<Typography
			sx={{
				fontWeight: (theme) => theme.typography.fontWeightBold,
				textAlign: 'center',
			}}
		>
			{title}
		</Typography>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{children}
		</Box>
	</Box>
)

export const Contact = () => {
	const { translator } = useStore()

	return (
		<Stack
			id='Contact'
			sx={{
				p: 2,
				gap: 3,
				alignItems: 'center',
			}}
		>
			<Section title={translator.tr('OPENING_TIMES')}>
				<Box
					sx={{
						display: 'flex',
						gap: 1,
					}}
				>
					<Box>
						<Typography>{translator.tr('MON_FRI')}</Typography>
						<Typography>{translator.tr('SAT')}</Typography>
						<Typography>{translator.tr('SUN')}</Typography>
					</Box>

					<Box>
						<Typography>10:30 - 18:00</Typography>
						<Typography>12:00 - 18:00</Typography>
						<Typography>{translator.tr('CLOSED')}</Typography>
					</Box>
				</Box>
			</Section>

			<Section title={translator.tr('PHONE_NUMBER')}>
				<Typography>016257750</Typography>
			</Section>

			<Section title={translator.tr('EMAIL')}>
				<Typography>benthanravintola@gmail.com</Typography>
			</Section>

			<Section title={translator.tr('ADDRESS')}>
				<Typography>Valtakatu 5</Typography>
				<Typography>94100 Kemi</Typography>
			</Section>

			<img
				src={maps}
				alt='GoogleMaps'
				style={{ width: '100%', maxWidth: 400 }}
			/>
		</Stack>
	)
}
