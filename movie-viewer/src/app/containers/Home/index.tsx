import React from 'react';
import { Header, Input, Button, ButtonGroup } from 'app/components';
import * as styles from './style.css';

interface IProps {}

export const Home: React.FC<IProps> = ({}) => {
  return (
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
  );
};
