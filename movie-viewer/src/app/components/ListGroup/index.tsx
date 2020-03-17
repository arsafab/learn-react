import React from 'react';
import classNames from 'classnames';
import * as styles from './style.css';

interface props {
  children?: React.ReactNode;
  className?: string;
  Tag?: React.FC<{className: string}>
};

export const ListGroup: React.FC<props> = ({
  children = null,
  className = '',
  Tag = 'ul'
}) => {
    const classes: string = classNames(
    styles.listGroup,
    'container',
    className
  );

  return (
    <Tag className={classes}>{children}</Tag>
  )
}
