module.exports = {
    async exportPathMap(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId },
    ) {
        return {
            '/': { page: '/' },
            '/contact': { page: '/contact' },
            '/help-us': { page: '/donation' },
            '/workshops': { page: '/workshops' },
            '/workshops/:workshopId': { page: '/workshops/[workshopId]' },
            '/landing/workshop-list': { page: '/landing/list' },
            '/events': { page: '/events' },
            '/events/:eventId': {
                page: '/events/[eventId]',
            },
            '/projects': { page: '/projects' },
            '/projects/:projectId': {
                page: '/projects/[projectId]',
            },
        };
    },
};
