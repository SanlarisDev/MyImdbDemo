import { Actor } from "../actor/actor";
import { Company } from "../company/company";

export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: Actor[];
  company: Company | undefined;
}
