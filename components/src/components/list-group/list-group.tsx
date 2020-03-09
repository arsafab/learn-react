import React from 'react';
import classNames from 'classnames';
import './list-group.css';

interface props {
    children?: React.ReactNode;
    className?: string;
    Tag?: React.FC<{className: string}>
};

const ListGroup: React.FC<props> = ({
    children = null,
    className = '',
    Tag = 'ul'
}) => {
    const classes: string = classNames(
        'list-group',
        className
    );

    return (
        <Tag className={classes}>{children}</Tag>
    )
}

export default ListGroup;
