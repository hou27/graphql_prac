export const people = [
	{
		id: '1',
		name: "KimJeongHo",
		age: 22,
		gender: "male"
	},
	{
		id: '2',
		name: "AAA",
		age: 22,
		gender: "male"
	},
	{
		id: '3',
		name: "BBB",
		age: 25,
		gender: "female"
	},
	{
		id: '4',
		name: "CCC",
		age: 21,
		gender: "female"
	}
];

const getById = id => {
	const filteredPeople = people.filter(person => id === people.id);
	
	return filteredPeople[0];
}