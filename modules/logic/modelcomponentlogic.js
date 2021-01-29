const ModelComponentModel  = require( '../models/modelcomponentmodel')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class ModelComponentLogic {


    static async total()
    {
        try {
            let total = await ModelComponentModel.count();
            return { success: true, payload: total };;
        } catch (e) {
            throw { success: false, message: '', error: e };
        }
    }

    static async create(mo)
    {
        let result = this.validateCreate(mo);
        if(result.success){
            try {
                let newmo = await ModelComponentModel.create(mo);
                result.payload = newmo;
                return  result;
            }
            catch(error)
            {
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }

    }

    static async findAll()
    {
        try{
            let mos  = await ModelComponentModel.findAll()
            return { success: true, payload: mos }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByModel(modelName)
    {
        try{
            let mos  = await ModelComponentModel.findAll({
                where: {
                    model: {
                        [Op.like] : '%' + modelName + '%'
                    }
                }
            })
            return { success: true, payload: mos }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByModelAndPsType(modelName, psType)
    {
        try{
            let mos  = await ModelComponentModel.findAll({
                where: {
                    [Op.and]:
                    {
                        model: {
                            [Op.like] : '%' + modelName + '%'
                        },
                        pstype: {
                            [Op.like] : '%' + psType + '%'
                        }
                    }

                }
            })
            return { success: true, payload: mos }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findByKeyword(search)
    {
        try{
            let mos  = await MOModel.findAll({
                where: {
                    [Op.or] : [
                        {model: { [Op.like] : '%' + search + '%' }},
                        {component: { [Op.like] : '%' + search + '%' }}
                    ]

                }
            })
            return { success: true, payload: mos }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async get(id)
    {
        try{
            let mo  = await ModelComponentModel.findByPk(id);

            return { success: true, payload: mo }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async update(id,  mo)
    {
        let result = this.validate(mo);
        if(result.success){
            try {
                let newmo = await ModelComponentModel.update(mo, { where:  { id: id }  });
                result.payload = newmo;
                return  result;
            }
            catch(error)
            {
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }

    }



    static async delete(id)
    {
        try{
            let result = await ModelComponentModel.destroy({
                where:
                {
                    id: id
                }
            });
            return { success: true, payload: result }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static validateCreate(mo){
        
        return this.validate(mo);
    }

    static validate(mo)
    {   
        return {success :  true, message: "Succesfull"}
    }
}

module.exports = ModelComponentLogic;