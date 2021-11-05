import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AutoquotationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const username = req.body.username
    const email = req.body.email
    const contact_number = req.body.contact_number
    const building_id = req.body.building_id
    const unit_type_id = req.body.unit_type_id
    const duration = req.body.duration
    const lead_origin = req.body.lead_origin
    const notes = req.body.notes

    if (
      !username ||
      !email ||
      !contact_number ||
      !building_id ||
      !unit_type_id ||
      !duration ||
      !lead_origin ||
      !notes
    ) {
      throw new BadRequestException()
    }
    next()
  }
}
