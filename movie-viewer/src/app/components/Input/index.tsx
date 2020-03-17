import React from 'react';
import classNames from 'classnames';
import * as styles from './style.css';

interface IProps {
  id: string;
  label?: string;
  error?: string;
  className?: string;
  [key: string]: any;
}

export const Input: React.FC<IProps> = ({
  id,
  label = '',
  error = '',
  className = '',
  ...attrs
}) => {
  const classes: string = classNames(styles.input, className);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelsWrapper}>
        {label && (
          <label className={styles.inputLabel} htmlFor={id}>
            {label}
          </label>
        )}
        {attrs.required && (
          <span className={styles.inputRequired}>Required</span>
        )}
      </div>
      <input name={id} id={id} className={classes} {...attrs} />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};
