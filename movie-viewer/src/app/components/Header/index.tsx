import React from 'react';
import * as styles from './style.css';

interface IProps {
  children?: JSX.Element[] | JSX.Element | string;
}

export const Header: React.FC<IProps> = ({ children = null }) => {
  return (
    <header className={styles.header}>
      <div className={styles.bg}></div>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          netflix<span>roulette</span>
        </div>
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </header>
  );
};
