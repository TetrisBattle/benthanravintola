import { makeAutoObservable } from 'mobx'
import { Locale, Translation, translations } from '../translations'

export class Translator {
	locale: Locale = 'fi-FI'

	constructor() {
		makeAutoObservable(this)
	}

	setLocale = (locale: 'fi-FI' | 'en-US') => {
		this.locale = locale
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
