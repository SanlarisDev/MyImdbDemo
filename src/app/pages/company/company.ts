import { Movie } from "../movie/movie";

export interface Company {
  id: string,
  name: string,
  country: string,
  createYear: number,
  employees: number,
  rating: number,
  movies: Movie[];
}
