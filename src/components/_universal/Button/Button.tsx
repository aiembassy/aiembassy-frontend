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
    children: React.ReactNode;
    className?: string;
    iconActiveColor?: ColorType[];
    iconColor?: ColorType[];
    iconSize?: number;
    iconType?: IconName;
    isGradientBg?: boolean;
}

const Button: React.FC<IProps> = ({
    buttonType,
    children,
    className,
    iconActiveColor,
    iconColor,
    iconSize,
    iconType,
    isGradientBg,
}) => {
    const [active, setActive] = useState(false);

    return (
        <ButtonHolder>
            <ButtonElement
                buttonType={buttonType}
                className={className}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
            >
                {iconType && (
                    <StyledIconManager
                        activeFill={iconActiveColor}
                        fill={iconColor}
                        isActive={active}
                        name={iconType}
                        size={iconSize || 24}
                    />
                )}
                {isGradientBg ? (
                    <ButtonText>{children}</ButtonText>
                ) : (
                    { children }
                )}
            </ButtonElement>
        </ButtonHolder>
    );
};

export default Button;
