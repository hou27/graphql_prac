import { people, getById, getByMovieId, getMovies } from "./db";

const resolvers = {
	Query: {
		people: () => people,
		person: (_, { id }) => getById(id),
		movies: () => getMovies(),
		movie: (_, { id }) => getByMovieId(id)
	}
};

export default resolvers;