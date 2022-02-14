import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { Fragment } from 'react';
import './PostBanner.scss';

interface PostBannerProps {
    post: Frontmatter;
    timeToRead: string;
    topicsDetails: Record<string, TopicDetails>;
}

const PostBanner: React.FC<PostBannerProps> = ({
    post,
    timeToRead,
    topicsDetails
}: PostBannerProps) => {
    return (
        <div id="post-banner" className="post-banner">
            <div className="post-banner__content">
                <div className="post-banner__content__details">
                    <h1>{post.title}</h1>

                    <div className="post-banner__content__details__post-details">
                        {post.author.map((a, i) => (
                            <Fragment key={a}>
                                <Link
                                    to={`/author/${a.split(' ').join('-')}/`}
                                    className="post-banner__content__details__post-details__author"
                                >
                                    {a}
                                </Link>
                                {post.author[i + 1] && <span>{','}</span>}
                            </Fragment>
                        ))}

                        <span>{'on'}</span>
                        <span>{post.publishedAt}</span>
                        <span>{'·'}</span>
                        <span>
                            {timeToRead}
                            {' mins'}
                        </span>
                    </div>

                    <div className="post-banner__content__details__topics">
                        {post.tags.map((p) => (
                            <Link
                                to={`/topics/${topicsDetails[p].url}`}
                                className="post-banner__content__details__topics__tag"
                                key={p}
                            >
                                {p}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="post-banner__content__featured-image">
                    <Img
                        fluid={post.image.childImageSharp.fluid}
                        alt={post.title}
                    ></Img>
                </div>
            </div>
        </div>
    );
};

export default PostBanner;
