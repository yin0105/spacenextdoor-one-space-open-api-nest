import { CityResponse } from './city.response'
import { CountryResponse } from './country.response'

export class AddressResponse {
  id: number
  street: string
  postal_code: string
  city: CityResponse
  country: CountryResponse
}
