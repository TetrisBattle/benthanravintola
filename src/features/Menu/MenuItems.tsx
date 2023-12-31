import { Box, Stack, Typography } from '@thng/react'
import chili from 'assets/chili.png'
import { Fragment, forwardRef } from 'react'
import { Item } from './data'

const ListName = ({ item }: { item: Item }) => {
	const chiliAmount = item.name.split('*').length - 1
	const chiliImg = <img src={chili} alt='Chili' width={16} height={16} />
	const chiliImgs = [...Array(chiliAmount)].map(() => chiliImg)
	const name = item.name.replace(/\*/g, '')
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
			}}
		>
			{item.id && <Typography>{item.id}.&nbsp;</Typography>}
			<Typography sx={{ mr: 0.5 }}>{name}</Typography>
			{chiliImgs.map((img, index) => (
				<Fragment key={index}>{img}</Fragment>
			))}
		</Box>
	)
}

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
				<ListName item={item} />
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
				<ListName item={item} />
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
						fontSize: '1.5rem',
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
							fontSize: '1.25rem',
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
