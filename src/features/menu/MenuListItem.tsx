import { Box, Typography } from '@thng/react'
import { ChiliText } from 'features/menu/ChiliText'
import { useTranslator } from 'hooks/useTranslator'
import { observer } from 'mobx-react-lite'
import { MenuItem } from './menuData'

export const MenuListItem = observer(({ item }: { item: MenuItem }) => {
	const { tr } = useTranslator()

	if (typeof item.price === 'string') {
		return (
			<Box component='li'>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: 1,
					}}
				>
					<ChiliText id={item.id} name={item.name} />
					<Typography>{item.price}</Typography>
				</Box>
				{item.description && (
					<Typography
						sx={{
							fontSize: (theme) => theme.typography.pxToRem(12),
						}}
					>
						{tr(item.description)}
					</Typography>
				)}
			</Box>
		)
	} else {
		const priceItems = item.price.map((priceItem) => {
			return {
				name: priceItem.name,
				price: priceItem.price,
			}
		})

		return (
			<>
				<ChiliText id={item.id} name={item.name} />
				{priceItems.map((priceItem) => (
					<MenuListItem key={priceItem.name} item={priceItem} />
				))}
			</>
		)
	}
})
