import React, { Fragment } from 'react';
import Footer from '../../ui/Footer/Footer';
import Header from '../../ui/Header/Header';
import './PageLayout.scss';

interface PageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = (props: PageLayoutProps) => {
    return (
        <Fragment>

            <div className="page">
                <Header />
                {props.children}
                <Footer />
            </div>
        </Fragment>
    );
};

export default PageLayout;
