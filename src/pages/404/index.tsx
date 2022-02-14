import { Link } from 'gatsby';
import React from 'react';
import Container from '../../components/layout/Container/Container';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import PageSection from '../../components/layout/PageSection/PageSection';
import SearchBox from '../../components/ui/Header/SearchBox/SearchBox';
import Seo from '../../components/utils/Seo';
import { Size } from '../../globals';
import './404.scss';

export default function FourZeroZero() {
    return (
        <PageLayout>
            <Seo isPost={false} title="404" url="404/" description="404 page" />
            <PageSection>
                <Container>
                    <h1>Oops!</h1>
                    <p>
                        {`Seems that the page you are lookihg for doesn't exists.
                        Maybe starting from the `}
                        <Link className="homepage-link" to="/">
                            homepage
                        </Link>
                        {` will get you on the right track.`}
                    </p>

                    <h2> Or you can try searching </h2>

                    <SearchBox size={Size.big} />
                </Container>
            </PageSection>
        </PageLayout>
    );
}
