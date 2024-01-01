import { Box, Stack, Typography } from '@thng/react'
import { ChiliText } from 'components/ChiliText'
import { lunch } from './lunch'
import { useStore } from 'hooks/useStore'

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
	const { translator } = useStore()

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
			<Section title={translator.tr('MONDAY')} foods={lunch.monday} />
			<Section title={translator.tr('TUESDAY')} foods={lunch.tuesday} />
			<Section
				title={translator.tr('WEDNESDAY')}
				foods={lunch.wednesday}
			/>
			<Section title={translator.tr('THURSDAY')} foods={lunch.thursday} />
			<Section title={translator.tr('FRIDAY')} foods={lunch.friday} />
		</Stack>
	)
}
