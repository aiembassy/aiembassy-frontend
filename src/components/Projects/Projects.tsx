import React, { useState, useMemo } from 'react';
import { Container } from '@shared/styles/global.styled';
import Button from '@components/_universal/Button/Button';
import Link from 'next/link';
import projects from '@shared/data/projects';
import { categoryName } from '@shared/data/projectsFilter';
import { SliderItem } from '@components/Events/Events.styled';
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
import useTranslation from "next-translate/useTranslation";

const Projects: React.FC = () => {
    const { t, lang } = useTranslation('common');

    const [activeAnimation, setActiveAnimation] = useState({ hover: null });
    const onHover = (id) => {
        setActiveAnimation({ hover: id });
    };
    const onOut = () => {
        setActiveAnimation({ hover: null });
    };

    return (
        <ProjectsWrapper id="projects">
            <Container>
                <SectionTitle>{t('projects_title')}</SectionTitle>
                <ProjectsList>
                    {Object.keys(projects).map((projectId) => {
                        const project = projects[projectId];
                        const projectLink = `/projects/${projectId}`;

                        return (
                            <React.Fragment key={projectId}>
                                <ProjectWrapper>
                                    <Link
                                        scroll={false}
                                        href="/projects/[projectId]"
                                        as={projectLink}
                                    >
                                        <ProjectItem
                                            onMouseOver={() =>
                                                onHover(projectId)
                                            }
                                            onMouseOut={onOut}
                                        >
                                            <ItemImage>
                                                <Image
                                                    src={project.imagePath}
                                                />
                                            </ItemImage>
                                            <ItemContent>
                                                <ItemInfo>
                                                    <ItemInfoInner>
                                                        <ItemService>
                                                            {
                                                                categoryName[
                                                                    project
                                                                        .category
                                                                ]
                                                            }
                                                        </ItemService>
                                                        <ItemDate>
                                                            {project.date}
                                                        </ItemDate>
                                                    </ItemInfoInner>
                                                    <ItemLinkWrapper>
                                                        <ItemLink
                                                            activeAnimation={
                                                                activeAnimation.hover ===
                                                                projectId
                                                            }
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
                                                </ItemInfo>
                                                <ItemTitle>
                                                    {project.shortTitle}
                                                </ItemTitle>
                                                <ItemText>
                                                    {project.shortDescription}
                                                </ItemText>
                                            </ItemContent>
                                        </ProjectItem>
                                    </Link>
                                </ProjectWrapper>
                            </React.Fragment>
                        );
                    })}
                </ProjectsList>
                <Link scroll={false} href="/projects" as="/projects">
                    <ButtonWrapper>
                        <Button buttonType="PRIMARY" width={300}>
                            {t('projects_link')}
                        </Button>
                    </ButtonWrapper>
                </Link>
            </Container>
        </ProjectsWrapper>
    );
};

export default Projects;
