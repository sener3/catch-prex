export {}

declare global {
    interface IError {
        code: number
        message: string
    }
}
