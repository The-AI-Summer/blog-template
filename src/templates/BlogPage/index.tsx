import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import AnnouncementHeader from '../../components/ui/AnnouncementHeader/AnnouncementHeader';
import CodeBlock from '../../components/ui/Blog/CodeBlock/CodeBlock';
import NavSidebar from '../../components/ui/Blog/NavSidebar/NavSidebar';
import PostBanner from '../../components/ui/Blog/PostBanner/PostBanner';
import TableOfContents from '../../components/ui/Blog/TableOfContents/TableOfContents';
import Tab from '../../components/ui/Tabs/Tab';
import Tabs from '../../components/ui/Tabs/Tabs';
import Seo from '../../components/utils/Seo';
import { TopicsDetailsSelector } from '../../components/utils/TopicDetailsSelector';
import './blog-page.scss';

//TODO: links in blogs to the same website should be with gatsby links instead of <a> and if so, how?
//TODO: make code highlighting more beautiful? check bash and python
interface BlogPageProps {
    data: {
        mdx: Post;

        allMdx: {
            nodes: PostNoDetails[];
        };
        topicsYaml: {
            topics: TopicDetails[];
        };
    };
    pageContext: Record<string, string[]>;
    location: Record<string, string>;
}

//declare components to be imported in markdown
const components = {
    pre: CodeBlock,
    TwitterTweetEmbed,
    Tabs,
    Tab
};

const BlogPage: React.FC<BlogPageProps> = (props: BlogPageProps) => {
    const postFrontmatter: Frontmatter = props.data.mdx.frontmatter;
    const topicsDetails = new TopicsDetailsSelector(
        props.data.topicsYaml.topics
    ).get();
    return (
        <PageLayout>
            <Seo
                isPost={true}
                title={props.data.mdx.frontmatter.title}
                url={props.data.mdx.frontmatter.suburl}
                description={props.data.mdx.frontmatter.description}
                image={
                    props.data.mdx.frontmatter.image.childImageSharp.fluid.src
                }
                author={props.data.mdx.frontmatter.author}
                datePublished={props.data.mdx.frontmatter.publishedAt}
                dateModified={props.data.mdx.frontmatter.modifiedAt}
            />
            <AnnouncementHeader className="announcement-header--no-sticky" />

            <PostBanner
                post={postFrontmatter}
                timeToRead={props.data.mdx.timeToRead}
                topicsDetails={topicsDetails}
            />
            <main className="blog-page">
                <div className="blog-page__left-sidebar">
                    <NavSidebar
                        postTopics={props.pageContext.postTopics}
                        postNoDetails={props.data.allMdx.nodes}
                        currentUrl={`${props.location.pathname.split('/')[1]}/`}
                        allTopicsDetails={topicsDetails}
                    ></NavSidebar>
                </div>

                <article className="blog-page__content">
                    <MDXProvider components={components}>
                        <MDXRenderer frontmatter={postFrontmatter}>
                            {props.data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                
                </article>
                <div className="blog-page__right-sidebar">
                    <TableOfContents
                        toc={props.data.mdx.tableOfContents}
                    ></TableOfContents>
                </div>
            </main>
        </PageLayout>
    );
};

export default BlogPage;

export const blogQuery = graphql`
    query($suburl: String) {
        mdx(frontmatter: { suburl: { eq: $suburl } }) {
            body
            frontmatter {
                title
                description
                image {
                    childImageSharp {
                        fluid {
                            base64
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                }
                tags
                author
                suburl
                publishedAt
                modifiedAt
            }
            tableOfContents(maxDepth: 4)
            timeToRead
        }

        allMdx(
            filter: { frontmatter: { layout: { eq: "BlogPage" } } }
            sort: { fields: frontmatter___publishedAt, order: ASC }
        ) {
            nodes {
                frontmatter {
                    suburl
                    title
                    tags
                }
            }
        }

        topicsYaml {
            topics {
                desc
                title
                url
            }
        }
    }
`;
