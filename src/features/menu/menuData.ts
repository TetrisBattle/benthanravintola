import { Translation } from 'translations/Translator'

export type MenuItem = {
	id?: number
	name: Translation
	price: string | MenuItem[]
	description?: Translation
}

type Food = {
	label: Translation
	items: MenuItem[]
}[]

export const foods: Food = [
	{
		label: 'APPETIZER',
		items: [
			{
				id: 1,
				name: 'SHRIMP_ASPARAGUS_SOUP',
				price: '4.50e',
			},
			{
				id: 2,
				name: 'SHRIMP_MUSHROOM_SOUP',
				price: '4.50e',
			},
			{
				id: 3,
				name: 'CHICKEN_BAMBOO_SOUP',
				price: '4.50e',
			},
			{
				id: 4,
				name: 'SPRING_ROLLS_AND_SALAD',
				price: '2.50e',
			},
			{
				id: 5,
				name: 'BEIJING_SOUP',
				price: '4.50e',
			},
		],
	},
	{
		label: 'VEGETABLES',
		items: [
			{
				id: 6,
				name: 'TOFU_IN_CHILI_SAUCE',
				price: '11.80e',
			},
			{
				id: 7,
				name: 'TOFU_IN_SZECHUAN_SAUCE',
				price: '11.80e',
			},
			{
				id: 8,
				name: 'TOFU_IN_SWEET_SAUCE',
				price: '11.80e',
			},
			{
				id: 9,
				name: 'TOFU_IN_STRONG_GARLIC_SAUCE',
				price: '11.80e',
			},
			{
				id: 10,
				name: 'VEGETABLES_IN_OYSTER_SAUCE',
				price: '11.50e',
			},
			{
				id: 11,
				name: 'VEGETABLES_IN_CHILI_SAUCE',
				price: '11.50e',
			},
			{
				id: 12,
				name: 'VEGETABLES_IN_SWEET_SAUCE',
				price: '11.50e',
			},
			{
				id: 13,
				name: 'VEGETABLES_IN_CURRY_SAUCE',
				price: '11.50e',
			},
			{
				id: 14,
				name: 'VEGETABLES_IN_STRONG_GARLIC_SAUCE',
				price: '11.50e',
			},
		],
	},
	{
		label: 'CHICKEN',
		items: [
			{
				id: 15,
				name: 'CHICKEN_IN_CURRY_SAUCE',
				price: '12.90e',
			},
			{
				id: 16,
				name: 'CHICKEN_IN_CHILI_SAUCE',
				price: '12.90e',
			},
			{
				id: 17,
				name: 'CHICKEN_IN_SWEET_SAUCE',
				price: '12.90e',
			},
			{
				id: 18,
				name: 'CHICKEN_IN_TOMATO_SAUCE',
				price: '12.90e',
			},
			{
				id: 19,
				name: 'CHICKEN_IN_OYSTER_SAUCE',
				price: '12.90e',
			},
			{
				id: 20,
				name: 'CHICKEN_IN_SZECHUAN_SAUCE',
				price: '12.90e',
			},
			{
				id: 21,
				name: 'CHICKEN_IN_SATAY_SAUCE',
				price: '12.90e',
			},
			{
				id: 22,
				name: 'CHICKEN_IN_STRONG_GARLIC_SAUCE',
				price: '12.90e',
			},
			{
				id: 23,
				name: 'CHICKEN_BAMBOO_AND_MUSHROOMS',
				price: '12.90e',
			},
			{
				id: 24,
				name: 'CHICKEN_HOUSE_STYLE',
				price: '12.90e',
			},
		],
	},
	{
		label: 'PORK',
		items: [
			{
				id: 25,
				name: 'PORK_IN_CURRY_SAUCE',
				price: '11.90e',
			},
			{
				id: 26,
				name: 'PORK_IN_CHILI_SAUCE',
				price: '11.90e',
			},
			{
				id: 27,
				name: 'PORK_IN_SWEET_SAUCE',
				price: '11.90e',
			},
			{
				id: 28,
				name: 'PORK_IN_TOMATO_SAUCE',
				price: '11.90e',
			},
			{
				id: 29,
				name: 'PORK_IN_OYSTER_SAUCE',
				price: '11.90e',
			},
			{
				id: 30,
				name: 'PORK_IN_SZECHUAN_SAUCE',
				price: '11.90e',
			},
			{
				id: 31,
				name: 'PORK_IN_SATAY_SAUCE',
				price: '11.90e',
			},
			{
				id: 32,
				name: 'PORK_IN_STRONG_GARLIC_SAUCE',
				price: '11.90e',
			},
			{
				id: 33,
				name: 'PORK_BAMBOO_AND_MUSHROOMS',
				price: '11.90e',
			},
			{
				id: 34,
				name: 'PORK_HOUSE_STYLE',
				price: '11.90e',
			},
		],
	},
	{
		label: 'BEEF',
		items: [
			{
				id: 35,
				name: 'BEEF_IN_CURRY_SAUCE',
				price: '13.50e',
			},
			{
				id: 36,
				name: 'BEEF_IN_CHILI_SAUCE',
				price: '13.50e',
			},
			{
				id: 37,
				name: 'BEEF_IN_SWEET_SAUCE',
				price: '13.50e',
			},
			{
				id: 38,
				name: 'BEEF_IN_TOMATO_SAUCE',
				price: '13.50e',
			},
			{
				id: 39,
				name: 'BEEF_IN_OYSTER_SAUCE',
				price: '13.50e',
			},
			{
				id: 40,
				name: 'BEEF_IN_SZECHUAN_SAUCE',
				price: '13.50e',
			},
			{
				id: 41,
				name: 'BEEF_IN_SATAY_SAUCE',
				price: '13.50e',
			},
			{
				id: 42,
				name: 'BEEF_IN_STRONG_GARLIC_SAUCE',
				price: '13.50e',
			},
			{
				id: 43,
				name: 'BEEF_BAMBOO_AND_MUSHROOMS',
				price: '13.50e',
			},
			{
				id: 44,
				name: 'BEEF_HOUSE_STYLE',
				price: '13.50e',
			},
		],
	},
	{
		label: 'FISH',
		items: [
			{
				id: 45,
				name: 'SQUID_IN_CHILI_SAUCE',
				price: '14.50e',
			},
			{
				id: 46,
				name: 'SQUID_IN_TOMATO_SAUCE',
				price: '14.50e',
			},
			{
				id: 47,
				name: 'SQUID_IN_SZECHUAN_SAUCE',
				price: '14.50e',
			},
			{
				id: 48,
				name: 'SQUID_IN_SWEET_SAUCE',
				price: '14.50e',
			},
			{
				id: 49,
				name: 'SQUID_IN_CURRY_SAUCE',
				price: '14.50e',
			},
			{
				id: 50,
				name: 'PIKE_PERCH_FILLET_IN_CHILI_SAUCE',
				price: '15.50e',
			},
			{
				id: 51,
				name: 'PIKE_PERCH_FILLET_IN_TOMATO_SAUCE',
				price: '15.50e',
			},
			{
				id: 52,
				name: 'PIKE_PERCH_FILLET_IN_SZECHUAN_SAUCE',
				price: '15.50e',
			},
			{
				id: 53,
				name: 'SALMON_IN_SWEET_SAUCE',
				price: '14.50e',
			},
			{
				id: 54,
				name: 'SALMON_IN_CURRY_SAUCE',
				price: '14.50e',
			},
		],
	},
	{
		label: 'SHRIMPS',
		items: [
			{
				id: 55,
				name: 'SHRIMPS_IN_CHILI_SAUCE',
				price: '14.50e',
			},
			{
				id: 56,
				name: 'SHRIMPS_IN_SZECHUAN_SAUCE',
				price: '14.50e',
			},
			{
				id: 57,
				name: 'SHRIMPS_IN_STRONG_GARLIC_SAUCE',
				price: '14.50e',
			},
			{
				id: 58,
				name: 'SHRIMPS_IN_CURRY_SAUCE',
				price: '14.50e',
			},
			{
				id: 59,
				name: 'SHRIMPS_IN_SWEET_SAUCE',
				price: '14.50e',
			},
			{
				id: 60,
				name: 'CRAB_IN_CHILI_SAUCE',
				price: '16.50e',
			},
			{
				id: 61,
				name: 'CRAB_IN_SZECHUAN_SAUCE',
				price: '16.50e',
			},
			{
				id: 62,
				name: 'CRAB_IN_STRONG_GARLIC_SAUCE',
				price: '16.50e',
			},
			{
				id: 63,
				name: 'CRAB_IN_SWEET_SAUCE',
				price: '16.50e',
			},
			{
				id: 64,
				name: 'CRAB_IN_CURRY_SAUCE',
				price: '16.50e',
			},
		],
	},
	{
		label: 'RICE',
		items: [
			{
				id: 65,
				name: 'RICE_SPECIAL',
				price: '13.50e',
				description: 'RICE_SPECIAL_DESCRIPTION',
			},
			{
				id: 66,
				name: 'RICE_CHICKEN',
				price: '11.90e',
			},
			{
				id: 67,
				name: 'RICE_BEEF',
				price: '12.50e',
			},
			{
				id: 68,
				name: 'RICE_PORK_SHRIMPS_EGGS',
				price: '12.90e',
			},
			{
				id: 69,
				name: 'NOODLES_BEEF_CHICKEN_PORK_SHRIMPS',
				price: '13.50e',
			},
			{
				id: 70,
				name: 'NOODLES_CHICKEN_SHRIMPS_EGGS',
				price: '13.50e',
			},
			{
				id: 71,
				name: 'VERMICELLI',
				price: '13.50e',
			},
			{
				id: 72,
				name: 'RICE_PASTA',
				price: '13.50e',
			},
		],
	},
	{
		label: 'HOUSE_SPECIAL',
		items: [
			{
				id: 73,
				name: 'DEEP_FRIED_CHICKEN',
				price: '14.50e',
			},
			{
				id: 74,
				name: 'DEEP_FRIED_PORK',
				price: '14.50e',
			},
			{
				id: 75,
				name: 'DEEP_FRIED_SHRIMPS',
				price: '15.50e',
			},
			{
				id: 76,
				name: 'BEIJING_DUCK',
				price: '17.50e',
			},
			{
				id: 77,
				name: 'SEA_FOOD',
				price: '17.50e',
				description: 'SEA_FOOD_DESCRIPTION',
			},
		],
	},
	{
		label: 'DESSERT',
		items: [
			{
				id: 78,
				name: 'ICE_CREAM_FRIED_BANANA',
				price: '6.00e',
			},
			{
				id: 79,
				name: 'ICE_CREAM_PINEAPPLE',
				price: '6.00e',
			},
			{
				id: 80,
				name: 'ICE_CREAM_CHOCOLATE_SAUCE',
				price: '6.00e',
			},
			{
				id: 81,
				name: 'ICE_CREAM_BALL',
				price: '3.00e',
			},
		],
	},
]

