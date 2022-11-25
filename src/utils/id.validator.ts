import { Types } from "mongoose"

export function isValidad(id: string): boolean {
    return Types.ObjectId.isValid(id)
}