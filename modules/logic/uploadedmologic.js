const UploadedMOModel  = require( '../models/uploadedmomodel')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");



class UploadedMOLogic {

    static async create(mo)
    {
        let result = this.validateCreate(mo);
        if(result.success){
            try {
                let newmo = await UploadedMOModel.create(mo);
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
            let mos  = await UploadedMOModel.findAll({
                order:[
                    ['id', 'DESC']
                ]
            });

            console.log(mos);
            
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
            let mos  = await UploadedMOModel.findAll({
                where: {
                    [Op.or] : [
                        {mo_number: { [Op.like] : '%' + search + '%' }},
                        {unit_code: { [Op.like] : '%' + search + '%' }}
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
            let mo  = await UploadedMOModel.findByPk(id);

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
                let newmo = await UploadedMOModel.update(mo, { where:  { id: id }  });
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
            let result = await UploadedMOModel.destroy({
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

module.exports = UploadedMOLogic;