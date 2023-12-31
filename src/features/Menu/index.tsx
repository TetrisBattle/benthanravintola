import { Box } from '@thng/react'
import { useRef } from 'react'
import { foods, pizza, sushi, drinks, strongAlcohols } from './data'
import { MenuItems } from './MenuItems'
import { MenuToolbar } from './MenuToolbar'

export const Menu = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const sectionRefs = useRef<HTMLDivElement[] | null[]>([])

	return (
		<Box id='Menu'>
			<MenuToolbar
				items={[
					...foods.map((food) => food.label),
					'Pizza',
					'Sushi',
					'Juomat',
				]}
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
					{foods.map((food, index) => {
						return (
							<MenuItems
								key={food.label}
								ref={(el) => {
									sectionRefs.current[index] = el
								}}
								label={food.label}
								items={food.items}
							/>
						)
					})}
					<MenuItems
						key='pizza'
						ref={(el) => {
							sectionRefs.current[foods.length] = el
						}}
						label='pizza'
						items={pizza}
					/>
					<MenuItems
						key='sushi-nigiri'
						ref={(el) => {
							sectionRefs.current[foods.length + 1] = el
						}}
						label='Sushi'
						subLabel='Nigiri'
						items={sushi.nigiri}
					/>
					<MenuItems
						key='sushi-maki'
						subLabel='Maki'
						items={sushi.maki}
					/>
					<MenuItems
						key='drinks'
						ref={(el) => {
							sectionRefs.current[foods.length + 2] = el
						}}
						label='Juomat'
						items={drinks}
					/>
					<MenuItems
						key='redWines'
						subLabel='Punaviini'
						items={strongAlcohols.redWines}
					/>
					<MenuItems
						key='whiteWines'
						subLabel='Valkoviini'
						items={strongAlcohols.whiteWines}
					/>
					<MenuItems
						key='liquors'
						subLabel='Väkevät'
						items={strongAlcohols.liquors}
					/>
				</Box>
			</Box>
		</Box>
	)
}
