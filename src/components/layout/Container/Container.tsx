import React from 'react';
import './Container.scss';

interface ContainerProps {
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return <div className="container">{props.children}</div>;
};

export default Container;
