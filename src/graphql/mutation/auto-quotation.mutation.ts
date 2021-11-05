export const INSERT_CONTACT = `
    mutation InsertCustomerOne(
        $first_name: String, 
        $last_name: String, 
        $email: String, 
        $contact_number: String, 
        $lead_origin: String, 
        $rental_purpose: String, 
    ) {
        insert_customers_one(object: {
            first_name: $first_name
            last_name: $last_name
            email: $email
            contact_number: $contact_number
            lead_origin: $lead_origin
            rental_purpose: $rental_purpose
        }){
            id
            first_name
            last_name
            email
            contact_number
            lead_origin
            rental_purpose      
        }
    }
`

export const INSERT_DEAL = `
    mutation InsertDealOne ($company_id: Int!, $customer_id: Int!) {
        insert_deals_one(object: {company_id: $company_id, customer_id: $customer_id, status: "OPEN"}) {
            id
        }
    }
`

export const CREATE_QUOTATION = `
    mutation InsertQuotationOne(
        $due_date: timestamptz,
        $deal_id: Int,
        $company_id: Int,
        $building_id: Int,
        $unit_subtype_id: Int,
        $customer_id: Int,
        $move_in_date: timestamptz,
        $promotion_id: Int
    ) {
        insert_quotations_one(object: {due_date: $due_date, deal_id: $deal_id, company_id: $company_id, status: "PENDING", building_id: $building_id, unit_subtype_id: $unit_subtype_id, customer_id: $customer_id, move_in_date: $move_in_date, promotion_id: $promotion_id}) {
            id
        }
    }
`
