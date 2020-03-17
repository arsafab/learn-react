import { History } from 'history';
import { RouterStore } from './RouterStore';
import { MoviesStore } from './MoviesStore';
import { STORE_ROUTER, STORE_MOVIES } from 'app/constants';
import { IMovie } from 'app/models';

export function createStores(history: History, defaultMovies: IMovie[]) {
  const routerStore = new RouterStore(history);
  const moviesStore = new MoviesStore(defaultMovies);

  return {
    [STORE_ROUTER]: routerStore,
    [STORE_MOVIES]: moviesStore
  };
}
