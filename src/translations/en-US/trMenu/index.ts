import { foods } from './trFoods'
import { pizza } from './trPizza'
import { sushi } from './trSushi'
import { drinks } from './trDrinks'

export const menu = {
	...foods,
	...pizza,
	...sushi,
	...drinks,
} as const