export const pizza: MenuItem[] = [
	{
		id: 1,
		name: 'MINCED_MEAT_PIZZA',
		description: 'MINCED_MEAT_PIZZA_DESCRIPTION',
		price: '6.80e',
	},
	{
		id: 2,
		name: 'CALZONE',
		description: 'CALZONE_DESCRIPTION',
		price: '7.20e',
	},
	{
		id: 3,
		name: 'ALCAPONE',
		description: 'ALCAPONE_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 4,
		name: 'CARUZO',
		description: 'CARUZO_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 5,
		name: 'NAPOLI',
		description: 'NAPOLI_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 6,
		name: 'VENEZIA',
		description: 'VENEZIA_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 7,
		name: 'TROPICANA',
		description: 'TROPICANA_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 8,
		name: 'HAWAI',
		description: 'HAWAI_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 9,
		name: 'BACON_PIZZA',
		description: 'BACON_PIZZA_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 10,
		name: 'AMERICAN',
		description: 'AMERICAN_DESCRIPTION',
		price: '7.70e',
	},
	{
		id: 11,
		name: 'SAN_ZIRNIONE',
		description: 'SAN_ZIRNIONE_DESCRIPTION',
		price: '8.50e',
	},
	{
		id: 12,
		name: 'MEXICANO',
		description: 'MEXICANO_DESCRIPTION',
		price: '7.00e',
	},
	{
		id: 13,
		name: 'VEGETARIANA',
		description: 'VEGETARIANA_DESCRIPTION',
		price: '7.00e',
	},
	{
		id: 14,
		name: 'KEBAB_PIZZA',
		description: 'KEBAB_PIZZA_DESCRIPTION',
		price: '8.90e',
	},
	{
		id: 15,
		name: 'ISTANBUL',
		description: 'ISTANBUL_DESCRIPTION',
		price: '8.90e',
	},
	{
		id: 16,
		name: 'KEBAB_SPECIAL',
		description: 'KEBAB_SPECIAL_DESCRIPTION',
		price: '8.90e',
	},
	{
		id: 17,
		name: 'FANTASIA',
		description: 'FANTASIA_DESCRIPTION',
		price: '9.20e',
	},
]

