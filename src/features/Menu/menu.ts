export type MenuItem = {
	id?: number
	name: string
	description?: string
	price: string | { [key: string]: string }
}

type Food = {
	label: string
	items: MenuItem[]
}[]

export const foods: Food = [
	{
		label: 'Alkuruoka',
		items: [
			{
				id: 1,
				name: 'Katkarapuparsakeitto',
				price: '4.50e',
			},
			{
				id: 2,
				name: 'Katkarapukeitto ja herkkusieniä',
				price: '4.50e',
			},
			{
				id: 3,
				name: 'Kana bambukeitto',
				price: '4.50e',
			},
			{
				id: 4,
				name: 'Kevätkääryle ja salaattia (kpl)',
				price: '2.50e',
			},
			{
				id: 5,
				name: 'Peking keitto / Katkarapuja ja kasviksia',
				price: '4.50e',
			},
		],
	},
	{
		label: 'Kasviksia',
		items: [
			{
				id: 6,
				name: 'Tofu chilikastikkeessa ***',
				price: '11.80e',
			},
			{
				id: 7,
				name: 'Tofu szechuankastikkeessa **',
				price: '11.80e',
			},
			{
				id: 8,
				name: 'Tofu hapanimeläkastikkeessa',
				price: '11.80e',
			},
			{
				id: 9,
				name: 'Tofu voimakkaassa valkosipulikastikkeessa **',
				price: '11.80e',
			},
			{
				id: 10,
				name: 'Kasviksia osterikastikkeessa *',
				price: '11.50e',
			},
			{
				id: 11,
				name: 'Kasviksia chilikastikkeessa ***',
				price: '11.50e',
			},
			{
				id: 12,
				name: 'Kasviksia hapanimeläkastikkeessa',
				price: '11.50e',
			},
			{
				id: 13,
				name: 'Kasviksia currykastikkeessa *',
				price: '11.50e',
			},
			{
				id: 14,
				name: 'Kasviksia voimakkaassa valkosipulikastikkeessa **',
				price: '11.50e',
			},
		],
	},
	{
		label: 'Kanaa',
		items: [
			{
				id: 15,
				name: 'Kanaa currykastikkeessa *',
				price: '12.90e',
			},
			{
				id: 16,
				name: 'Kanaa chilikastikkeessa ***',
				price: '12.90e',
			},
			{
				id: 17,
				name: 'Kanaa hapanimeläkastikkeessa',
				price: '12.90e',
			},
			{
				id: 18,
				name: 'Kanaa tomaattikastikkeessa *',
				price: '12.90e',
			},
			{
				id: 19,
				name: 'Kanaa osterikastikkeessa *',
				price: '12.90e',
			},
			{
				id: 20,
				name: 'Kanaa szechuankastikkeessa **',
				price: '12.90e',
			},
			{
				id: 21,
				name: 'Kanaa sataykastikkeessa *',
				price: '12.90e',
			},
			{
				id: 22,
				name: 'Kanaa voimakkaassa valkosipulikastikkeessa ** ',
				price: '12.90e',
			},
			{
				id: 23,
				name: 'Kanaa, bambua ja herkkusieniä',
				price: '12.90e',
			},
			{
				id: 24,
				name: 'Kanaa talon tapaan *',
				price: '12.90e',
			},
		],
	},
	{
		label: 'Possua',
		items: [
			{
				id: 25,
				name: 'Possua currykastikkeessa *',
				price: '11.90e',
			},
			{
				id: 26,
				name: 'Possua chilikastikkeessa ***',
				price: '11.90e',
			},
			{
				id: 27,
				name: 'Possua hapanimeläkastikkeessa',
				price: '11.90e',
			},
			{
				id: 28,
				name: 'Possua tomaattikastikkeessa *',
				price: '11.90e',
			},
			{
				id: 29,
				name: 'Possua osterikastikkeessa *',
				price: '11.90e',
			},
			{
				id: 30,
				name: 'Possua szechuankastikkeessa **',
				price: '11.90e',
			},
			{
				id: 31,
				name: 'Possua sataykastikkeessa *',
				price: '11.90e',
			},
			{
				id: 32,
				name: 'Possua voimakkaassa valkosipulikastikkeessa **',
				price: '11.90e',
			},
			{
				id: 33,
				name: 'Possua, bambua ja herkkusieniä',
				price: '11.90e',
			},
			{
				id: 34,
				name: 'Possua talon tapaan *',
				price: '11.90e',
			},
		],
	},
	{
		label: 'Härkää',
		items: [
			{
				id: 35,
				name: 'Härkää currykastikkeessa *',
				price: '13.50e',
			},
			{
				id: 36,
				name: 'Härkää chilikastikkeessa ***',
				price: '13.50e',
			},
			{
				id: 37,
				name: 'Härkää hapanimeläkastikkeessa',
				price: '13.50e',
			},
			{
				id: 38,
				name: 'Härkää tomaattikastikkeessa *',
				price: '13.50e',
			},
			{
				id: 39,
				name: 'Härkää osterikastikkeessa *',
				price: '13.50e',
			},
			{
				id: 40,
				name: 'Härkää szechuankastikkeessa **',
				price: '13.50e',
			},
			{
				id: 41,
				name: 'Härkää sataykastikkeessa **',
				price: '13.50e',
			},
			{
				id: 42,
				name: 'Härkää voimakkaassa valkosipulikastikkeessa **',
				price: '13.50e',
			},
			{
				id: 43,
				name: 'Härkää, bambua ja herkkusieniä',
				price: '13.50e',
			},
			{
				id: 44,
				name: 'Härkää talon tapaan *',
				price: '13.50e',
			},
		],
	},
	{
		label: 'Kalaa',
		items: [
			{
				id: 45,
				name: 'Mustekalaa chilikastikkeessa ***',
				price: '14.50e',
			},
			{
				id: 46,
				name: 'Mustekalaa tomaattikastikkeessa *',
				price: '14.50e',
			},
			{
				id: 47,
				name: 'Mustekalaa szechuankastikkeessa **',
				price: '14.50e',
			},
			{
				id: 48,
				name: 'Mustekalaa hapanimeläkastikkeessa',
				price: '14.50e',
			},
			{
				id: 49,
				name: 'Mustekalaa currykastikkeessa *',
				price: '14.50e',
			},
			{
				id: 50,
				name: 'Kuhafilettä chilikastikkeessa ***',
				price: '15.50e',
			},
			{
				id: 51,
				name: 'Kuhafilettä tomaattikastikkeessa *',
				price: '15.50e',
			},
			{
				id: 52,
				name: 'Kuhafilettä szechuankastikkeessa **',
				price: '15.50e',
			},
			{
				id: 53,
				name: 'Lohta hapanimeläkastikkeessa',
				price: '14.50e',
			},
			{
				id: 54,
				name: 'Lohta currykastikkeessa *',
				price: '14.50e',
			},
		],
	},
	{
		label: 'Katkarapuja',
		items: [
			{
				id: 55,
				name: 'Katkarapuja chilikastikkeessa ***',
				price: '14.50e',
			},
			{
				id: 56,
				name: 'Katkarapuja szechuankastikkeessa **',
				price: '14.50e',
			},
			{
				id: 57,
				name: 'Katkarapuja voimakkaassa valkosipulikastikkeessa **',
				price: '14.50e',
			},
			{
				id: 58,
				name: 'Katkarapuja currykastikkeessa *',
				price: '14.50e',
			},
			{
				id: 59,
				name: 'Katkarapuja hapanimeläkastikkeessa',
				price: '14.50e',
			},
			{
				id: 60,
				name: 'Rapuja chilikastikkeessa ***',
				price: '16.50e',
			},
			{
				id: 61,
				name: 'Rapuja szechuankastikkeessa **',
				price: '16.50e',
			},
			{
				id: 62,
				name: 'Rapuja voimakkaassa valkosipulikastikkeessa **',
				price: '16.50e',
			},
			{
				id: 63,
				name: 'Rapuja hapanimeläkastikkeessa',
				price: '16.50e',
			},
			{
				id: 64,
				name: 'Rapuja currykastikkeessa *',
				price: '16.50e',
			},
		],
	},
	{
		label: 'Riisi special',
		items: [
			{
				id: 65,
				name: 'Riisispecial **',
				price: '13.50e',
			},
			{
				id: 66,
				name: 'Riisiä ja kanaa',
				price: '11.90e',
			},
			{
				id: 67,
				name: 'Riisiä ja härkää *',
				price: '12.50e',
			},
			{
				id: 68,
				name: 'Riisiä, possua, katkarapuja ja kananmunaa',
				price: '12.90e',
			},
			{
				id: 69,
				name: 'Nuudelia, härkää, kanaa, possua ja katkarapuja *',
				price: '13.50e',
			},
			{
				id: 70,
				name: 'Nuudelia, kanaa, katkarapuja ja kananmunaa',
				price: '13.50e',
			},
			{
				id: 71,
				name: 'Riisivermiselliä, härkää, kanaa ja possua *',
				price: '13.50e',
			},
			{
				id: 72,
				name: 'Riisipastaa, härkää, kanaa, possua ja katkarapuja *',
				price: '13.50e',
			},
		],
	},
	{
		label: 'House special',
		items: [
			{
				id: 73,
				name: 'Friteerattua kanaa hapanimeläkastikeessa',
				price: '14.50e',
			},
			{
				id: 74,
				name: 'Friteerattua possua hapanimeläkastikeessa',
				price: '14.50e',
			},
			{
				id: 75,
				name: 'Friteerattua katkarapuja hapanimeläkastikeessa',
				price: '15.50e',
			},
			{
				id: 76,
				name: 'Peking ankka hoisinkastikkeessa',
				price: '17.50e',
			},
			{
				id: 77,
				name: 'Sea food',
				price: '17.50e',
			},
		],
	},
	{
		label: 'Jälkiruoka',
		items: [
			{
				id: 78,
				name: 'Paahdettua banaania ja jäätelö',
				price: '6.00e',
			},
			{
				id: 79,
				name: 'Paahdettua ananasta ja jäätelö',
				price: '6.00e',
			},
			{
				id: 80,
				name: 'Jäätelö ja suklaakastiketta',
				price: '6.00e',
			},
			{
				id: 81,
				name: 'Jäätelöpallo',
				price: '3.00e',
			},
		],
	},
]

