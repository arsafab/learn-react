import React, { Component } from 'react';
import {
  Header,
  Input,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  MovieItem,
  Footer
} from 'app/components';
import * as styles from './style.css';
import { MoviesService } from 'app/api';
import { IMovieResponse, IMovie } from 'app/models';

import { inject, observer } from 'mobx-react';
import { STORE_ROUTER, STORE_MOVIES } from 'app/constants';
import { MoviesStore, RouterStore } from 'app/stores';
import { Pagination } from 'app/components/Pagination';

interface IProps {
  [STORE_MOVIES]: MoviesStore;
  [STORE_ROUTER]: RouterStore;
}

interface IState {}

@inject(STORE_MOVIES, STORE_ROUTER)
@observer
export class Home extends Component<IProps, IState> {
  public componentDidMount(): void {
    const store = this.props[STORE_MOVIES];

    MoviesService.getAll()
      .then((data: IMovieResponse) => {
        store.saveMovies(data.data);
        store.filterBy('vote_average')
        store.changeCurrentPage(0);
      })
  }

  public render(): JSX.Element {
    const store = this.props[STORE_MOVIES];
    const { activeMovies, movies, currentSorting } = this.props[STORE_MOVIES];

    return (
      <>
        <Header>
          <div className={styles.inputWrapper}>
            <Input id="text" type="text" />
            <Button>Search</Button>
          </div>
          <div className={styles.btnGroup}>
            <p>Search by:</p>
            <ButtonGroup>
              <Button
                active
                className={styles.btn}
              >
                Title
              </Button>
              <Button
                className={styles.btn}
              >Genre</Button>
            </ButtonGroup>
          </div>
        </Header>

        <div className={styles.filterWrapper}>
          <div className="container">
            <p>{movies.length} movies found</p>
            <div className={styles.btnGroup}>
              <p>Sort by:</p>
              <ButtonGroup>
                <Button
                  className={styles.btn}
                  active={currentSorting === 'release_date'}
                  onClick={() => store.filterBy('release_date')}
                >
                  Release date
                </Button>
                <Button
                  className={styles.btn}
                  active={currentSorting === 'vote_average'}
                  onClick={() => store.filterBy('vote_average')}
                >Rating</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        <ListGroup>
          {
            activeMovies.map((item: IMovie) => (
              <ListGroupItem
                key={item.id}
              >
                <MovieItem
                  src={item.poster_path}
                  title={item.title}
                  releaseDate={item.release_date}
                  genres={item.genres}
                />
              </ListGroupItem>
            ))
          }
        </ListGroup>

        <Pagination />

        <Footer />
      </>
    );
  }
};
