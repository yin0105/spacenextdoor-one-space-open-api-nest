export const GET_CONTACT = `
    query getContact($email: String) {
        customers(where: {email: {_eq: $email}}) {
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

export const GET_UNIT = `
    query GetUnit($unit_type_id: Int!, $building_id: Int!, $duration: Int!) {
        units(where: {unit_subtype: {unit_type_id: {_eq: $unit_type_id}, _and: {building_id: {_eq: $building_id}}}, _and: {min_rent_days: {_lte: $duration}}}, order_by: {unit_subtype: {price_per_month: asc}}, limit: 1) {
            id
            unit_subtype {
                unit_type_id
                building_id
                price_per_month
                id
                building {
                    company_id
                }
            }
            unit_subtype_id
            name_en
            name_th
            description_en
            description_th
            availability_status
            access_status
            min_rent_days
            status
        }
    }
`

export const GET_KANBAN_STAGE = `
    query GetKanbanStage($company_id: Int!) {
        kanban_stages(where: {company_id: {_eq: $company_id}}) {
            id
        }
    }
`

export const GET_PROMOTION = `
    query GetPromotion($start_date: timestamptz, $end_date: timestamptz) {
        promotions(where: {end_date: {_gt: $start_date}, _and: {start_date: {_lt: $end_date}}}, limit: 1) {
            id
        }
    }
  
`
