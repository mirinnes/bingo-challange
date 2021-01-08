// Phrases
const cellTexts = [
	'(child noises in the background)',
	'Hello, hello?',
	'i need to jump in another call',
	'can everyone go on mute?',
	'could you please get closer to the mic?',
	'(load painful echo/feedback)',
	'Next slide, please',
	'can we take this offline?',
	'is _____ on the call?',
	'Could you share this slides afterwards?',
	'can somebody grant presenter rights?',
	'can you email that to everyone?',
	'Sorry I had problems loging in',
	'(animal noises in the background)',
	"Sorry, i didn't found the conference id",
	'I was having connection issues',
	"I'll have to get back to you",
	'who just joined?',
	'sorry, something _____ with my calendar',
	'Do you see my screen?',
	"let's wait for _____ !",
	'You will send the minutes?',
	'sorry, i was on mute',
	'can you repeat please?',
];

// Index order array randomly generated
let arr = [];
while (arr.length < 24) {
	let r = Math.floor(Math.random() * 24);
	if (arr.indexOf(r) === -1) arr.push(r);
}

// Bingo card
export const card = [
	{
		id: '00',
		row: '0',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[0]],
	},
	{
		id: '01',
		row: '0',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[1]],
	},
	{
		id: '02',
		row: '0',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[2]],
	},
	{
		id: '03',
		row: '0',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[3]],
	},
	{
		id: '04',
		row: '0',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[4]],
	},
	{
		id: '10',
		row: '1',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[5]],
	},
	{
		id: '11',
		row: '1',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[6]],
	},
	{
		id: '12',
		row: '1',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[7]],
	},
	{
		id: '13',
		row: '1',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[8]],
	},
	{
		id: '14',
		row: '1',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[9]],
	},
	{
		id: '20',
		row: '2',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[10]],
	},
	{
		id: '21',
		row: '2',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[11]],
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
		cellText: cellTexts[arr[12]],
	},
	{
		id: '24',
		row: '2',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[13]],
	},
	{
		id: '30',
		row: '3',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[14]],
	},
	{
		id: '31',
		row: '3',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[15]],
	},
	{
		id: '32',
		row: '3',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[16]],
	},
	{
		id: '33',
		row: '3',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[17]],
	},
	{
		id: '34',
		row: '3',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[18]],
	},
	{
		id: '40',
		row: '4',
		col: '0',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[19]],
	},
	{
		id: '41',
		row: '4',
		col: '1',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[20]],
	},
	{
		id: '42',
		row: '4',
		col: '2',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[21]],
	},
	{
		id: '43',
		row: '4',
		col: '3',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[22]],
	},
	{
		id: '44',
		row: '4',
		col: '4',
		isCenter: false,
		matched: false,
		cellText: cellTexts[arr[23]],
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
