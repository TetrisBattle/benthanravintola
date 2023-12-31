import { Box, Stack, Typography } from '@thng/react'
import { observer } from 'mobx-react-lite'
import sushiBuffetImg from 'assets/sushi_buffet.jpg'

export const Etusivu = observer(() => {
	return (
		<Stack
			id='Etusivu'
			sx={{
				maxWidth: 600,
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
				Ben Than Ravintola
			</Typography>

			<Typography>
				Ben Than Ravintola toivottaa sinut tervetulleeksi
				vietnamilaiseen ravintolaan. Tarjoilemme herkullista
				buffet-lounasta joka päivä arkisin klo 10:30 - 15:00. Buffetin
				hinta on 12,20e. Buffettimme sisältää vietnamilaisien ruokien
				lisäksi pitzaa ja sushia. Lounaalla voit nauttia runsaista
				annoksista kaikkia suosikkiruokiasi.
			</Typography>

			<Typography>
				Vietnamilainen ruoka on täynnä makua, väriä ja tuoreutta.
				Ravintolassamme on lämmin ja viihtyisä tunnelma. Tämä on
				täydellinen tapa kokea Etelä-Aasian tunnelmaa.
			</Typography>

			<Box
				sx={{
					maxWidth: 600,
					mx: 'auto',
				}}
			>
				<img
					src={sushiBuffetImg}
					alt='Sushi buffet'
					width='100%'
					height='100%'
				/>
			</Box>
		</Stack>
	)
})
