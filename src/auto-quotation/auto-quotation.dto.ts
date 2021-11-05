export class AutoQuotationInputDto {
  username: string
  email: string
  contact_number: string
  building_id: number
  unit_type_id: number
  duration: number
  lead_origin: string
  notes: string
}

export class CustomerDto {
  id: string
  first_name: string
  last_name: string
  email: string
  contact_number: string
  lead_origin: string
  rental_purpose: string
}
