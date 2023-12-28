import { Box } from '@thng/react'
import { useRef } from 'react'
import { menus } from './data'
import { MenuItems } from './MenuItems'
import { MenuToolbar } from './MenuToolbar'

export const Menu = () => {
	const sectionRefs = useRef<HTMLDivElement[] | null[]>([])

	return (
		<Box id='Menu'>
			<MenuToolbar
				items={menus.map((menu) => menu.label)}
				onItemClick={(index) => {
					sectionRefs.current?.[index]?.scrollIntoView({
						behavior: 'smooth',
					})
				}}
			/>
			<Box
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
