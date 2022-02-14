import React, { useState } from 'react';
import './Accordion.scss';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
    const initialState = Array(props.items.length).fill('');
    const [activeItems, setActiveItemState] = useState(initialState);

    const toggleAccordion = (index: number) => {
        setActiveItemState(
            activeItems.map((item, i) => {
                if (i == index) {
                    return item === '' ? '--active' : '';
                } else {
                    return item;
                }
            })
        );
    };

    return (
        <div className="accordion">
            {props.items.map((item, index) => {
                return (
                    <div key={index} className="accordion__item">
                        <div
                            className="accordion__item__question"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion__item__question__title">
                                {item.question}
                            </div>
                            <div className="accordion__item__question__icon">
                                <svg
                                    width="10"
                                    height="17"
                                    viewBox="0 0 10 17"
                                    fill="none"
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
                        <div
                            className={`accordion__item__answer${activeItems[index]}`}
                            dangerouslySetInnerHTML={{
                                __html: item.answer
                            }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
