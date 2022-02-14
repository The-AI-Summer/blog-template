import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React, { Fragment, useEffect, useState } from 'react';
import './TableOfContents.scss';

interface TableOfContentsProps {
    toc: TOC;
}

//TODO: Headers  that start with a number break table of contents: try and fix

const getIds = (items: Heading[]) => {
    return items.reduce((acc: string[], item) => {
        if (item.url) {
            // url has a # as first character, remove it to get the raw id
            acc.push(item.url.slice(1));
        }
        if (item.items) {
            acc.push(...getIds(item.items));
        }
        return acc;
    }, []);
};

const renderItems = (items: Heading[], activeId: string) => {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li className="toc__item" key={item.title}>
                        <AnchorLink
                            className={`toc__item__link${
                                activeId === item.url.slice(1) ? '--active' : ''
                            }`}
                            to={item.url}
                        >
                            {item.title}
                        </AnchorLink>
                        {item.items && renderItems(item.items, activeId)}
                    </li>
                );
            })}
        </ul>
    );
};

const useActiveId = (itemIds: string[]) => {
    const [activeId, setActiveId] = useState(``);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            //if headings are right next to each other, it leads to memory leak( the observer is initialized indefinitely)
            // probably because the intersection window is too small
            { rootMargin: `0% 0% -70% 0%` }
        );
        itemIds.forEach((id) => {
            const headingElement = document.getElementById(id);
            if (headingElement) {
                observer.observe(headingElement);
            }
        });
        return () => {
            itemIds.forEach((id) => {
                const headingElement = document.getElementById(id);
                if (headingElement) {
                    observer.unobserve(headingElement);
                }
            });
        };
    }, [itemIds]);
    return activeId;
};

const TableOfContents: React.FC<TableOfContentsProps> = (
    props: TableOfContentsProps
) => {
    if (props.toc.items) {
        const idList = getIds(props.toc.items);
        const activeId = useActiveId(idList);

        return (
            <div className="toc">{renderItems(props.toc.items, activeId)}</div>
        );
    } else {
        return <Fragment></Fragment>;
    }
};

export default TableOfContents;
