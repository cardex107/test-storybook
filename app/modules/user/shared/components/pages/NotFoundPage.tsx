import { useTranslation } from 'react-i18next';
import useSanitizeContent from '../../hooks/useSanitizeContent';
import Button from '../Button';

const NotFoundPage = () => {
    const { t } = useTranslation();
    const { sanitizeContent } = useSanitizeContent();
    return (
        <div style={{ flexGrow: 1 }}>
            <div className="o-error-block">
                <h1 className="o-error-block__title">{t('error404.title')}</h1>
                <div className="o-error-block__cms-content s-cms-content  s-cms-content--white">
                    {sanitizeContent(t('error404.text'))}
                </div>
                <Button label={t('error404.action')} styleType="ghost" link="/" />
            </div>
        </div>
    );
};

export default NotFoundPage;
