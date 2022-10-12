export const config = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 1433,
        username: process.env.DB_USERNAME || 'workshop',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_DATABASE || 'workshop4',
        options: {"trustServerCertificate": true},
    },
    server: {
        port: process.env.APP_PORT || 3000,
    },
};
