import { english } from './en-US'
import { finnish } from './fi-FI'

export type Locale = 'en-US' | 'fi-FI'

export type Translation = keyof typeof english

export type Translations = {
	[key in Translation]: string
}

type TranslationsByLocale = {
	[locale in Locale]: Translations
}

export const translations: TranslationsByLocale = {
	'en-US': english,
	'fi-FI': finnish,
} as const
