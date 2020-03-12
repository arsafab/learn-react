import React from 'react';
import classNames from 'classnames';
import * as styles from './styles.css';

interface IProps {
  children?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  invert?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  [key: string]: any;
}

export const Button: React.FC<IProps> = ({
  className = '',
  children = 'Default button',
  disabled = false,
  active = false,
  invert = false,
  onClick = () => {},
  ...attrs
}) => {
  const onClickAction: (event: React.MouseEvent) => void | (() => void) = (
    event: React.MouseEvent
  ) => {
    return disabled ? event.preventDefault() : onClick(event);
  };

  const Tag = attrs.href ? 'a' : 'button';
  const classes: string = classNames(
    styles.btn,
    className,
    { [styles.active]: active },
    { [styles.invert]: invert }
  );

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};
