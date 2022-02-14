import cn from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { Fragment } from 'react';
import './NavigationDrawer.scss';

const fetchLogoQuery = graphql`
    query {
        file(relativePath: { eq: "logos/logo_placeholder.png" }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

interface NavigationDrawerProps {
    isNavDrawerOpen: boolean;
    onToggleNavDrawer: () => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = (
    props: NavigationDrawerProps
) => {
    const handleToggleNavDrawer = () => {
        props.onToggleNavDrawer();
    };
    const image = useStaticQuery(fetchLogoQuery);

    return (
        <Fragment>
            <div
                className={cn(
                    'nav-drawer',
                    `${props.isNavDrawerOpen ? 'nav-drawer--active' : ''}`
                )}
            >
                <div
                    className="nav-drawer__closeButton"
                    onClick={() => handleToggleNavDrawer()}
                >
                    &times;
                </div>
                <div className="nav-drawer__item nav-drawer__logo">
                    <Link to="/">
                        <Img
                            fluid={image.file.childImageSharp.fluid}
                            alt="AI Summer"
                            className="logo"
                        ></Img>
                    </Link>
                </div>
                <nav className="nav-drawer__item nav-drawer__nav ">
                    <div className="nav-drawer__nav__item">
                        <Link to="/about/">About</Link>
                    </div>
                    <div className="nav-drawer__nav__item nav-drawer__dropdown">
                        <div className="nav-drawer__nav__item__link">
                            <Link to="">Topics</Link>
                            <div className="nav-drawer__nav__item__link__icon">
                                <svg
                                    width="10"
                                    height="17"
                                    viewBox="0 0 10 13"
                                    fill="#2f4858ff"
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

                        <div className="nav-drawer__dropdown__wrapper">
                            <div className="nav-drawer__dropdown-content">
                                <div className="nav-drawer__dropdown-content__item">
                                    <Link to="/topics/topic-1/">Topic 1</Link>
                                </div>
                                <div className="nav-drawer__dropdown-content__item">
                                    <Link to="/topics/topic-1/">Topic 1</Link>
                                </div>
                                <div className="nav-drawer__dropdown-content__item">
                                    <Link to="/topics/topic-1/">Topic 1</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-drawer__nav__item">
                        <Link to="/markdown-page/">Markdown Page</Link>
                    </div>
                    <div className="nav-drawer__nav__item">
                        <Link to="/search/">Search</Link>
                    </div>
                   
                </nav>
            </div>
            <div
                className={cn(
                    'overlay',
                    `${props.isNavDrawerOpen ? 'overlay--active' : ''}`
                )}
                onClick={() => handleToggleNavDrawer()}
            ></div>
        </Fragment>
    );
};

export default NavigationDrawer;
