import React from 'react';
import classNames from 'classnames';
import './list-group-item.css';

interface props {
    className?: string;
    Tag?: React.FC<{className: string}>
    active?: boolean;
    disabled?: boolean;
    [key: string]: React.ReactNode;
};

const ListGroupItem: React.FC<props> = ({
    children = null,
    className = '',
    Tag = 'ul',
    active = false,
    disabled = false,
    ...attrs
}) => {
    const classes: string = classNames(
        'list-group-item',
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

export default ListGroupItem;
