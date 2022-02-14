import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
    isPost: boolean;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    author?: Array<string>;
    datePublished?: string;
    dateModified?: string;
}

interface SeoDefaults {
    site: {
        siteMetadata: {
            defaultTitle: string;
            defaultDescription: string;
            url: string;
            titleTemplate: string;
            defaultAuthor: string;
            siteName: string;
        };
    };
    logo: FileURL;
    seoImage: FileURL;
    android36: FileURL;
    android48: FileURL;
    android72: FileURL;
    android96: FileURL;
    android144: FileURL;
    android192: FileURL;
    apple57: FileURL;
    apple60: FileURL;
    apple72: FileURL;
    apple76: FileURL;
    apple114: FileURL;
    apple120: FileURL;
    apple144: FileURL;
    apple152: FileURL;
    apple180: FileURL;
    applePrecomposed: FileURL;
    apple: FileURL;
    browserConfig: FileURL;
    favicon16: FileURL;
    favicon32: FileURL;
    favicon96: FileURL;
    favicon: FileURL;
    ms70: FileURL;
    ms144: FileURL;
    ms150: FileURL;
    ms310: FileURL;
    siteWebmanifest: FileURL;
}

const Seo: React.FC<SeoProps> = (props: SeoProps) => {
    const queryResult = useStaticQuery<SeoDefaults>(querySeo);
    const defaultSeo = queryResult.site.siteMetadata;

    const seo = {
        title: props.title
            ? `${props.title} | BLOG TITLE`
            : defaultSeo.defaultTitle,
        description: props.description || defaultSeo.defaultDescription,
        image: `${defaultSeo.url}${
            props.image || queryResult.seoImage.publicURL
        }`,
        url: `${defaultSeo.url}/${props.url || ''}`,
        author: props.author || [defaultSeo.defaultAuthor],
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        isPost: props.isPost
    };

    const ldJson = () => {
        if (seo.isPost) {
            return `{
                "@type":"BlogPosting",
                "headline": ${`"${seo.title}"`},
                "dateModified": ${`"${seo.dateModified}"`},
                "datePublished": ${`"${seo.datePublished}"`},
                "image":${`"${seo.image}"`},
                "mainEntityOfPage":{
                    "@type":"WebPage",
                    "@id":${`"${seo.url}"`}
                },
              
                "author":{
                    "@type":"Person",
                    "name":${`"${seo.author.join(' , ')}"`}
                },
                "description":${`"${seo.description}"`},
                "url": ${`"${seo.url}"`},
                "publisher":{
                    "@type":"Organization",
                    "logo":{
                        "@type":"ImageObject",
                        "url":${`"${defaultSeo.url}${queryResult.logo.publicURL}"`}
                    },
                    "name":"BLOG CREATOR"
                },
                "@context":"https://schema.org"}
                `;
        } else {
            return `{
                "@type":"Website",
                "headline": ${`"${seo.title}"`},
                "dateModified": ${`"${seo.dateModified}"`},
                "datePublished": ${`"${seo.datePublished}"`},
                "image": ${`"${seo.image}"`},
                "mainEntityOfPage":{
                    "@type":"WebPage",
                    "@id":${`"${seo.url}"`}
                },
                "author":{
                    "@type":"Person",
                    "name":${`"${seo.author}"`}
                },
                "description":${`"${seo.description}"`},
                "url": ${`"${seo.url}"`},
                "publisher":{
                    "@type":"Organization",
                    "logo":{
                        "@type":"ImageObject",
                        "url":${`"${defaultSeo.url}${queryResult.logo.publicURL}"`}
                    },
                    "name":"BLOG CREATOR"
                },
                "@context":"https://schema.org"}

            }`;
        }
    };
    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="author" content={seo.author.join(' , ')} />
            <meta
                property="article:published_time"
                content={seo.datePublished}
            />

            {(seo.isPost ? true : null) && (
                <meta property="og:type" content="article" />
            )}
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:site_name" content={defaultSeo.siteName} />
            <meta property="og:image" content={seo.image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content={seo.image} />
            <meta property="twitter:title" content={seo.title} />
            <meta name="twitter:site" content="BLOG TWITTER ACCOUNT" />
            <meta name="twitter:creator" content="BLOG CREATOR TWITTER"></meta>

            <meta name="copyright" content="BLOG NAME" />
            <meta name="robots" content="follow" />
            <meta name="application-name" content="BLOG NAME" />
            <meta name="apple-mobile-web-app-title" content="BLOG NAME"></meta>

            <link rel="canonical" href={seo.url} />
            <link
                rel="alternate"
                type="application/rss+xml"
                href="BLOG_URL/feed.xml"
            />

            {/* icons */}
            {queryResult.apple57 && (
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href={queryResult.apple57.publicURL}
                />
            )}
            {queryResult.apple60 && (
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href={queryResult.apple60.publicURL}
                />
            )}
            {queryResult.apple72 && (
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href={queryResult.apple72.publicURL}
                />
            )}
            {queryResult.apple76 && (
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href={queryResult.apple76.publicURL}
                />
            )}
            {queryResult.apple114 && (
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href={queryResult.apple114.publicURL}
                />
            )}
            {queryResult.apple120 && (
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href={queryResult.apple120.publicURL}
                />
            )}
            {queryResult.apple144 && (
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href={queryResult.apple144.publicURL}
                />
            )}

            {queryResult.apple152 && (
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href={queryResult.apple152.publicURL}
                />
            )}
            {queryResult.apple180 && (
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={queryResult.apple180.publicURL}
                />
            )}
            {queryResult.android192 && (
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href={queryResult.android192.publicURL}
                />
            )}
            {queryResult.favicon32 && (
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={queryResult.favicon32.publicURL}
                />
            )}
            {queryResult.favicon96 && (
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href={queryResult.favicon96.publicURL}
                />
            )}
            {queryResult.favicon16 && (
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={queryResult.favicon16.publicURL}
                />
            )}
            {queryResult.favicon && (
                <link
                    rel="shortcut icon"
                    href={queryResult.favicon.publicURL}
                ></link>
            )}
            {queryResult.siteWebmanifest && (
                <link
                    rel="manifest"
                    href={queryResult.siteWebmanifest.publicURL}
                />
            )}
            <meta name="msapplication-TileColor" content="#ffffff" />
            {queryResult.ms144 && (
                <meta
                    name="msapplication-TileImage"
                    content={queryResult.ms144.publicURL}
                />
            )}
            <meta name="theme-color" content="#ffffff"></meta>

            <script type="application/ld+json">{ldJson()}</script>
        </Helmet>
    );
};

