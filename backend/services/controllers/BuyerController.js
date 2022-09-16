import Buyer from "../models/BuyerModel.js";

export const getBuyers = async(req, res) =>{
    try {
        const response = await Buyer.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBuyerById = async(req, res) =>{
    try {
        const response = await Buyer.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBuyer = async(req, res) =>{
    try {
        await Buyer.create(req.body);
        res.status(201).json({msg: "Buyer Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBuyer = async(req, res) =>{
    try {
        await Buyer.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Buyer Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBuyer = async(req, res) =>{
    try {
        await Buyer.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Buyer Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}