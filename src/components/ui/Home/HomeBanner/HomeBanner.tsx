import { Link } from 'gatsby';
import React from 'react';
import { Accent, ButtonType } from '../../../../globals';
import Button from '../../Button/Button';
import HorizontalCarousel from '../../Carousel/HorizontalCarousel';
import './HomeBanner.scss';

interface HomeBannerProps {
    // carouselPosts: Record<string, Frontmatter>;
    horizontalCarouselTopics: TopicDetails[];
}

const HomeBanner: React.FC<HomeBannerProps> = (props: HomeBannerProps) => {
    return (
        <div className="home-banner">
            <div className="home-banner__content">
                <div className="home-banner__content__details">
                    <h1> Scientific blog template based on AI Summer</h1>

                    <p>
                        A full example of this template can be found on{' '}
                        <a href="https://theaisummer.com">theaisummer.com</a>
                    </p>

                    <Button
                        accent={Accent.primary}
                        type={ButtonType.linkExternal}
                        onClickLink="https://theaisummer.com"
                        className="home-banner__content__details__cta"
                    >
                        See AI Summer
                    </Button>
                </div>
                <div className="home-banner__content__image">
                    <HorizontalCarousel
                        slidesNum={props.horizontalCarouselTopics.length}
                    >
                        {[...props.horizontalCarouselTopics]
                            .sort()
                            .sort(() => Math.random() - 0.5)
                            .map((topic, i) => (
                                <Link
                                    key={topic.title}
                                    className="carousel-topic"
                                    to={`/topics/${topic.url}`}
                                >
                                    <div className="carousel-topic__logo-wrapper">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: topic.logo || ''
                                            }}
                                        ></span>
                                    </div>
                                    <div className="carousel-topic__title">
                                        <h4>{topic.title}</h4>
                                    </div>
                                </Link>
                            ))}
                    </HorizontalCarousel>
                </div>
            </div>
            <div className="home-banner__background-wave"></div>
        </div>
    );
};

export default HomeBanner;
