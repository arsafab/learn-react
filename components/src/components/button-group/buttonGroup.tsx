import React from 'react';
import classNames from 'classnames';
import './button-group.css';

interface props {
    children?: React.ReactNode,
    className?: string
    vertical?: boolean,
    [key: string]: any
}

const ButtonGroup: React.FC<props> = ({
    className,
    children = null,
    vertical = false,
    ...attrs
}) => {
    const classes: string = classNames(
        'btn-group',
        className,
        { vertical }
    );

    return (
        <div className={ classes } { ...attrs }>
            { children }
        </div>
    )
}

export default ButtonGroup;
