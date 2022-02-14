import React from 'react';
import Group from '../../../layout/Group/Group';
import PostCard from '../../Cards/PostCard/PostCard';
import Tab from '../../Tabs/Tab';
import Tabs from '../../Tabs/Tabs';
import './PostsPerTopic.scss';

interface PostsPerTopicProps {
    posts: Record<string, Frontmatter>;
    postsPerTopic: PostsPerTopicBlock[];
}

const PostsPerTopic: React.FC<PostsPerTopicProps> = (
    props: PostsPerTopicProps
) => {
    return (
        <Tabs
            size={props.postsPerTopic.length}
            className="posts-per-topic__tabs"
        >
            {props.postsPerTopic.map((postsPerTopicBlock) => {
                return (
                    <Tab
                        key={postsPerTopicBlock.topic}
                        label={postsPerTopicBlock.topic}
                    >
                        <Group size={postsPerTopicBlock.posts.length}>
                            {postsPerTopicBlock.posts.map((p) => {
                                return (
                                    <PostCard
                                        key={p}
                                        post={props.posts[p] || ''}
                                        className="posts-per-topic__tabs__card"
                                    />
                                );
                            })}
                        </Group>
                    </Tab>
                );
            })}
        </Tabs>
    );
};

export default PostsPerTopic;
