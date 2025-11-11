import { useFormikContext } from 'formik';

export type OnAfterChangeFunction = (
    value: any,
    values: any,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => any;

const useOnAfterChange = (onAfterChange?: OnAfterChangeFunction) => {
    const { setFieldValue, values } = useFormikContext();
    const handleAfterChange = (value: any) => {
        onAfterChange && onAfterChange(value, values, setFieldValue);
    };
    return handleAfterChange;
};

export default useOnAfterChange;
