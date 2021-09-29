import { Actor } from "../actor/actor";

export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: Actor[];
}
