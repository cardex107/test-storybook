import { useEffect, useRef } from 'react';
import { Faqs as FaqsType } from '~/modules/amos-api/types';
import useSanitizeContent from '~/modules/user/shared/hooks/useSanitizeContent';

interface FaqsProps {
    topics: FaqsType;
}

const Faqs = ({ topics }: FaqsProps) => {
    const { sanitizeContent } = useSanitizeContent();
    const collapsibleRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handlers: { element: HTMLElement; handler: () => void }[] = [];

        collapsibleRefs.current.forEach((collapsible) => {
            if (collapsible) {
                const action = collapsible.querySelector<HTMLElement>('.js-collapsible-action');
                const content = collapsible.querySelector<HTMLElement>('.js-collapsible-content');

                if (action && content) {
                    const handleClick = () => {
                        action.classList.toggle('faq-open');
                        content.classList.toggle('faq-open');
                        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                            content.style.maxHeight = '0px';
                        } else {
                            content.style.maxHeight = content.scrollHeight + 'px';
                        }
                    };

                    action.addEventListener('click', handleClick);
                    handlers.push({ element: action, handler: handleClick });
                }
            }
        });

        // Cleanup function
        return () => {
            handlers.forEach(({ element, handler }) => {
                element.removeEventListener('click', handler);
            });
        };
    }, [topics]);

    return (
        <div className="s-cms-content--padded">
            {topics.map((topic, topicIndex) => (
                <div className="h-margin-bottom-30" key={topic.name}>
                    <h2 className="m-faq-section">{topic.name}</h2>
                    {topic.questions.map((question, questionIndex) => (
                        <div
                            className="m-faq js-collapsible-faq"
                            key={question.question}
                            ref={(el) => (collapsibleRefs.current[topicIndex * 100 + questionIndex] = el)}
                        >
                            <div className="m-question js-collapsible-action">
                                {question.question}
                                <span className="a-dropdown__arrow"></span>
                            </div>
                            <div className="m-answer js-collapsible-content">
                                <div className="s-cms-content">{sanitizeContent(question.answer)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Faqs;
