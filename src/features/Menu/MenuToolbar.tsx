import { Tab, Tabs } from '@thng/react'
import { useRef, useState } from 'react'

export const MenuToolbar = ({
	items,
	onItemClick,
}: {
	items: string[]
	onItemClick: (index: number) => void
}) => {
	const [selectedTab, setSelectedTab] = useState(0)
	const toolbarRef = useRef<HTMLDivElement>(null)
	const buttonRefs = useRef<HTMLDivElement[] | null[]>([])

	return (
		<Tabs
			ref={toolbarRef}
			value={selectedTab}
			textColor='secondary'
			indicatorColor='secondary'
			variant='scrollable'
			scrollButtons='auto'
			TabIndicatorProps={{ sx: { transition: 'none' } }}
			sx={{
				position: 'sticky',
				top: 65, // Header height
				bgcolor: (theme) => theme.palette.primary.main,
				width: 1,
				borderBottom: `1px solid`,
				button: { color: (theme) => theme.palette.secondary.main },
				' *': {
					transition: 'none',
				},
			}}
		>
			{items.map((item, index) => {
				return (
					<Tab
						key={item}
						ref={(el) => {
							buttonRefs.current[index] = el
						}}
						label={item}
						onClick={() => {
							setSelectedTab(index)
							onItemClick(index)
							buttonRefs.current[index]?.scrollIntoView({
								behavior: 'smooth',
								inline: 'center',
							})

							// Scroll to the selected tab
							// const tabsContainer =
							// 	toolbarRef.current?.children[2]
							// const tab = buttonRefs.current[index]

							// if (tabsContainer && tab) {
							// 	const tabPos =
							// 		tab.offsetLeft + tab.offsetWidth / 2
							// 	const scrollPos = tabPos - window.innerWidth / 2

							// 	requestAnimationFrame(() => {
							// 		tabsContainer.scrollTo({
							// 			left: scrollPos,
							// 			behavior: 'smooth',
							// 		})
							// 	})
							// }
						}}
					/>
				)
			})}
		</Tabs>
	)
}
