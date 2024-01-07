import { Box, Stack, Typography } from '@thng/react'
import { forwardRef } from 'react'
import { MenuItem } from './menu'
import { ChiliText } from 'components/ChiliText'
import { Translation } from 'translations'
import { useTranslator } from 'hooks/useTranslator'

const MenuListItem = ({ item }: { item: MenuItem }) => {
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
	} else if (Array.isArray(item.price)) {
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
	} else return <></>
}

type MenuListProps = {
	label?: Translation
	subLabel?: Translation
	items: MenuItem[]
}

export const MenuList = forwardRef(
	(
		{ label, subLabel, items }: MenuListProps,
		ref: React.ForwardedRef<HTMLDivElement>
	) => {
		const { tr } = useTranslator()

		return (
			<Stack component='section' ref={ref} gap={0.5} sx={{ p: 1 }}>
				{label && (
					<Typography
						variant='h2'
						sx={{
							fontWeight: (theme) =>
								theme.typography.fontWeightMedium,
							fontSize: (theme) => theme.typography.pxToRem(24),
						}}
					>
						{tr(label)}
					</Typography>
				)}
				{subLabel && (
					<Typography
						variant='h3'
						sx={{
							fontWeight: (theme) =>
								theme.typography.fontWeightMedium,
							fontSize: (theme) => theme.typography.pxToRem(20),
						}}
					>
						{tr(subLabel)}
					</Typography>
				)}
				<Box component='ul' sx={{ m: 0, p: 0, listStyleType: 'none' }}>
					{items.map((item) => (
						<MenuListItem key={item.name} item={item} />
					))}
				</Box>
			</Stack>
		)
	}
)
