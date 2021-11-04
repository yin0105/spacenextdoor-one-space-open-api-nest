import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AutoquotationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const username = req.body.username
    const email = req.body.email
    const contactNumber = req.body.contactNumber
    const storeLocation = req.body.storeLocation
    const unitType = req.body.unitType
    const duration = req.body.duration
    const leadOrigin = req.body.leadOrigin
    const notes = req.body.notes

    if (
      !username ||
      !email ||
      !contactNumber ||
      !storeLocation ||
      !unitType ||
      !duration ||
      !leadOrigin ||
      !notes
    ) {
      throw new BadRequestException()
    }
    next()
  }
}
