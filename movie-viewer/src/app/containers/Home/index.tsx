import React from 'react';
import { Header, Input, Button, ButtonGroup } from 'app/components';
import * as styles from './style.css';

interface IProps {}

export const Home: React.FC<IProps> = ({}) => {
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
    </>
  );
};
