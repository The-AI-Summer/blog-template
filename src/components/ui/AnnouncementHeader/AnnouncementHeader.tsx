import React from 'react';
import { Accent, ButtonType } from '../../../globals';
import Button from '../Button/Button';
import './AnnouncementHeader.scss';

interface AnnouncementHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

//hardcoded it to avoid copy pasting everywhere
const AnnouncementHeader: React.FC<AnnouncementHeaderProps> = (
    props: AnnouncementHeaderProps
) => {
    return (
        <div className={props.className || 'announcement-header'}>
            <div className="announcement-header__content">
                <p>Tincidunt dui ut ornare lectus sit amet est placerat in.</p>
                <Button
                    accent={Accent.primary}
                    type={ButtonType.linkExternal}
                    onClickLink=""
                    className="announcement-header__content__button"
                >
                    Ultrices eros
                </Button>
            </div>
        </div>
    );
};

export default AnnouncementHeader;
