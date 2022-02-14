import React, { Fragment } from 'react';
import { Direction } from '../../../../globals';
import Group from '../../../layout/Group/Group';
import Card from '../../Cards/Card';
import './Topics.scss';

interface TopicsProps {
    topics: TopicDetails[];
}

const renderGroup = (
    groupIndex: number,
    topics: TopicDetails[],
    groupSize: number
) => {
    const renderedItems = [];

    for (let j = 0; j < groupSize; j++) {
        const topic = topics[groupIndex * groupSize + j];
        renderedItems.push(
            <Card
                key={topic.title}
                direction={Direction.vertical}
                onClickLink={`topics/${topic.url}`}
                className="topic-card-light"
                aos="zoom-in"
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: topic.logo || ''
                    }}
                    className="topic-card-light__logo"
                ></span>
                <h4 className="topic-card-light__title">{topic.title}</h4>
                <p className="topic-card-light__desc">{topic.desc}</p>
            </Card>
        );
    }
    return renderedItems;
};

const Topics: React.FC<TopicsProps> = (props: TopicsProps) => {
    const groupSize = 3;
    const groupsNum = Math.floor(props.topics.length / groupSize);

    return (
        <Fragment>
            {[...Array(groupsNum).keys()].map((groupIndex) => (
                <Group key={groupIndex} size={groupSize}>
                    {renderGroup(groupIndex, props.topics, groupSize)}
                </Group>
            ))}
        </Fragment>
    );
};

export default Topics;
