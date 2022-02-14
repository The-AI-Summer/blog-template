import AOS from 'aos';
import { useEffect } from 'react';

export function useAnimationOnScroll() {
    useEffect(() => {
        AOS.init({ duration: 500, once: true, mirror: false });
        AOS.refresh();
    }, []);
}
