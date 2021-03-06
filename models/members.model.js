import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Member = sequelize.define('customer', {
    CustomerId: {
        primaryKey: true,
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Cname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Phone_no: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    sequelize,
    tableName: "customer",
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "CustomerId" }
        ]
    }]
})

export default Member; 