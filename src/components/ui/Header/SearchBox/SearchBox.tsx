import React from 'react';
import { Size } from '../../../../globals';
import './SearchBox.scss';

interface SearchBoxProps {
    size: Size;
}

const SearchBox: React.FC<SearchBoxProps> = (props: SearchBoxProps) => {
    return (
        <form
            className={`search-box--${props.size}`}
            action="/search"
            method="get"
            autoComplete="off"
        >
            <div className={`search-box--${props.size}__icon`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 22 22"
                    width="22"
                    fill="rgb(133, 133, 133)"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    {/* eslint-disable-next-line max-len */}
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            </div>
            <input
                className={`search-box--${props.size}__input`}
                // value={searchQuery}
                // onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search "
                name="s"
            />
        </form>
    );
};

export default SearchBox;
