import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useFieldFormatters from '../../hooks/useFieldFormatters';
import Modal from '../modals/Modal';
import SelectInput, { SelectInputProps } from './SelectInput';

interface GenderInputProps extends Omit<SelectInputProps, 'options'> {
    options?: Array<{ label: string; value: string | number }>;
    showInfo?: boolean;
}

const GenderInput = ({ options, showInfo = false, ...props }: GenderInputProps) => {
    const { t } = useTranslation();
    const { formatGender } = useFieldFormatters();
    const [showModal, setShowModal] = useState(false);
    const genders = [
        { label: formatGender('male'), value: 'male' },
        { label: formatGender('female'), value: 'female' },
    ];

    const actualProps = {
        ...props,
        ...(showInfo && {
            link: {
                label: t('sex_at_birth_info.link'),
                onClick: () => setShowModal(true),
            },
        }),
    };

    return (
        <>
            <SelectInput options={options ?? genders} {...actualProps} />
            {showInfo && (
                <Modal
                    show={showModal}
                    hideCancelButton
                    onClickCancel={() => setShowModal(false)}
                    onClickOk={() => setShowModal(false)}
                    title={t('sex_at_birth_info.title')}
                    message={t('sex_at_birth_info.text')}
                />
            )}
        </>
    );
};

export default GenderInput;
