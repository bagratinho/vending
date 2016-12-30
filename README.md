# vending machine UI with React and Reflux

# Data model 

The data model is devided into 3 structural parts

1. Machine data
2. User Data
3. Currency Data

So each of this data sources contain information about itself only 

# Machine data

1. current credit on machine - balance 
2. message apearing on the display - message
3. keypad with all available symbol buttons inside - keyad
4. respective cells, with information about the name , quantity of the product inside, and the cell code - items

{
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

# User data

1. Username
2. Balance on users account
3. List of items bought

{
	username: "Bagrat",
	balance: 500,
	i_list: []
}

# Currency data

1. currency, as the currency by default
2. all available currencies, with their ids, display names and most important, multipliers

{
	currency: 1,
	currencies: [
		{
			id: 1,
			multiplier: 1,
			dsp_name: "€"
		},
		{
			id: 2,
			multiplier: 1.2,
			dsp_name: "$"
		}
	],	
}

# Currency logic

Users ballance and machine balance values are stored as number, which can be converted to resective currency by multiplying to its multiplication number.

# Technologies used

React and Reflux for aplication UI and unidirrectional data flow. 

React+Reflux makes it extreemly easy to manipulate you views in accordance with data state. Creating respective Actions for Component -> Store -> Component communications is easy and straightforward.

All the UI manipulations are done automatically thanks to reacts Rerender on data (state, props) change, so all you need to worry is correctness of the data.

