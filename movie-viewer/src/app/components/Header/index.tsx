import React from 'react';
import classNames from 'classnames';
import * as styles from './style.css';

interface IProps {
  children?: JSX.Element[] | JSX.Element | string;
}

export const Header: React.FC<IProps> = ({ children = null }) => {
  const logoWrapperStyles = classNames('container', styles.logoWrapper);
  const contentWrapperStyles = classNames('container', styles.contentWrapper);

  return (
    <header className={styles.header}>
      <div className={styles.bg}></div>
      <div className={logoWrapperStyles}>
        <div className={styles.logo}>
          netflix<span>roulette</span>
        </div>
      </div>
      <div className={contentWrapperStyles}>{children}</div>
    </header>
  );
};
