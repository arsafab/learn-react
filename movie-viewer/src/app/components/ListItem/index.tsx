import React from 'react';
import classNames from 'classnames';
import * as styles from './style.css';

interface props {
  className?: string;
  Tag?: React.FC<{className: string}>
  active?: boolean;
  disabled?: boolean;
  [key: string]: React.ReactNode;
};

export const ListGroupItem: React.FC<props> = ({
  children = null,
  className = '',
  Tag = 'li',
  active = false,
  disabled = false,
  ...attrs
}) => {
  const classes: string = classNames(
    styles.listGroupItem,
    className,
    { active },
    { disabled }
  );

  if (attrs.href && Tag === 'li') {
    Tag = 'a';
  }

  return (
  <Tag className={classes} {...attrs}>{children}</Tag>
  )
}
