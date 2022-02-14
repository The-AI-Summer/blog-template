/* eslint-disable max-len */
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CopyIcon.scss';

interface CopyIconProps {
    text: string;
}

const CopyIcon: React.FC<CopyIconProps> = (props: CopyIconProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <CopyToClipboard text={props.text} onCopy={onCopyText}>
            <span>
                {isCopied ? (
                    'Copied!'
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        className="copyIcon"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                    </svg>
                )}
            </span>
        </CopyToClipboard>
    );
};

export default CopyIcon;
