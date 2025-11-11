import { PortalCompoment } from "./PortalComponent";

interface ReviewsProps extends PortalCompoment {
    title?: string;
    reviews: {
        name: string;
        image: string;
        text: string;
    }[];
}

const Reviews = ({ title, reviews }: ReviewsProps) => {
    return (
        <div className="o-reviews">
            {title && <h2 className="o-reviews__title">Son muchos los que ya lo han conseguido</h2>}
            <div className="o-reviews__cont">
                {reviews.map((review) => (
                    <div className="o-reviews__review" key={review.name}>
                        <img src={review.image} className="o-reviews__image" alt="" />
                        <div className="o-reviews__text">
                            <div className=" s-cms-content">
                                {review.text}
                                <br />
                                {review.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
