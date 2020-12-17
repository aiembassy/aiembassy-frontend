import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import { BoldText } from '@shared/styles/typography.styled';
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
    return (
        <>
            <ModalInfo>
                <ModalTitle>Wspomóż nas</ModalTitle>
                <ModalDescription smallModal={smallModal}>
                    Prowadzenie Fundacji oraz realizowane przez nas działania i
                    projekty wymagają wielu środków finansowych i dużego nakładu
                    pracy. Jeśli podoba Ci się to co robimy – możesz wspomóc
                    naszą działalność.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <SupportList>
                    <SupportItem>
                        <ItemIcon>
                            <ImageIcon src="images/donate.png" />
                            <IconName>Darowizny</IconName>
                        </ItemIcon>
                        <ItemContent>
                            <Text>
                                Jednorazowe lub systematyczne wpłaty na dowolną
                                kwotę na konto Fundacji.{' '}
                            </Text>
                            <Text>
                                Wykonaj przelew o tytule:{' '}
                                <BoldText>
                                    „Darowizna na cele statutowe”
                                </BoldText>{' '}
                                na konto Bank BNP Paribas{' '}
                                <BoldText>
                                    32 1600 1462 1885 3945 8000 0001
                                </BoldText>
                            </Text>
                            <Text>
                                <BoldText>
                                    Fundacja “AI Embassy”
                                    <br />
                                    Rynek Główny 28, 31-010 Kraków
                                </BoldText>
                            </Text>
                        </ItemContent>
                    </SupportItem>
                    <SupportItem>
                        <ItemIcon>
                            <ImageIcon src="images/cooperation.png" />
                            <IconName>Współpraca</IconName>
                        </ItemIcon>
                        <ItemContent>
                            <Text>
                                Osoby prawne mogą zostać naszymi sponsorami,
                                przez wsparcie finansowe naszych projektów lub
                                patronat, bądź też przyłączenie się do wspólnego
                                realizowania projektów.
                            </Text>
                            <Text>
                                Loga partnerów zostaną umieszczone na stronie
                                internetowej naszej Fundacji.
                            </Text>
                        </ItemContent>
                    </SupportItem>
                </SupportList>
            </ModalContent>
        </>
    );
};

export default ModalDonation;
