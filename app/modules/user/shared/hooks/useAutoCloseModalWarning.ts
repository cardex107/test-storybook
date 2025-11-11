import { useEffect, useRef } from 'react';

export default function (showModal: boolean, onClose?: () => void) {
    const checked = useRef(false);
    useEffect(() => {
        if (!checked.current && !showModal) {
            checked.current = true;
            onClose && onClose();
        }
    }, [onClose, showModal]);
}
