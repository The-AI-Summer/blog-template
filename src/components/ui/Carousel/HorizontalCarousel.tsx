import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import './HorizontalCarousel.scss';

//
interface HorizontalCarouselProps {
    children?: React.ReactNode;
    slidesNum: number;
}

const getNextActiveSlides = (
    activeSlides: number[],
    current: number
): number[] => {
    activeSlides.unshift(current);
    activeSlides.pop();
    return activeSlides;
};

const carouselLength = 3;

const getAnimationClassName = (index: number): string => {
    if (index == 0) {
        return 'horizontal-carousel__slide--first';
    } else if (index == carouselLength - 1) {
        return 'horizontal-carousel__slide--last';
    } else {
        return '';
    }
};

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = (
    props: HorizontalCarouselProps
) => {
    const [currents, setCurrents] = useState({
        current: props.slidesNum - carouselLength,
        actives: Array.from(new Array(carouselLength), (x, i) => i + props.slidesNum - carouselLength)
    });
    const slideTime = 2000;

    useEffect(() => {
        const nextCurrent =
            (currents.current - 1 + props.slidesNum) % props.slidesNum;
        const nextActives = getNextActiveSlides(currents.actives, nextCurrent);
        const timer = setTimeout(
            () => setCurrents({ current: nextCurrent, actives: nextActives }),
            slideTime
        );
        return () => clearTimeout(timer);
    }, [currents]);

    const childrensArray = React.Children.toArray(props.children);

    return (
        <div className="horizontal-carousel">
            {currents.actives.map((x, i) => {
                const child = childrensArray[x];
                return (
                    <div key={i} className={cn('horizontal-carousel__slide')}>
                        {React.isValidElement(child)
                            ? React.cloneElement(child, {
                                  className: cn(
                                      child.props.className,
                                      getAnimationClassName(i) //to add animation in the child
                                  )
                              })
                            : child}
                    </div>
                );
            })}
        </div>
    );
};

export default HorizontalCarousel;
