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

let movies = [
	{
		id: 0,
		name: "Star wars",
		score: 1
	},
	{
		id: 1,
		name: "Beauty Inside",
		score: 8
	},
	{
		id: 2,
		name: "Once",
		score: 99
	},
	{
		id: 3,
		name: "New World",
		score: 100
	}
];

export const getById = id => {
	const filteredPeople = people.filter(person => String(id) === person.id);
	
	return filteredPeople[0];
}

export const getByMovieId = id => {
	const filteredMovies = movies.filter(movie => movie.id !== String(id));
	
	return filteredMovies[0];
}

export const getMovies = () => movies;

export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter(movie => movie.id !== String(id));
	if(movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		
		return true;
	}
	else {
		return false;
	}
}