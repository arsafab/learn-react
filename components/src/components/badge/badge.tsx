import React from 'react';
import classNames from 'classnames';
import './badge.css';

interface props {
    value: string | number;
    circle?: boolean;
    className?: string;
    inline?: boolean;
    outer?: boolean;
    [key: string]: React.ReactNode;
};

const Badge: React.FC<props> = ({
    value,
    circle = false,
    className = '',
    inline = false,
    outer = false,
    ...attrs
}) => {
    const text = typeof value === 'string';
    const classes: string = classNames(
        'badge',
        { circle },
        className,
        { inline },
        { outer },
        { text },
        { warning: attrs.warning },
        { alert: attrs.alert },
        { success: attrs.success },
        { info: attrs.info },
    );

    return (
        <span className={classes}>
            { value }
        </span>
    )
}

export default Badge;
