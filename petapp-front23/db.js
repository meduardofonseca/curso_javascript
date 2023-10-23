import { Sequelize } from "sequelize";

const dbName = 'devpet';
const dbUser = 'aluno';
const dbPass = 'aluno123';
const dbHost = '127.0.0.1';
const dbPort = 3306;

const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql'
});

export default db