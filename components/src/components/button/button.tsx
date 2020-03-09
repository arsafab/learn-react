import React from 'react';
import classNames from 'classnames';
import './button.css';

interface props {
    children?: React.ReactNode,
    disabled?: boolean,
    active?: boolean,
    className?: string,
    invert?: boolean,
    onClick?: (event: React.MouseEvent) => void,
    [key: string]: any
}

const Button: React.FC<props> = ({
    className,
    children = 'Default button',
    disabled = false,
    active = false,
    invert = false,
    onClick = () => {},
    ...attrs
}) => {

    const onClickAction: (event: React.MouseEvent) => void | (() => void) = (event: React.MouseEvent) => {
        return (disabled)
            ? event.preventDefault()
            : onClick(event);
    }

    const Tag = attrs.href ? 'a' : 'button';
    const classes: string = classNames(
        'btn',
        className,
        { active },
        { invert }
    );

    return (
        <Tag
            className={ classes }
            disabled={ disabled }
            onClick={ onClickAction }
            { ...attrs }
        >
            { children }
        </Tag>
    );
};

export default Button;
