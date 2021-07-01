import { getMovies, getMoviesWithOPS } from "./db";

const resolvers = {
	Query: {
		movies: (_, {limit, rating}) => getMoviesWithOPS(limit, rating)
	}
};

export default resolvers;