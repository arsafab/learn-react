import React from 'react';
import classNames from 'classnames';
import './image.css'

const DEFAULT_SRC = 'https://via.placeholder.com/';

interface props {
    alt?: string,
    width?: number,
    height?: number,
    src?: string,
    className?: string,
    circle?: boolean,
    [key: string]: React.ReactNode
}

const Image: React.FC<props> = ({
    className,
    width = 100,
    height = 100,
    alt = 'image',
    src = DEFAULT_SRC,
    circle = false,
    ...attrs
}) => {
    const classes = classNames(className, { circle })
    const defaultSrc = `https://via.placeholder.com/${width}x${height}`;

    return (
        <img
            width={ width }
            height={ height }
            alt={ alt }
            src={ src ? src : defaultSrc }
            className={ classes }
            { ...attrs }
        />
    )
}

export default Image;
