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
        date: string;
    };
}

const ModalArticle: React.FC<IProps> = ({ data }) => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>{data.title}</ModalTitle>
                <ModalDescription isArticleContent>
                    {data.date}
                </ModalDescription>
            </ModalInfo>
            <ModalContent isArticleContent>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.text,
                    }}
                />
            </ModalContent>
        </>
    );
};

export default ModalArticle;
