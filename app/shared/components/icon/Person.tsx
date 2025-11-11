import { IconProps } from '~/modules/user/shared/components/icon/types';

const Person = ({ className }: IconProps) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M8 8a2.67 2.67 0 1 0 0-5.34A2.67 2.67 0 0 0 8 8zm0 1.33c-1.78 0-5.33.89-5.33 2.67v1.33h10.66V12c0-1.77-3.55-2.67-5.33-2.67z"
            />
        </svg>
    );
};

export default Person;
