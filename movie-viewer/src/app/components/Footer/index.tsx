import React from 'react';
import * as styles from './style.css';

interface IProps {
  children?: JSX.Element[] | JSX.Element | string;
}

export const Footer: React.FC<IProps> = ({ children = null }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.logo}>netflix<span>roulette</span></span>
      </div>
    </footer>
  );
};
