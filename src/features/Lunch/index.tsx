import { Grid, Stack, Typography } from '@thng/react'
import { ChiliText } from 'features/Menu/ChiliText'
import { lunch } from './lunch'
import { useTranslator } from 'hooks/useTranslator'
import { Translation } from 'translations/Translator'
import { observer } from 'mobx-react-lite'

const Section = ({ title, foods }: { title: string; foods: Translation[] }) => {
	return (
		<Grid
			item
			component='section'
			sx={(theme) => ({
				[theme.breakpoints.up('sm')]: {
					width: 400,
					alignSelf: 'center',
				},
			})}
		>
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
		</Grid>
	)
}

export const Lunch = observer(() => {
	const { tr } = useTranslator()

	return (
		<Grid
			container
			id='Lunch'
			sx={{
				p: 2,
				mx: 'auto',
				rowGap: 2,
				'> .MuiGrid-container': {
					rowGap: 2,
					flexDirection: 'column',
				},
			}}
		>
			<Grid item container xs={12} md={6}>
				<Section title={tr('MONDAY')} foods={lunch.monday} />
				<Section title={tr('TUESDAY')} foods={lunch.tuesday} />
				<Section title={tr('WEDNESDAY')} foods={lunch.wednesday} />
			</Grid>
			<Grid item container xs={12} md={6}>
				<Section title={tr('THURSDAY')} foods={lunch.thursday} />
				<Section title={tr('FRIDAY')} foods={lunch.friday} />
			</Grid>
		</Grid>
	)
})
