import { Box, Stack, Typography } from '@thng/react'
import { ChiliText } from 'features/Menu/ChiliText'
import { lunch } from './lunch'
import { useTranslator } from 'hooks/useTranslator'
import { Translation } from 'translations/Translator'
import { observer } from 'mobx-react-lite'

const Section = ({ title, foods }: { title: string; foods: Translation[] }) => {
	return (
		<Box component='section'>
			<Typography
				sx={{
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				{title}
			</Typography>
			<Stack>
				{foods.map((food) => {
					return <ChiliText key={food} name={food} />
				})}
			</Stack>
		</Box>
	)
}

export const Lunch = observer(() => {
	const { tr } = useTranslator()

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
			<Section title={tr('MONDAY')} foods={lunch.monday} />
			<Section title={tr('TUESDAY')} foods={lunch.tuesday} />
			<Section title={tr('WEDNESDAY')} foods={lunch.wednesday} />
			<Section title={tr('THURSDAY')} foods={lunch.thursday} />
			<Section title={tr('FRIDAY')} foods={lunch.friday} />
		</Stack>
	)
})
