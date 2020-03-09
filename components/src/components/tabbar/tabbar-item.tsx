import React from 'react';
import classNames from 'classnames';
import './tabbar-item.css';

interface props {
    label: string;
    activeTab?: string;
    children?: React.ReactNode;
    [key: string]: React.ReactNode;
};

const TabbarItem: React.FC<props> = ({
    label,
    children = null,
    activeTab = '',
    ...attrs
}) => {
    const classes: string = classNames(
        'tab-bar-item',
        {active : activeTab === label},
    );

    return (
        <div className={classes} {...attrs}>
            { children }
        </div>
    )
}

export default TabbarItem;
