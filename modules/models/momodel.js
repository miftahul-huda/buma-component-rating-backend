const { Model, DataTypes } = require('sequelize');

class MOModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            mo_number:  DataTypes.STRING,
            unit_code: DataTypes.STRING,
            model: DataTypes.STRING,
            ps_type: DataTypes.STRING,
            location: DataTypes.STRING,
            component: DataTypes.STRING,
            date: DataTypes.STRING,
            hour_meter: DataTypes.STRING,
            process_date: DataTypes.STRING,
            sync_date: DataTypes.STRING,
            rating: DataTypes.STRING,
            rating_ir: DataTypes.STRING,
            is_sync: DataTypes.INTEGER,
            is_closed: DataTypes.INTEGER,
            filename: DataTypes.STRING,
            component_processed: DataTypes.INTEGER
            
        }, 
        { sequelize, modelName: 'mo', tableName: 'mo', force: force });
    }
}

module.exports = MOModel;