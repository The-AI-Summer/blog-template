import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
    children?: React.ReactNode;
    slidesNum: number;
}

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
    const [current, setCurrent] = useState(0);
    const slideTime = 2000;

    useEffect(() => {
        const next = (current + 1) % props.slidesNum;
        const timer = setTimeout(() => setCurrent(next), slideTime);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className="carousel">
            {React.Children.map(props.children, (child, index) => (
                <div
                    className={cn(
                        'carousel__slide',
                        `${current == index ? 'carousel__slide--active' : ''}`
                    )}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
