import { Actor } from "../actor/actor";
import { Company } from "../company/company";

export class Movie {
  id: number | undefined;
  title: string | undefined;
  poster: string | undefined;
  genre: string[] | undefined;
  year: number | undefined;
  duration: number | undefined;
  imdbRating: number | undefined;
  actors: Actor[] | undefined;
  company: Company | undefined;

  constructor(
    _id?: number,
    _title?: string,
    _poster?: string,
    _genre?: string[],
    _year?: number,
    _duration?: number,
    _imdbRating?: number,
    _actors?: Actor[],
    _company?: Company){
      this.id = _id ? _id : undefined;
      this.title = _title ? _title : undefined;
      this.poster = _poster ? _poster : undefined;
      this.genre = _genre ? _genre : undefined;
      this.year = _year ? _year : undefined;
      this.duration = _duration ? _duration : undefined;
      this.imdbRating = _imdbRating ? _imdbRating : undefined;
      this.actors = _actors ? _actors : undefined;
      this.company = _company ? _company : undefined;
  }

}
