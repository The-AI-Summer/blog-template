import { Link } from 'gatsby';
import React, { Fragment, useMemo, useState } from 'react';
import { SimilarPostsFactory } from '../../../utils/SimilarPostsFactory';
import './SimilarPosts.scss';

interface SimilarPostsProps {
    postTopics: string[];
    postNoDetails: PostNoDetails[];
    currentUrl: string;
    allTopicsDetails: Record<string, TopicDetails>;
}

const SimilarPosts: React.FC<SimilarPostsProps> = (
    props: SimilarPostsProps
) => {
    const initialActiveDropdowns = Array(props.postTopics.length).fill('');
    initialActiveDropdowns[0] = '--active';

    const [activeDropdowns, setActiveDropdowns] = useState(
        initialActiveDropdowns
    );

    const similarPosts = useMemo(() => {
        const similarPostsFactory = new SimilarPostsFactory(
            props.postNoDetails
        );
        return similarPostsFactory
            .setTopics(props.postTopics)
            .setCurrentUrl(props.currentUrl)
            .get();
    }, [props.postNoDetails, props.postTopics, props.currentUrl]);

    const toggleDropdowns = (index: number) => {
        setActiveDropdowns(
            activeDropdowns.map((item, i) => {
                if (i == index) {
                    return item === '' ? '--active' : '';
                } else {
                    return item;
                }
            })
        );
    };
    return (
        <Fragment>
            { Object.keys(similarPosts).length !== 0 &&
                props.postTopics.map((topic, i) => (
                    <div className="similar-posts__dropdown" key={topic}>
                        <div
                            className="similar-posts__topic-title"
                            onClick={() => toggleDropdowns(i)}
                        >
                            <div
                                key={topic}
                                className="similar-posts__topic-title__text"
                            >
                                {topic}
                            </div>
                            <div
                                className={`similar-posts__topic-title__arrow${activeDropdowns[i]}`}
                            >
                                <svg
                                    width="10"
                                    height="17"
                                    viewBox="0 0 10 13"
                                    fill="#2f4858ff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        // eslint-disable-next-line max-len
                                        d="M0.978147 6.375H9.01877C9.57502 6.375 9.85315 7.08887 9.4594 7.50723L5.44065 11.7805C5.1969 12.0395 4.80002 12.0395 4.55627 11.7805L0.537522 7.50723C0.143772 7.08887 0.421897 6.375 0.978147 6.375Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="similar-posts__dropdown__wrapper">
                            <div
                                className={`similar-posts__dropdown-content${activeDropdowns[i]}`}
                            >
                                {similarPosts[topic].similarPosts.map(
                                    (item, j) => (
                                        <div
                                            key={j}
                                            className={'similar-posts__item'}
                                        >
                                            <Link
                                                to={`/${item.frontmatter.suburl}`}
                                            >
                                                {item.frontmatter.title}
                                            </Link>
                                        </div>
                                    )
                                )}
                                {similarPosts[topic].isTrimmed ? (
                                    <div className="similar-posts__item--see-more">
                                        <Link
                                            to={`/topics/${props.allTopicsDetails[topic].url}`}
                                        >
                                            More articles{' '}
                                        </Link>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </Fragment>
    );
};

export default SimilarPosts;
