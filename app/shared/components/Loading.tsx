import React from 'react';
import { useTranslation } from 'react-i18next';
import { Puff } from './Puff';

interface LoadingProps {
    className?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}

const Loading = ({ width = 40, height = 40, style, className }: LoadingProps) => {
    const { t } = useTranslation();

    return (
        <div style={{ ...loadMoreStyle, ...style }} className={className ?? ''}>
            <div style={textStyle}>{t('common.loading')}</div>
            <Puff color="#ddd" height={height} width={width} />
        </div>
    );
};

const loadMoreStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    paddingTop: '25%',
    marginLeft: -15,
    marginRight: -15,
};

const textStyle = {
    marginBottom: '1em',
};

export default Loading;
