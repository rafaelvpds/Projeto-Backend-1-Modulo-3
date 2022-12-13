import { ReviewSrevice } from "../services/review.service";
import { StatusCode } from "../../utils/status.cade";
import { Response, Request } from "express";
import { invalidBody } from "../utils/review.body.validator";
import { invalidBodyError } from "../../utils/error.handler";

export class ReviewController {
  constructor(private readonly reviewService: ReviewSrevice) {}

  async getAll(req: Request, res: Response) {
    const result = await this.reviewService.getAll();
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }
    return res.status(StatusCode.OK).json(result);
  }
  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.reviewService.getById(id);
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }
    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }
    return res.status(StatusCode.OK).json(result);
  }
  async create(req: Request, res: Response) {
    if (invalidBody(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }
    const { body } = req;

    const result = await this.reviewService.create(body);
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }
    return res.status(StatusCode.CREATED).json(result);
  }
  async update(req: Request, res: Response) {
    if (invalidBody(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }
    const { id } = req.params;
    const { body } = req;

    const result = await this.reviewService.update(id, body);
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }
    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }
    return res.status(StatusCode.OK).json(result);
  }
}
