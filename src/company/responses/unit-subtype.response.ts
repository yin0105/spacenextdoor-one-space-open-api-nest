import { CurrencyResponse } from './currency.response'

export class UnitSubtypeResponse {
  id: number
  area: number
  width: number
  height: number
  length: number
  total_units: number
  price_per_month: number
  available_for_rent: number
  currency: CurrencyResponse
  units: []
}
