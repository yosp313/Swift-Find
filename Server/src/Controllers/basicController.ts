import { Request, Response } from "express"

export const basicController =  (req: Request, res:Response) =>{
    res.send("Hello From TS")
}