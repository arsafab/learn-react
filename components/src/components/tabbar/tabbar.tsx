import React, { Component } from 'react';
import classNames from 'classnames';
import './tabbar.css';
import TabbarNav from './tabbar-nav';

interface IProps {
    children?: JSX.Element[];
    vertical?: boolean;
    className?: string;
};

interface IState {
    activeTab: string | null
};

class Tabbar extends Component<IProps, IState> {

    state = {
        activeTab: null
    }

    componentDidMount(): void {
        const { children = [] } = this.props;
        const activeTab = this.getChildrenLabels(children)[0];

        this.setActiveTab(activeTab);
    }

    getChildrenLabels = (children: JSX.Element[]): string[] => (
        children.map(({ props }) => props.label)
    )

    setActiveTab =(activeTab: string): void =>  {
        const { activeTab: currentTab } = this.state;

        if (currentTab !== activeTab) {
            this.setState({
                activeTab
            });
        }
    }

    renderTabs = (): JSX.Element[] => {
        const { children = [] } = this.props;
        const { activeTab } = this.state;

        return this.getChildrenLabels(children).map(navLabel => (
            <TabbarNav
                key={navLabel}
                navLabel={navLabel}
                className={classNames({active: activeTab === navLabel})}
                onChangeActiveTab={this.setActiveTab}
            />
        ));
    }

    render(): React.ReactNode {
        const { children, className, vertical, ...attrs } = this.props;
        const { activeTab } = this.state;

        const classes: string = classNames(
            'tab-bar',
            className,
            { vertical }
        );

        return (
            <div className={classes} {...attrs}>
                <div className="tab-bar-nav">
                    {this.renderTabs()}
                </div>
                <div className="tab-container">
                    {React.Children.map(children, child => React.cloneElement(child as any, {activeTab}))}
                </div>
            </div>
        )
    }
}

export default Tabbar;
