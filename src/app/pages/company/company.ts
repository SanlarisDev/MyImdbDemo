import { Movie } from "../movie/movie";

export class Company {
  id: number | undefined;
  name: string | undefined;
  country: string | undefined;
  createYear: number | undefined;
  employees: number | undefined;
  rating: number | undefined;
  movies?: Movie[] | undefined;

  constructor(
    _id?: number,
    _name?: string,
    _country?: string,
    _createYear?: number,
    _employees?: number,
    _rating?: number,
    _movies?: Movie[],
  ){
    this.id = _id ? _id : undefined;
    this.name = _name ? _name : undefined;
    this.country = _country ? _country : undefined;
    this.createYear = _createYear ? _createYear : undefined;
    this.employees = _employees ? _employees : undefined;
    this.rating = _rating ? _rating : undefined;
    this.movies = _movies ? _movies : undefined;
  }
}
