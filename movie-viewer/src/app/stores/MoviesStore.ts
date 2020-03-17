import { observable, action, computed } from "mobx";
import { IMovie } from "app/models";

export class MoviesStore {
  constructor(fixtures: IMovie[]) {
    this.initialData = fixtures;
  }

  @observable public movies: IMovie[] = [];
  @observable public currentPage: number;
  @observable public currentSorting: string;
  @observable public currentSearch: string = 'title';

  private initialData: IMovie[];

  @computed
  get activeMovies() {
    const offset = this.currentPage * 9;
    return this.movies.slice(offset, offset + 9);
  }

  @computed
  get totalPageNumber() {
    return Math.ceil(this.movies.length / 9);
  }

  @action
  saveMovies = (items: IMovie[]): void => {
    this.initialData = [ ...items ];
    this.movies = [ ...this.initialData ];
  };

  @action
  changeCurrentPage = (page: number): void => {
    this.currentPage = page;
  };

  @action
  filterBy = (field: string): void => {
    this.currentSorting = field;
    this.movies = this.movies
      .slice(0)
      .sort((a, b) => {
        return a[field] < b[field]
          ? 1
          : a[field] > b[field] ? -1 : 0;
      });
  };

  @action
  searchBy = (query: string): void => {
    const reg = new RegExp(query, 'gim');

    this.movies = this.initialData
      .filter(item => reg.test(item[this.currentSearch]));
  };

  @action
  setCurrentSearch = (field: string): void => {
    this.currentSearch = field;
  };
}
