import React from 'react';
import './modal.css';

import Portal from '../portal/portal';
import Icon from '../icon/icon';
import Button from '../button/button';

interface props {
    children: JSX.Element[] | JSX.Element | string;
    title?: string;
    isOpen?: boolean;
    onCancel?: () => void;
    onSubmit?: () => void;
    [key: string]: any;
}

const Modal: React.FC<props> = ({
    children = null,
    title = 'Modal window',
    isOpen = false,
    onCancel = () => {},
    onSubmit = () => {}
}) => {
    return (
        <>
        { isOpen &&
            <Portal>
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <Icon name="times" onClick={onCancel} />
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <Button onClick={onCancel} invert>Cancel</Button>
                            <Button onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Portal>
        }
        </>
    );
}

export default Modal;
