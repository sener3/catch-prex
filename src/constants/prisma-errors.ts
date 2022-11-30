import { Prisma } from "generated/prisma"

const {
    PrismaClientRustPanicError,
    PrismaClientValidationError,
    PrismaClientKnownRequestError,
    PrismaClientInitializationError,
    PrismaClientUnknownRequestError,
} = Prisma

export {
    PrismaClientRustPanicError as RUST_PANIC_ERROR,
    PrismaClientValidationError as VALIDATION_ERROR,
    PrismaClientKnownRequestError as KNOWN_REQUEST_ERROR,
    PrismaClientUnknownRequestError as UNKNOW_REQUEST_ERROR,
    PrismaClientInitializationError as INITIALIZATION_ERROR,
}
