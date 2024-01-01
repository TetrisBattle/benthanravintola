import { english } from './en-US'
import { finnish } from './fi-FI'

export type Locale = 'en-US' | 'fi-FI'
export type Translation = keyof typeof english
export type Translations = {
	[key in Translation]: string
}

export const translations = {
	'en-US': english,
	'fi-FI': finnish,
}
