import { Translator } from 'stores/Translator'
import { AppStore } from './AppStore'

export class RootStore {
	translator = new Translator()
	appStore = new AppStore()
}
