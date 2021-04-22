// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
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
});
