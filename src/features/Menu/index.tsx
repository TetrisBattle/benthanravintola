import { Box } from '@thng/react'
import { useRef } from 'react'
import { menus } from './data'
import { MenuItems } from './MenuItems'
import { MenuToolbar } from './MenuToolbar'

export const Menu = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const sectionRefs = useRef<HTMLDivElement[] | null[]>([])

	return (
		<Box id='Menu'>
			<MenuToolbar
				items={menus.map((menu) => menu.label)}
				onItemClick={(index) => {
					const section = sectionRefs.current[index]
					containerRef.current?.scrollTo({
						top: section ? section.offsetTop - 113 : undefined,
						behavior: 'smooth',
					})
				}}
			/>
			<Box
				ref={containerRef}
				sx={{
					height: `calc(100dvh - 65px - 48px - 47px)`,
					overflow: 'auto',
				}}
			>
				<Box sx={{ maxWidth: 600, mx: 'auto' }}>
					{menus.map((menu, index) => {
						return (
							<MenuItems
								key={menu.label}
								ref={(el) => {
									sectionRefs.current[index] = el
								}}
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
