import type { NextFunction, Request, Response } from "express"

import PrismaError from "@models/PrismaError"

import {
    KNOWN_REQUEST_ERROR,
    UNKNOW_REQUEST_ERROR,
    RUST_PANIC_ERROR,
    INITIALIZATION_ERROR,
    VALIDATION_ERROR,
} from "@constants/prisma-errors"
import { HttpCode } from "@constants/enums"

const catchPrex = (error: Error | any, req: Request, res: Response, next: NextFunction) => {
    const prismaError = new PrismaError()

    switch (error.constructor) {
        case KNOWN_REQUEST_ERROR:
            if (error.code === "P2021") {
                prismaError.setMessage(`Table doesn't exist. Please create it`)
            }
            if (error.code === "P2002") {
                prismaError.setCode(HttpCode.BAD_REQUEST)
                prismaError.setMessage(`Unique constraint failed`)
            }
            break
        case UNKNOW_REQUEST_ERROR:
            break
        case RUST_PANIC_ERROR:
            break
        case INITIALIZATION_ERROR:
            prismaError.setMessage(`Database doesn't exist. Please create it`)
            break
        case VALIDATION_ERROR:
            prismaError.setCode(HttpCode.BAD_REQUEST)
            prismaError.setMessage(`Validation failed. Got an invalid type`)
            break
        default:
            break
    }
    return res.status(prismaError.getCode()).json({ prismaError })
}

export default catchPrex
