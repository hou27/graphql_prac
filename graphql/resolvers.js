import { people, getById, getByMovieId, getMovies, addMovie, deleteMovieById } from "./db";

const resolvers = {
	Query: {
		people: () => people,
		person: (_, { id }) => getById(id),
		movies: () => getMovies(),
		movie: (_, { id }) => getByMovieId(id)
	},
	Mutation: {
		addMovie: (_, {name, score}) => addMovie(name, score),
		deleteMovie: (_, { id }) => deleteMovieById(id)
	}
};

export default resolvers;