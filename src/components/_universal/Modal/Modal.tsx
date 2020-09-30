import * as React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    ModalWrapper,
    ModalInner,
    IconClose,
    ModalComponent,
    ButtonWrapper,
    PrevButton,
} from './Modal.styled';

interface IProps {
    children: React.ReactNode;
    isBackLink?: boolean;
    smallModal?: boolean;
    modalType?: string;
}

const modalData: {
    [key in 'event' | 'project' | 'workshop']: {
        href: string;
        as: string;
        text: string;
    };
} = {
    workshop: {
        href: '/workshops',
        as: '/workshops',
        text: 'Cofnij się do listy szkoleń',
    },
    event: {
        href: '/events',
        as: '/events',
        text: 'Cofnij się do listy wydarzeń',
    },
    project: {
        href: '/projects',
        as: '/projects',
        text: 'Cofnij się do listy projektów',
    },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.6,
            delay: 0.7,
            ease: easing,
        },
    },
};

const slideRight = {
    initial: {
        x: '100%',
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.7,
            ease: easing,
        },
    },
    exit: {
        x: '100%',
        transition: {
            duration: 0.6,
            delay: 0,
            ease: easing,
        },
    },
};

const Modal: React.FC<IProps> = ({
    children,
    isBackLink,
    smallModal,
    modalType,
}) => {
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/');
    }, []);

    const handleClose = () => {
        router.push('/');
    };

    return (
        <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ModalWrapper>
                <motion.div
                    variants={slideRight}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <ModalComponent smallModal={!!smallModal}>
                        {isBackLink && (
                            <Link
                                scroll={false}
                                href={modalData[modalType].href}
                                as={modalData[modalType].as}
                            >
                                <ButtonWrapper>
                                    <PrevButton
                                        buttonType="TRANSPARENT"
                                        iconActiveColor={['green_hover']}
                                        iconType="IconArrowLeft"
                                        iconSize={20}
                                        iconPositionLeft
                                        noPadding
                                    >
                                        {modalData[modalType].text}
                                    </PrevButton>
                                </ButtonWrapper>
                            </Link>
                        )}
                        <IconClose
                            buttonType="TRANSPARENT"
                            iconActiveColor={['green_hover']}
                            iconType="IconClose"
                            iconSize={21}
                            noPadding
                            onPress={() => handleClose()}
                        />
                        <ModalInner>{children}</ModalInner>
                    </ModalComponent>
                </motion.div>
            </ModalWrapper>
        </motion.div>
    );
};

export default Modal;
