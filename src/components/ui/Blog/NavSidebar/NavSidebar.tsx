import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import SimilarPosts from '../SimilarPosts/SimilarPosts';
import './NavSidebar.scss';

interface NavSidebarProps {
    postTopics: string[];
    postNoDetails: PostNoDetails[];
    currentUrl: string;
    allTopicsDetails: Record<string, TopicDetails>;
}

//TODO:on small screens  we can probably add this as a second layer navigation is navigationDrawer

const NavSidebar: React.FC<NavSidebarProps> = (props: NavSidebarProps) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            },
            { rootMargin: `0% 0% 0% 0%` }
        );

        const homeBannerElement = document.getElementById('post-banner');
        if (homeBannerElement) {
            observer.observe(homeBannerElement);
        }

        return () => observer.disconnect();
    });

    return (
        <div
            className={cn(
                'nav-sidebar',
                `${isVisible ? 'nav-sidebar--active' : ''}`
            )}
        >
            <div className="nav-sidebar__content">
                <div className="nav-sidebar__content__title">
                    SIMILAR ARTICLES
                </div>
                <SimilarPosts
                    postTopics={props.postTopics}
                    postNoDetails={props.postNoDetails}
                    currentUrl={props.currentUrl}
                    allTopicsDetails={props.allTopicsDetails}
                />
            </div>
        </div>
    );
};

export default NavSidebar;
