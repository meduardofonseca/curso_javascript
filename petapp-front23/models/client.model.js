import db from '../db.js'
import {Model, DataTypes } from 'sequelize'

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    document: {
        type: DataTypes.STRING,
        allowNull: false

    }

},{sequelize: db, timestamp: false }) 

export default Client