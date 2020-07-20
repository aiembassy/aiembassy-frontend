import * as React from 'react';
import { ButtonTypes, ColorType, IconName } from '@@types/CommonTypes';
import { useState } from 'react';
import {
    ButtonHolder,
    ButtonElement,
    StyledIconManager,
} from './Button.styled';

interface IProps {
    children: React.ReactNode;
    buttonType: ButtonTypes;
    iconType?: IconName;
    iconSize?: number;
    iconColor?: ColorType[];
    iconActiveColor?: ColorType[];
}

const Button: React.FC<IProps> = ({
    children,
    buttonType,
    iconActiveColor,
    iconColor,
    iconSize,
    iconType,
}) => {
    const [active, setActive] = useState(false);

    return (
        <ButtonHolder>
            <ButtonElement
                buttonType={buttonType}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
            >
                {iconType && (
                    <StyledIconManager
                        fill={iconColor}
                        size={iconSize || 24}
                        name={iconType}
                        activeFill={iconActiveColor}
                        isActive={active}
                    />
                )}
                {children}
            </ButtonElement>
        </ButtonHolder>
    );
};

export default Button;
