import { global } from '../trGlobal'
import { weekdays } from './trWeekdays'
import { pages } from './trPages'
import { home } from './trHome'
import { menu } from './trMenu'
import { lunch } from './trLunch'
import { contact } from './trContact'
import { Translations } from 'translations'

export const finnish: Translations = {
	...global,
	...weekdays,
	...pages,
	...home,
	...menu,
	...lunch,
	...contact,
} as const

// export const additionalInfo = {
// 	1: '* Melko voimakkaasti maustettua',
// 	2: '** Voimakkaasti maustettua',
// 	3: '*** Tajun vievästi maustettua',
// }
