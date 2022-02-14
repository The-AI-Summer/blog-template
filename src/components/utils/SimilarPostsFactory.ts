interface SimilarPostsByTopic {
    similarPosts: PostNoDetails[];
    isTrimmed: boolean;
}

export class SimilarPostsFactory {
    allPosts: PostNoDetails[];
    currentPostSuburl: string;
    topics: string[];

    constructor(allPosts: PostNoDetails[]) {
        this.allPosts = allPosts;
        this.currentPostSuburl = '';
        this.topics = [];
    }

    setTopics(topics: Array<string>) {
        this.topics = topics;
        return this;
    }

    setCurrentUrl(currentPostSuburl: string) {
        this.currentPostSuburl = currentPostSuburl;
        return this;
    }

    get(): Record<string, SimilarPostsByTopic> {
        const allPostsGroupedByTopic = this.allPosts
            .filter((p) => p.frontmatter.suburl != this.currentPostSuburl)
            .reduce(
                (
                    postsGroupedByTopic: Record<string, PostNoDetails[]>,
                    post: PostNoDetails
                ) => {
                    for (const topic of post.frontmatter.tags) {
                        if (!postsGroupedByTopic[topic]) {
                            postsGroupedByTopic[topic] = [];
                        }

                        postsGroupedByTopic[topic].push(post);
                    }

                    return postsGroupedByTopic;
                },
                {}
            );
        return Object.entries(allPostsGroupedByTopic)
            .filter(([key]) => this.topics.includes(key))
            .reduce(
                (obj, [key, value]) => ({
                    ...obj,
                    [key]:
                        value.length > 10
                            ? {
                                  similarPosts: value.slice(0, 10),
                                  isTrimmed: true
                              }
                            : { similarPosts: value, isTrimmed: false }
                }),
                {}
            );
    }
}
