import { Translations } from 'translations/translations'

export const finnish: Translations = {
	//#region Global
	COMPANY_NAME: 'Ben Than Ravintola',
	ERROR: 'Error',
	PAGE_NOT_FOUND: 'Sivua ei löytynyt!',
	RETURN_TO_HOME: 'Palaa etusivulle',
	//#endregion

	//#region Weekdays
	MONDAY: 'Maanantai',
	TUESDAY: 'Tiistai',
	WEDNESDAY: 'Keskiviikko',
	THURSDAY: 'Torstai',
	FRIDAY: 'Perjantai',
	SATURDAY: 'Lauantai',
	SUNDAY: 'Sunnuntai',

	MON_FRI: 'Ma - Pe',
	SAT: 'La',
	SUN: 'Su',
	//#endregion

	//#region Pages
	HOME: 'Etusivu',
	MENU: 'Menu',
	LUNCH: 'Lounas',
	CONTACT: 'Yhteystiedot',
	//#endregion

	//#region Home
	HOME_DESCRIPTION_BUFFET: `
		Ben Than Ravintola toivottaa sinut tervetulleeksi
		vietnamilaiseen ravintolaan. Tarjoilemme herkullista
		buffet-lounasta joka päivä arkisin klo {0}. Buffetin
		hinta on {1}. Buffettimme sisältää vietnamilaisien
		ruokien lisäksi pitzaa ja sushia. Lounaalla voit nauttia
		runsaista annoksista kaikkia suosikkiruokiasi.`,
	HOME_DESCRIPTION_VIETNAM: `
		Vietnamilainen ruoka on täynnä makua, väriä ja tuoreutta.
		Ravintolassamme on lämmin ja viihtyisä tunnelma. Tämä on
		täydellinen tapa kokea Etelä-Aasian tunnelmaa.`,
	//#endregion

	//#region Menu
	//#region Foods
	//#region Appetizer
	APPETIZER: 'Alkuruoka',
	SHRIMP_ASPARAGUS_SOUP: 'Katkarapuparsakeitto',
	SHRIMP_MUSHROOM_SOUP: 'Katkarapukeitto ja herkkusieniä',
	CHICKEN_BAMBOO_SOUP: 'Kana bambukeitto',
	SPRING_ROLLS_AND_SALAD: 'Kevätkääryle ja salaattia (kpl)',
	BEIJING_SOUP: 'Peking keitto / Katkarapuja ja kasviksia',
	//#endregion

	//#region Vegetables
	VEGETABLES: 'Kasviksia',
	TOFU_IN_CHILI_SAUCE: 'Tofu chilikastikkeessa ***',
	TOFU_IN_SZECHUAN_SAUCE: 'Tofu szechuankastikkeessa **',
	TOFU_IN_SWEET_SAUCE: 'Tofu hapanimeläkastikkeessa',
	TOFU_IN_HOT_GARLIC_SAUCE: 'Tofu voimakkaassa valkosipulikastikkeessa **',
	VEGETABLES_IN_OYSTER_SAUCE: 'Kasviksia osterikastikkeessa *',
	VEGETABLES_IN_CHILI_SAUCE: 'Kasviksia chilikastikkeessa ***',
	VEGETABLES_IN_SWEET_SAUCE: 'Kasviksia hapanimeläkastikkeessa',
	VEGETABLES_IN_CURRY_SAUCE: 'Kasviksia currykastikkeessa *',
	VEGETABLES_IN_HOT_GARLIC_SAUCE:
		'Kasviksia voimakkaassa valkosipulikastikkeessa **',
	//#endregion

	//#region Chicken
	CHICKEN: 'Kanaa',
	CHICKEN_IN_CURRY_SAUCE: 'Kanaa currykastikkeessa *',
	CHICKEN_IN_CHILI_SAUCE: 'Kanaa chilikastikkeessa ***',
	CHICKEN_IN_SWEET_SAUCE: 'Kanaa hapanimeläkastikkeessa',
	CHICKEN_IN_TOMATO_SAUCE: 'Kanaa tomaattikastikkeessa *',
	CHICKEN_IN_OYSTER_SAUCE: 'Kanaa osterikastikkeessa *',
	CHICKEN_IN_SZECHUAN_SAUCE: 'Kanaa szechuankastikkeessa **',
	CHICKEN_IN_SATAY_SAUCE: 'Kanaa sataykastikkeessa **',
	CHICKEN_IN_HOT_GARLIC_SAUCE:
		'Kanaa voimakkaassa valkosipulikastikkeessa **',
	CHICKEN_BAMBOO_AND_MUSHROOMS: 'Kanaa, bambua ja herkkusieniä',
	CHICKEN_HOUSE_STYLE: 'Kanaa talon tapaan *',
	//#endregion

	//#region Pork
	PORK: 'Possua',
	PORK_IN_CURRY_SAUCE: 'Possua currykastikkeessa *',
	PORK_IN_CHILI_SAUCE: 'Possua chilikastikkeessa ***',
	PORK_IN_SWEET_SAUCE: 'Possua hapanimeläkastikkeessa',
	PORK_IN_TOMATO_SAUCE: 'Possua tomaattikastikkeessa *',
	PORK_IN_OYSTER_SAUCE: 'Possua osterikastikkeessa *',
	PORK_IN_SZECHUAN_SAUCE: 'Possua szechuankastikkeessa **',
	PORK_IN_SATAY_SAUCE: 'Possua sataykastikkeessa **',
	PORK_IN_HOT_GARLIC_SAUCE: 'Possua voimakkaassa valkosipulikastikkeessa **',
	PORK_BAMBOO_AND_MUSHROOMS: 'Possua, bambua ja herkkusieniä',
	PORK_HOUSE_STYLE: 'Possua talon tapaan *',
	//#endregion

	//#region Beef
	BEEF: 'Härkää',
	BEEF_IN_CURRY_SAUCE: 'Härkää currykastikkeessa *',
	BEEF_IN_CHILI_SAUCE: 'Härkää chilikastikkeessa ***',
	BEEF_IN_SWEET_SAUCE: 'Härkää hapanimeläkastikkeessa',
	BEEF_IN_TOMATO_SAUCE: 'Härkää tomaattikastikkeessa *',
	BEEF_IN_OYSTER_SAUCE: 'Härkää osterikastikkeessa *',
	BEEF_IN_SZECHUAN_SAUCE: 'Härkää szechuankastikkeessa **',
	BEEF_IN_SATAY_SAUCE: 'Härkää sataykastikkeessa **',
	BEEF_IN_HOT_GARLIC_SAUCE: 'Härkää voimakkaassa valkosipulikastikkeessa **',
	BEEF_BAMBOO_AND_MUSHROOMS: 'Härkää, bambua ja herkkusieniä',
	BEEF_HOUSE_STYLE: 'Härkää talon tapaan *',
	//#endregion

	//#region Fish
	FISH: 'Kalaa',
	SQUID_IN_CHILI_SAUCE: 'Mustekalaa chilikastikkeessa ***',
	SQUID_IN_TOMATO_SAUCE: 'Mustekalaa tomaattikastikkeessa *',
	SQUID_IN_SZECHUAN_SAUCE: 'Mustekalaa szechuankastikkeessa **',
	SQUID_IN_SWEET_SAUCE: 'Mustekalaa hapanimeläkastikkeessa',
	SQUID_IN_CURRY_SAUCE: 'Mustekalaa currykastikkeessa *',

	PIKE_PERCH_FILLET_IN_CHILI_SAUCE: 'Kuhafilettä chilikastikkeessa ***',
	PIKE_PERCH_FILLET_IN_TOMATO_SAUCE: 'Kuhafilettä tomaattikastikkeessa *',
	PIKE_PERCH_FILLET_IN_SZECHUAN_SAUCE: 'Kuhafilettä szechuankastikkeessa **',

	SALMON_IN_SWEET_SAUCE: 'Lohta hapanimeläkastikkeessa',
	SALMON_IN_CURRY_SAUCE: 'Lohta currykastikkeessa *',
	//#endregion

	//#region Shrimps
	SHRIMPS: 'Katkarapuja',
	SHRIMPS_IN_CHILI_SAUCE: 'Katkarapuja chilikastikkeessa ***',
	SHRIMPS_IN_SZECHUAN_SAUCE: 'Katkarapuja szechuankastikkeessa **',
	SHRIMPS_IN_HOT_GARLIC_SAUCE:
		'Katkarapuja voimakkaassa valkosipulikastikkeessa **',
	SHRIMPS_IN_CURRY_SAUCE: 'Katkarapuja currykastikkeessa *',
	SHRIMPS_IN_SWEET_SAUCE: 'Katkarapuja hapanimeläkastikkeessa',

	CRAB_IN_CHILI_SAUCE: 'Rapuja chilikastikkeessa ***',
	CRAB_IN_SZECHUAN_SAUCE: 'Rapuja szechuankastikkeessa **',
	CRAB_IN_HOT_GARLIC_SAUCE: 'Rapuja voimakkaassa valkosipulikastikkeessa **',
	CRAB_IN_SWEET_SAUCE: 'Rapuja hapanimeläkastikkeessa',
	CRAB_IN_CURRY_SAUCE: 'Rapuja currykastikkeessa *',
	//#endregion

	//#region RiceSpecial
	RICE: 'Riisi special',
	RICE_SPECIAL: 'Riisi special **',
	RICE_SPECIAL_DESCRIPTION:
		'Riisi special härällä, kanalla ja katkaravuilla **',
	RICE_CHICKEN: 'Riisiä ja kanaa',
	RICE_BEEF: 'Riisiä ja härkää *',
	RICE_PORK_SHRIMPS_EGGS: 'Riisiä, possua, katkarapuja ja kananmunaa',
	NOODLES_BEEF_CHICKEN_PORK_SHRIMPS:
		'Nuudeli, härkää, kanaa, possua ja katkarapuja *',
	NOODLES_CHICKEN_SHRIMPS_EGGS: 'Nuudeli, kanaa, katkarapuja ja kananmunaa',
	VERMICELLI: 'Riisivermiselliä, härkää, kanaa ja possua *',
	RICE_PASTA: 'Riisipasta, härkää, kanaa, possua ja katkarapuja *',
	//#endregion

	//#region HouseSpecial
	HOUSE_SPECIAL: 'House special',
	DEEP_FRIED_CHICKEN: 'Friteerattua kanaa hapanimeläkastikkeessa',
	DEEP_FRIED_PORK: 'Friteerattua possua hapanimeläkastikkeessa',
	DEEP_FRIED_SHRIMPS: 'Friteerattuja katkarapuja hapanimeläkastikkeessa',
	BEIJING_DUCK: 'Pekingin ankkaa hoisinkastikkeessa',
	SEA_FOOD: 'Sea food',
	SEA_FOOD_DESCRIPTION: 'Katkarapuja, mustekalaa, simpukkaa ja vihanneksia',
	//#endregion

	//#region Dessert
	DESSERT: 'Jälkiruoka',
	ICE_CREAM_FRIED_BANANA: 'Paahdettua banaania ja jäätelö',
	ICE_CREAM_PINEAPPLE: 'Paahdettua ananasta ja jäätelö',
	ICE_CREAM_CHOCOLATE_SAUCE: 'Jäätelöä suklaakastikkeella',
	ICE_CREAM_BALL: 'Jäätelöpallo',
	//#endregion
	//#endregion

	//#region Pizza
	PIZZA: 'Pizza',
	MINCED_MEAT_PIZZA: 'Jauheliha pizza',
	MINCED_MEAT_PIZZA_DESCRIPTION: 'Jauheliha',
	CALZONE: 'Calzone',
	CALZONE_DESCRIPTION: 'Kinkku, jauheliha',
	ALCAPONE: 'Alcapone',
	ALCAPONE_DESCRIPTION: 'Kinkku, ananas, paprika',
	CARUZO: 'Caruzo',
	CARUZO_DESCRIPTION: 'Kinkku, herkkusieni, katkarapu',
	NAPOLI: 'Napoli',
	NAPOLI_DESCRIPTION: 'Kinkku, salami, herne',
	VENEZIA: 'Venezia',
	VENEZIA_DESCRIPTION: 'Salami, tonnikala, kananmuna',
	TROPICANA: 'Tropicana',
	TROPICANA_DESCRIPTION: 'Kinkku, ananas, aurajuusto',
	HAWAI: 'Hawai',
	HAWAI_DESCRIPTION: 'Kinkku, tonnikala, katkarapu',
	BACON_PIZZA: 'Pekonipizza',
	BACON_PIZZA_DESCRIPTION: 'Pepperoni, sipuli, pekoni',
	AMERICAN: 'Jenkki',
	AMERICAN_DESCRIPTION: 'Salami, pekoni, sipuli',
	SAN_ZIRNIONE: 'San zirnione',
	SAN_ZIRNIONE_DESCRIPTION: 'Kinkku, paprika, sipuli, katkarapu',
	MEXICANO: 'Mexicano',
	MEXICANO_DESCRIPTION: 'Pepperoni, jalapeno, ananas',
	VEGETARIANA: 'Vegetariana',
	VEGETARIANA_DESCRIPTION: 'Herkkusieni, paprika, aurajuusto',
	KEBAB_PIZZA: 'Kebab pizza',
	KEBAB_PIZZA_DESCRIPTION: 'Kebab, chilikastike, pepperoni, jalapeno',
	ISTANBUL: 'Istanbul',
	ISTANBUL_DESCRIPTION: 'Kebab, pepperoni, sipuli, majoneesi',
	KEBAB_SPECIAL: 'Kebab special',
	KEBAB_SPECIAL_DESCRIPTION: 'Kebab, jauheliha, pepperoni, tuore tomaatti',
	FANTASIA: 'Fantasia',
	FANTASIA_DESCRIPTION: 'Neljä täytettä oman maun mukaan',
	//#endregion

	//#region Sushi
	SUSHI: 'Sushi',
	NIGIRI: 'Nigiri',
	NIGIRI_SALMON: 'Lohi nigiri',
	NIGIRI_GRILLED_SALMON: 'Grillattu lohi nigiri',
	NIGIRI_SHRIMP: 'Katkarapu nigiri',
	NIGIRI_SURIMI: 'Surimi nigiri',
	NIGIRI_SURIMI_MAYO: 'Surimi majoneesi nigiri',
	NIGIRI_EGG: 'Kananmuna nigiri',
	NIGIRI_TOFU: 'Tofu nigiri',
	NIGIRI_AVOCADO: 'Avokado nigiri',
	NIGIRI_RAINBOW_TROUT: 'Kirjolohen mäti nigiri',
	PIECES_10: '10 kpl',

	MAKI: 'Maki rullat',
	MAKI_SALMON: 'Lohi maki',
	MAKI_CUCUMBER: 'Kurkku maki',
	MAKI_AVOCADO: 'Avokado maki',
	MAKI_GRILLED_SALMON: 'Grillattu lohi maki',
	MAKI_CALIFORNIA: 'California maki',
	MAKI_CALIFORNIA_DESCRIPTION: 'Surimi, avokado, kurkku, majoneesi',
	MAKI_PHILADELFIA: 'Philadelfia maki',
	MAKI_PHILADELFIA_DESCRIPTION: 'Lohi, avokado, kurkku, majoneesi',
	DRAGON_ROLL: 'Dragon roll',
	DRAGON_ROLL_DESCRIPTION: 'Paahdettu katkarapu, kurkku, philadel juusto',
	MAKI_VEGE_CALIFORNIA: 'Kasvis california maki',
	MAKI_VEGE_CALIFORNIA_DESCRIPTION:
		'Avokado, kurkku, paprika, grillattu sipuli, majoneesi',
	//#endregion

	//#region Drinks
	DRINKS: 'Juomat',
	WATER: 'Vesi',
	MILK: 'Maito',
	LEMONADE: 'Virvoitusjuoma',
	LAPINKULTA: 'Lapinkulta olut IV',
	TSINGTAO: 'Tsingtao olut III',
	CIDER: 'Lonkero',
	APPLE_CIDER: 'Omenasiideri',
	PEAR_CIDER: 'Päärynäsiideri',
	COFFEE: 'Kahvi',
	TEA: 'Tee',
	TEAPOT: 'Teepannu',

	RED_WINE: 'Punaviini',
	WHITE_WINE: 'Valkoviini',
	ROSIERE_SYRAH: 'Rosiere syrah',
	ROSIERE_SYRAH_DESCRIPTION:
		'Ranska kevyt, puolikuiva, pehmeä, makean marjaisa',
	JACOBS_CREEK: "Jacob's creek",

	ALCOHOLS: 'Viinat',
	COGNAC: 'Konjakki',
	MONOPOL: 'Monopol v.s.o.p. (4cl)',
	WHISKEY: 'Viski',
	JACK_DANIELS: "Jack Daniel's (4cl)",
	KOSKENKORVA: 'Koskenkorva (4cl)',

	L33: '- 0.33l',
	L50: '- 0.5l',
	CL_12: '- 12cl',
	CL_16: '- 16cl',
	CL_24: '- 24cl',
	CL_75: '- 75cl / pullo',
	//#endregion
	//#endregion

	//#region Lunch
	MONDAY_CHICKEN: 'Kanaa osterikastikkeessa *',
	MONDAY_PORK: 'Possu szechuan **',
	MONDAY_BEEF: 'Härkä ananasta **',
	MONDAY_RICE_CHICKEN: 'Riisiä ja kanaa',
	MONDAY_RICE_PORK: 'Riisipastaa, possua ja kanaa',
	MONDAY_SALMON: 'Lohta chilikastikkeessa ***',
	MONDAY_VEGETABLES: 'Kasviksia currykastikkeessa *',

	TUESDAY_CHICKEN: 'Kanaa sataykastikkeessa *',
	TUESDAY_PORK: 'Possua hoisin kastikkeessa',
	TUESDAY_BEEF: 'Härkää chilikastikkeessa***',
	TUESDAY_RICE: 'Riisiä vietnamilaiseen tapaan*',
	TUESDAY_RICE_BEEF: 'Riisivermiselliä ja härkää',
	TUESDAY_SALMON: 'Lohta hapanimelläkastikkeessa',
	TUESDAY_VEGETABLES: 'Kasviksia voimakakkaassa valkosipuli kastikkeessa',

	WEDNESDAY_CHICKEN: 'Kana szechuan **',
	WEDNESDAY_PORK: 'Possua tomaattikastikkeessa *',
	WEDNESDAY_BEEF: 'Härkää voimakakkaassa valkosipuli kastikkeessa **',
	WEDNESDAY_RICE_BEEF: 'Riisiä ja härkää',
	WEDNESDAY_RICE_PORK: 'Riisipastaa, possua ja kanaa',
	WEDNESDAY_SALMON: 'Lohta currykastikkeessa *',
	WEDNESDAY_VEGETABLES: 'Kasviksia chilikastikkeessa ***',

	THURSDAY_CHICKEN: 'Kanaa chilikastikkeessa ***',
	THURSDAY_PORK: 'Possua currykastikkeessa *',
	THURSDAY_BEEF: 'Härkää sataykastikkeessa *',
	THURSDAY_RICE_PORK: 'Riisiä ja possua',
	THURSDAY_TOFU: 'Tofu hoisin kastikkeessa',
	THURSDAY_SALMON: 'Lohi szechuan **',
	THURSDAY_VEGETABLES: 'Kasviksia osterikastikkeessa *',

	FRIDAY_CHICKEN: 'Kanaa voimakakkaassa valkosipuli kastikkeessa **',
	FRIDAY_PORK: 'Possua talon tapaan *',
	FRIDAY_BEEF: 'Härkä szechuan **',
	FRIDAY_RICE_SPECIAL: 'Riisi special **',
	FRIDAY_NOODLE: 'Nuudeli, kanaa, kananmuna, ja katkarapuja',
	FRIDAY_SALMON: 'Lohta tomaattikastikkeessa *',
	FRIDAY_VEGETABLES: 'Kasviksia hapanimeläkastikeessa',
	//#endregion

	//#region Contact
	OPENING_TIMES: 'Aukioloajat',
	CLOSED: 'Suljettu',
	PHONE_NUMBER: 'Puhelinnumero',
	EMAIL: 'Sähköposti',
	ADDRESS: 'Osoite',
	//#endregion
} as const

// export const additionalInfo = {
// 	1: '* Melko voimakkaasti maustettua',
// 	2: '** Voimakkaasti maustettua',
// 	3: '*** Tajun vievästi maustettua',
// }
