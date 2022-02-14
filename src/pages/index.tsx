import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/layout/Container/Container';
import Group from '../components/layout/Group/Group';
import PageLayout from '../components/layout/PageLayout/PageLayout';
import PageSection from '../components/layout/PageSection/PageSection';
import AnnouncementHeader from '../components/ui/AnnouncementHeader/AnnouncementHeader';
import Block from '../components/ui/Cards/Block';
import Divider from '../components/ui/Divider/Divider';
import HomeBanner from '../components/ui/Home/HomeBanner/HomeBanner';
import MoreArticles from '../components/ui/Home/MoreArticles/MoreArticles';
import PostsPerTopic from '../components/ui/Home/PostsPerTopic/PostsPerTopic';
import Topics from '../components/ui/Home/Topics/Topics';
import { PostsSelector } from '../components/utils/PostsSelector';
import Seo from '../components/utils/Seo';
import { useAnimationOnScroll } from '../components/utils/useAnimateOnScroll';
import { Direction } from '../globals';
import './index.scss';

interface HomeProps {
    data: {
        homeYaml: {
            about_section: AboutSectionBlock[];
            tabs_posts: PostsPerTopicBlock[];
        };
        allMdx: {
            nodes: PostDetails[];
        };
        topicsYaml: {
            topics: TopicDetails[];
        };
    };
}

const Home: React.FC<HomeProps> = ({ data }: HomeProps) => {
    const postsSelector = new PostsSelector(data.allMdx.nodes);
    useAnimationOnScroll();
    return (
        <PageLayout>
            <Seo isPost={false} />
            <AnnouncementHeader />
            <HomeBanner horizontalCarouselTopics={data.topicsYaml.topics} />
            <PageSection className="what-is-section">
                <Container>
                    <div className="section-text">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Rutrum
                            quisque non tellus orci ac. Arcu risus quis varius
                            quam quisque id diam vel quam. Porta non pulvinar
                            neque laoreet suspendisse interdum consectetur
                            libero id. Urna molestie at elementum eu facilisis
                            sed odio morbi quis. Orci nulla pellentesque
                            dignissim enim sit amet.
                        </p>
                        <p>
                            Dui id ornare arcu odio ut sem. Semper viverra nam
                            libero justo laoreet sit amet cursus. Nec feugiat in
                            fermentum posuere urna nec tincidunt. Adipiscing
                            elit ut aliquam purus sit amet luctus venenatis
                        </p>
                        <p>
                            Consectetur adipiscing elit ut aliquam purus sit.
                            Tempor commodo ullamcorper a lacus vestibulum.
                            Mauris nunc congue nisi vitae suscipit
                        </p>
                    </div>

                    <Group size={2}>
                        {data.homeYaml.about_section
                            .slice(0, 2)
                            .map((block, index) => {
                                return (
                                    <Block
                                        key={index}
                                        direction={Direction.vertical}
                                        aos="zoom-in"
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: block.icon
                                            }}
                                        ></span>
                                        <h3>{block.title}</h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: block.desc
                                            }}
                                        ></div>
                                    </Block>
                                );
                            })}
                    </Group>
                    <Group size={2}>
                        {data.homeYaml.about_section
                            .slice(2, 4)
                            .map((block, index) => {
                                return (
                                    <Block
                                        key={index}
                                        direction={Direction.vertical}
                                        aos="zoom-in"
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: block.icon
                                            }}
                                        ></span>
                                        <h3>{block.title}</h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: block.desc
                                            }}
                                        ></div>
                                    </Block>
                                );
                            })}
                    </Group>
                </Container>
            </PageSection>
            <PageSection className="posts-per-topic-section">
                <Container>
                    <div className="section-text">
                        <h2>Explore our content</h2>
                        <p>
                            Eget mauris pharetra et ultrices neque ornare aenean
                            euismod. Nunc mi ipsum faucibus vitae aliquet nec
                            ullamcorper sit. Eu lobortis elementum nibh tellus
                            molestie nunc non blandit massa. Massa tempor nec
                            feugiat nisl pretium
                        </p>
                    </div>

                    <PostsPerTopic
                        {...postsSelector.getByTopic(data.homeYaml.tabs_posts)}
                    />
                </Container>
            </PageSection>
            <PageSection className="topics-section">
                <Container>
                    <div className="section-text">
                        <h2>Topics</h2>
                        <p>
                            Get lorem dolor sed viverra. Id faucibus nisl
                            tincidunt eget nullam non nisi est sit. Aliquam
                            vestibulum morbi blandit cursus risus at ultrices.
                        </p>
                        <p>
                            Vel turpis nunc eget lorem. Scelerisque fermentum
                            dui faucibus in ornare quam viverra orci.
                        </p>
                    </div>
                    <Topics topics={data.topicsYaml.topics} />
                </Container>
            </PageSection>

            <Divider direction={Direction.horizontal} />
            <PageSection className="more-articles-section">
                <Container>
                    <div className="section-text">
                        <h2>More articles</h2>
                    </div>
                    <MoreArticles
                        posts={data.allMdx.nodes.map(
                            (node) => node.frontmatter
                        )}
                    />
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export const homeQuery = graphql`
    {
        homeYaml {
            tabs_posts {
                posts
                topic
            }
            about_section {
                desc
                icon
                title
            }
        }
        allMdx(
            filter: { frontmatter: { layout: { eq: "BlogPage" } } }
            sort: { fields: frontmatter___publishedAt, order: DESC }
        ) {
            nodes {
                frontmatter {
                    author
                    description
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    layout
                    suburl
                    tags
                    title
                }
            }
        }
        topicsYaml {
            topics {
                desc
                title
                url
                logo
            }
        }
    }
`;

export default Home;
