import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { Fragment, useState } from 'react';
import { Accent, ButtonType, Size } from '../../../globals';
import Button from '../Button/Button';
import './Header.scss';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';
import SearchBox from './SearchBox/SearchBox';

//..GatsbyImageSharpFluid_noBase64 for no blur up effect
const fetchLogoQuery = graphql`
    query {
        file(relativePath: { eq: "logos/logo_placeholder.png" }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;

const Header: React.FC = () => {
    const [isNavDrawerOpen, setNavDrawerOpen] = useState(false);
    const image = useStaticQuery(fetchLogoQuery);

    const toggleNavDrawer = () => {
        isNavDrawerOpen ? setNavDrawerOpen(false) : setNavDrawerOpen(true);
    };

    return (
        <Fragment>
            <header className="header">
                <div
                    className="header__hamburger-icon"
                    onClick={() => toggleNavDrawer()}
                >
                    <svg width="20" height="15">
                        <rect fill="#f4a444" width="20" height="3"></rect>
                        <rect fill="#f4a444" y="6" width="20" height="3"></rect>
                        <rect
                            fill="#f4a444"
                            y="12"
                            width="20"
                            height="3"
                        ></rect>
                    </svg>
                </div>
                <div className="header__item">
                    <Link to="/">
                        <Img
                            fluid={image.file.childImageSharp.fluid}
                            alt="AI Summer"
                            className="logo"
                        ></Img>
                    </Link>
                </div>
                <nav className="header__item nav">
                    <div className="nav__item">
                        <Link to="/about/">About</Link>
                    </div>
                    <div className="nav__item dropdown">
                        <div className="nav__item__link">
                            <Link to="">Topics</Link>
                            <div className="nav__item__link__icon dropdown">
                                <svg
                                    width="10"
                                    height="17"
                                    viewBox="0 0 10 13"
                                    fill="#2f4858ffgatbsy pl"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        // eslint-disable-next-line max-len
                                        d="M0.978147 6.375H9.01877C9.57502 6.375 9.85315 7.08887 9.4594 7.50723L5.44065 11.7805C5.1969 12.0395 4.80002 12.0395 4.55627 11.7805L0.537522 7.50723C0.143772 7.08887 0.421897 6.375 0.978147 6.375Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="dropdown__wrapper">
                            <div className="dropdown-content">
                                <div className="dropdown-content__item">
                                    <Link to="/topics/topic-1/">Topic 1</Link>
                                </div>
                                <div className="dropdown-content__item">
                                    <Link to="/topics/topic-2/">Topic 2</Link>
                                </div>
                                <div className="dropdown-content__item">
                                    <Link to="/topics/topic-3/">Topic 3</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav__item">
                        <Link to="/markdown-page/">Markdown Page</Link>
                    </div>
                   
                </nav>

                <div className="header__item header__item__secondary">
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#333"
                            viewBox="0 0 24 24"
                        >
                            {/* eslint-disable-next-line max-len */}
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
                <div className="header__item header__item__secondary">
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#55ACEE"
                            viewBox="0 0 24 24"
                        >
                            {/* eslint-disable-next-line max-len */}
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                </div>
                <div className="header__item header__item__secondary">
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#007bb5"
                            viewBox="0 0 24 24"
                        >
                            {/* eslint-disable-next-line max-len */}
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>

                <div className="header__item header__item__secondary">
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 225 215"
                            width="25"
                            height="25"
                        >
                            <path
                                // eslint-disable-next-line max-len
                                d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                            />
                            <path
                                fill="#7289DA"
                                // eslint-disable-next-line max-len
                                d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                            />
                        </svg>
                    </a>
                </div>

                <div className="header__item search-nav">
                    <SearchBox size={Size.small} />
                </div>
                <div className="header__item newsletter-nav">
                    <Button
                        accent={Accent.primary}
                        type={ButtonType.linkInternal}
                        onClickLink=""
                        className="newsletter-nav__button"
                    >
                        Newsletter
                    </Button>
                </div>
            </header>
            <NavigationDrawer
                isNavDrawerOpen={isNavDrawerOpen}
                onToggleNavDrawer={toggleNavDrawer}
            />
        </Fragment>
    );
};

export default Header;
