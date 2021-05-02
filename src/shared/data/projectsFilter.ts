import projects from '@shared/data/projects';

export const filtersHeader = (lang) =>
    Object.keys(projects[lang]).map((projectId) => {
        const project = projects[lang][projectId];
        return {
            label: project.category,
            name: project.category,
            isChecked: true,
        };
    });

export const filtersList = (lang) =>
    Object.entries(projects[lang]).map(([projectId, project]) => {
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
    });
