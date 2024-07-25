import { Request,Response } from "express";
import CategoryModel from '../models/category.model';


export default{
    async create(req: Request, res: Response){
        try {
            const result = await CategoryModel.create(req.body)
            res.status(201).json({
                data:result,
                message:"Succes create category"
            });
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data: err.message,
                message:"Failed create category"
            })
        }
    },
    
    async findAll(req: Request, res: Response) {
        try {
          const result = await CategoryModel.find();
          res.status(200).json({
            data: result,
            message: "Success get all products",
          });
        } catch (error) {
          const err = error as Error;
          res.status(500).json({
            data: err.message,
            message: "Failed get all products",
          });
        }
      },
      async findOne(req: Request, res: Response){
        try {
            const result = await CategoryModel.findOne({
                _id: req.params.id
            })
            res.status(200).json({
                data:result,
                message:"Succes get one category"
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
            data: err.message,
            message: "Failed get one category",
        });
        }
      },
      async update(req: Request, res: Response) {
        try {
          const result = await CategoryModel.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
              new: true,
            }
          );
    
          res.status(200).json({
            data: result,
            message: "Success update product",
          });
        } catch (error) {
          const err = error as Error;
          res.status(500).json({
            data: err.message,
            message: "Failed update product",
          });
        }
      },
      async delete(req: Request, res: Response) {
        try {
          const result = await CategoryModel.findOneAndDelete({
            _id: req.params.id,
          });
    
          res.status(200).json({
            data: result,
            message: "Success delete product",
          });
        } catch (error) {
          const err = error as Error;
          res.status(500).json({
            data: err.message,
            message: "Failed delete product",
          });
        }
      },
}