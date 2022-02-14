import cn from 'classnames';
import React, { useState } from 'react';
import './Tabs.scss';

interface TabsProps {
    children: React.ReactNode;
    size: number;
    className?: string;
}

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
    const initialState = Array(props.size).fill('');
    initialState[0] = '--active';
    const [activeTabs, setActiveTabs] = useState(initialState);

    const setActive = (index: number) => {
        setActiveTabs(
            activeTabs.map((item, i) => {
                if (i == index) {
                    return item === '' ? '--active' : '';
                } else {
                    return '';
                }
            })
        );
    };

    return (
        <div className={cn('tabs', props.className)}>
            <div className="tabs__headers">
                {React.Children.map(props.children, (child, i) =>
                    React.isValidElement(child) ? (
                        <div
                            className={`tabs__headers__item${activeTabs[i]}`}
                            key={i}
                            onClick={() => setActive(i)}
                        >
                            <h5> {child.props.label}</h5>
                        </div>
                    ) : (
                        ''
                    )
                )}
            </div>
            <div className="tabs__content">
                {React.Children.map(props.children, (child, i) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, {
                              className: `tabs__content__item${activeTabs[i]}`
                          })
                        : child
                )}
            </div>
        </div>
    );
};

export default Tabs;
