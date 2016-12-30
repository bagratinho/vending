var Machine = {
	is_busy: 0,
	balance: 0,
	message: "Standby",
	keypad: [
		{
			n:"A",
			id: 1
		},
		{
			n:"B",
			id: 2
		},
		{
			n:"C",
			id: 3
		},
		{
			n:"1",
			id: 4
		},
		{
			n:"2",
			id: 5
		},
		{
			n:"3",
			id: 6
		}
	],
	items: [
		{
			key_1: 1,
			key_2: 4,
			qtty: 8,
			price: 20,
			name: "Snickers"
		},
		{
			key_1: 1,
			key_2: 5,
			qtty: 5,
			price: 15,
			name: "Bounty"
		},
		{
			key_1: 1,
			key_2: 6,
			qtty: 10,
			price: 10,
			name: "Mars"
		},
		{
			key_1: 2,
			key_2: 4,
			qtty: 2,
			price: 20,
			name: "Kit Kat"
		},
		{
			key_1: 2,
			key_2: 5,
			qtty: 1,
			price: 75,
			name: "M&Ms"
		},
		{
			key_1: 2,
			key_2: 6,
			qtty: 6,
			price: 22,
			name: "Coca Cola"
		},
		{
			key_1: 3,
			key_2: 4,
			qtty: 0,
			price: 11,
			name: "Fanta"
		},
		{
			key_1: 3,
			key_2: 5,
			qtty: 8,
			price: 32,
			name: "Sprite"
		},
		{
			key_1: 3,
			key_2: 6,
			qtty: 8,
			price: 50,
			name: "Cola Zero"
		}
	]
}

export default Machine