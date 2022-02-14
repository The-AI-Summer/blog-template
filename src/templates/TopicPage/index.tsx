import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { Fragment } from 'react';
import Container from '../../components/layout/Container/Container';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import PageSection from '../../components/layout/PageSection/PageSection';
import PostCardHorizontal from '../../components/ui/Cards/PostCardHorizontal/PostCardHorizontal';
import PageBanner from '../../components/ui/PageBanners/PageBanner';
import Seo from '../../components/utils/Seo';
import { useAnimationOnScroll } from '../../components/utils/useAnimateOnScroll';

interface TopicPageProps {
    pageContext: {
        title: string;
        description: string;
        image: FluidImage;
        url: string;
    };
    data: {
        allMdx: {
            nodes: PostDetails[];
        };
    };
}

const TopicPage: React.FC<TopicPageProps> = (props: TopicPageProps) => {
    useAnimationOnScroll();
    return (
        <PageLayout>
            <Seo
                isPost={false}
                title={props.pageContext.title}
                url={`topic/${props.pageContext.url}`}
                description={props.pageContext.description}
            />
            <PageBanner className="page-banner-withcircularimage">
                <Fragment>
                    <h1>{props.pageContext.title}</h1>
                    <p>{props.pageContext.description}</p>
                </Fragment>
                <Fragment>
                    <Img
                        fluid={props.pageContext.image.childImageSharp.fluid}
                        alt={props.pageContext.title}
                    ></Img>
                </Fragment>
            </PageBanner>
            <PageSection>
                <Container>
                    {props.data.allMdx.nodes.map((post) => (
                        <PostCardHorizontal
                            key={post.frontmatter.suburl}
                            post={post.frontmatter}
                        ></PostCardHorizontal>
                    ))}
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export const TopicQuery = graphql`
    query($title: String) {
        allMdx(
            filter: {
                frontmatter: {
                    layout: { eq: "BlogPage" }
                    tags: { in: [$title] }
                }
            }
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
    }
`;

export default TopicPage;
