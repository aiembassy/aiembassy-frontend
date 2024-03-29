import * as React from 'react';
import * as Icons from '@public/SVGs';
import { ThemeContext } from 'styled-components';
import { IconName, ColorType } from '@@types/CommonTypes';
import { useState } from 'react';
import { IconHolder } from './IconManager.styled';

interface IProps {
    activeFill?: ColorType[];
    center?: boolean;
    className?: string;
    fill?: ColorType[];
    isActive?: boolean;
    name?: IconName;
    rotate?: number;
    size: number;
    sizeY?: number;
}

const IconManager: React.FC<IProps> = ({
    activeFill,
    center,
    className,
    fill,
    isActive,
    name,
    rotate,
    size,
    sizeY,
}) => {
    const [isHover, setHover] = useState(false);
    const Icon = Icons[name || 'IconClose'];
    const { colors } = React.useContext(ThemeContext);
    const iconColor = fill && fill.map((item) => colors[item]);
    const iconActiveColor =
        activeFill && activeFill.map((item) => colors[item]);

    return (
        <IconHolder
            center={center}
            className={className}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            rotate={rotate}
            size={size}
        >
            <Icon
                fill={isActive || isHover ? iconActiveColor : iconColor}
                sizeY={sizeY}
            />
        </IconHolder>
    );
};

export default IconManager;
