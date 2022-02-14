import cn from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { Accent, ButtonType } from '../../../globals';
import './Button.scss';

interface ButtonProps {
    accent: Accent;
    type: ButtonType;
    className?: string;
    children?: React.ReactNode;
    onClickLink?: string;
    onClickFunction?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    switch (props.type) {
        case ButtonType.linkExternal: {
            return (
                <a
                    className={cn(
                        'button',
                        `button--${props.accent}`,
                        props.className
                    )}
                    href={props.onClickLink || ''}
                >
                    {props.children}
                </a>
            );
        }
        case ButtonType.linkInternal: {
            return (
                <Link
                    className={cn(
                        'button',
                        `button--${props.accent}`,
                        props.className
                    )}
                    to={props.onClickLink || ''}
                >
                    {props.children}
                </Link>
            );
        }
        case ButtonType.custom: {
            return (
                <button
                    className={cn(
                        'button',
                        `button--${props.accent}`,
                        props.className
                    )}
                    onClick={props.onClickFunction}
                >
                    {props.children}
                </button>
            );
        }
        default: {
            return <button> {props.children}</button>;
        }
    }
};

export default Button;
