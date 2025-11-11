import { useTranslation } from 'react-i18next';
import useAppState from '~/modules/user/shared/hooks/useAppState';
import Link from '~/shared/components/Link';
import LeftArrowIcon from './icon/LeftArrow';

interface BackButtonProps {
    url?: string;
}

function BackButton({ url = '/user/consultations' }: BackButtonProps) {
    const { t } = useTranslation();
    const {
        app: { embeddingConfiguration },
    } = useAppState();

    if (embeddingConfiguration.hideBackButton) {
        return null;
    }

    return (
        <Link to={url} className="a-button a-button--naked-secondary h-margin-bottom-20 ">
            <LeftArrowIcon className="a-button__left-icon" />
            {t('common.return')}
        </Link>
    );
}

export default BackButton;
