// Bingo card
export const card = [
	{
		id: '00',
		row: '0',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: '(child noises in the background)',
	},
	{
		id: '01',
		row: '0',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: 'Hello, hello?',
	},
	{
		id: '02',
		row: '0',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: 'i need to jump in another call',
	},
	{
		id: '03',
		row: '0',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: 'can everyone go on mute?',
	},
	{
		id: '04',
		row: '0',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: 'could you please get closer to the mic?',
	},
	{
		id: '10',
		row: '1',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: '(load painful echo/feedback)',
	},
	{
		id: '11',
		row: '1',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: 'Next slide, please',
	},
	{
		id: '12',
		row: '1',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: 'can we take this offline?',
	},
	{
		id: '13',
		row: '1',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: 'is _____ on the call?',
	},
	{
		id: '14',
		row: '1',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: 'Could you share this slides afterwards?',
	},
	{
		id: '20',
		row: '2',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: 'can somebody grant presenter rights?',
	},
	{
		id: '21',
		row: '2',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: 'can you email that to everyone?',
	},
	{
		id: '22',
		row: '2',
		col: '2',
		isCenter: true,
		matched: false,
		cellText: "DON'T PRESS ME !",
	},
	{
		id: '23',
		row: '2',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: 'Sorry I had problems loging in',
	},
	{
		id: '24',
		row: '2',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: '(animal noises in the background)',
	},
	{
		id: '30',
		row: '3',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: "Sorry, i didn't found the conference id",
	},
	{
		id: '31',
		row: '3',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: 'I was having connection issues',
	},
	{
		id: '32',
		row: '3',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: "I'll have to get back to you",
	},
	{
		id: '33',
		row: '3',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: 'who just joined?',
	},
	{
		id: '34',
		row: '3',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: 'sorry, something _____ with my calendar',
	},
	{
		id: '40',
		row: '4',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: 'Do you see my screen?',
	},
	{
		id: '41',
		row: '4',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: "let's wait for _____ !",
	},
	{
		id: '42',
		row: '4',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: 'You will send the minutes?',
	},
	{
		id: '43',
		row: '4',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: 'sorry, i was on mute',
	},
	{
		id: '44',
		row: '4',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: 'can you repeat please?',
	},
];

// Bingo diagonals
let diagonalsIzq = card
	.filter(
		(e) => e.id === '44' || e.id === '33' || e.id === '11' || e.id === '00'
	)
	.flat();
let diagonalsDer = card
	.filter(
		(e) => e.id === '40' || e.id === '31' || e.id === '13' || e.id === '04'
	)
	.flat();
// Bingo columns
let col1 = card.filter((e) => e.col === '0').flat();
let col2 = card.filter((e) => e.col === '1').flat();
let col3 = card.filter((e) => e.col === '2' && e.row !== '2').flat();
let col4 = card.filter((e) => e.col === '3').flat();
let col5 = card.filter((e) => e.col === '4').flat();
// Bingo rows
let row1 = card.filter((e) => e.row === '0').flat();
let row2 = card.filter((e) => e.row === '1').flat();
let row3 = card.filter((e) => e.row === '2' && e.col !== '2').flat();
let row4 = card.filter((e) => e.row === '3').flat();
let row5 = card.filter((e) => e.row === '4').flat();

// Bingo :
export const winner = [
	diagonalsDer,
	diagonalsIzq,
	row1,
	row2,
	row3,
	row4,
	row5,
	col1,
	col2,
	col3,
	col4,
	col5,
];
