export class PostsSelector {
    allPosts: Record<string, Frontmatter>;

    constructor(allPostsUrls: PostDetails[]) {
        this.allPosts = this.buildPostsMap(allPostsUrls);
    }

    get(): Record<string, Frontmatter> {
        return this.allPosts;
    }

    getByTopic(
        postsUrlsPerTopic: PostsPerTopicBlock[]
    ): {
        posts: Record<string, Frontmatter>;
        postsPerTopic: PostsPerTopicBlock[];
    } {
        const postsUrlsPerTopicFlattened = postsUrlsPerTopic.reduce(
            (acc: string[], x) => acc.concat(x.posts),
            []
        );

        return {
            posts: Object.keys(this.allPosts)
                .filter((post) => postsUrlsPerTopicFlattened.includes(post))
                .reduce((obj, key) => {
                    return {
                        ...obj,
                        [key]: this.allPosts[key]
                    };
                }, {}),
            postsPerTopic: postsUrlsPerTopic
        };
    }

    getByCategory(
        postsUrlsPerCategory: PostsPerCategory[]
    ): {
        posts: Record<string, Frontmatter>;
        postsPerCategory: PostsPerCategory[];
    } {
        const postsUrlsPerCategoryFlattened = postsUrlsPerCategory.reduce(
            (acc: string[], x) => acc.concat(x.posts),
            []
        );

        return {
            posts: Object.keys(this.allPosts)
                .filter((post) => postsUrlsPerCategoryFlattened.includes(post))
                .reduce((obj, key) => {
                    return {
                        ...obj,
                        [key]: this.allPosts[key]
                    };
                }, {}),
            postsPerCategory: postsUrlsPerCategory
        };
    }

    sortByDate() {
        // TODO:
        return this.allPosts;
    }

    filter(postsToFilter: string[]): Record<string, Frontmatter> {
        return Object.keys(this.allPosts)
            .filter((post) => postsToFilter.includes(post))
            .reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: this.allPosts[key]
                };
            }, {});
    }

    private buildPostsMap(allPosts: { frontmatter: Frontmatter }[]) {
        const postsMap: Record<string, Frontmatter> = {};

        allPosts.forEach((p) => {
            postsMap[p.frontmatter.suburl] = p.frontmatter;
        });
        // console.log('building postsMap');

        return postsMap;
    }
}
