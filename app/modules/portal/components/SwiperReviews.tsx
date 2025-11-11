import { PortalCompoment } from './PortalComponent';
import SwiperSlide from './SwiperSlide';
import SwiperWrapper from './SwiperWrapper';

interface SwiperReviewsProps extends PortalCompoment {
    reviews: {
        quote: string;
    }[];
}

const SwiperReviews = ({ reviews }: SwiperReviewsProps) => {
    return (
        <SwiperWrapper className="swiper-container--reviews">
            {reviews.map((review) => (
                <SwiperSlide key={review.quote}>
                    <div className="swiper-container--reviews__quote">{`"${review.quote}"`}</div>
                </SwiperSlide>
            ))}
        </SwiperWrapper>
    );
};

export default SwiperReviews;
