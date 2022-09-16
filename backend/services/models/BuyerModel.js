import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Buyer = db.define('buyer', {
    name: DataTypes.STRING,
    telephone: DataTypes.BIGINT,
    address: DataTypes.STRING,
    firstPcs: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },
    secondPcs: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },
    bothPcs: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },
}, {
    freezeTableName: true
});

export default Buyer;

// (async () => {
//     await db.sync();
// })();