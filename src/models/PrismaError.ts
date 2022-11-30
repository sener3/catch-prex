import { HttpCode } from "@constants/enums"

export default class PrismaError {
    private code: number
    private message: string

    constructor() {
        this.code = HttpCode.INTERNAL_SERVER_ERROR
        this.message = "Something went wrong!"
    }

    public setMessage(message: string) {
        this.message = message || "Something went wrong!"
    }

    public getMessage() {
        return this.message
    }

    public setCode(code: number) {
        this.code = code || HttpCode.INTERNAL_SERVER_ERROR
    }

    public getCode() {
        return this.code
    }
}
