module.exports = {
    siteMetadata: {
        siteUrl: `localhost:8000`, //YOUR SITE URL
        siteName: 'BLOG NAME',
        title: 'BLOG TITLE',
        description: 'BLOG DESCRIPTION',
        titleTemplate: '%s | BLOG NAME',
        author: 'BLOG AUTHOR'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass')
            }
        },
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-robots-txt',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['#GOOGLE_TAG_MANAER_ID#'],
            }
        },
        'gatsby-plugin-breakpoints',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`
            }
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -100
            }
        },

        //images
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-remark-images`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'images',
                path: `${__dirname}/content/assets/images`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200
                        }
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            icon: false,
                            elements: ['h1', 'h2', 'h3', 'h4', 'h5'],
                            offsetY: 300
                        }
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'noopener'
                        }
                    },
                    `gatsby-remark-katex`
                ],
                remarkPlugins: [
                    require('remark-math'),
                    require('remark-html-katex')
                ]
            }
        },
        //site-content
        'gatsby-transformer-yaml',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'site-content',
                path: `${__dirname}/content/site-content`
            }
        },
        //search
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'blog',
                engine: 'flexsearch',
                query: ` {
                            allMdx (filter: {frontmatter: {layout: {eq: "BlogPage"}}}){
                                nodes {
                                    frontmatter {
                                        author
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
                                        tags
                                        title
                                    }
                                }
                            }
                        }`,
                ref: 'title',
                index: ['title', 'description', 'tags'],
                store: [
                    'title',
                    'description',
                    'tags',
                    'image',
                    'suburl',
                    'author'
                ], //what fields the query returns
                normalizer: ({ data }) =>
                    data.allMdx.nodes.map((node) => ({
                        title: node.frontmatter.title,
                        description: node.frontmatter.description,
                        tags: node.frontmatter.tags,
                        image: node.frontmatter.image,
                        suburl: node.frontmatter.suburl,
                        author: node.frontmatter.author
                    }))
            }
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map((edge) => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        title: edge.node.frontmatter.title,
                                        description:
                                            edge.node.frontmatter.description,
                                        date: edge.node.frontmatter.publishedAt,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            '/' +
                                            edge.node.frontmatter.suburl,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            '/' +
                                            edge.node.frontmatter.suburl,

                                        custom_elements: [
                                            {
                                                author:
                                                    edge.node.frontmatter.author
                                            },
                                            {
                                                image: [
                                                    {
                                                        url:
                                                            site.siteMetadata
                                                                .siteUrl +
                                                            edge.node
                                                                .frontmatter
                                                                .image
                                                                .childImageSharp
                                                                .fluid.src
                                                    },
                                                    {
                                                        title:
                                                            edge.node
                                                                .frontmatter
                                                                .title
                                                    },
                                                    {
                                                        link:
                                                            site.siteMetadata
                                                                .siteUrl +
                                                            '/' +
                                                            edge.node
                                                                .frontmatter
                                                                .suburl
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                );
                            });
                        },
                        query: `
                    {
                      allMdx(
                        filter: {frontmatter: {layout: {eq: "BlogPage"}}}
                        sort: { order: DESC, fields: [frontmatter___publishedAt] }
                      ) {
                        edges {
                          node {
                            frontmatter {
                                author
                                description
                                suburl
                                title
                                publishedAt
                                image {
                                    childImageSharp {
                                        fluid {
                                            src
                                        }
                                    }
                                }
                            }
                          }
                        }
                      }
                    }
                  `,
                        output: '/feed.xml',
                        title: 'BLOG TITLE'
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                query: `
                {
                    site {
                        siteMetadata {
                          title
                          description
                          siteUrl
                          
                        }
                      }
        
                  allSitePage {
                    nodes {
                      path
                      context{ 
                         publishedAt
                        }
                    }
                  }
              }`,
                resolveSiteUrl: ({ site, allSitePage }) => {
                    return site.siteMetadata.siteUrl;
                },
                serialize: ({ site, allSitePage }) =>
                    allSitePage.nodes.map((node) => {
                        return {
                            url: `${site.siteMetadata.siteUrl}${node.path}`,
                            lastmod: node.context.publishedAt
                        };
                    })
            }
        }
    ]
};
