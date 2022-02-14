import { graphql, Link } from 'gatsby';
import React, { Fragment } from 'react';
import Container from '../../components/layout/Container/Container';
import Group from '../../components/layout/Group/Group';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import PageSection from '../../components/layout/PageSection/PageSection';
import Accordion from '../../components/ui/Accordion/Accordion';
import Avatar from '../../components/ui/Avatar/Avatar';
import Block from '../../components/ui/Cards/Block';
import PageBanner from '../../components/ui/PageBanners/PageBanner';
import Seo from '../../components/utils/Seo';
import { Direction } from '../../globals';
import './about.scss';

interface AboutProps {
    data: {
        authorsYaml: {
            authors: Author[];
        };
        file: FluidImage;
        faqYaml: {
            faq: QuestionAnswer[];
        };
    };
}
const About: React.FC<AboutProps> = ({ data }: AboutProps) => {
    return (
        <PageLayout>
            <Seo
                isPost={false}
                title="About"
                url="about/"
                description="About BLOG NAME"
            />
            <PageBanner className="page-banner-withcircularimage">
                <Fragment>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>
                    <p>
                        Mauris vel elementum velit, vitae viverra diam. Maecenas
                        quis ante nunc. Integer tristique et quam nec semper.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Curabitur fermentum pulvinar sollicitudin.
                        Duis eros nulla, aliquet ut ligula non, rutrum dapibus
                        odio. Ut placerat fermentum nisl, at lobortis purus
                        dapibus et. Mauris risus nunc, malesuada varius ante at,
                        bibendum vehicula diam.
                    </p>
                </Fragment>
                <Fragment>
                    {/* <Img
                        fluid={data.file.childImageSharp.fluid}
                        alt="About BLOG NAME"
                    ></Img> */}
                </Fragment>
            </PageBanner>

            <PageSection>
                <Container>
                    <Group size={2}>
                        <Block
                            className="about-block"
                            direction={Direction.vertical}
                        >
                            <h2>About </h2>

                            <p>
                                Nulla sodales nulla pulvinar, facilisis lorem
                                sit amet, luctus odio. Donec lacinia tincidunt
                                enim, et gravida purus venenatis eget. Donec
                                iaculis nibh tortor, ut convallis est iaculis
                                ac. Integer elementum accumsan urna eget
                                malesuada. Duis finibus euismod maximus. Etiam
                                in dictum nibh. Interdum et malesuada fames ac
                                ante ipsum primis in faucibus. Aenean ut eros
                                urna. Maecenas ac nunc sapien. Integer vitae
                                lacinia magna.
                            </p>

                            <p>
                                Phasellus ante nisl, consequat non aliquam
                                sodales, commodo vel est. In accumsan faucibus
                                lacus vitae volutpat. Sed ullamcorper diam ac
                                nunc gravida iaculis. Praesent id pulvinar
                                lorem. Nunc ipsum leo, ultrices sit amet luctus
                                nec, interdum ut tellus. Phasellus rutrum quam
                                eu posuere vulputate. Nam euismod nunc nulla,
                                vitae sollicitudin purus posuere nec.
                            </p>
                        </Block>
                        <Block
                            className="about-block"
                            direction={Direction.vertical}
                        >
                            <h2>Our mission</h2>
                            <p>
                                Sed mattis cursus libero et convallis. Sed nec
                                ante odio. Pellentesque tincidunt rutrum lorem
                                sit amet semper. Sed vel condimentum enim, id
                                tempus tellus. Sed ac ligula vel tortor vehicula
                                tincidunt. Fusce risus ex, bibendum quis
                                pellentesque vitae, placerat non nisi. Nam
                                egestas auctor neque, quis rutrum urna
                                condimentum at. I
                            </p>

                            <p>
                                In felis justo, tempus dictum quam sit amet,
                                fermentum commodo augue. Morbi lorem eros,
                                pharetra sed odio eget, faucibus semper elit.
                                Orci varius natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Fusce
                                convallis, dolor at consequat gravida, diam
                                ipsum porta risus, eu tristique augue erat sit
                                amet purus. Cras sed tellus eu orci luctus
                                tempor.
                            </p>
                        </Block>
                    </Group>

                    <div className="section-text">
                        <h2>Our team</h2>
                    </div>
                    <Group size={2}>
                        <Block
                            className="about-author-block"
                            direction={Direction.vertical}
                        >
                            <h3>{data.authorsYaml.authors[0].name}</h3>
                            <Avatar image={data.authorsYaml.authors[0].image} />
                            <div className="about-author-block__socials">
                                <a
                                    href="https://github.com/SergiosKar"
                                    className="about-author-block__socials__item"
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
                                <a
                                    href="https://twitter.com/karsergios"
                                    className="about-author-block__socials__item"
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
                                <a
                                    href="https://www.linkedin.com/in/sergios-karagiannakos/"
                                    className="about-author-block__socials__item"
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
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.authorsYaml.authors[0]
                                            .short_description || ''
                                }}
                            ></div>
                            <Link
                                className="about_team__learn-more"
                                to={`/${data.authorsYaml.authors[0].url}`}
                            >
                                Learn more
                            </Link>
                        </Block>
                        <Block
                            className="about-author-block"
                            direction={Direction.vertical}
                        >
                            <h3>{data.authorsYaml.authors[1].name}</h3>
                            <Avatar image={data.authorsYaml.authors[1].image} />
                            <div className="about-author-block__socials">
                                <a
                                    href="https://github.com/black0017"
                                    className="about-author-block__socials__item"
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
                                <a
                                    href="https://twitter.com/nadaloglou"
                                    className="about-author-block__socials__item"
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
                                <a
                                    href="https://www.linkedin.com/in/adaloglou17/"
                                    className="about-author-block__socials__item"
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
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.authorsYaml.authors[1]
                                            .short_description || ''
                                }}
                            ></div>
                            <Link
                                className="about_team__learn-more"
                                to={`/${data.authorsYaml.authors[1].url}`}
                            >
                                Learn more
                            </Link>
                        </Block>
                    </Group>
                </Container>
            </PageSection>

            <PageSection className="faq-section">
                <Container>
                    <h2>FAQ</h2>
                    <Accordion items={data.faqYaml.faq} />
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export const aboutQuery = graphql`
    {
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
                short_description
                url
            }
        }
        file(relativePath: { eq: "logo_placeholder.png" }) {
            childImageSharp {
                fluid {
                    aspectRatio
                    src
                    srcSet
                    sizes
                }
            }
        }

        faqYaml {
            faq {
                question
                answer
            }
        }
    }
`;

export default About;
