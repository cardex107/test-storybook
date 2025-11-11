import useAppState from '~/modules/user/shared/hooks/useAppState';
import { useTranslation } from 'react-i18next';
import useProject from '~/modules/user/shared/hooks/useProject';
import HeroBlock from './HeroBlock';

interface HomeHeroBannerProps {
    showAppButtons?: boolean;
}

const HomeHeroBanner = ({ showAppButtons }: HomeHeroBannerProps) => {
    const project = useProject();
    const { t } = useTranslation();
    const { auth } = useAppState();
    const buttons = auth.user
        ? [{ text: t('common.request_service'), link: '/user/consultations', icon: 'h-icon--login' }]
        : [{ text: t('common.request_service'), link: '/login', icon: 'h-icon--login' }];
    return (
        <HeroBlock
            image={project.resources.images.welcome_image}
            title={t('home.welcome.title')}
            subtitle={t('home.welcome.subtitle')}
            buttons={buttons}
            showAppButtons={showAppButtons}
            appButtonsTitle={t('home.app-buttons.title')}
        />
    );
};

export default HomeHeroBanner;
