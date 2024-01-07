import { english } from './english'
import { finnish } from './finnish'

export const translations = {
	'en-US': english,
	'fi-FI': finnish,
} as const

export type Locale = keyof typeof translations

export type Translation = keyof Translations

export type Translations = {
	//#region Global
	COMPANY_NAME: string
	ERROR: string
	//#endregion

	//#region Weekdays
	MONDAY: string
	TUESDAY: string
	WEDNESDAY: string
	THURSDAY: string
	FRIDAY: string
	SATURDAY: string
	SUNDAY: string

	MON_FRI: string
	SAT: string
	SUN: string
	//#endregion

	//#region Pages
	HOME: string
	MENU: string
	LUNCH: string
	CONTACT: string
	//#endregion

	//#region Home
	HOME_DESCRIPTION_BUFFET: string
	HOME_DESCRIPTION_VIETNAM: string
	//#endregion

	//#region Menu
	//#region Foods
	//#region Appetizer
	APPETIZER: string
	SHRIMP_ASPARAGUS_SOUP: string
	SHRIMP_MUSHROOM_SOUP: string
	CHICKEN_BAMBOO_SOUP: string
	SPRING_ROLLS_AND_SALAD: string
	BEIJING_SOUP: string
	//#endregion

	//#region Vegetables
	VEGETABLES: string
	TOFU_IN_CHILI_SAUCE: string
	TOFU_IN_SZECHUAN_SAUCE: string
	TOFU_IN_SWEET_SAUCE: string
	TOFU_IN_HOT_GARLIC_SAUCE: string
	VEGETABLES_IN_OYSTER_SAUCE: string
	VEGETABLES_IN_CHILI_SAUCE: string
	VEGETABLES_IN_SWEET_SAUCE: string
	VEGETABLES_IN_CURRY_SAUCE: string
	VEGETABLES_IN_HOT_GARLIC_SAUCE: string
	//#endregion

	//#region Chicken
	CHICKEN: string
	CHICKEN_IN_CURRY_SAUCE: string
	CHICKEN_IN_CHILI_SAUCE: string
	CHICKEN_IN_SWEET_SAUCE: string
	CHICKEN_IN_TOMATO_SAUCE: string
	CHICKEN_IN_OYSTER_SAUCE: string
	CHICKEN_IN_SZECHUAN_SAUCE: string
	CHICKEN_IN_SATAY_SAUCE: string
	CHICKEN_IN_HOT_GARLIC_SAUCE: string
	CHICKEN_BAMBOO_AND_MUSHROOMS: string
	CHICKEN_HOUSE_STYLE: string
	//#endregion

	//#region Pork
	PORK: string
	PORK_IN_CURRY_SAUCE: string
	PORK_IN_CHILI_SAUCE: string
	PORK_IN_SWEET_SAUCE: string
	PORK_IN_TOMATO_SAUCE: string
	PORK_IN_OYSTER_SAUCE: string
	PORK_IN_SZECHUAN_SAUCE: string
	PORK_IN_SATAY_SAUCE: string
	PORK_IN_HOT_GARLIC_SAUCE: string
	PORK_BAMBOO_AND_MUSHROOMS: string
	PORK_HOUSE_STYLE: string
	//#endregion

	//#region Beef
	BEEF: string
	BEEF_IN_CURRY_SAUCE: string
	BEEF_IN_CHILI_SAUCE: string
	BEEF_IN_SWEET_SAUCE: string
	BEEF_IN_TOMATO_SAUCE: string
	BEEF_IN_OYSTER_SAUCE: string
	BEEF_IN_SZECHUAN_SAUCE: string
	BEEF_IN_SATAY_SAUCE: string
	BEEF_IN_HOT_GARLIC_SAUCE: string
	BEEF_BAMBOO_AND_MUSHROOMS: string
	BEEF_HOUSE_STYLE: string
	//#endregion

	//#region Fish
	FISH: string
	SQUID_IN_CHILI_SAUCE: string
	SQUID_IN_TOMATO_SAUCE: string
	SQUID_IN_SZECHUAN_SAUCE: string
	SQUID_IN_SWEET_SAUCE: string
	SQUID_IN_CURRY_SAUCE: string

	PIKE_PERCH_FILLET_IN_CHILI_SAUCE: string
	PIKE_PERCH_FILLET_IN_TOMATO_SAUCE: string
	PIKE_PERCH_FILLET_IN_SZECHUAN_SAUCE: string

	SALMON_IN_SWEET_SAUCE: string
	SALMON_IN_CURRY_SAUCE: string
	//#endregion

	//#region Shrimps
	SHRIMPS: string
	SHRIMPS_IN_CHILI_SAUCE: string
	SHRIMPS_IN_SZECHUAN_SAUCE: string
	SHRIMPS_IN_HOT_GARLIC_SAUCE: string
	SHRIMPS_IN_CURRY_SAUCE: string
	SHRIMPS_IN_SWEET_SAUCE: string

	CRAB_IN_CHILI_SAUCE: string
	CRAB_IN_SZECHUAN_SAUCE: string
	CRAB_IN_HOT_GARLIC_SAUCE: string
	CRAB_IN_SWEET_SAUCE: string
	CRAB_IN_CURRY_SAUCE: string
	//#endregion

	//#region RiceSpecial
	RICE: string
	RICE_SPECIAL: string
	RICE_SPECIAL_DESCRIPTION: string
	RICE_CHICKEN: string
	RICE_BEEF: string
	RICE_PORK_SHRIMPS_EGGS: string
	NOODLES_BEEF_CHICKEN_PORK_SHRIMPS: string
	NOODLES_CHICKEN_SHRIMPS_EGGS: string
	VERMICELLI: string
	RICE_PASTA: string
	//#endregion

	//#region HouseSpecial
	HOUSE_SPECIAL: string
	DEEP_FRIED_CHICKEN: string
	DEEP_FRIED_PORK: string
	DEEP_FRIED_SHRIMPS: string
	BEIJING_DUCK: string
	SEA_FOOD: string
	SEA_FOOD_DESCRIPTION: string
	//#endregion

	//#region Dessert
	DESSERT: string
	ICE_CREAM_FRIED_BANANA: string
	ICE_CREAM_PINEAPPLE: string
	ICE_CREAM_CHOCOLATE_SAUCE: string
	ICE_CREAM_BALL: string
	//#endregion
	//#endregion

	//#region Pizza
	PIZZA: string
	MINCED_MEAT_PIZZA: string
	MINCED_MEAT_PIZZA_DESCRIPTION: string
	CALZONE: string
	CALZONE_DESCRIPTION: string
	ALCAPONE: string
	ALCAPONE_DESCRIPTION: string
	CARUZO: string
	CARUZO_DESCRIPTION: string
	NAPOLI: string
	NAPOLI_DESCRIPTION: string
	VENEZIA: string
	VENEZIA_DESCRIPTION: string
	TROPICANA: string
	TROPICANA_DESCRIPTION: string
	HAWAI: string
	HAWAI_DESCRIPTION: string
	BACON_PIZZA: string
	BACON_PIZZA_DESCRIPTION: string
	AMERICAN: string
	AMERICAN_DESCRIPTION: string
	SAN_ZIRNIONE: string
	SAN_ZIRNIONE_DESCRIPTION: string
	MEXICANO: string
	MEXICANO_DESCRIPTION: string
	VEGETARIANA: string
	VEGETARIANA_DESCRIPTION: string
	KEBAB_PIZZA: string
	KEBAB_PIZZA_DESCRIPTION: string
	ISTANBUL: string
	ISTANBUL_DESCRIPTION: string
	KEBAB_SPECIAL: string
	KEBAB_SPECIAL_DESCRIPTION: string
	FANTASIA: string
	FANTASIA_DESCRIPTION: string
	//#endregion

	//#region Sushi
	SUSHI: string
	NIGIRI: string
	NIGIRI_SALMON: string
	NIGIRI_GRILLED_SALMON: string
	NIGIRI_SHRIMP: string
	NIGIRI_SURIMI: string
	NIGIRI_SURIMI_MAYO: string
	NIGIRI_EGG: string
	NIGIRI_TOFU: string
	NIGIRI_AVOCADO: string
	NIGIRI_RAINBOW_TROUT: string
	PIECES_10: string

	MAKI: string
	MAKI_SALMON: string
	MAKI_CUCUMBER: string
	MAKI_AVOCADO: string
	MAKI_GRILLED_SALMON: string
	MAKI_CALIFORNIA: string
	MAKI_CALIFORNIA_DESCRIPTION: string
	MAKI_PHILADELFIA: string
	MAKI_PHILADELFIA_DESCRIPTION: string
	DRAGON_ROLL: string
	DRAGON_ROLL_DESCRIPTION: string
	MAKI_VEGE_CALIFORNIA: string
	MAKI_VEGE_CALIFORNIA_DESCRIPTION: string
	//#endregion

	//#region Drinks
	DRINKS: string
	WATER: string
	MILK: string
	LEMONADE: string
	LAPINKULTA: string
	TSINGTAO: string
	CIDER: string
	APPLE_CIDER: string
	PEAR_CIDER: string
	COFFEE: string
	TEA: string
	TEAPOT: string

	RED_WINE: string
	WHITE_WINE: string
	ROSIERE_SYRAH: string
	ROSIERE_SYRAH_DESCRIPTION: string
	JACOBS_CREEK: string

	ALCOHOLS: string
	COGNAC: string
	MONOPOL: string
	WHISKEY: string
	JACK_DANIELS: string
	KOSKENKORVA: string

	L33: string
	L50: string
	CL_12: string
	CL_16: string
	CL_24: string
	CL_75: string
	//#endregion
	//#endregion

	//#region Lunch
	MONDAY_CHICKEN: string
	MONDAY_PORK: string
	MONDAY_BEEF: string
	MONDAY_RICE_CHICKEN: string
	MONDAY_RICE_PORK: string
	MONDAY_SALMON: string
	MONDAY_VEGETABLES: string
	TUESDAY_CHICKEN: string
	TUESDAY_PORK: string
	TUESDAY_BEEF: string
	TUESDAY_RICE: string
	TUESDAY_RICE_BEEF: string
	TUESDAY_SALMON: string
	TUESDAY_VEGETABLES: string
	WEDNESDAY_CHICKEN: string
	WEDNESDAY_PORK: string
	WEDNESDAY_BEEF: string
	WEDNESDAY_RICE_BEEF: string
	WEDNESDAY_RICE_PORK: string
	WEDNESDAY_SALMON: string
	WEDNESDAY_VEGETABLES: string
	THURSDAY_CHICKEN: string
	THURSDAY_PORK: string
	THURSDAY_BEEF: string
	THURSDAY_RICE_PORK: string
	THURSDAY_TOFU: string
	THURSDAY_SALMON: string
	THURSDAY_VEGETABLES: string
	FRIDAY_CHICKEN: string
	FRIDAY_PORK: string
	FRIDAY_BEEF: string
	FRIDAY_RICE_SPECIAL: string
	FRIDAY_NOODLE: string
	FRIDAY_SALMON: string
	FRIDAY_VEGETABLES: string
	//#endregion

	//#region Contact
	OPENING_TIMES: string
	CLOSED: string
	PHONE_NUMBER: string
	EMAIL: string
	ADDRESS: string
	//#endregion
}
