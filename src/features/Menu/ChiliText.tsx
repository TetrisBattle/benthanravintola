import { Box, Typography } from '@thng/react'
import chili from 'assets/chili.png'
import { MenuItem } from 'features/Menu/menu'
import { useTranslator } from 'hooks/useTranslator'
import { observer } from 'mobx-react-lite'
import { Fragment } from 'react'

export const ChiliText = observer(({ id, name }: Omit<MenuItem, 'price'>) => {
	const { tr } = useTranslator()
	let translatedName = tr(name)

	const chiliAmount = translatedName.split('*').length - 1
	const chiliImg = <img src={chili} alt='Chili' width={16} height={16} />
	const chiliImgs = [...Array(chiliAmount)].map(() => chiliImg)

	translatedName = tr(name).replace(/\*/g, '')
	const text = id ? `${id}. ${translatedName}` : translatedName

	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
			}}
		>
			<Typography sx={{ mr: 0.5 }}>{text}</Typography>
			<Box>
				{chiliImgs.map((img, index) => (
					<Fragment key={index}>{img}</Fragment>
				))}
			</Box>
		</Box>
	)
})
