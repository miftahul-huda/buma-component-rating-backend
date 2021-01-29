const { Model, DataTypes } = require('sequelize');

class ModelComponentModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            model:  DataTypes.STRING,
            pstype: DataTypes.STRING,
            component: DataTypes.STRING,
            manual: DataTypes.INTEGER
        }, 
        { sequelize, modelName: 'modelcomponent', tableName: 'modelcomponent', force: force });
    }
}

module.exports = ModelComponentModel;