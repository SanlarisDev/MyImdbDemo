import { Movie } from "../movie/movie";

export interface Actor {
  id: string,
  firstName: string,
  lastName: string,
  gender: string,
  bornCity: string,
  birthdate: Date | string, //TODO: change to only date
  img: string,
  rating: number,
  movies: Movie[];
}
