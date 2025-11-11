import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useSanitizeContent from '../../hooks/useSanitizeContent';
import Button from '../Button';
import ContinueButton from '../ContinueButton';
import CheckIcon from '../icon/Check';
import RightArrowIcon from '../icon/RightArrow';
import ProfileStatus from '../ProfileStatus';

type NextStep = {
    to: string;
    title: string;
};

interface ThanksPageState {
    title: string;
    message: string;
    html?: string;
    continueUrl?: string;
    continueLabel?: string;
    nextSteps?: NextStep[];
    showProfileStatus?: boolean;
}

const ThanksPage = () => {
    const { t } = useTranslation();
    const { sanitizeContent } = useSanitizeContent();
    const { state }: { state: ThanksPageState } = useLocation();

    return (
        <div className="m-thanks-layer is-visible" data-testid="thanks-page">
            <div className="m-thanks-layer__inner">
                <CheckIcon />
                <div className="m-thanks-layer__text-wrapper">
                    <span className="m-thanks-layer__title">{state.title}</span>
                    <p className="m-thanks-layer__text">{state.message}</p>
                    {state.html && (
                        <p className="m-thanks-layer__text" data-testid="thanks-content">
                            {sanitizeContent(state.html)}
                        </p>
                    )}
                    {state.nextSteps?.map((nexStep) => (
                        <Button
                            key={nexStep.to}
                            link={nexStep.to}
                            label={nexStep.title}
                            icon={<RightArrowIcon />}
                            iconPosition="right"
                            styleType="naked"
                            className="h-block h-text-center "
                        />
                    ))}

                    {state.continueUrl && (
                        <ContinueButton label={state.continueLabel ?? t('common.continue')} url={state.continueUrl} />
                    )}

                    {state.showProfileStatus && <ProfileStatus title={t('consultations.cqc.title')} />}
                </div>
            </div>
        </div>
    );
};

export default ThanksPage;
