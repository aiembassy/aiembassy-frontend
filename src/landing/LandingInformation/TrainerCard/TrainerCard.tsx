import React from 'react';
import IconManager from '@components/_universal/IconManager/IconManager';
import {
    Photo,
    TrainerBio,
    TrainerCardTitle,
    TrainerCardWrapper,
    TrainerName,
    TrainerPhoto,
    TrainerPosition,
    TrainerSocial,
    SocialLink,
} from './TrainerCard.styled';

interface IProps {
    photo: string;
    name: string;
    position: string;
    bio: string;
    socialLinks: any;
}

const TrainerCard: React.FC<IProps> = ({
    photo,
    name,
    position,
    bio,
    socialLinks,
}) => {
    return (
        <TrainerCardWrapper>
            <TrainerCardTitle>Prowadzący</TrainerCardTitle>
            <TrainerPhoto>
                <Photo src={photo} />
            </TrainerPhoto>
            <TrainerName>{name}</TrainerName>
            <TrainerPosition>{position}</TrainerPosition>
            <TrainerBio>{bio}</TrainerBio>
            {socialLinks && (
                <TrainerSocial>
                    {socialLinks.map((item, index) => (
                        <SocialLink
                            key={index}
                            href={item.link}
                            target="_blank"
                        >
                            <IconManager
                                activeFill={['green_hover']}
                                name={item.icon}
                                size={item.iconSize}
                            />
                        </SocialLink>
                    ))}
                </TrainerSocial>
            )}
        </TrainerCardWrapper>
    );
};

export default TrainerCard;
