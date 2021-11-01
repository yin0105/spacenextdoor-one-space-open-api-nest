import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsDate, IsNumberString, IsOptional } from 'class-validator'

export class FilterBookingQuery {
  @ApiProperty()
  @IsNumberString()
  company_id: string

  @ApiProperty()
  @IsNumberString()
  unit_subtype_id: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  move_in_date?: Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  move_out_date?: Date
}
