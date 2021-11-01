import { gql } from '@apollo/client/core'

export const BOOKINGS_FRAGMENT = gql`
  fragment BookingsFragment on bookings {
    id
    move_in_date
    move_out_date
    is_prepaid
    prepaid_months
    base_amount
    deposit_amount
    sub_total_amount
    discounted_amount
    insurance_amount
    total_amount
    currency_id
    insurance_id
    customer_id
    total_rent_tax_amount
    total_insurance_tax_amount
  }
`

export const GET_BOOKINGS_QUERY = gql`
  ${BOOKINGS_FRAGMENT}
  query GetBookingsWithMoveOutDate(
    $move_in_date: timestamptz
    $move_out_date: timestamptz
    $company_id: Int!
    $unit_subtype_id: Int!
  ) {
    bookings(
      where: {
        unit_subtype_id: { _eq: $unit_subtype_id }
        status: { _in: ["RESERVED", "CONFIRMED", "ACTIVE"] }
        company_id: { _eq: $company_id }
        _or: [
          {
            _and: [
              { move_out_date: { _is_null: true } }
              { move_in_date: { _lt: $move_in_date } }
            ]
          }
          {
            _and: [
              { move_out_date: { _is_null: true } }
              { move_in_date: { _lt: $move_out_date } }
            ]
          }
          {
            _and: [
              { move_out_date: { _gte: $move_in_date } }
              { move_in_date: { _gte: $move_in_date } }
            ]
          }
          {
            _and: [
              { move_in_date: { _gte: $move_out_date } }
              { move_out_date: { _gte: $move_out_date } }
            ]
          }
        ]
      }
    ) {
      ...BookingsFragment
    }
  }
`
