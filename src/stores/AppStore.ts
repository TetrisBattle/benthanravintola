import { makeAutoObservable } from 'mobx'

export class AppStore {
	isDarkMode = false
	isMobile = false

	constructor() {
		makeAutoObservable(this)
	}

	toggleDarkMode = () => {
		this.isDarkMode = !this.isDarkMode
	}

	setIsMobile = (isMobile: boolean) => {
		this.isMobile = isMobile
	}
}
