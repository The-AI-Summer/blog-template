export class TopicsDetailsSelector {
    topics: Record<string, TopicDetails>;

    constructor(topics: TopicDetails[]) {
        this.topics = this.buildTopicsMap(topics);
    }

    get(): Record<string, TopicDetails> {
        return this.topics;
    }

    filter(topicsToFilter: string[]): Record<string, TopicDetails> {
        return Object.keys(this.topics)
            .filter((topic) => topicsToFilter.includes(topic))
            .reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: this.topics[key]
                };
            }, {});
    }

    private buildTopicsMap(topics: TopicDetails[]) {
        const topicsMap: Record<string, TopicDetails> = {};

        topics.forEach((t) => {
            topicsMap[t.title] = t;
        });

        // console.log('building topicsMap');

        return topicsMap;
    }
}
