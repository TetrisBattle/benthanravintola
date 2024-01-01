import { Box, Stack, Typography } from '@thng/react'
import { ChiliText } from 'components/ChiliText'
import { lunch } from './lunch'

const Section = ({ title, foods }: { title: string; foods: string[] }) => (
	<Box component='section'>
		<Typography
			sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
		>
			{title}
		</Typography>
		<Stack>
			{foods.map((food) => {
				return <ChiliText key={food} item={{ name: food }} />
			})}
		</Stack>
	</Box>
)

export const Lunch = () => {
	return (
		<Stack
			id='Lunch'
			sx={{
				maxWidth: (theme) => theme.breakpoints.values.sm,
				p: 2,
				mx: 'auto',
				gap: 2,
			}}
		>
			<Section title='Maanantai' foods={lunch.monday} />
			<Section title='Tiistai' foods={lunch.tuesday} />
			<Section title='Keskiviikko' foods={lunch.wednesday} />
			<Section title='Torstai' foods={lunch.thursday} />
			<Section title='Perjantai' foods={lunch.friday} />
		</Stack>
	)
}
