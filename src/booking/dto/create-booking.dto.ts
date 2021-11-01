import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'
import { Mutation_RootAddNewBookingArgs } from '../../graphql/types'

export class CreateBookingDto implements Mutation_RootAddNewBookingArgs {
  @ApiProperty()
  @IsBoolean()
  auto_renewal: boolean

  @ApiProperty()
  @IsNumber()
  building_id: number

  @ApiProperty()
  @IsNumber()
  unit_subtype_id: number

  @ApiProperty()
  @IsNumber()
  customer_id: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  promotion_id?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  promo_code?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  insurance_id?: number

  @ApiProperty()
  @IsBoolean()
  is_insured: boolean

  @ApiProperty()
  @IsDateString()
  move_in_date: Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  move_out_date?: Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  deposit_payment_method_id?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  rent_payment_method_id?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  prepaid_months?: number

  @ApiProperty()
  @IsBoolean()
  is_prepaid: boolean

  @ApiProperty()
  @IsBoolean()
  has_admin_fee: boolean

  @ApiProperty()
  @IsString()
  contact_number: string

  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsNumber()
  unit_id: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  custom_price?: number
}
