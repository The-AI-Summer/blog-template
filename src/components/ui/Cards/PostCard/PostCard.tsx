import cn from 'classnames';
import Img from 'gatsby-image';
import React from 'react';
import { Direction } from '../../../../globals';
import Card from '../Card';
import './PostCard.scss';

interface PostCardProps {
    post: Frontmatter;
    className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
    post,
    className
}: PostCardProps) => {
    return (
        <Card
            direction={Direction.vertical}
            onClickLink={post.suburl}
            className={cn(className, 'post-card')} //to pass group className and apply group scss
            aos="fade-up"
        >
            <Img
                className="post-card__image"
                fluid={post.image.childImageSharp.fluid}
                alt={post.title}
            ></Img>
            <div className="post-card__tags">
                <span className="post-card__tags__item">
                    {post.tags.join(' · ')}
                </span>
            </div>
            <h3 className="post-card__title">{post.title}</h3>
            <p className="post-card__description">{post.description}</p>
        </Card>
    );
};

export default PostCard;
