import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import { BoldText } from '@shared/styles/typography.styled';
import useTranslation from 'next-translate/useTranslation';
import {
    SupportList,
    SupportItem,
    Text,
    ItemContent,
    IconName,
    ItemIcon,
    ImageIcon,
} from './ModalDonation.styled';

interface IProps {
    smallModal: boolean;
}

const ModalDonation: React.FC<IProps> = ({ smallModal }) => {
    const { t, lang } = useTranslation('donation');

    return (
        <>
            <ModalInfo>
                <ModalTitle>{t('support_us_title')}</ModalTitle>
                <ModalDescription smallModal={smallModal}>
                    {t('support_us_description')}
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <SupportList>
                    <SupportItem>
                        <ItemIcon>
                            <ImageIcon src="images/donate.png" />
                            <IconName>{t('donations')}</IconName>
                        </ItemIcon>
                        <ItemContent>
                            <Text>{t('donations_intro')}</Text>
                            <Text>
                                {t('donations_make_transfer')}:{' '}
                                <BoldText>
                                    „{t('donations_transfer_title')}”
                                </BoldText>{' '}
                                {t('donations_account_bank')}{' '}
                                <BoldText>
                                    32 1600 1462 1885 3945 8000 0001
                                </BoldText>
                            </Text>
                            <Text>
                                <BoldText>
                                    {t('common:foundation_name')}
                                    <br />
                                    ul. Podskale 1A/6, 30-522 Kraków
                                </BoldText>
                            </Text>
                        </ItemContent>
                    </SupportItem>
                    <SupportItem>
                        <ItemIcon>
                            <ImageIcon src="images/cooperation.png" />
                            <IconName>{t('cooperation')}</IconName>
                        </ItemIcon>
                        <ItemContent>
                            <Text>{t('cooperation_description')}</Text>
                            <Text>{t('cooperation_benefits')}</Text>
                        </ItemContent>
                    </SupportItem>
                </SupportList>
            </ModalContent>
        </>
    );
};

export default ModalDonation;
