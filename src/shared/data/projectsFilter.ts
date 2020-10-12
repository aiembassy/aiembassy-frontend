import projects from '@shared/data/projects';

export const categoryName = {
    research: 'Projekt badawczy',
};

export const filtersHeader = [
    { label: 'all', name: 'Wszystkie', isChecked: true },
].concat(
    Object.keys(categoryName).map((category) => ({
        label: category,
        name: categoryName[category],
        isChecked: false,
    })),
);

export const filtersList = Object.entries(projects).map(
    ([projectId, project]) => {
        return {
            id: projectId,
            filter: [project.category],
            category: [categoryName[project.category]],
            imageLink: project.imagePath,
            title: project.title,
            text: project.shortDescription,
            date: project.date,
            link: `/projects/${projectId}`,
        };
    },
);
