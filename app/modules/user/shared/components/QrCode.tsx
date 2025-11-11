import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

export interface QrCodeProps {
    url: string;
    className?: string;
}

export const QrCode = ({ url, className = '' }: QrCodeProps) => {
    const [data, setData] = useState<string>();

    useEffect(() => {
        QRCode.toDataURL(url).then((qr) => setData(qr));
    });

    if (!data) {
        return (
            <div
                className={className}
                style={{ width: 115, height: 115, backgroundColor: 'white', borderRadius: 10 }}
            ></div>
        );
    }

    return <img src={data} alt="" className={className} />;
};
