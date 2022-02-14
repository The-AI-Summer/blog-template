import React from 'react';
import { Direction } from '../../../globals';
import Block from '../Cards/Block';
import './PageBanner.scss';

interface PageBannerProps {
    className?: string;
    children: React.ReactNode[]; //accepts two Fragments
}

const PageBanner: React.FC<PageBannerProps> = (props: PageBannerProps) => {
    return (
        <div className={props.className}>
            <div className={`${props.className}__content`}>
                <Block
                    direction={Direction.vertical}
                    className={`${props.className}__content__details`}
                >
                    {props.children[0]}
                </Block>
                <Block
                    direction={Direction.vertical}
                    className={`${props.className}__content__image`}
                >
                    {props.children[1]}
                </Block>
            </div>
        </div>
    );
};

export default PageBanner;
