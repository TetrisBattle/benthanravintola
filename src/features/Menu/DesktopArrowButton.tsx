import { IconButton } from '@thng/react'
import { BrowserView } from 'react-device-detect'
import { KeyboardArrowLeft as LeftArrowIcon } from '@mui/icons-material'
import { KeyboardArrowRight as RightArrowIcon } from '@mui/icons-material'

export const DesktopArrowButton = ({
	divRef,
	direction,
}: {
	divRef: React.RefObject<HTMLDivElement>
	direction: 'left' | 'right'
}) => {
	return (
		<BrowserView>
			<IconButton
				size='small'
				color='secondary'
				onClick={() => {
					divRef.current?.scrollBy({
						left:
							direction === 'left'
								? -divRef.current.clientWidth * 0.8
								: divRef.current.clientWidth * 0.8,
						behavior: 'smooth',
					})
				}}
			>
				{direction === 'left' ? <LeftArrowIcon /> : <RightArrowIcon />}
			</IconButton>
		</BrowserView>
	)
}