type Sushi = {
	nigiri: MenuItem[]
	maki: MenuItem[]
}

export const sushi: Sushi = {
	nigiri: [
		{
			id: 1,
			name: 'NIGIRI_SALMON',
			price: '8.00e',
		},
		{
			id: 2,
			name: 'NIGIRI_GRILLED_SALMON',
			price: '8.00e',
		},
		{
			id: 3,
			name: 'NIGIRI_SHRIMP',
			price: '8.00e',
		},
		{
			id: 4,
			name: 'NIGIRI_SURIMI',
			price: '8.00e',
		},
		{
			id: 5,
			name: 'NIGIRI_SURIMI_MAYO',
			price: '8.00e',
		},
		{
			id: 6,
			name: 'NIGIRI_EGG',
			price: '8.00e',
		},
		{
			id: 7,
			name: 'NIGIRI_TOFU',
			price: '8.00e',
		},
		{
			id: 8,
			name: 'NIGIRI_AVOCADO',
			price: '8.00e',
		},
		{
			id: 9,
			name: 'NIGIRI_RAINBOW_TROUT',
			price: '8.00e',
		},
	],
	maki: [
		{
			id: 10,
			name: 'MAKI_SALMON',
			price: '8.00e',
		},
		{
			id: 11,
			name: 'MAKI_CUCUMBER',
			price: '8.00e',
		},
		{
			id: 12,
			name: 'MAKI_AVOCADO',
			price: '8.00e',
		},
		{
			id: 13,
			name: 'MAKI_GRILLED_SALMON',
			price: '8.00e',
		},
		{
			id: 14,
			name: 'MAKI_CALIFORNIA',
			price: '8.00e',
			description: 'MAKI_CALIFORNIA_DESCRIPTION',
		},
		{
			id: 15,
			name: 'MAKI_PHILADELFIA',
			price: '8.00e',
			description: 'MAKI_PHILADELFIA_DESCRIPTION',
		},
		{
			id: 16,
			name: 'DRAGON_ROLL',
			price: '8.00e',
			description: 'DRAGON_ROLL_DESCRIPTION',
		},
		{
			id: 17,
			name: 'MAKI_VEGE_CALIFORNIA',
			price: '8.00e',
			description: 'MAKI_VEGE_CALIFORNIA_DESCRIPTION',
		},
	],
}

