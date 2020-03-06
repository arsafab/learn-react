import React from 'react';
import classNames from 'classnames';
import './button.css';

interface props {
    children?: React.ReactNode,
    disabled?: boolean,
    active?: boolean,
    className?: string
    onClick?: () => void,
    [key: string]: any
}

const Button: React.FC<props> = ({
    className,
    children = 'Default button',
    disabled = false,
    active = false,
    onClick = () => {},
    ...attrs
}) => {

    const onClickAction: (event: React.MouseEvent) => void | (() => void) = (event: React.MouseEvent) => {
        return (disabled && attrs.href)
            ? event.preventDefault()
            : onClick;
    }

    const Tag = attrs.href ? 'a' : 'button';
    const classes: string = classNames(
        'btn',
        className,
        { active }
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
