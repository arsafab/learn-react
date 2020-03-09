import React from 'react';
import classNames from 'classnames';
import './chip.css';
import Icon from '../icon/icon';
import Image from '../image/image';

interface props {
    text: string;
    className?: string;
    withIcon?: boolean;
    withClose?: boolean;
    withImage?: boolean;
    imageSrc?: string;
    imgAlt?: string;
    iconName?: string;
    id?: string | number,
    onChipClick?: (id: string | number) => void;
    onCloseClick?: (e: React.MouseEvent, id: string | number) => void;
}

const Chip: React.FC<props> = ({
    text,
    withIcon = false,
    withClose = false,
    withImage = false,
    imageSrc = '',
    imgAlt = '',
    className = '',
    iconName = 'user-tie',
    id = null,
    onChipClick = () => {},
    onCloseClick = () => {}
}) => {
    const classes: string = classNames(
        'chip',
        className
    );

    const chipClick = () => {
        if (id !== null) {
            onChipClick(id);
        }
    }

    const closeClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (id !== null) {
            onCloseClick(e, id);
        }
    }

    return (
        <div className={ classes } onClick={chipClick}>
            {
                withIcon &&
                <span className="chipIcon">
                    <Icon name={iconName} />
                </span>
            }
            {
                withImage &&
                <span className="withImage">
                    <Image src={imageSrc} height={24} width={24} alt={imgAlt} circle />
                </span>
            }
            <span className="chipText">{text}</span>
            {
                withClose &&
                <span className="chipClose" onClick={closeClick}>
                    <Icon name="times" />
                </span>
            }
        </div>
    )
}

export default Chip;
