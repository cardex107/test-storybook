import { useTranslation } from 'react-i18next';
import { PortalCompoment } from './PortalComponent';

interface ContactInfoProps extends PortalCompoment {
    link?: string;
    linkLabel?: string;
    email?: string;
    phone?: string;
}

const ContactInfo = ({ link, linkLabel, email, phone }: ContactInfoProps) => {
    const { t } = useTranslation();
    return (
        <div className="o-contact">
            {link && (
                <a
                    href={link}
                    className="o-contact__link-url o-contact__action"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {linkLabel || link}
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="o-contact__action">
                    <span className="o-contact__label">{t('common.contact')}</span>
                    <span className="o-contact__action-mail">
                        {t('project.contact_home_email', { contact_home_email: email })}
                    </span>
                </a>
            )}
            {phone && (
                <a href={`tel:${phone}`} className="o-contact__action">
                    <span>{t('project.contact_phone', { contact_phone: phone })}</span>
                </a>
            )}
        </div>
    );
};

export default ContactInfo;
