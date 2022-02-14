import cn from 'classnames';
import React from 'react';
import './PageSection.scss';

interface PageSectionProps {
    children?: React.ReactNode;
    className?: string;
}

const PageSection: React.FC<PageSectionProps> = (props: PageSectionProps) => {
    return (
        <section className={cn('page-section', props.className)}>
            {props.children}
        </section>
    );
};

export default PageSection;
