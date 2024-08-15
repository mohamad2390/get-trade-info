const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API for size_check',
            version: '1.0.0',
            description: 'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
            license: {
                name: 'Licensed Under MIT',
                url: 'https://spdx.org/licenses/MIT.html',

            },
            contact: {
                name: 'size_check',
                url: 'http://192.168.10.234',
                email: "info@size_check"
            },
            host: "http://192.168.10.234",
            basePath: '/api',
            schemes: [
                "http",
                "https"
            ],

        },
        components: {
        },
        security: [
            {}
        ],
        tags: [
            {
                "name": "Size-controller",
                "description": "base route for UserController:/user"
            }
        ],
        servers: [{
            url: 'http://localhost:5000',
            description: 'Server',
        }, ],
    },
    apis: [
        './routes/api/*.js',
    ],

};
module.exports = options