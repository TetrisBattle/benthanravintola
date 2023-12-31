import { Box, Stack, Typography } from '@thng/react'
import { forwardRef } from 'react'
import { Item } from './menuData'
import { ChiliText } from 'components/ChiliText'

const MenuItem = ({ item }: { item: Item }) => {
	if (typeof item.price === 'string') {
		return (
			<Box
				component='li'
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: 1,
				}}
			>
				<ChiliText item={item} />
				<Typography>{item.price}</Typography>
			</Box>
		)
	} else if (typeof item.price === 'object') {
		const items = Object.keys(item.price).map((variant) => {
			return {
				name: '- ' + variant,
				price:
					typeof item.price === 'object' ? item.price[variant] : '',
			}
		})

		return (
			<>
				<ChiliText item={item} />
				{items.map((item) => (
					<MenuItem key={item.name} item={item} />
				))}
			</>
		)
	} else return <></>
}

type MenuItemsProps = {
	label?: string
	subLabel?: string
	items: Item[]
}

export const MenuItems = forwardRef(
	(
		{ label, subLabel, items }: MenuItemsProps,
		ref: React.ForwardedRef<HTMLDivElement>
	) => {
		return (
			<Stack component='section' ref={ref} gap={0.5} sx={{ p: 1 }}>
				<Typography
					variant='h2'
					sx={{
						fontWeight: (theme) =>
							theme.typography.fontWeightMedium,
						fontSize: (theme) => theme.typography.pxToRem(24),
					}}
				>
					{label}
				</Typography>
				{subLabel && (
					<Typography
						variant='h3'
						sx={{
							fontWeight: (theme) =>
								theme.typography.fontWeightMedium,
							fontSize: (theme) => theme.typography.pxToRem(20),
						}}
					>
						{subLabel}
					</Typography>
				)}
				<Box component='ul' sx={{ m: 0, p: 0 }}>
					{items.map((item) => (
						<MenuItem key={item.name} item={item} />
					))}
				</Box>
			</Stack>
		)
	}
)
