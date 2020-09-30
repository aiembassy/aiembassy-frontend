import * as React from 'react';
import { ButtonTypes, ColorType, IconName } from '@@types/CommonTypes';
import { useState } from 'react';
import {
    ButtonHolder,
    ButtonElement,
    StyledIconManager,
    ButtonText,
} from './Button.styled';

interface IProps {
    buttonType: ButtonTypes;
    children?: React.ReactNode;
    className?: string;
    iconActiveColor?: ColorType[];
    iconColor?: ColorType[];
    iconPositionLeft?: boolean;
    iconSize?: number;
    iconType?: IconName;
    noPadding?: boolean;
    onPress?: () => void;
    width?: number;
}

const Button: React.FC<IProps> = ({
    buttonType,
    children,
    className,
    iconActiveColor,
    iconColor,
    iconPositionLeft,
    iconSize,
    iconType,
    noPadding,
    onPress,
    width,
}) => {
    const [active, setActive] = useState(false);
    const Icon = (
        <StyledIconManager
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
                onClick={onPress}
                width={width}
            >
                {iconType && iconPositionLeft && Icon}
                <ButtonText>{children && children}</ButtonText>
                {iconType && iconPositionLeft !== true && Icon}
            </ButtonElement>
        </ButtonHolder>
    );
};

export default Button;
