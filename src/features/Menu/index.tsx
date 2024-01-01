import { Box } from '@thng/react'
import { useRef } from 'react'
import { MenuList } from './MenuList'
import { MenuToolbar } from './MenuToolbar'
import { foods, pizza, sushi, drinks, strongAlcohols } from './menu'

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
					height: `calc(100dvh - 65px - 40px - 48px)`,
					overflow: 'auto',
				}}
			>
				<Box
					sx={{
						maxWidth: (theme) => theme.breakpoints.values.sm,
						mx: 'auto',
					}}
				>
					{foods.map((food, index) => {
						return (
							<MenuList
								key={food.label}
								ref={(el) => {
									sectionRefs.current[index] = el
								}}
								label={food.label}
								items={food.items}
							/>
						)
					})}
					<MenuList
						key='pizza'
						ref={(el) => {
							sectionRefs.current[foods.length] = el
						}}
						label='pizza'
						items={pizza}
					/>
					<MenuList
						key='sushi-nigiri'
						ref={(el) => {
							sectionRefs.current[foods.length + 1] = el
						}}
						label='Sushi'
						subLabel='Nigiri'
						items={sushi.nigiri}
					/>
					<MenuList
						key='sushi-maki'
						subLabel='Maki'
						items={sushi.maki}
					/>
					<MenuList
						key='drinks'
						ref={(el) => {
							sectionRefs.current[foods.length + 2] = el
						}}
						label='Juomat'
						items={drinks}
					/>
					<MenuList
						key='redWines'
						subLabel='Punaviini'
						items={strongAlcohols.redWines}
					/>
					<MenuList
						key='whiteWines'
						subLabel='Valkoviini'
						items={strongAlcohols.whiteWines}
					/>
					<MenuList
						key='liquors'
						subLabel='Väkevät'
						items={strongAlcohols.liquors}
					/>
				</Box>
			</Box>
		</Box>
	)
}
