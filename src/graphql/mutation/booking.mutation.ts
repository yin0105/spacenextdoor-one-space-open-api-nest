import { gql } from '@apollo/client/core'

export const BOOKING_RESPONSE_FRAGMENT = gql`
  fragment BookingsFragment on BookingResponse {
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

export const ADD_BOOKING_MUTATION = gql`
  ${BOOKING_RESPONSE_FRAGMENT}
  mutation addBooking(
    $auto_renewal: Boolean!
    $building_id: Int!
    $unit_subtype_id: Int!
    $custom_price: float8
    $customer_id: Int!
    $promotion_id: Int
    $promo_code: String
    $insurance_id: Int
    $is_insured: Boolean!
    $move_in_date: timestamptz!
    $move_out_date: timestamptz
    $deposit_payment_method_id: Int
    $rent_payment_method_id: Int
    $prepaid_months: Int
    $is_prepaid: Boolean!
    $has_admin_fee: Boolean!
    $contact_number: String!
    $email: String!
    $unit_id: Int!
  ) {
    AddNewBooking(
      auto_renewal: $auto_renewal
      building_id: $building_id
      unit_subtype_id: $unit_subtype_id
      custom_price: $custom_price
      customer_id: $customer_id
      promotion_id: $promotion_id
      promo_code: $promo_code
      insurance_id: $insurance_id
      is_insured: $is_insured
      move_in_date: $move_in_date
      move_out_date: $move_out_date
      deposit_payment_method_id: $deposit_payment_method_id
      rent_payment_method_id: $rent_payment_method_id
      prepaid_months: $prepaid_months
      is_prepaid: $is_prepaid
      has_admin_fee: $has_admin_fee
      contact_number: $contact_number
      email: $email
      unit_id: $unit_id
    ) {
      ...BookingsFragment
    }
  }
`
