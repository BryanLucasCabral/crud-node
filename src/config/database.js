module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'crud-node',
    username: 'postgres',
    password: 'admin',
    define: {
        timestamp: true,
        undescored: true,
    }
}