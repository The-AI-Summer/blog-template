'use strict';
/* eslint-disable */
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    switch (node.internal.type) {
        case 'Mdx': {
            const { permalink, layout } = node.frontmatter;
            const { relativePath } = getNode(node.parent);

            let suburl = permalink;

            if (!suburl) {
                suburl = `/${relativePath
                    .split('-')
                    .splice(3)
                    .join('-')
                    .replace('.md', '')}/`;
            }

            // Used to generate URL to view this content.
            createNodeField({
                node,
                name: 'suburl',
                value: suburl || ''
            });

            // Used to determine a page layout.
            createNodeField({
                node,
                name: 'layout',
                value: layout || ''
            });
        }
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const allData = await graphql(`
        {
            blogs: allMdx(
                filter: { frontmatter: { layout: { eq: "BlogPage" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            layout
                            suburl
                            author
                            tags
                            publishedAt
                        }
                    }
                }
            }
            pages: allMdx(
                filter: { frontmatter: { layout: { eq: "MarkdownPage" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            layout
                            suburl
                        }
                    }
                }
            }
            topicsYaml {
                topics {
                    title
                    desc
                    url
                    image {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                sizes
                            }
                        }
                    }
                }
            }
            authorsYaml {
                authors {
                    name
                    linkedin
                    twitter
                    website
                    image {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                sizes
                            }
                        }
                    }
                    facebook
                    github
                    description
                    url
                }
            }
        }
    `);

    const allBlogs = allData.data.blogs;

    if (allBlogs.errors) {
        console.error(allBlogs.errors);
        throw new Error(allBlogs.errors);
    }

    //blog pages
    allBlogs.edges.forEach(({ node }) => {
        const { suburl, layout, author, tags, publishedAt } = node.frontmatter;
        createPage({
            path: suburl,
            component: path.resolve('./src/templates/BlogPage/index.tsx'),
            context: {
                suburl: suburl,
                postTopics: tags,
                publishedAt: publishedAt
            }
        });
    });

    //author pages
    const allAuthors = allData.data.authorsYaml;
    if (allAuthors.errors) {
        console.error(allAuthors.errors);
        throw new Error(allAuthors.errors);
    }
    allAuthors.authors.forEach((author) => {
        createPage({
            path: `${author.url}`,
            component: path.resolve(`./src/templates/AuthorPage/index.tsx`),
            context: {
                author: author
            }
        });
    });

    //topic pages

    const allTopics = allData.data.topicsYaml;

    if (allTopics.errors) {
        console.error(allTopics.errors);
        throw new Error(allTopics.errors);
    }
    allTopics.topics.forEach(({ url, title, desc, image }) => {
        createPage({
            path: `topics/${url}`,
            component: path.resolve(`./src/templates/TopicPage/index.tsx`),
            context: {
                title: title,
                description: desc,
                image: image,
                url: url
            }
        });
    });

    //Markdown pages
    const allPages = allData.data.pages;

    if (allPages.errors) {
        console.error(allPages.errors);
        throw new Error(allPages.errors);
    }
    allPages.edges.forEach(({ node }) => {
        const { suburl, layout } = node.frontmatter;
        createPage({
            path: suburl,
            component: path.resolve('./src/templates/MarkdownPage/index.tsx'),
            context: {
                suburl: suburl
            }
        });
    });
};
