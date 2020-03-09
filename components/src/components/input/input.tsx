import React from 'react';
import classNames from 'classnames';
import './input.css';

interface props {
    id: string,
    label?: string,
    error?: string,
    className?: string;
    [key: string]: any;
}

const Input: React.FC<props> = ({
    id,
    label = '',
    error = '',
    className = '',
    ...attrs
}) => {
    const classes: string = classNames(
        'input',
        className
    );

    return (
        <div className="inputWrapper">
            <div className="labelsWrapper">
                {label
                    && <label className="inputLabel" htmlFor={id}>{label}</label>
                }
                {attrs.required
                    && <span className="inputRequired">Required</span>
                }
            </div>
            <input
                name={id}
                id={id}
                className={classes}
                {...attrs}
            />
            {error
                && <span className="inputError">{error}</span>
            }
      </div>
    );
}

export default Input;
