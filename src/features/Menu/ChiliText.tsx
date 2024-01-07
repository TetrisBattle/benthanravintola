import { Box, Typography } from '@thng/react'
import chili from 'assets/chili.png'
import { MenuItem } from 'features/Menu/menu'
import { useTranslator } from 'hooks/useTranslator'
import { Fragment } from 'react'

export const ChiliText = ({ id, name }: Omit<MenuItem, 'price'>) => {
	const { tr } = useTranslator()
	let translatedName = tr(name)
	const chiliAmount = name.split('*').length - 1
	const chiliImg = <img src={chili} alt='Chili' width={16} height={16} />
	const chiliImgs = [...Array(chiliAmount)].map(() => chiliImg)
	translatedName = translatedName.replace(/\*/g, '')

	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
			}}
		>
			{id && <Typography>{id}.&nbsp;</Typography>}
			<Typography sx={{ mr: 0.5 }}>{translatedName}</Typography>
			{chiliImgs.map((img, index) => (
				<Fragment key={index}>{img}</Fragment>
			))}
		</Box>
	)
}
