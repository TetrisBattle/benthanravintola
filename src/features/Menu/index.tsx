import { Box, Button, Toolbar, useTheme } from '@thng/react'
import { useEffect, useRef, useState } from 'react'
import { menus } from './data'
import { MenuItems } from './MenuItems'

export const Menu = () => {
	const [sectionId, setSectionId] = useState(0)
	const sectionRef = useRef<HTMLDivElement>(null)
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		if (scroll) {
			sectionRef.current?.scrollIntoView()
			setScroll(false)
		}
	}, [scroll])

	return (
		<Box id='Menu'>
			<Toolbar
				sx={{
					height: 48,
					overflow: 'auto',
					scrollbarWidth: 'none',
					'::-webkit-scrollbar': {
						display: 'none',
					},
					boxShadow: (theme) => [
						`0px 1px 2px 0px ${theme.palette.secondary.main}`,
					],
				}}
			>
				{menus.map((menu, index) => {
					return (
						<Button
							key={menu.label}
							variant='text'
							color='secondary'
							onClick={() => {
								setSectionId(index)
								setScroll(true)
							}}
							sx={[
								{
									height: 1,
									minWidth: 'max-content',
									borderRadius: 0,
								},
								sectionId === index && {
									borderBottom: (theme) =>
										`2px solid ${theme.palette.secondary.main}`,
								},
							]}
						>
							{menu.label}
						</Button>
					)
				})}
			</Toolbar>
			<Box
				sx={{
					height: `calc(100dvh - 65px - 65px - 47px)`,
					overflow: 'auto',
					scrollBehavior: 'smooth',
				}}
			>
				<Box sx={{ maxWidth: 600, mx: 'auto' }}>
					{menus.map((menu, index) => {
						return (
							<MenuItems
								key={menu.label}
								ref={sectionId === index ? sectionRef : null}
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
