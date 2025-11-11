import classnames from 'classnames';
import SwiperSlide from './SwiperSlide';
import SwiperWrapper from './SwiperWrapper';
import { PortalCompoment } from './PortalComponent';

interface SwiperComboProps extends PortalCompoment {
    title: string;
    subtitle: string;
    image: string;
    className?: string;
    slides: {
        image: string;
        text: string;
    }[];
}

const SwiperCombo = ({ title, subtitle, image, slides, className }: SwiperComboProps) => {
    return (
        <div className={classnames('o-swiper-combo', className)}>
            <div className="o-swiper-combo__block">
                <div className="o-swiper-combo__block__image" style={{ backgroundImage: `url("${image}")` }}></div>
                <div className="o-swiper-combo__block__text-panel">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>

            {slides.length > 0 && (
                <div className="o-swiper-combo__swiper">
                    <SwiperWrapper className="swiper-app">
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.text}>
                                <div className="o-swiper-content-app">
                                    <div
                                        className="o-swiper-content-app__image"
                                        style={{ backgroundImage: `url( "${slide.image}")` }}
                                    >
                                        <img
                                            className="a-mobile-notch"
                                            src="/assets/images/movistar/icons/icon--mobile-notch.svg"
                                            alt="mobile screen"
                                        />

                                        <div className="o-swiper-content-app__text">
                                            <strong>{slide.text}</strong>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </SwiperWrapper>
                </div>
            )}
        </div>
    );
};

export default SwiperCombo;
