import React, { Component } from 'react';
import {
  Header,
  Input,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  MovieItem
} from 'app/components';
import * as styles from './style.css';
import { MoviesService } from 'app/api';
import { IMovieResponse, IMovie } from 'app/models';

import { inject, observer } from 'mobx-react';
import { STORE_ROUTER, STORE_MOVIES } from 'app/constants';
import { MoviesStore, RouterStore } from 'app/stores';

interface IProps {
  [STORE_MOVIES]: MoviesStore;
  [STORE_ROUTER]: RouterStore;
}
interface IState {
  moviesList: IMovie[]
}

@inject(STORE_MOVIES, STORE_ROUTER)
@observer
export class Home extends Component<IProps, IState> {
  public readonly state = {
    moviesList: []
  }


  public componentDidMount(): void {
    const { movies } = this.props;

    MoviesService.getAll()
      .then((data: IMovieResponse) => {
        movies.addMovies(data.data);
        this.setState({ moviesList: data.data })
      })
  }

  public render(): JSX.Element {
    const { moviesList } = this.state;

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
              <Button active className={styles.btn}>
                Title
              </Button>
              <Button className={styles.btn}>Genre</Button>
            </ButtonGroup>
          </div>
        </Header>

        <div className={styles.filterWrapper}>
          <div className="container">
            <p>7 movies found</p>
            <div className={styles.btnGroup}>
              <p>Sort by:</p>
              <ButtonGroup>
                <Button active className={styles.btn}>
                  Release date
                </Button>
                <Button className={styles.btn}>Rating</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        <ListGroup>
          {
            moviesList.map((item: IMovie) => (
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
      </>
    );
  }
};
