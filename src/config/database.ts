import { Sequelize } from "sequelize";

export const database = new Sequelize({
    "database": "vue-viva",
    "username": "postgres",
    "password": "postgres",
    "dialect": "postgres",
    "host":"172.22.0.2",
    "port":5432
});