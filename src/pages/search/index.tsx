import { useLocation } from '@reach/router';
import { graphql } from 'gatsby';
import React, { useState } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import Container from '../../components/layout/Container/Container';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import PageSection from '../../components/layout/PageSection/PageSection';
import PostCardHorizontal from '../../components/ui/Cards/PostCardHorizontal/PostCardHorizontal';
import SearchBox from '../../components/ui/Header/SearchBox/SearchBox';
import Seo from '../../components/utils/Seo';
import { useAnimationOnScroll } from '../../components/utils/useAnimateOnScroll';
import { Size } from '../../globals';

interface SearchProps {
    data: {
        localSearchBlog: {
            index: Record<string, unknown>;
            store: Frontmatter[];
        };
    };
}

const Search: React.FC<SearchProps> = ({ data }: SearchProps) => {
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const results = useFlexSearch(
        searchQuery,
        data.localSearchBlog.index,
        data.localSearchBlog.store
    );
    useAnimationOnScroll();

    return (
        <PageLayout>
            <Seo
                isPost={false}
                title="Search"
                url="search/"
                description="Search AI Summer"
            />
            
            <PageSection>
                <Container>
                    <SearchBox size={Size.big} />
                    <h1>Search results for {searchQuery} </h1>
                    {results.map((post: Frontmatter) => (
                        <PostCardHorizontal
                            key={post.suburl}
                            post={post}
                        ></PostCardHorizontal>
                    ))}
                </Container>
            </PageSection>
        </PageLayout>
    );
};

export const pageQuery = graphql`
    query {
        localSearchBlog {
            index
            store
        }
    }
`;

export default Search;
