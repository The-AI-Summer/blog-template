import cn from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { Direction } from '../../../../globals';
import Card from '../Card';
import './TopicCard.scss';

interface TopicCardProps {
    topic: TopicDetails;
    posts: Frontmatter[];
    className?: string;
}

const TopicCard: React.FC<TopicCardProps> = (props: TopicCardProps) => {
    return (
        <Card
            direction={Direction.vertical}
            className={cn(props.className, 'topic-card')}
            aos="zoom-in"
        >
            <span
                className="topic-card__logo"
                dangerouslySetInnerHTML={{
                    __html: props.topic.logo || ''
                }}
            ></span>
            <h3 className="topic-card__title">{props.topic.title}</h3>
            <div className="topic-card__resources">
                {props.posts.map((p) => {
                    return (
                        <div
                            key={p.suburl}
                            className="topic-card__resources__item"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M10 17l5-5-5-5v10z" />
                            </svg>
                            <Link to={`/${p.suburl}`}>{p.title}</Link>
                        </div>
                    );
                })}
            </div>

            <Link
                className="topic-card__more"
                to={`/topics/${props.topic.url}`}
            >
                See more
            </Link>
        </Card>
    );
};

export default TopicCard;