export const drinks: MenuItem[] = [
	{
		name: 'DRINKS',
		price: '0.90e',
	},
	{
		name: 'WATER',
		price: [
			{
				name: 'L33',
				price: '2.70e',
			},
			{
				name: 'L50',
				price: '3.50e',
			},
		],
	},
	{
		name: 'MILK',
		price: [
			{
				name: 'L33',
				price: '2.70e',
			},
			{
				name: 'L50',
				price: '3.50e',
			},
		],
	},
	{
		name: 'LEMONADE',
		price: [
			{
				name: 'L33',
				price: '2.70e',
			},
			{
				name: 'L50',
				price: '3.50e',
			},
		],
	},
	{
		name: 'LAPINKULTA',
		price: '5.60e',
	},
	{
		name: 'TSINGTAO',
		price: '5.60e',
	},
	{
		name: 'CIDER',
		price: '5.60e',
	},
	{
		name: 'APPLE_CIDER',
		price: '5.60e',
	},
	{
		name: 'PEAR_CIDER',
		price: '5.60e',
	},
	{
		name: 'COFFEE',
		price: '2.20e',
	},
	{
		name: 'TEA',
		price: '2.20e',
	},
	{
		name: 'TEAPOT',
		price: '5.00e',
	},
]

type strongAlcohols = {
	redWines: MenuItem[]
	whiteWines: MenuItem[]
	alcohols: MenuItem[]
}

export const strongAlcohols: strongAlcohols = {
	redWines: [
		{
			name: 'ROSIERE_SYRAH',
			description: 'ROSIERE_SYRAH_DESCRIPTION',
			price: [
				{
					name: 'CL_12',
					price: '6.90e',
				},
				{
					name: 'CL_16',
					price: '8.10e',
				},
				{
					name: 'CL_24',
					price: '10.50e',
				},
				{
					name: 'CL_75',
					price: '27.00e',
				},
			],
		},
		{
			name: 'JACOBS_CREEK',
			price: [
				{
					name: 'CL_12',
					price: '6.90e',
				},
				{
					name: 'CL_16',
					price: '8.10e',
				},
				{
					name: 'CL_24',
					price: '10.50e',
				},
				{
					name: 'CL_75',
					price: '27.00e',
				},
			],
		},
	],
	whiteWines: [
		{
			name: 'JACOBS_CREEK',
			price: [
				{
					name: 'CL_12',
					price: '6.90e',
				},
				{
					name: 'CL_16',
					price: '8.10e',
				},
				{
					name: 'CL_24',
					price: '10.50e',
				},
				{
					name: 'CL_75',
					price: '27.00e',
				},
			],
		},
	],
	alcohols: [
		{
			name: 'COGNAC',
			description: 'MONOPOL',
			price: '7.50e',
		},
		{
			name: 'WHISKEY',
			description: 'JACK_DANIELS',
			price: '7.50e',
		},
		{
			name: 'KOSKENKORVA',
			price: '7.50e',
		},
	],
}