export const pizza: MenuItem[] = [
	{
		id: 1,
		name: 'Jauheliha pizza',
		description: 'Jauhelija',
		price: '6.80e',
	},
	{
		id: 2,
		name: 'Calzone',
		description: 'Kinkku, jauhelija',
		price: '7.20e',
	},
	{
		id: 3,
		name: 'Alcapone',
		description: 'Kinkku, ananas, paprika',
		price: '7.70e',
	},
	{
		id: 4,
		name: 'Caruzo',
		description: 'Kinkku, herkkusieni, katkarapu',
		price: '7.70e',
	},
	{
		id: 5,
		name: 'Napoli',
		description: 'Kinkku, salami, herne',
		price: '7.70e',
	},
	{
		id: 6,
		name: 'Venezia',
		description: 'Salami, tonnikala, kananmuna',
		price: '7.70e',
	},
	{
		id: 7,
		name: 'Tropicana',
		description: 'Kinkku, ananas, aurajuusto',
		price: '7.70e',
	},
	{
		id: 8,
		name: 'Hawai',
		description: 'Kinkku, tonnikala, katkarapu',
		price: '7.70e',
	},
	{
		id: 9,
		name: 'Pekonipizza',
		description: 'Pekoni, pepperonimakkara, sipuli',
		price: '7.70e',
	},
	{
		id: 10,
		name: 'Jenkki',
		description: 'Salami, pekoni, sipuli',
		price: '7.70e',
	},
	{
		id: 11,
		name: 'San zirnione',
		description: 'Kinkku, paprika, sipuli, katkarapu',
		price: '8.50e',
	},
	{
		id: 12,
		name: 'Mexicano',
		description: 'Pepperoni, jalapeno, ananas',
		price: '7.00e',
	},
	{
		id: 13,
		name: 'Vegetariana',
		description: 'Herkkusieni, paprika, aurajuusto',
		price: '7.00e',
	},
	{
		id: 14,
		name: 'Kebab pizza',
		description: 'Kebab, chilikastike, pepperoni, jalapeno',
		price: '8.90e',
	},
	{
		id: 15,
		name: 'Istanbul',
		description: 'Kebab, pepperoni, sipuli, majoneesi',
		price: '8.90e',
	},
	{
		id: 16,
		name: 'Kebab special',
		description: 'Kebab, jauheliha, pepperoni, tuore-tomaatti',
		price: '8.90e',
	},
	{
		id: 17,
		name: 'Fantasia',
		description: 'Neljä täytettä makusi mukaan',
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
			name: 'Lohi nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 2,
			name: 'Grillattu lohi nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 3,
			name: 'Katkarapu nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 4,
			name: 'Surimi nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 5,
			name: 'Surimi majoneesi nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 6,
			name: 'Kananmuna nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 7,
			name: 'Tofu nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 8,
			name: 'Avokado nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
		{
			id: 9,
			name: 'Kirjolohen mäti nigiri',
			description: '10 kpl',
			price: '8.00e',
		},
	],
	maki: [
		{
			id: 10,
			name: 'Lohi maki',
			price: '8.00e',
		},
		{
			id: 11,
			name: 'Kurkku maki',
			price: '8.00e',
		},
		{
			id: 12,
			name: 'Acokado maki',
			price: '8.00e',
		},
		{
			id: 13,
			name: 'Grillattu lohi maki',
			price: '8.00e',
		},
		{
			id: 14,
			name: 'California maki',
			price: '8.00e',
			description: 'surimi, avokado, kurkku, majoneesi',
		},
		{
			id: 15,
			name: 'Philadelfia maki',
			price: '8.00e',
			description: 'lohi, avokado, kurkku, majoneesi',
		},
		{
			id: 16,
			name: 'Dragon roll',
			price: '8.00e',
			description: 'pahdettuja katkarapuja, kurkku, philadeljuusto',
		},
		{
			id: 17,
			name: 'Kasvis-california maki',
			price: '8.00e',
			description:
				'avokado, kurkku, paprika, grillattu sipuli, majoneesi',
		},
	],
}

