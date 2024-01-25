import { makeAutoObservable } from 'mobx'
import { Translations } from './translations'
import { english } from './english'
import { finnish } from './finnish'

export const translations = {
	'en-US': english,
	'fi-FI': finnish,
} as const

export type Locale = keyof typeof translations

export type Translation = keyof Translations

export class Translator {
	locale: Locale = 'fi-FI'

	constructor() {
		makeAutoObservable(this)

		const locale = localStorage.getItem('locale') as Locale | null
		if (locale) this.setLocale(locale)
	}

	setLocale = (locale: 'fi-FI' | 'en-US') => {
		this.locale = locale
		localStorage.setItem('locale', locale)
	}

	tr = (translation: Translation, ...variables: string[]) => {
		const tr = translations[this.locale][translation]
		if (!variables.length) return tr

		return tr.replace(/{(\d+)}/g, (match, number) => {
			return typeof variables[number] !== 'undefined'
				? variables[number]
				: match
		})
	}
}
