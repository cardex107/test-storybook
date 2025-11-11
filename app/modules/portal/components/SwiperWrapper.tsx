import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/element';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperNextIcon from '~/shared/components/icon/SwiperNext';
import SwiperPreviousIcon from '~/shared/components/icon/SwiperPrevious';

interface SwiperProps {
    className?: string;
    children: React.ReactElement<SwiperSlide>[];
    nextIcon?: React.ReactNode;
    previousIcon?: React.ReactNode;
}

const SwiperWrapper = ({ className, children, nextIcon, previousIcon }: SwiperProps) => {
    const swiperContainer = useRef<HTMLDivElement | null>(null);
    const swiperInstance = useRef<Swiper>();

    /**
     * The following use Effect is necessary because we can't use
     * the provided swiper web compoments because the current styles
     * use a very coupled solution for Swiper and using the web components
     * would require an important refactorization of styles and code
     */
    useEffect(() => {
        if (swiperContainer.current && !swiperInstance.current) {
            swiperInstance.current = new Swiper(swiperContainer.current, {
                modules: [Navigation, Pagination],
                loop: !('process' in window), //disable loop feature in NodeJS
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }, []);

    return (
        <div className={classNames('swiper-container', className)} ref={swiperContainer}>
            <div className="swiper-wrapper">{children}</div>
            <div className="swiper-button-next">
                <div className="swiper-arrow">{nextIcon ?? <SwiperNextIcon />}</div>
            </div>
            <div className="swiper-button-prev">
                <div className="swiper-arrow">{previousIcon ?? <SwiperPreviousIcon />}</div>
            </div>
        </div>
    );
};

export default SwiperWrapper;