export const drinks: MenuItem[] = [
	{
		name: 'Vesi',
		price: '0.90e',
	},
	{
		name: 'Maito',
		price: {
			'0.33l': '2.70e',
			'0.5l': '3.50e',
		},
	},
	{
		name: 'Tuoremehu',
		price: {
			'0.33l': '2.70e',
			'0.5l': '3.50e',
		},
	},
	{
		name: 'Virvoitusjuoma',
		price: {
			'0.33l': '2.70e',
			'0.5l': '3.50e',
		},
	},
	{
		name: 'Lapinkulta olut IV',
		price: '5.60e',
	},
	{
		name: 'Tsingtao olut III',
		price: '5.60e',
	},
	{
		name: 'Lonkero',
		price: '5.60e',
	},
	{
		name: 'Omenasiideri',
		price: '5.60e',
	},
	{
		name: 'Päärynäsiideri',
		price: '5.60e',
	},
	{
		name: 'Kahvi',
		price: '2.20e',
	},
	{
		name: 'Tee',
		price: '2.20e',
	},
	{
		name: 'Teekannu',
		price: '5.00e',
	},
]

type strongAlcohols = {
	redWines: MenuItem[]
	whiteWines: MenuItem[]
	liquors: MenuItem[]
}

export const strongAlcohols: strongAlcohols = {
	redWines: [
		{
			name: 'Rosiere syrah',
			description: 'Ranska kevyt, puolikuiva, pehmeä, makean marjaisa',
			price: {
				'12cl': '6.90e',
				'16cl': '8.10e',
				'24cl': '10.50e',
				'75cl / pullo': '27.00e',
			},
		},
		{
			name: "Jacob's creek",
			price: {
				'12cl': '6.90e',
				'16cl': '8.10e',
				'24cl': '10.50e',
				'75cl / pullo': '27.00e',
			},
		},
	],
	whiteWines: [
		{
			name: "Jacob's creek",
			price: {
				'12cl': '6.90e',
				'16cl': '8.10e',
				'24cl': '10.50e',
				'75cl / pullo': '27.00e',
			},
		},
	],
	liquors: [
		{
			name: 'Monopol v.s.o.p. (4cl)',
			description: 'Cognac',
			price: '7.50e',
		},
		{
			name: "Jack Daniel's (4cl)",
			description: 'Whiskey',
			price: '7.50e',
		},
		{
			name: 'Koskenkorva (4cl)',
			price: '7.50e',
		},
	],
}

// export const additionalInfo = {
// 	1: '* Melko voimakkaasti maustettua',
// 	2: '** Voimakkaasti maustettua',
// 	3: '*** Tajun vievästi maustettua',
// }
