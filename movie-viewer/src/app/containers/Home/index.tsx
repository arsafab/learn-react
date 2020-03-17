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

interface IState {
  inputValue: string
}

@inject(STORE_MOVIES, STORE_ROUTER)
@observer
export class Home extends Component<IProps, IState> {
  state = {
    inputValue: ''
  }

  public componentDidMount(): void {
    const store = this.props[STORE_MOVIES];

    MoviesService.getAll()
      .then((data: IMovieResponse) => {
        store.saveMovies(data.data);
        store.filterBy('vote_average')
        store.changeCurrentPage(0);
      })
  }

  private searchBy = () => {
    const { searchBy } = this.props[STORE_MOVIES];
    const { inputValue } = this.state;
    searchBy(inputValue)
  }

  private onInputChange = ({target: { value }}) => {
    this.setState({ inputValue: value })
  }

  public render(): JSX.Element {
    const {
      activeMovies,
      movies,
      currentSorting,
      currentSearch,
      filterBy,
      setCurrentSearch
    } = this.props[STORE_MOVIES];

    return (
      <>
        <Header>
          <div className={styles.inputWrapper}>
            <Input id="text" type="text" onChange={(e) => this.onInputChange(e)} />
            <Button onClick={this.searchBy}>Search</Button>
          </div>
          <div className={styles.btnGroup}>
            <p>Search by:</p>
            <ButtonGroup>
              <Button
                active={currentSearch === 'title'}
                className={styles.btn}
                onClick={() => setCurrentSearch('title')}
              >
                Title
              </Button>
              <Button
                active={currentSearch === 'overview'}
                className={styles.btn}
                onClick={() => setCurrentSearch('overview')}
              >Overview</Button>
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
                  onClick={() => filterBy('release_date')}
                >
                  Release date
                </Button>
                <Button
                  className={styles.btn}
                  active={currentSorting === 'vote_average'}
                  onClick={() => filterBy('vote_average')}
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
                  rating={item.vote_average}
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
