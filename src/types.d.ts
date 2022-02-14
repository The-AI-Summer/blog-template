interface Heading {
    url: string;
    title: string;
    items?: Heading[];
}

interface TOC {
    items: Heading[];
}

interface FluidImage {
    childImageSharp: {
        fluid: {
            base64: string;
            aspectRatio: number;
            src: string;
            srcSet: string;
            sizes: string;
        };
    };
}

interface Frontmatter {
    title: string;
    description: string;
    image: FluidImage;
    tags: Array<string>;
    author: Array<string>;
    suburl: string;
    publishedAt?: string;
    modifiedAt?: string;
}

interface Post {
    frontmatter: Frontmatter;
    body: string;
    tableOfContents: TOC;
    timeToRead: string;
}

interface PostNoDetails {
    frontmatter: {
        title: string;
        suburl: string;
        tags: string[];
    };
}

interface PostNode {
    mdx: Post;
}

interface PostDetails {
    frontmatter: Frontmatter;
    timetoRead?: string;
}

///Home page types

interface AboutSectionBlock {
    title: string;
    desc: string;
    icon: string;
}

interface PostsPerTopicBlock {
    topic: string;
    posts: string[];
}

interface TopicDetails {
    title: string;
    desc: string;
    url: string;
    logo?: string;
    image?: string;
}

interface Author {
    name: string;
    linkedin: string;
    twitter: string;
    website: string;
    image: FluidImage;
    facebook: string;
    github: string;
    description?: string;
    short_description?: string;
    url: string;
}

interface QuestionAnswer {
    question: string;
    answer: string;
}


interface FileURL {
    publicURL: string;
}


//Images
//to be able to import png images with no type errors
declare module '*.png' {
    const value: any;
    export = value;
}
declare module '*.jpg' {
    const value: any;
    export = value;
}

//Videos
//to be able to import mp4 videos with no type errors
declare module '*.mp4' {
    const value: any;
    export = value;
}
//to be able to import webm videos with no type errors
declare module '*.webm' {
    const value: any;
    export = value;
}

//to be able to import pdfs with no type errors
declare module '*.pdf' {
    const value: any;
    export = value;
}

//types for this react hook don't exist
declare module 'react-use-flexsearch';
declare module 'react-twitter-embed';
declare module 'gatsby-plugin-breakpoints';
