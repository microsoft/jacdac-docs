module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run docsserve',
            url: ['http://localhost:9000/'],
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};