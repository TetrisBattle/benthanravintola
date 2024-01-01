import { Box, PartialKey, Typography } from '@thng/react'
import chili from 'assets/chili.png'
import { MenuItem } from 'features/Menu/menu'
import { Fragment } from 'react'

type ChiliTextProps = {
	item: PartialKey<MenuItem, 'price'>
}

export const ChiliText = ({ item }: ChiliTextProps) => {
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
