import { Translation } from 'translations'

type Lunch = {
	price: string
	time: string
	monday: Translation[]
	tuesday: Translation[]
	wednesday: Translation[]
	thursday: Translation[]
	friday: Translation[]
}

export const lunch: Lunch = {
	price: '12.20e',
	time: '10:30 - 15:00',
	monday: [
		'MONDAY_CHICKEN',
		'MONDAY_PORK',
		'MONDAY_BEEF',
		'MONDAY_RICE_CHICKEN',
		'MONDAY_RICE_PORK',
		'MONDAY_SALMON',
		'MONDAY_VEGETABLES',
	],
	tuesday: [
		'TUESDAY_CHICKEN',
		'TUESDAY_PORK',
		'TUESDAY_BEEF',
		'TUESDAY_RICE',
		'TUESDAY_RICE_BEEF',
		'TUESDAY_SALMON',
		'TUESDAY_VEGETABLES',
	],
	wednesday: [
		'WEDNESDAY_CHICKEN',
		'WEDNESDAY_PORK',
		'WEDNESDAY_BEEF',
		'WEDNESDAY_RICE_BEEF',
		'WEDNESDAY_RICE_PORK',
		'WEDNESDAY_SALMON',
		'WEDNESDAY_VEGETABLES',
	],
	thursday: [
		'THURSDAY_CHICKEN',
		'THURSDAY_PORK',
		'THURSDAY_BEEF',
		'THURSDAY_RICE_PORK',
		'THURSDAY_TOFU',
		'THURSDAY_SALMON',
		'THURSDAY_VEGETABLES',
	],
	friday: [
		'FRIDAY_CHICKEN',
		'FRIDAY_PORK',
		'FRIDAY_BEEF',
		'FRIDAY_RICE_SPECIAL',
		'FRIDAY_NOODLE',
		'FRIDAY_SALMON',
		'FRIDAY_VEGETABLES',
	],
}
