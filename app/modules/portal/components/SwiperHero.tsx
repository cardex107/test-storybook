import { PortalCompoment } from './PortalComponent';
import SwiperSlide from './SwiperSlide';
import SwiperWrapper from './SwiperWrapper';

interface SwiperHeroProps extends PortalCompoment {
    slides: {
        title: string;
        subtitle: string;
        video: { source: string; poster: string; type: string };
        showServiceButtons: boolean;
    }[];
}

const SwiperHero = ({ slides }: SwiperHeroProps) => {
    return (
        <div className="swiper-ext-container">
            <SwiperWrapper className="o-hero-swiper">
                {slides.map((slide) => (
                    <SwiperSlide key={slide.title}>
                        <div className="o-hero-content">
                            <video
                                className="o-hero-content__frame"
                                autoPlay
                                muted
                                playsInline
                                poster={slide.video.poster}
                            >
                                <source src={slide.video.source} type={slide.video.type} />
                            </video>
                            <div className="o-hero-content__text-panel">
                                <h1 className="o-hero-content__title">{slide.title}</h1>

                                <h2 className="o-hero-content__subtitle">
                                    <p>{slide.subtitle}</p>
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperWrapper>
        </div>
    );
};

export default SwiperHero;
