import { Box, Typography } from '@thng/react'
import maps from 'assets/google_maps.png'

export const Yhteystiedot = () => {
	return (
		<Box
			id='Yhteystiedot'
			sx={{
				p: 3,
				// textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Typography
				sx={{
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				Aukioloajat
			</Typography>
			<Box>
				<Typography>ma - pe&ensp;10:30 - 18:00</Typography>
				<Typography>
					la&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11:00 - 20:00
				</Typography>
				<Typography>
					su &ensp;&ensp;&ensp;&ensp;&ensp;Suljettu
				</Typography>
			</Box>
			<br />

			<Typography
				sx={{
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				Puhelin:
			</Typography>
			<Typography>016257750</Typography>
			<br />

			<Typography
				sx={{
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				Sähköposti:
			</Typography>
			<Typography>benthanravintola@gmail.com</Typography>
			<br />
			<Typography
				sx={{
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				Osoite:
			</Typography>
			<Typography>Valtakatu 5</Typography>
			<Typography>94100 Kemi</Typography>
			<br />

			<img
				src={maps}
				alt='GoogleMaps'
				// style={{ width: '50vw', height: 'auto', padding: 32 }}
				style={{ width: '100%', maxWidth: 400 }}
			/>
		</Box>
	)
}
