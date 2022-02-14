import React from 'react';
import { Direction } from '../../../globals';
import './Divider.scss';

interface DividerProps {
    direction: Direction;
}

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
    return <div className={`divider--${props.direction}`}></div>;
};

export default Divider;
