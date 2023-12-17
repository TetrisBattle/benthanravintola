import { Box, Tab, Tabs } from '@thng/react'
import { useEffect, useRef, useState } from 'react'
import { menus } from './data'
import { MenuItems } from './MenuItems'

export const Menu = () => {
	const [selectedTab, setSelectedTab] = useState(0)
	const menuRef = useRef<HTMLDivElement>(null)
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		if (scroll) {
			menuRef.current?.scrollIntoView()
			setScroll(false)
		}
	}, [scroll])

	return (
		<Box id='Menu'>
			<Tabs
				value={selectedTab}
				onChange={(_e, tab: number) => {
					setSelectedTab(tab)
				}}
				onClick={() => {
					setScroll(true)
				}}
				onAnimationEnd={() => {
					menuRef.current?.scrollIntoView()
				}}
				textColor='secondary'
				indicatorColor='secondary'
				variant='scrollable'
				scrollButtons='auto'
				sx={{
					position: 'sticky',
					top: 65, // Header height
					bgcolor: (theme) => theme.palette.primary.main,
					width: 1,
					borderBottom: `1px solid`,
					button: { color: (theme) => theme.palette.secondary.main },
				}}
			>
				{menus.map((menu) => {
					return <Tab key={menu.label} label={menu.label} />
				})}
			</Tabs>
			<Box
				sx={{
					height: `calc(100dvh - 65px - 65px - 48px)`,
					overflow: 'auto',
					scrollBehavior: 'smooth',
				}}
			>
				<Box sx={{ maxWidth: 600, mx: 'auto' }}>
					{menus.map((menu, index) => {
						return (
							<MenuItems
								key={menu.label}
								ref={selectedTab === index ? menuRef : null}
								label={menu.label}
								items={menu.items}
							/>
						)
					})}
				</Box>
			</Box>
		</Box>
	)
}
