import cn from 'classnames';
import Img from 'gatsby-image';
import React from 'react';
import './Avatar.scss';

interface AvatarProps {
    image: FluidImage;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    return (
        <Img
            className={cn('avatar', props.className)}
            fluid={props.image.childImageSharp.fluid}
        ></Img>
    );
};

export default Avatar;
