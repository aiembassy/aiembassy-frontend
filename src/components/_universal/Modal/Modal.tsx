import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
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
import useTranslation from "next-translate/useTranslation";

interface IProps {
    children: React.ReactNode;
    isBackLink?: boolean;
    smallModal?: boolean;
    modalType?: string;
}

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
    const { t, lang } = useTranslation('projects');

    const router = useRouter();
    const modalRef = useRef(null);

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
            text: t('common:come_back_to_workshops'),
        },
        event: {
            href: '/events',
            as: '/events',
            text: t('common:come_back_to_events'),
        },
        project: {
            href: '/projects',
            as: '/projects',
            text: t('common:come_back_to_projects'),
        },
    };

    const handleClickOutside = (e) => {
        if (!modalRef.current?.contains(e.target)) {
            // eslint-disable-next-line no-use-before-define
            handleClose();
        }
    };

    const handleClose = () => {
        router.push('/');
        document.body.style.overflowY = 'auto';
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    });

    useEffect(() => {
        router.prefetch('/');
        document.body.style.overflowY = 'hidden';
    }, []);

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
                    <ModalComponent smallModal={!!smallModal} ref={modalRef}>
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
                            iconSize={22}
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
