import classnames from 'classnames';
import AppBadge from './AppBadge';
import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';
import Link from '~/shared/components/Link';
import AppButtons from './AppButtons';
import SwiperWrapper from './SwiperWrapper';
import SwiperSlide from './SwiperSlide';
import NewBadge from './NewBadge';
import { PortalCompoment } from './PortalComponent';

interface PortalSwiperSliderProps extends PortalCompoment {
    title?: string;
    className?: string;
    styleType?: 'inverted' | 'normal';
    slides: {
        title: string;
        subtitle?: string;
        content?: string;
        image: string;
        className?: string;
        contentClassName?: string;
        appBadge?: {
            image?: string;
            text: string;
            text2?: string;
        };
        newBadge?: {
            text: string;
        };
        button?: {
            text: string;
            link: string;
        };
        showAppButtons?: boolean;
        textPanelImages?: string[];
        appImage?: string;
    }[];
}

const PortalSwiperSlider = ({ title, className, styleType, slides }: PortalSwiperSliderProps) => {
    const { sanitizeContent } = useSanitizeContent();

    return (
        <>
            {title && (
                <div className={classnames('sliderTitle', { 'sliderTitle--inverted': styleType === 'inverted' })}>
                    {title}
                </div>
            )}
            <SwiperWrapper className={className}>
                {slides.map((slide) => (
                    <SwiperSlide key={slide.title}>
                        <div
                            className={classnames('o-swiper-content-banner', slide.className, {
                                'o-swiper-content--inverted': styleType === 'inverted',
                            })}
                        >
                            <div
                                className="o-swiper-content-banner__image"
                                style={{ backgroundImage: `url("${slide.image}")` }}
                            ></div>

                            <div className="o-swiper-content-banner__text-panel">
                                {slide.appBadge && (
                                    <AppBadge
                                        image={slide.appBadge.image}
                                        text={slide.appBadge.text}
                                        text2={slide.appBadge.text2}
                                    />
                                )}

                                {slide.newBadge && <NewBadge text={slide.newBadge.text} />}

                                <h2 className="o-swiper-content-banner__title">{slide.title}</h2>

                                {slide.subtitle && (
                                    <div className="o-swiper-content-banner__subtitle">
                                        {sanitizeContent(slide.subtitle)}
                                    </div>
                                )}

                                {slide.content && (
                                    <div className={classnames('s-cms-content', slide.contentClassName)}>
                                        {sanitizeContent(slide.content)}
                                    </div>
                                )}

                                {slide.button && (
                                    <Link
                                        to={slide.button.link}
                                        className="h-margin-top-20 a-button a-button--outlined-secondary "
                                    >
                                        {slide.button.text}
                                    </Link>
                                )}

                                {slide.showAppButtons && <AppButtons />}

                                {slide.textPanelImages && (
                                    <div className="o-swiper-content-banner__logos">
                                        {slide.textPanelImages.map((image) => (
                                            <img key={image} src={image} alt="" />
                                        ))}
                                    </div>
                                )}
                            </div>
                            {slide.appImage && (
                                <div
                                    className="o-swiper-content-banner__app-screen"
                                    style={{ backgroundImage: `url("${slide.appImage}")` }}
                                >
                                    <img
                                        className="a-mobile-notch"
                                        src="/assets/images/movistar/icons/icon--mobile-notch.svg"
                                        alt="mobile screen"
                                    />
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperWrapper>
        </>
    );
};

export default PortalSwiperSlider;
