import classNames from 'classnames';
import { useFormikContext } from 'formik';
import { useRef } from 'react';
import GoogleReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import useAppState from '../../hooks/useAppState';

interface ReCAPTCHAInputProps {
    name: string;
    className?: string;
}

const ReCAPTCHAInput = ({ name, className }: ReCAPTCHAInputProps) => {
    const {
        i18n: { language: locale },
    } = useTranslation();
    const { app } = useAppState();
    const { setStatus, setFieldValue } = useFormikContext();
    const recaptchaRef = useRef<GoogleReCAPTCHA>(null);

    const handleChange = () => {
        const token = recaptchaRef.current?.getValue();

        setStatus({ recaptchaValidated: Boolean(token) });
        setFieldValue(name, token);
    };

    return (
        <div className={classNames('o-form__recaptcha-wrapper', className)}>
            <GoogleReCAPTCHA sitekey={app.recaptchaKey} ref={recaptchaRef} onChange={handleChange} hl={locale} />
        </div>
    );
};

export default ReCAPTCHAInput;
