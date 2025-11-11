import { Puff } from '~/shared/components/Puff';

interface InlineLoadingProps {
    width?: number;
    height?: number;
    style?: object;

    className?: string;
}

const InlineLoading = ({ width = 20, height = 20, style, className }: InlineLoadingProps) => {
    return (
        <div
            className={className ?? ''}
            style={{
                display: 'inline-block',
                marginRight: '5px',
                ...style,
            }}
        >
            <Puff color="#ddd" height={height} width={width} />
        </div>
    );
};

export default InlineLoading;
