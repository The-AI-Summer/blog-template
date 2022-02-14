import React from 'react';

interface TabProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

const Tab: React.FC<TabProps> = (props: TabProps) => {
    return <div className={props.className}>{props.children}</div>;
};

export default Tab;
