import React from 'react';
import { Container } from '@shared/styles/global.styled';
import Button from '@components/_universal/Button/Button';
import Link from 'next/link';
import {
    SectionTitle,
    ProjectsWrapper,
    ItemContent,
    ProjectItem,
    ItemImage,
    Image,
    ProjectsList,
    ProjectWrapper,
    ItemText,
    ItemTitle,
    ItemInfo,
    ItemInfoInner,
    ItemService,
    ItemDate,
    ItemLinkWrapper,
    ItemLink,
    ButtonWrapper,
} from './Projects.styled';

const Projects: React.FC = () => {
    return (
        <ProjectsWrapper id="projects">
            <Container>
                <SectionTitle>Nasze projekty</SectionTitle>
                <ProjectsList>
                    <ProjectWrapper>
                        <ProjectItem>
                            <ItemImage>
                                <Image src="/images/hero_image_1.png" />
                            </ItemImage>
                            <ItemContent>
                                <ItemInfo>
                                    <ItemInfoInner>
                                        <ItemService>
                                            Usługi doradcze
                                        </ItemService>
                                        <ItemDate>Styczeń 2020</ItemDate>
                                    </ItemInfoInner>
                                    <Link
                                        scroll={false}
                                        href="/projects/[projectId]"
                                        as="/projects/project-1"
                                    >
                                        <ItemLinkWrapper>
                                            <ItemLink
                                                buttonType="TRANSPARENT"
                                                iconType="IconArrowRight"
                                                iconSize={20}
                                                iconActiveColor={[
                                                    'green_hover',
                                                ]}
                                                noPadding
                                            >
                                                więcej
                                            </ItemLink>
                                        </ItemLinkWrapper>
                                    </Link>
                                </ItemInfo>
                                <ItemTitle>Tytuł projektu</ItemTitle>
                                <ItemText>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ac tincidunt ut dictumst
                                    urna dictum nulla. Ac tincidunt ut dictumst
                                    urna dictum nulla. Ac tincidunt ut dictumst
                                    urna dictum nulla.
                                </ItemText>
                            </ItemContent>
                        </ProjectItem>
                    </ProjectWrapper>
                </ProjectsList>
                <Link scroll={false} href="/projects" as="/projects">
                    <ButtonWrapper>
                        <Button buttonType="PRIMARY" width={300}>
                            Zobacz nasze projekty
                        </Button>
                    </ButtonWrapper>
                </Link>
            </Container>
        </ProjectsWrapper>
    );
};

export default Projects;
