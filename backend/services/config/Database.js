import {Sequelize} from "sequelize";

const db = new Sequelize('ads_project','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;