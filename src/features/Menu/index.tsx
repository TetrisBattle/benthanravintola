import { Box, Tab, Tabs } from '@thng/react'
import { useRef, useState } from 'react'
import { menu } from './data'
import { MenuItems } from './MenuItems'

export const Menu = () => {
	const [value, setValue] = useState(0)
	const alkuruoka = useRef<HTMLDivElement>(null)
	const kasviksia = useRef<HTMLDivElement>(null)
	const kanaa = useRef<HTMLDivElement>(null)

	return (
		<Box id='Menu'>
			<Tabs
				value={value}
				onChange={(_e, newValue: number) => setValue(newValue)}
				textColor='secondary'
				indicatorColor='secondary'
				variant='scrollable'
				sx={{
					position: 'sticky',
					top: 65, // Header height
					bgcolor: (theme) => theme.palette.primary.main,
					width: 1,
					borderBottom: `1px solid`,
					button: { color: (theme) => theme.palette.secondary.main },
					' .MuiTabs-flexContainer': {
						justifyContent: 'center',
					},
				}}
			>
				<Tab
					label='Alkuruoka'
					onClick={() => {
						alkuruoka.current?.scrollIntoView()
					}}
				/>
				<Tab
					label='Kasviksia'
					onClick={() => {
						kasviksia.current?.scrollIntoView()
					}}
				/>
				<Tab
					label='kanaa'
					onClick={() => {
						kanaa.current?.scrollIntoView()
					}}
				/>
			</Tabs>
			<Box
				sx={{
					height: `calc(100dvh - 65px - 65px - 48px)`,
					overflow: 'auto',
					scrollBehavior: 'smooth',
				}}
			>
				<Box sx={{ maxWidth: 600, mx: 'auto' }}>
					<MenuItems
						ref={alkuruoka}
						title='Alkuruoka'
						items={menu.alkuruoka}
					/>
					<MenuItems
						ref={kasviksia}
						title='Kasviksia'
						items={menu.kasviksia}
					/>
					<MenuItems ref={kanaa} title='Kanaa' items={menu.kanaa} />
				</Box>
			</Box>
		</Box>
	)
}
