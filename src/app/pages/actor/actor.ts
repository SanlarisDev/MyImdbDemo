import { Movie } from "../movie/movie";

export class Actor {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  gender: string | undefined;
  bornCity: string | undefined;
  birthdate: Date | undefined; //TODO: change to only date
  img: string | undefined;
  rating: number | undefined;
  movies: Movie[] | undefined;

constructor(
  _id?: number,
  _firstName?: string,
  _lastName?: string,
  _gender?: string,
  _bornCity?: string,
  _birthdate?: Date,
  _img?: string,
  _rating?: number,
  _movies?: Movie[]) {
    this.id = _id ? _id : undefined;
    this.firstName = _firstName ? _firstName : undefined;
    this.lastName = _lastName ? _lastName : undefined;
    this.gender = _gender ? _gender : undefined;
    this.bornCity = _bornCity ? _bornCity : undefined;
    this.birthdate = _birthdate ? _birthdate : undefined;
    this.img = _img ? _img : undefined;
    this.rating = _rating ? _rating : undefined;
    this.movies = _movies ? _movies : undefined;
  }
}
