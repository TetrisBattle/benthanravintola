import { global } from '../trGlobal'
import { weekdays } from './trWeekdays'
import { pages } from './trPages'
import { home } from './trHome'
import { contact } from './trContact'
import { Translations } from 'translations'

export const finnish: Translations = {
	...global,
	...weekdays,
	...pages,
	...home,
	...contact,
} as const
