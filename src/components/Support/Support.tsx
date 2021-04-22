import React from 'react';
import { Container } from '@shared/styles/global.styled';
import useTranslation from 'next-translate/useTranslation';
import {
    SectionTitle,
    SupportWrapper,
    SupportList,
    SupportItem,
    ItemImage,
} from './Support.styled';

const Support: React.FC = () => {
    const { t, lang } = useTranslation('common');

    return (
        <SupportWrapper>
            <Container>
                <SectionTitle center>{t('support_title')}</SectionTitle>
                <SupportList>
                    <SupportItem>
                        <ItemImage src="/images/gmail.png" width={66} />
                    </SupportItem>
                    <SupportItem>
                        <ItemImage src="/images/allegro.png" width={88} />
                    </SupportItem>
                    <SupportItem>
                        <ItemImage src="/images/amazon.png" width={95} />
                    </SupportItem>
                    <SupportItem>
                        <ItemImage src="/images/IBM.png" width={90} />
                    </SupportItem>
                    <SupportItem>
                        <ItemImage src="/images/ABB.png" width={85} />
                    </SupportItem>
                    <SupportItem>
                        <ItemImage src="/images/codete.png" width={70} />
                    </SupportItem>
                </SupportList>
            </Container>
        </SupportWrapper>
    );
};

export default Support;
