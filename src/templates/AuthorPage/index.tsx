import React from 'react';
import Container from '../../components/layout/Container/Container';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import PageSection from '../../components/layout/PageSection/PageSection';
import Avatar from '../../components/ui/Avatar/Avatar';
import Seo from '../../components/utils/Seo';
import './AuthorPage.scss';

interface AuthorPageProps {
    pageContext: {
        author: Author;
    };
}

const AuthorPage: React.FC<AuthorPageProps> = (props: AuthorPageProps) => {
    return (
        <PageLayout>
            <Seo
                isPost={false}
                title={props.pageContext.author.name}
                url={props.pageContext.author.url}
                description={props.pageContext.author.name}
                image={props.pageContext.author.image.childImageSharp.fluid.src}

            />
            <PageSection className="author-page-section__general">
                <Container>
                    <h1 className="author-page-section__general__name">
                        {props.pageContext.author.name}
                    </h1>
                    <Avatar
                        className="author-page-section__general__avatar"
                        image={props.pageContext.author.image}
                    />
                </Container>
            </PageSection>
            <PageSection className="author-page-section__details">
                <Container>
                    <div
                        className="author-page-section__details__description"
                        dangerouslySetInnerHTML={{
                            __html: props.pageContext.author.description || ''
                        }}
                    ></div>

                    <div className="author-page-section__details__socials">
                        {props.pageContext.author.github && (
                            <a
                                href={props.pageContext.author.github}
                                className="author-page-section__details__socials__item"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#333"
                                    viewBox="0 0 24 24"
                                >
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        {props.pageContext.author.twitter && (
                            <a
                                href={props.pageContext.author.twitter}
                                className="author-page-section__details__socials__item"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#55ACEE"
                                    viewBox="0 0 24 24"
                                >
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        )}
                        {props.pageContext.author.linkedin && (
                            <a
                                href={props.pageContext.author.linkedin}
                                className="author-page-section__details__socials__item"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#007bb5"
                                    viewBox="0 0 24 24"
                                >
                                    {/* eslint-disable-next-line max-len */}
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        )}
                        {props.pageContext.author.facebook && (
                            <a
                                href={props.pageContext.author.facebook}
                                className="author-page-section__details__socials__item"
                            >
                                <svg
                                    viewBox="0 0 128 128"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        // eslint-disable-next-line max-len
                                        d="M128,112c0,8.8-7.2,16-16,16H16c-8.8,0-16-7.2-16-16V16C0,7.2,7.2,0,16,0h96c8.8,0,16,7.2,16,16V112z"
                                        fill="#3C579E"
                                    />
                                    <path
                                        // eslint-disable-next-line max-len
                                        d="M68.877,128V78.188h-17.78V60.425h17.784V44.029c0-16.537,9.764-26.279,24.514-26.279  c7.068,0,12.834,0.756,14.605,0.991v18.573l-11.874-0.005c-8.022,0-9.523,3.979-9.523,9.572v13.544h20.556l-2.904,17.763H86.603V128  H68.877z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                            </a>
                        )}
                    </div>
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export default AuthorPage;
