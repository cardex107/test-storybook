import classnames from 'classnames';
import CmsContent from './CmsContent';
import AppButtons from './AppButtons';
import { PortalCompoment } from './PortalComponent';

interface StepsBlockProps extends PortalCompoment {
    title: string;
    content: string;
    steps: { title: string; content: string; showAppButtons: boolean }[];
    className?: string;
    styleType?: 'inverted';
}

const StepsBlock = ({ title, content, steps, className, styleType }: StepsBlockProps) => {
    const actualSteps = steps.filter((step) => step.content || step.title);
    return (
        <div
            className={classnames('o-steps-block', className, { 'o-steps-block--inverted': styleType === 'inverted' })}
        >
            <div className="o-steps-block__inner">
                <div className="o-steps-block__text-panel">
                    <div className="o-steps-block__text-panel-wrapper">
                        <h2 className="o-steps-block__title">{title}</h2>
                        {content && <CmsContent content={`<p>${content}</p>`} styleType="big" />}
                    </div>
                </div>

                {Boolean(actualSteps.length) && (
                    <div className="o-steps-block__steps-panel">
                        <ul className="m-steps-list">
                            {actualSteps.map((step, index) => (
                                <li className="m-steps-list__item" key={index + 1}>
                                    <span className="m-steps-list__number">{index + 1}</span>
                                    {step.title && <span className="m-steps-list__title">{step.title}</span>}
                                    {step.content && <CmsContent content={`<p>${step.content}</p>`} />}
                                    {step.showAppButtons && <AppButtons />}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StepsBlock;
