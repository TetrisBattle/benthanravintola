import { global } from '../trGlobal'
import { pages } from './trPages'
import { home } from './trHome'
import { contact } from './trContact'
import { weekdays } from './trWeekdays'

export const english = {
	...global,
	...weekdays,
	...pages,
	...home,
	...contact,
} as const
