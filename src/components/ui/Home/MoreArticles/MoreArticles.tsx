import React, { Fragment, useState } from 'react';
import { Accent, ButtonType } from '../../../../globals';
import Group from '../../../layout/Group/Group';
import Button from '../../Button/Button';
import PostCard from '../../Cards/PostCard/PostCard';
import './MoreArticles.scss';

interface MoreArticlesProps {
    posts: Frontmatter[];
}

const MoreArticles: React.FC<MoreArticlesProps> = (
    props: MoreArticlesProps
) => {
    const limit = 3;
    const length = props.posts.length;
    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState(props.posts.slice(0, 9));
    const [index, setIndex] = useState(9);

    const loadMore = () => {
        const newIndex = index + limit;
        const newShowMore = newIndex < length - 1;
        const newList = list.concat(props.posts.slice(index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };

    const groupSize = 3;
    const groupsNum = Math.ceil(list.length / groupSize);

    const renderGroup = (
        groupIndex: number,
        postsList: Frontmatter[],
        groupSize: number
    ) => {
        const renderedItems = [];

        for (let j = 0; j < groupSize; j++) {
            const post = postsList[groupIndex * groupSize + j];

            post
                ? renderedItems.push(<PostCard key={post.suburl} post={post} />)
                : renderedItems.push('');
        }
        return renderedItems;
    };

    return (
        <Fragment>
            {[...Array(groupsNum).keys()].map((groupIndex) => (
                <Group key={groupIndex} size={groupSize}>
                    {renderGroup(groupIndex, list, groupSize)}
                </Group>
            ))}

            {showMore && (
                <Button
                    accent={Accent.secondary}
                    type={ButtonType.custom}
                    onClickFunction={() => loadMore()}
                    className="load-more-btn"
                >
                    <span>Load More</span>
                </Button>
            )}
        </Fragment>
    );
};

export default MoreArticles;
