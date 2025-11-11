import React from 'react';

export interface CheckboxInputGroupProps {
    name: string;
    required: boolean;
    children: React.ReactNode;
    errors?: string[];
    errorMessage?: string;
    id?: string;
    className?: string;
    label?: string;
    textForm?: string;
}

const CheckboxInputGroup = ({ name, children, errors, className, label, textForm }: CheckboxInputGroupProps) => {
    const errorClassname = errors?.length ? 'has-errors' : '';
    const wrapperClassName = `m-field ${className ?? ''} ${errorClassname}`;

    return (
        <div className={wrapperClassName}>
            {!!textForm && <p className="m-field__title">{textForm}</p>}

            {!!label && (
                <label className="m-field__label" htmlFor={name}>
                    {label}
                </label>
            )}

            <div className="m-field__wrapper">{children}</div>
        </div>
    );
};
export default CheckboxInputGroup;
