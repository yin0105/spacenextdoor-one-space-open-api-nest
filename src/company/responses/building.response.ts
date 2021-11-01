import { AddressResponse } from './address.response'
import { UnitSubtypeResponse } from './unit-subtype.response'
export class BuildingResponse {
  id: number
  name_en: string
  name_th: string
  contact_name: string
  contact_number: string
  address: AddressResponse
  unit_subtypes: UnitSubtypeResponse[]
}
