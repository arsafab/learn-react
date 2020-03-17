import { observable, action } from "mobx";
import { IMovie } from "app/models";

export class MoviesStore {
  constructor(fixtures: IMovie[]) {
    this.movies = fixtures;
  }

  @observable public movies: Array<IMovie>;

  @action
  addMovies = (items: IMovie[]): void => {
    this.movies = [ ...items ];
  };
}

