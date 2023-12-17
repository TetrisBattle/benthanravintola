import { Box, Stack, Typography } from '@thng/react'
import chili from 'assets/chili.png'
import { Fragment, forwardRef } from 'react'
import { MenuItem } from './data'

const MenuItem = forwardRef(
	({ item }: { item: MenuItem }, ref: React.ForwardedRef<HTMLDivElement>) => {
		const chiliAmount = item.name.split('*').length - 1
		const chiliImg = <img src={chili} alt='Chili' />
		const chiliImgs = [...Array(chiliAmount)].map((_) => chiliImg)
		const name = item.name.replace(/\*/g, '')

		return (
			<Box
				ref={ref}
				component='li'
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: 1,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
					}}
				>
					<Typography>
						{item.id}. {name}
					</Typography>
					<Box sx={{ height: 24 }}>
						{chiliImgs.map((img, index) => (
							<Fragment key={index}>{img}</Fragment>
						))}
					</Box>
				</Box>
				<Typography>{item.price}</Typography>
			</Box>
		)
	}
)

export const MenuItems = forwardRef(
	(
		{ label, items }: { label: string; items: MenuItem[] },
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
				<Box component='ul' sx={{ m: 0, p: 0 }}>
					{items.map((item) => (
						<MenuItem key={item.name} item={item} />
					))}
				</Box>
			</Stack>
		)
	}
)
