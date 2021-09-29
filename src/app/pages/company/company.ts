import { Movie } from "../movie/movie";

export interface Company {
  id: number,
  name: string,
  country: string,
  createYear: number,
  employees: number,
  rating: number,
  movies: Movie[];
}
