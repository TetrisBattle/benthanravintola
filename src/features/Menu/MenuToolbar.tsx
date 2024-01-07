import { Box, Button, Toolbar } from '@thng/react'
import { useLayoutEffect, useRef, useState } from 'react'
import { DesktopArrowButton } from './DesktopArrowButton'
import { Translation } from 'translations'
import { useTranslator } from 'hooks/useTranslator'

export const MenuToolbar = ({
	items,
	onItemClick,
}: {
	items: Translation[]
	onItemClick: (index: number) => void
}) => {
	const { tr } = useTranslator()
	const [selectedItem, setSelectedItem] = useState(0)
	const toolbarRef = useRef<HTMLDivElement>(null)
	const buttonRefs = useRef<HTMLButtonElement[] | null[]>([])
	const [showLeftArrow, setShowLeftArrow] = useState(false)
	const [showRightArrow, setShowRightArrow] = useState(false)
	const [showArrows, setShowArrows] = useState(false)

	useLayoutEffect(() => {
		showArrowsByScroll()
	}, [])

	useLayoutEffect(() => {
		const onResize = () => {
			const arrowWidth = 34
			const toolbarWidth =
				(toolbarRef.current?.scrollWidth ?? 0) + arrowWidth * 2

			if (window.innerWidth < toolbarWidth) {
				setShowArrows(true)
				showArrowsByScroll()
			} else setShowArrows(false)
		}

		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [selectedItem])

	function showArrowsByScroll() {
		const scrolledFromLeft = toolbarRef.current?.scrollLeft ?? 0
		const scrollbarWidth = toolbarRef.current?.scrollWidth ?? 0
		const containerWidth = toolbarRef.current?.clientWidth ?? 0
		const scrolled =
			(scrolledFromLeft / (scrollbarWidth - containerWidth)) * 100

		setShowLeftArrow(scrolled === 0 ? false : true)
		setShowRightArrow(scrolled > 95 ? false : true)
	}

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
			<DesktopArrowButton
				divRef={toolbarRef}
				direction='left'
				hidden={!showArrows || !showLeftArrow}
			/>
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
				onScroll={showArrowsByScroll}
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
							{tr(item)}
						</Button>
					)
				})}
			</Box>
			<DesktopArrowButton
				divRef={toolbarRef}
				direction='right'
				hidden={!showArrows || !showRightArrow}
			/>
		</Toolbar>
	)
}
