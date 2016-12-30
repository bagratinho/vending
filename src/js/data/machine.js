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
			n:"D",
			id: 4
		},
		{
			n:"E",
			id: 5
		},
		{
			n:"F",
			id: 6
		},
		{
			n:"G",
			id: 7
		},
		{
			n:"H",
			id: 8
		},
		{
			n:"I",
			id: 9
		}
	],
	items: [
		{
			key_1: 1,
			key_2: 5,
			qtty: 8,
			price: 150,
			name: "Snickers"
		}
	]
}

export default Machine