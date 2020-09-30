import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import { BoldText } from '@shared/styles/typography.styled';
import {
    SupportList,
    SupportItem,
    Text,
    ItemContent,
    IconName,
    ItemIcon,
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
                            <IconManager
                                size={83}
                                sizeY={83}
                                name="IconDonation"
                            />
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
                                    „darowizna na cele statutowe”
                                </BoldText>{' '}
                                na konto Bank XXXXXXXX{' '}
                                <BoldText>
                                    00 1111 2222 3333 4444 5555 6666
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
                            <IconManager
                                size={83}
                                sizeY={83}
                                name="IconCooperation"
                            />
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
