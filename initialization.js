const MOModel  = require( './modules/models/momodel')
const UploadedMOModel  = require( './modules/models/uploadedmomodel')
const ModelComponentModel  = require( './modules/models/modelcomponentmodel')

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('maintenance-order', '<dbuser>', '<dbpassword>', {
    host: '<dbhost>',
    dialect: 'postgres'  
});

/*const sequelize = new Sequelize('maintenance-order', 'nodeuser', 'rotikeju98', {
    host: 'localhost',
    dialect: 'postgres'  
});*/


class Initialization {
    static async initializeDatabase(){

        let force = false;

        MOModel.initialize(sequelize, force);

        UploadedMOModel.initialize(sequelize, force);

        ModelComponentModel.initialize(sequelize, force);

        await sequelize.sync();
    }
}

module.exports = Initialization



