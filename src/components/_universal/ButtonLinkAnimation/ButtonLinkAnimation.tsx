import * as React from 'react';
import { ButtonTypes, ColorType, IconName } from '@@types/CommonTypes';
import { useState } from 'react';
import {
    ButtonHolder,
    ButtonElement,
    StyledIconManager,
    ButtonText,
} from './ButtonLinkAnimation.styled';

interface IProps {
    activeAnimation?: boolean;
    buttonType: ButtonTypes;
    children?: React.ReactNode;
    className?: string;
    iconActiveColor?: ColorType[];
    iconColor?: ColorType[];
    iconPositionLeft?: boolean;
    iconSize?: number;
    iconType?: IconName;
    noPadding?: boolean;
    width?: number;
}

const ButtonLinkAnimation: React.FC<IProps> = ({
    activeAnimation,
    buttonType,
    children,
    className,
    iconActiveColor,
    iconColor,
    iconPositionLeft,
    iconSize,
    iconType,
    noPadding,
    width,
}) => {
    const [active, setActive] = useState(false);
    const Icon = (
        <StyledIconManager
            activeAnimation={!!activeAnimation}
            activeFill={iconActiveColor}
            fill={iconColor}
            isActive={active}
            iconPositionLeft={!!iconPositionLeft}
            name={iconType}
            size={iconSize || 24}
            width={width}
        />
    );

    return (
        <ButtonHolder>
            <ButtonElement
                buttonType={buttonType}
                className={className}
                noPadding={noPadding}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
                width={width}
            >
                {iconType && iconPositionLeft && Icon}
                <ButtonText>{children && children}</ButtonText>
                {iconType && iconPositionLeft !== true && Icon}
            </ButtonElement>
        </ButtonHolder>
    );
};

export default ButtonLinkAnimation;
