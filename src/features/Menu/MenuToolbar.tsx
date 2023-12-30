import { Box, Button, Toolbar } from '@thng/react'
import { useLayoutEffect, useRef, useState } from 'react'
import { DesktopArrowButton } from './DesktopArrowButton'

export const MenuToolbar = ({
	items,
	onItemClick,
}: {
	items: string[]
	onItemClick: (index: number) => void
}) => {
	const [selectedItem, setSelectedItem] = useState(0)
	const toolbarRef = useRef<HTMLDivElement>(null)
	const buttonRefs = useRef<HTMLButtonElement[] | null[]>([])
	const [needScrollButtons, setNeedScrollButtons] = useState(false)

	useLayoutEffect(() => {
		const toolbarButtonsWidth = buttonRefs.current.reduce(
			(width, current) => {
				return width + (current?.clientWidth ?? 0)
			},
			0
		)

		const onResize = () => {
			setNeedScrollButtons(window.innerWidth < toolbarButtonsWidth)
		}

		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	return (
		<Toolbar
			sx={{
				height: 48,
				boxShadow: (theme) => [
					`0px 1px 2px 0px ${theme.palette.secondary.main}`,
				],
				justifyContent: 'center',
			}}
		>
			{needScrollButtons && (
				<DesktopArrowButton divRef={toolbarRef} direction='left' />
			)}
			<Box
				ref={toolbarRef}
				sx={{
					overflow: 'auto',
					display: 'flex',
					scrollbarWidth: 'none',
					'::-webkit-scrollbar': {
						display: 'none',
					},
				}}
			>
				{items.map((item, index) => {
					return (
						<Button
							key={index}
							ref={(el) => {
								buttonRefs.current[index] = el
							}}
							variant='text'
							color='secondary'
							onClick={() => {
								setSelectedItem(index)
								onItemClick(index)
								buttonRefs.current[index]?.scrollIntoView({
									behavior: 'smooth',
									inline: 'center',
								})
							}}
							sx={[
								{
									minWidth: 'max-content',
									borderRadius: 0,
									py: 0,
								},
								selectedItem === index && {
									borderBottom: (theme) =>
										`2px solid ${theme.palette.secondary.main}`,
								},
							]}
						>
							{item}
						</Button>
					)
				})}
			</Box>
			{needScrollButtons && (
				<DesktopArrowButton divRef={toolbarRef} direction='right' />
			)}
		</Toolbar>
	)
}
