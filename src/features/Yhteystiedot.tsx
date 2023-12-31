import { Box, Stack, Typography } from '@thng/react'
import maps from 'assets/google_maps.png'

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

export const Yhteystiedot = () => {
	return (
		<Stack
			id='Yhteystiedot'
			sx={{
				p: 2,
				gap: 3,
				alignItems: 'center',
			}}
		>
			<Section title='Aukioloajat'>
				<Box
					sx={{
						display: 'flex',
						gap: 1,
					}}
				>
					<Box>
						<Typography>ma - pe</Typography>
						<Typography>la</Typography>
						<Typography>su</Typography>
					</Box>

					<Box>
						<Typography>10:30 - 18:00</Typography>
						<Typography>12:00 - 18:00</Typography>
						<Typography>Suljettu</Typography>
					</Box>
				</Box>
			</Section>

			<Section title='Puhelinnumero'>
				<Typography>016257750</Typography>
			</Section>

			<Section title='Sähköposti'>
				<Typography>benthanravintola@gmail.com</Typography>
			</Section>

			<Section title='Osoite'>
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
