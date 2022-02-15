import cn from 'classnames';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import { Direction } from '../../../globals';
import './Card.scss';

interface CardProps {
    direction: Direction;
    children?: React.ReactNode;
    className?: string;
    onClickLink?: string;
    onExternalClickLink?: string;
    aos?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    return (
        <Fragment>
            {(() => {
                if (props.onClickLink) {
                    return (
                        <Link
                            to={`/${props.onClickLink}`}
                            className={cn(
                                'card',
                                `card--${props.direction}`,
                                props.className
                            )}
                            data-aos={props.aos}
                        >
                            {props.children}
                        </Link>
                    );
                } else if (props.onExternalClickLink) {
                    return (
                        <a
                            href={`${props.onExternalClickLink}`}
                            className={cn(
                                'card',
                                `card--${props.direction}`,
                                props.className
                            )}
                            data-aos={props.aos}
                        >
                            {props.children}
                        </a>
                    );
                } else {
                    return (
                        <div
                            className={cn(
                                'card',
                                `card--${props.direction}`,
                                props.className
                            )}
                            data-aos={props.aos}
                        >
                            {props.children}
                        </div>
                    );
                }
            })()}
        </Fragment>
    );
};

export default Card;
