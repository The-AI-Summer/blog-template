import cn from 'classnames';
import React from 'react';
import { Direction } from '../../../globals';
import './Block.scss';

interface BlockProps {
    direction: Direction;
    children?: React.ReactNode;
    className?: string;
    aos?: string;
}

const Block: React.FC<BlockProps> = (props: BlockProps) => {
    return (
        <div
            className={cn(
                'block',
                `block--${props.direction}`,
                props.className
            )}
            data-aos={props.aos}
        >
            {props.children}
        </div>
    );
};

export default Block;
