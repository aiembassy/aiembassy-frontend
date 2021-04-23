import projects from '@shared/data/projects';

export const filtersHeader = Object.keys(projects).map((projectId) => {
    const project = projects[projectId];
    return {
        label: project.category,
        name: project.category,
        isChecked: true,
    };
});

export const filtersList = Object.entries(projects).map(
    ([projectId, project]) => {
        return {
            id: projectId,
            filter: [project.category],
            category: [project.category],
            imageLink: project.imagePath,
            title: project.title,
            text: project.shortDescription,
            date: project.date,
            link: `/projects/${projectId}`,
        };
    },
);
