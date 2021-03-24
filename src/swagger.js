const { Estadio, EstadioCreate } = 
    require('../app/documentation/Estadio');

module.exports = {
    info: {
        version: '1.1.1',
        title: 'API do Brasileirão',
        description: 'Api de times do Brasileirão',        
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        JWT: {
            description: 'JWT Token',
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
        },
    },
    definitions: {
        Estadio,
        ListaDeEstadios: [
            Estadio
        ],
        EstadioCreate,
    }
}