import React, { Component } from 'react';
import * as styles from './style.css';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { observer, inject } from 'mobx-react';
import { STORE_MOVIES } from 'app/constants';
import { MoviesStore } from 'app/stores';

interface IProps {
  [STORE_MOVIES]?: MoviesStore;
}
interface IState {}

@inject(STORE_MOVIES)
@observer
export class Pagination extends Component<IProps, IState> {
  private showPrev = () => {
    const store = this.props[STORE_MOVIES];
    const { currentPage } = this.props[STORE_MOVIES];

    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    store.changeCurrentPage(currentPage - 1);
  }

  private showNext = () => {
    const store = this.props[STORE_MOVIES];
    const { currentPage } = this.props[STORE_MOVIES];

    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    store.changeCurrentPage(currentPage + 1);
  }

  public render(): JSX.Element {
    const { currentPage, totalPageNumber } = this.props[STORE_MOVIES];

    return (
      <div className={styles.pagination}>
        <ButtonGroup>
          <Button
            disabled={currentPage === 0}
            onClick={this.showPrev}
          >
            Prev
          </Button>
          <Button
            disabled={currentPage === totalPageNumber - 1}
            onClick={this.showNext}
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
    );
  }
};
