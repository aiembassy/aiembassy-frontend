import React from 'react';
import Link from 'next/link';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import { ButtonWrapper, SummaryText, SummaryWrapper } from './Summary.styled';

interface IProps {
    text: string;
}

const Summary: React.FC<IProps> = ({ text }) => {
    return (
        <SummaryWrapper>
            <SummaryText>{text}</SummaryText>
            {/* TODO:: add link below */}
            <Link scroll={false} href="">
                <ButtonWrapper>
                    <ButtonLink buttonType="PRIMARY" width={280}>
                        Zapisz się
                    </ButtonLink>
                </ButtonWrapper>
            </Link>
        </SummaryWrapper>
    );
};

export default Summary;
