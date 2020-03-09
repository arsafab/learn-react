import React, { Component } from 'react';
import classNames from 'classnames';
import './tooltip.css';

interface IProps {
    children?: JSX.Element[] | JSX.Element | string;
    style?: object;
    content?: string;
    position?: Position | string;
};

interface IState {
    visible: boolean;
};

enum Position {
    Top = 'top',
    Left = 'left',
    Right = 'right',
    Bottom = 'bottom',
}

class Tooltip extends Component<IProps, IState> {
    state = {
        visible: false
    }

    hide = (): void => {
        this.setVisibility(false);
    }

    show = (): void => {
        this.setVisibility(true);
    }

    setVisibility = (visible: boolean): void => {
        this.setState({ visible })
    }

    render(): JSX.Element {
        const { style, children, position = Position.Top, content = 'Tooltip' } = this.props;
        const { visible } = this.state
        const classes: string = classNames(
            'tooltip',
            position
        );

        return (
            <span className="tooltipWrapper" >
                {visible && <span style={style} className={classes}>{content}</span>}
                <span
                    className="targetElement"
                    onMouseEnter={this.show}
                    onMouseLeave={this.hide}
                >{children}</span>
            </span>
        );
    }
}

export default Tooltip;
