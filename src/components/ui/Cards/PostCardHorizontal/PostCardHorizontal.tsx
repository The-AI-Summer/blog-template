import cn from 'classnames';
import Img from 'gatsby-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React, { Fragment } from 'react';
import { Direction } from '../../../../globals';
import Card from '../Card';
import PostCard from '../PostCard/PostCard';
import './PostCardHorizontal.scss';

interface PostCardHorizontalProps {
    post: Frontmatter;
    className?: string;
}

const PostCardHorizontal: React.FC<PostCardHorizontalProps> = ({
    post,
    className
}: PostCardHorizontalProps) => {
    const breakpoints = useBreakpoint();

    return (
        <Fragment>
            {breakpoints.sm ? (
                <PostCard post={post} className={className} />
            ) : (
                <Card
                    direction={Direction.horizontal}
                    onClickLink={post.suburl}
                    className={cn(className, 'post-card--horizontal')}
                    aos="fade-left"
                >
                    <Img
                        className="post-card--horizontal__image"
                        fluid={post.image.childImageSharp.fluid}
                        imgStyle={{ objectFit: 'fill' }}
                        alt={post.title}
                    ></Img>

                    <div className="post-card--horizontal__details">
                        <div className="post-card--horizontal__details__tags">
                            <span className="post-card--horizontal__details__tags__item">
                                {post.tags.join(' · ')}
                            </span>
                        </div>
                        <h3 className="post-card--horizontal__details__title">
                            {post.title}
                        </h3>
                        <p className="post-card--horizontal__details__description">
                            {post.description}
                        </p>
                    </div>
                </Card>
            )}
        </Fragment>
    );
};

export default PostCardHorizontal;
