import { global } from '../trGlobal'
import { pages } from './trPages'
import { home } from './trHome'
import { menu } from './trMenu'
import { contact } from './trContact'
import { weekdays } from './trWeekdays'

export const english = {
	...global,
	...weekdays,
	...pages,
	...home,
	...menu,
	...contact,
} as const
