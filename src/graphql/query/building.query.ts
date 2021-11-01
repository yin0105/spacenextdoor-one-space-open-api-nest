import { gql } from '@apollo/client/core'

export const GET_BUILDING_INVENTORY_QUERY = gql`
  query BuildingInventory($companyId: Int!) {
    buildings(where: { company_id: { _eq: $companyId } }) {
      id
      name_en
      name_th
      contact_name
      contact_number
      address {
        id
        street
        postal_code
        city {
          id
          name_en
          name_th
        }
        country {
          id
          name_en
          name_th
        }
      }
      unit_subtypes {
        id
        area
        width
        height
        length
        measurement_unit
        total_units
        units(
          where: {
            availability_status: { _eq: "VACANT" }
            status: { _eq: "ACTIVE" }
          }
        ) {
          id
        }
        price_per_month
        currency {
          code
        }
      }
    }
  }
`

export const GET_BUILDING_QUERY = gql`
  query getBuilding($id: Int!) {
    buildings(where: { id: { _eq: $id } }) {
      name_th
      name_en
      status
      contact_number
      contact_name
      company_id
      address {
        street
        postal_code
        country_id
        city_id
        latitude
        longitude
      }
    }
  }
`
