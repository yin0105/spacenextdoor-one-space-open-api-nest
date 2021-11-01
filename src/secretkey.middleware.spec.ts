import { HttpService } from '@nestjs/common'
import { SecretkeyMiddleware } from './secretkey.middleware'

describe('SecretkeyMiddleware', () => {
  it('should be defined', () => {
    expect(new SecretkeyMiddleware(new HttpService())).toBeDefined()
  })
})
