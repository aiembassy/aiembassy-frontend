import React from 'react';
import { Container } from '@shared/styles/global.styled';
import Button from '@components/_universal/Button/Button';
import Link from 'next/link';
import projects from '@shared/data/projects';
import { categoryName } from '@shared/data/projectsFilter';
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
                    {Object.keys(projects).map((projectId) => {
                        const project = projects[projectId];
                        const projectLink = `/projects/${projectId}`;

                        return (
                            <React.Fragment key={projectId}>
                                <ProjectWrapper>
                                    <ProjectItem>
                                        <ItemImage>
                                            <Image src={project.imagePath} />
                                        </ItemImage>
                                        <ItemContent>
                                            <ItemInfo>
                                                <ItemInfoInner>
                                                    <ItemService>
                                                        {
                                                            categoryName[
                                                                project.category
                                                            ]
                                                        }
                                                    </ItemService>
                                                    <ItemDate>
                                                        {project.date}
                                                    </ItemDate>
                                                </ItemInfoInner>
                                                <Link
                                                    scroll={false}
                                                    href="/projects/[projectId]"
                                                    as={projectLink}
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
                                            <ItemTitle>
                                                {project.shortTitle}
                                            </ItemTitle>
                                            <ItemText>
                                                {project.shortDescription}
                                            </ItemText>
                                        </ItemContent>
                                    </ProjectItem>
                                </ProjectWrapper>
                                {/* <ProjectWrapper key={projectId}> */}
                                {/*    <ProjectItem> */}
                                {/*        <ItemImage> */}
                                {/*            <Image src={project.imagePath} /> */}
                                {/*        </ItemImage> */}
                                {/*        <ItemContent> */}
                                {/*            <ItemInfo> */}
                                {/*                <ItemInfoInner> */}
                                {/*                    <ItemService> */}
                                {/*                        { */}
                                {/*                            categoryName[ */}
                                {/*                                project.category */}
                                {/*                            ] */}
                                {/*                        } */}
                                {/*                    </ItemService> */}
                                {/*                    <ItemDate> */}
                                {/*                        {project.date} */}
                                {/*                    </ItemDate> */}
                                {/*                </ItemInfoInner> */}
                                {/*                <Link */}
                                {/*                    scroll={false} */}
                                {/*                    href="/projects/[projectId]" */}
                                {/*                    as={projectLink} */}
                                {/*                > */}
                                {/*                    <ItemLinkWrapper> */}
                                {/*                        <ItemLink */}
                                {/*                            buttonType="TRANSPARENT" */}
                                {/*                            iconType="IconArrowRight" */}
                                {/*                            iconSize={20} */}
                                {/*                            iconActiveColor={[ */}
                                {/*                                'green_hover', */}
                                {/*                            ]} */}
                                {/*                            noPadding */}
                                {/*                        > */}
                                {/*                            więcej */}
                                {/*                        </ItemLink> */}
                                {/*                    </ItemLinkWrapper> */}
                                {/*                </Link> */}
                                {/*            </ItemInfo> */}
                                {/*            <ItemTitle> */}
                                {/*                {project.shortTitle} */}
                                {/*            </ItemTitle> */}
                                {/*            <ItemText> */}
                                {/*                {project.shortDescription} */}
                                {/*            </ItemText> */}
                                {/*        </ItemContent> */}
                                {/*    </ProjectItem> */}
                                {/* </ProjectWrapper> */}
                                {/* <ProjectWrapper key={projectId}> */}
                                {/*    <ProjectItem> */}
                                {/*        <ItemImage> */}
                                {/*            <Image src={project.imagePath} /> */}
                                {/*        </ItemImage> */}
                                {/*        <ItemContent> */}
                                {/*            <ItemInfo> */}
                                {/*                <ItemInfoInner> */}
                                {/*                    <ItemService> */}
                                {/*                        { */}
                                {/*                            categoryName[ */}
                                {/*                                project.category */}
                                {/*                            ] */}
                                {/*                        } */}
                                {/*                    </ItemService> */}
                                {/*                    <ItemDate> */}
                                {/*                        {project.date} */}
                                {/*                    </ItemDate> */}
                                {/*                </ItemInfoInner> */}
                                {/*                <Link */}
                                {/*                    scroll={false} */}
                                {/*                    href="/projects/[projectId]" */}
                                {/*                    as={projectLink} */}
                                {/*                > */}
                                {/*                    <ItemLinkWrapper> */}
                                {/*                        <ItemLink */}
                                {/*                            buttonType="TRANSPARENT" */}
                                {/*                            iconType="IconArrowRight" */}
                                {/*                            iconSize={20} */}
                                {/*                            iconActiveColor={[ */}
                                {/*                                'green_hover', */}
                                {/*                            ]} */}
                                {/*                            noPadding */}
                                {/*                        > */}
                                {/*                            więcej */}
                                {/*                        </ItemLink> */}
                                {/*                    </ItemLinkWrapper> */}
                                {/*                </Link> */}
                                {/*            </ItemInfo> */}
                                {/*            <ItemTitle> */}
                                {/*                {project.shortTitle} */}
                                {/*            </ItemTitle> */}
                                {/*            <ItemText> */}
                                {/*                {project.shortDescription} */}
                                {/*            </ItemText> */}
                                {/*        </ItemContent> */}
                                {/*    </ProjectItem> */}
                                {/* </ProjectWrapper> */}
                            </React.Fragment>
                        );
                    })}
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
