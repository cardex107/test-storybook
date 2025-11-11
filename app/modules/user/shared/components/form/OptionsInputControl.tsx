import classnames from 'classnames';
import { OnAfterChangeFunction } from '../../hooks/useOnAfterChange';
import { SelectInputProps } from './SelectInput';

export interface OptionsInputProps extends Omit<SelectInputProps, 'placeholder'> {
    styleType?: 'default' | 'small' | 'primary';
    onAfterChange?: OnAfterChangeFunction;
    vertical?: boolean;
    labelClassName?: string;
}

interface OptionsInputControlProps {
    options: Array<{ label: string; value: string | number }>;
    disabled?: boolean;
    styleType?: 'default' | 'small' | 'primary';
    vertical?: boolean;
    testId?: string;
    value: string | number | undefined;
    onChange: (value: string | number) => void;
}

const OptionsInputControl = ({
    options,
    disabled,
    styleType,
    vertical,
    testId = '',
    value,
    onChange,
}: OptionsInputControlProps) => {
    return (
        <div className="m-field__wrapper">
            <div className="m-field__wrapper-inner" style={vertical ? { flexDirection: 'column' } : {}}>
                {options.map((option) => (
                    <div
                        data-testid={`${testId}-option`}
                        className={classnames('a-radio-button-toggle h-cursor', {
                            'a-radio-button-toggle--small': styleType === 'small' && !disabled,
                            'a-radio-button-toggle--primary': styleType === 'primary' && !disabled,
                        })}
                        key={option.value}
                        onClick={() => onChange(option.value)}
                    >
                        <input
                            className="a-radio-button-toggle__input"
                            type="checkbox"
                            value={option.value}
                            checked={option.value === value}
                            readOnly
                            disabled={disabled}
                            style={{ cursor: 'pointer' }}
                        />
                        <label
                            className={classnames('a-radio-button-toggle__label', {
                                'a-radio-button-toggle__label--small': styleType === 'small' && !disabled,
                                'a-radio-button-toggle__label--primary': styleType === 'primary' && !disabled,
                            })}
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OptionsInputControl;
