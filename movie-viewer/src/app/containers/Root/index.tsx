import React from 'react';
import styles from './style.css';

interface IProps {
  children: JSX.Element[] | JSX.Element | string;
}

export const Root: React.FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
