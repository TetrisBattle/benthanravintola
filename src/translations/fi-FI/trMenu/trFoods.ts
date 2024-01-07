const foodsInSections = {
	appetizer: {
		APPETIZER: 'Alkuruoka',
		SHRIMP_ASPARAGUS_SOUP: 'Katkarapuparsakeitto',
		SHRIMP_MUSHROOM_SOUP: 'Katkarapukeitto ja herkkusieniä',
		CHICKEN_BAMBOO_SOUP: 'Kana bambukeitto',
		SPRING_ROLLS_AND_SALAD: 'Kevätkääryle ja salaattia (kpl)',
		BEIJING_SOUP: 'Peking keitto / Katkarapuja ja kasviksia',
	},
	vegetables: {
		VEGETABLES: 'Kasviksia',
		TOFU_IN_CHILI_SAUCE: 'Tofu chilikastikkeessa ***',
		TOFU_IN_SZECHUAN_SAUCE: 'Tofu szechuankastikkeessa **',
		TOFU_IN_SWEET_SAUCE: 'Tofu hapanimeläkastikkeessa',
		TOFU_IN_HOT_GARLIC_SAUCE:
			'Tofu voimakkaassa valkosipulikastikkeessa **',
		VEGETABLES_IN_OYSTER_SAUCE: 'Kasviksia osterikastikkeessa *',
		VEGETABLES_IN_CHILI_SAUCE: 'Kasviksia chilikastikkeessa ***',
		VEGETABLES_IN_SWEET_SAUCE: 'Kasviksia hapanimeläkastikkeessa',
		VEGETABLES_IN_CURRY_SAUCE: 'Kasviksia currykastikkeessa *',
		VEGETABLES_IN_HOT_GARLIC_SAUCE:
			'Kasviksia voimakkaassa valkosipulikastikkeessa **',
	},
	chicken: {
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
	},
	pork: {
		PORK: 'Possua',
		PORK_IN_CURRY_SAUCE: 'Possua currykastikkeessa *',
		PORK_IN_CHILI_SAUCE: 'Possua chilikastikkeessa ***',
		PORK_IN_SWEET_SAUCE: 'Possua hapanimeläkastikkeessa',
		PORK_IN_TOMATO_SAUCE: 'Possua tomaattikastikkeessa *',
		PORK_IN_OYSTER_SAUCE: 'Possua osterikastikkeessa *',
		PORK_IN_SZECHUAN_SAUCE: 'Possua szechuankastikkeessa **',
		PORK_IN_SATAY_SAUCE: 'Possua sataykastikkeessa **',
		PORK_IN_HOT_GARLIC_SAUCE:
			'Possua voimakkaassa valkosipulikastikkeessa **',
		PORK_BAMBOO_AND_MUSHROOMS: 'Possua, bambua ja herkkusieniä',
		PORK_HOUSE_STYLE: 'Possua talon tapaan *',
	},
	beef: {
		BEEF: 'Härkää',
		BEEF_IN_CURRY_SAUCE: 'Härkää currykastikkeessa *',
		BEEF_IN_CHILI_SAUCE: 'Härkää chilikastikkeessa ***',
		BEEF_IN_SWEET_SAUCE: 'Härkää hapanimeläkastikkeessa',
		BEEF_IN_TOMATO_SAUCE: 'Härkää tomaattikastikkeessa *',
		BEEF_IN_OYSTER_SAUCE: 'Härkää osterikastikkeessa *',
		BEEF_IN_SZECHUAN_SAUCE: 'Härkää szechuankastikkeessa **',
		BEEF_IN_SATAY_SAUCE: 'Härkää sataykastikkeessa **',
		BEEF_IN_HOT_GARLIC_SAUCE:
			'Härkää voimakkaassa valkosipulikastikkeessa **',
		BEEF_BAMBOO_AND_MUSHROOMS: 'Härkää, bambua ja herkkusieniä',
		BEEF_HOUSE_STYLE: 'Härkää talon tapaan *',
	},
	fish: {
		FISH: 'Kalaa',
		SQUID_IN_CHILI_SAUCE: 'Mustekalaa chilikastikkeessa ***',
		SQUID_IN_TOMATO_SAUCE: 'Mustekalaa tomaattikastikkeessa *',
		SQUID_IN_SZECHUAN_SAUCE: 'Mustekalaa szechuankastikkeessa **',
		SQUID_IN_SWEET_SAUCE: 'Mustekalaa hapanimeläkastikkeessa',
		SQUID_IN_CURRY_SAUCE: 'Mustekalaa currykastikkeessa *',

		PIKE_PERCH_FILLET_IN_CHILI_SAUCE: 'Kuhafilettä chilikastikkeessa ***',
		PIKE_PERCH_FILLET_IN_TOMATO_SAUCE: 'Kuhafilettä tomaattikastikkeessa *',
		PIKE_PERCH_FILLET_IN_SZECHUAN_SAUCE:
			'Kuhafilettä szechuankastikkeessa **',

		SALMON_IN_SWEET_SAUCE: 'Lohta hapanimeläkastikkeessa',
		SALMON_IN_CURRY_SAUCE: 'Lohta currykastikkeessa *',
	},
	shrimps: {
		SHRIMPS: 'Katkarapuja',
		SHRIMPS_IN_CHILI_SAUCE: 'Katkarapuja chilikastikkeessa ***',
		SHRIMPS_IN_SZECHUAN_SAUCE: 'Katkarapuja szechuankastikkeessa **',
		SHRIMPS_IN_HOT_GARLIC_SAUCE:
			'Katkarapuja voimakkaassa valkosipulikastikkeessa **',
		SHRIMPS_IN_CURRY_SAUCE: 'Katkarapuja currykastikkeessa *',
		SHRIMPS_IN_SWEET_SAUCE: 'Katkarapuja hapanimeläkastikkeessa',

		CRAB_IN_CHILI_SAUCE: 'Rapuja chilikastikkeessa ***',
		CRAB_IN_SZECHUAN_SAUCE: 'Rapuja szechuankastikkeessa **',
		CRAB_IN_HOT_GARLIC_SAUCE:
			'Rapuja voimakkaassa valkosipulikastikkeessa **',
		CRAB_IN_SWEET_SAUCE: 'Rapuja hapanimeläkastikkeessa',
		CRAB_IN_CURRY_SAUCE: 'Rapuja currykastikkeessa *',
	},
	riceSpecial: {
		RICE: 'Riisi special',
		RICE_SPECIAL: 'Riisi special **',
		RICE_SPECIAL_DESCRIPTION:
			'Riisi special härällä, kanalla ja katkaravuilla **',
		RICE_CHICKEN: 'Riisiä ja kanaa',
		RICE_BEEF: 'Riisiä ja härkää *',
		RICE_PORK_SHRIMPS_EGGS: 'Riisiä, possua, katkarapuja ja kananmunaa',
		NOODLES_BEEF_CHICKEN_PORK_SHRIMPS:
			'Nuudeli, härkää, kanaa, possua ja katkarapuja *',
		NOODLES_CHICKEN_SHRIMPS_EGGS:
			'Nuudeli, kanaa, katkarapuja ja kananmunaa',
		VERMICELLI: 'Riisivermiselliä, härkää, kanaa ja possua *',
		RICE_PASTA: 'Riisipasta, härkää, kanaa, possua ja katkarapuja *',
	},
	houseSpecial: {
		HOUSE_SPECIAL: 'House special',
		DEEP_FRIED_CHICKEN: 'Friteerattua kanaa hapanimeläkastikkeessa',
		DEEP_FRIED_PORK: 'Friteerattua possua hapanimeläkastikkeessa',
		DEEP_FRIED_SHRIMPS: 'Friteerattuja katkarapuja hapanimeläkastikkeessa',
		BEIJING_DUCK: 'Pekingin ankkaa hoisinkastikkeessa',
		SEA_FOOD: 'Sea food',
		SEA_FOOD_DESCRIPTION:
			'Katkarapuja, mustekalaa, simpukkaa ja vihanneksia',
	},
	dessert: {
		DESSERT: 'Jälkiruoka',
		ICE_CREAM_FRIED_BANANA: 'Paahdettua banaania ja jäätelö',
		ICE_CREAM_PINEAPPLE: 'Paahdettua ananasta ja jäätelö',
		ICE_CREAM_CHOCOLATE_SAUCE: 'Jäätelöä suklaakastikkeella',
		ICE_CREAM_BALL: 'Jäätelöpallo',
	},
} as const

export const foods = {
	...foodsInSections.appetizer,
	...foodsInSections.vegetables,
	...foodsInSections.chicken,
	...foodsInSections.pork,
	...foodsInSections.beef,
	...foodsInSections.fish,
	...foodsInSections.shrimps,
	...foodsInSections.riceSpecial,
	...foodsInSections.houseSpecial,
	...foodsInSections.dessert,
} as const
