import { Sequelize } from "sequelize";

export const database = new Sequelize({
    "database": "vue-viva",
    "username": "postgres",
    "password": "Postgres2019!",
    "dialect": "postgres",
    "host":"172.19.0.3",
    "port":5432
});