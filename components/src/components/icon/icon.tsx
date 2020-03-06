import React from 'react';
import classNames from 'classnames';
import './icon.css';

interface props {
    name?: string,
    className?: string,
    size?: number,
    disabled?: boolean,
    onClick?: (event?: React.MouseEvent) => void,
    [key: string]: any
}

const Icon: React.FC<props> = ({
    className,
    size = null,
    name = null,
    disabled = false,
    onClick = () => {},
    ...attrs
}) => {
    const styles = { fontSize: `${size}rem` };
    const classes: string = classNames(
        'fa',
        `fa-${name}`,
        'func',
        className,
        { disabled }
    );

    return (
        <i
            className={ classes }
            style={ styles }
            onClick={ disabled ? undefined : onClick }
            { ...attrs }
        ></i>
    );
}

export default Icon;
