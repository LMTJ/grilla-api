module.exports = {
  mariadb: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'grilla',
    password: process.env.DB_PASSWORD || 'grilla',
    user: process.env.DB_USER || 'grilla',
    name: 'mariadb',
    connector: 'mysql'
  }
};
