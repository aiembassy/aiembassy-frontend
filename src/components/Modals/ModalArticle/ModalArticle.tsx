import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';

interface IProps {
    data: {
        title: string;
        text: string;
    };
}

const ModalArticle: React.FC<IProps> = ({ data }) => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>{data.title}</ModalTitle>
                <ModalDescription>{data.text}</ModalDescription>
            </ModalInfo>
            <ModalContent />
        </>
    );
};

export default ModalArticle;
