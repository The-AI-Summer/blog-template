import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Container from '../../components/layout/Container/Container';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import PageSection from '../../components/layout/PageSection/PageSection';
import CodeBlock from '../../components/ui/Blog/CodeBlock/CodeBlock';
import Button from '../../components/ui/Button/Button';
import Seo from '../../components/utils/Seo';
import { default as Accent, default as ButtonType } from '../../globals';
import './markdown-page.scss';

interface MarkdownPageProps {
    data: {
        mdx: Post;
    };
    pageContext: Record<string, string>;
}

const components = {
    pre: CodeBlock,
    Button,
    Accent,
    ButtonType
};

const MarkdownPage: React.FC<MarkdownPageProps> = (
    props: MarkdownPageProps
) => {
    const markdownFrontmatter: Frontmatter = props.data.mdx.frontmatter;
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
            />
            {/* <PostBanner
                post={postFrontmatter}
                timeToRead={props.data.mdx.timeToRead}
                topicsDetails={topicsDetails}
            /> */}
            <PageSection>
                <Container>
                    <main className="markdown-page">
                        <article className="markdown-page__content">
                            <MDXProvider components={components}>
                                <MDXRenderer frontmatter={markdownFrontmatter}>
                                    {props.data.mdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </article>
                    </main>
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export default MarkdownPage;

export const markdownPageQuery = graphql`
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
                suburl
            }
        }
    }
`;