const querySeo = graphql`
    {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                url: siteUrl
                defaultAuthor: author
                siteName
            }
        }
        logo: file(relativePath: { eq: "logos/logo_placeholder.png" }) {
            publicURL
        }
        seoImage: file(relativePath: { eq: "logos/logo_placeholder.png" }) {
            publicURL
        }
        android36: file(relativePath: { eq: "icons/android-icon-36x36.png" }) {
            publicURL
        }
        android48: file(relativePath: { eq: "icons/android-icon-48x48.png" }) {
            publicURL
        }
        android72: file(relativePath: { eq: "icons/android-icon-72x72.png" }) {
            publicURL
        }
        android96: file(relativePath: { eq: "icons/android-icon-96x96.png" }) {
            publicURL
        }
        android144: file(
            relativePath: { eq: "icons/android-icon-144x144.png" }
        ) {
            publicURL
        }
        android192: file(
            relativePath: { eq: "icons/android-icon-192x192.png" }
        ) {
            publicURL
        }
        apple57: file(relativePath: { eq: "icons/apple-icon-57x57.png" }) {
            publicURL
        }
        apple60: file(relativePath: { eq: "icons/apple-icon-60x60.png" }) {
            publicURL
        }
        apple72: file(relativePath: { eq: "icons/apple-icon-72x72.png" }) {
            publicURL
        }
        apple76: file(relativePath: { eq: "icons/apple-icon-76x76.png" }) {
            publicURL
        }
        apple114: file(relativePath: { eq: "icons/apple-icon-114x114.png" }) {
            publicURL
        }
        apple120: file(relativePath: { eq: "icons/apple-icon-120x120.png" }) {
            publicURL
        }
        apple144: file(relativePath: { eq: "icons/apple-icon-144x144.png" }) {
            publicURL
        }
        apple152: file(relativePath: { eq: "icons/apple-icon-152x152.png" }) {
            publicURL
        }
        apple180: file(relativePath: { eq: "icons/apple-icon-180x180.png" }) {
            publicURL
        }
        applePrecomposed: file(
            relativePath: { eq: "icons/apple-icon-precomposed.png" }
        ) {
            publicURL
        }
        apple: file(relativePath: { eq: "icons/apple-icon.png" }) {
            publicURL
        }
        browserConfig: file(relativePath: { eq: "icons/browserconfig.xml" }) {
            publicURL
        }
        favicon16: file(relativePath: { eq: "icons/favicon-16x16.png" }) {
            publicURL
        }
        favicon32: file(relativePath: { eq: "icons/favicon-32x32.png" }) {
            publicURL
        }
        favicon96: file(relativePath: { eq: "icons/favicon-96x96.png" }) {
            publicURL
        }
        favicon: file(relativePath: { eq: "icons/favicon.ico" }) {
            publicURL
        }
        ms70: file(relativePath: { eq: "icons/ms-icon-70x70.png" }) {
            publicURL
        }
        ms144: file(relativePath: { eq: "icons/ms-icon-144x144.png" }) {
            publicURL
        }
        ms150: file(relativePath: { eq: "icons/ms-icon-150x150.png" }) {
            publicURL
        }
        ms310: file(relativePath: { eq: "icons/ms-icon-310x310.png" }) {
            publicURL
        }
        siteWebmanifest: file(relativePath: { eq: "icons/site.webmanifest" }) {
            publicURL
        }
    }
`;

export default Seo;
