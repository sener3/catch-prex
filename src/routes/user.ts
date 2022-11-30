import { HttpCode } from "@constants/enums"
import { Router, Request, Response, NextFunction } from "express"

import db from "lib/database"

const userRouter = Router()

userRouter.get("/users", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await db.user.findMany({})

        return res.status(HttpCode.OK).json({ users })
    } catch (e) {
        next(e)
    }
})

userRouter.post("/user/create", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await db.user.create({
            data: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
            },
        })
        return res.status(HttpCode.OK).json({ user })
    } catch (e) {
        next(e)
    }
})

export default userRouter
