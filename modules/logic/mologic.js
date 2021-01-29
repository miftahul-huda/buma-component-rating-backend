const MOModel  = require( '../models/momodel')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class MOLogic {

    static async create(mo)
    {
        let result = this.validateCreate(mo);
        if(result.success){
            try {
                let newmo = await MOModel.create(mo);
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

    static async getTotalAll()
    {
        try{
            let total  = await MOModel.count();
            return { success: true, payload: total }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }        
    }

    static async findAll()
    {
        try{
            let mos  = await MOModel.findAll({
                where:{
                    is_closed:0
                },
                order:[
                    ['date', 'DESC']
                ]
            })
            return { success: true, payload: mos }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async totalNotClosedByLocation(location)
    {
        try{
            let mos  = await MOModel.count({
                where:{
                    [Op.and] :
                    {
                        is_closed: 0,
                        location: location
                    }
                    
                },
                order:[
                    ['date', 'DESC']
                ]
            })
            return { success: true, payload: mos }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async findNotClosedByLocation(location)
    {
        try{
            let mos  = await MOModel.findAll({
                where:{
                    [Op.and]:
                    {
                        location: location,
                        is_closed: 0
                    }
                },
                order:[
                    ['date', 'DESC']
                ]
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
            let mo  = await MOModel.findByPk(id);

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
                let newmo = await MOModel.update(mo, { where:  { id: id }  });
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


    static async updateSync(id,  sync)
    {
        let result = { success: true}
        console.log("sync")
        console.log(sync)
        if(result.success){
            try {
                let newmo = await MOModel.update({is_sync: parseInt(sync)}, { where:  { id: id }  });
                result.payload = newmo;
                return  result;
            }
            catch(error)
            {
                console.log(error);
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }
    }

    static async updateClosed(monumber,  is_processed)
    {
        let result = { success: true}
        console.log("closed")
        console.log(is_processed)
        if(result.success){
            try {
                let newmo = await MOModel.update({is_closed: parseInt(is_processed)}, { where:  { mo_number: monumber }  });
                result.payload = newmo;
                return  result;
            }
            catch(error)
            {
                console.log(error);
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
            let result = await MOModel.destroy({
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

module.exports = MOLogic;