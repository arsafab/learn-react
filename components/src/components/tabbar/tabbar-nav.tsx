import React from 'react';
import classNames from 'classnames';
import './tabbar-nav.css';

interface props {
    navLabel?: string;
    className?: string;
    onChangeActiveTab?: (navLabel: string) => void
};

const TabbarNav: React.FC<props> = ({
    navLabel = 'Tab',
    className = '',
    onChangeActiveTab = () => {}
}) => {
    const classes: string = classNames(
        'nav-item',
        className
    );

    return (
        <button type="button" className={classes} onClick={() => {onChangeActiveTab(navLabel)}}>
            { navLabel }
        </button>
    )
}

export default TabbarNav;
