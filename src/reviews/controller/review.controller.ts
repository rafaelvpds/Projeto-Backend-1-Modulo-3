import { ReviewSrevice } from "../services/review.service"
import { StatusCode } from "../../utils/status.cade"
import { Response, Request } from "express"

export class ReviewController {
    constructor(private readonly reviewService: ReviewSrevice) { }

    async getAll(req: Request, res: Response) {
        const result = await this.reviewService.getAll();
        if (result == "unable to request the Database") {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }
        return res.status(StatusCode.OK).json(result)

    }
    async getById(req: Request, res: Response) {
        const { id } = req.params

        const result = await this.reviewService.getById(id)
        if (result == "unable to request the Database") {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }
        if (result == "invalid id on request, please submit a ObjectId") {
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }
        return res.status(StatusCode.OK).json(result)
    }
    async create(req: Request, res: Response) {
        const { body } = req
        const result = await this.reviewService.create(body)
        if (result == "unable to request the Database") {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }
        return res.status(StatusCode.CREATED).json(result);
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        const { body } = req

        const result = await this.reviewService.update(id, body)
        if (result == "unable to request the Database") {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result)
        }
        if (result == "invalid id on request, please submit a ObjectId") {
            return res.status(StatusCode.BAD_REQUEST).json(result)
        }
        return res.status(StatusCode.OK).json(result);
    }
}