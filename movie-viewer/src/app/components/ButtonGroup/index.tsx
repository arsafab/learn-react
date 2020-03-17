import React from 'react';
import classNames from 'classnames';
import * as styles from './style.css';

interface props {
  children?: React.ReactNode;
  className?: string;
  vertical?: boolean;
  [key: string]: any;
}

export const ButtonGroup: React.FC<props> = ({
  className,
  children = null,
  vertical = false,
  ...attrs
}) => {
  const classes: string = classNames(styles.btnGroup, className, { vertical });

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};
