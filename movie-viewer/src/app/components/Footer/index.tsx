import React from 'react';
import * as styles from './style.css';

interface IProps {}

export const Footer: React.FC<IProps> = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <span className={styles.logo}>netflix<span>roulette</span></span>
      </div>
    </footer>
  );
};
