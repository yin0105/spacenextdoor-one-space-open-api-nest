export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  _varchar: any
  enum_availability_status: any
  enum_bookings_status: any
  enum_feature_type: any
  enum_measurement_unit: any
  enum_promotions_customer_buys_type: any
  enum_promotions_customer_gets_for_type: any
  enum_promotions_customer_gets_type: any
  enum_promotions_format: any
  enum_promotions_status: any
  enum_renewals_status: any
  enum_renewals_type: any
  enum_tax_status: any
  enum_tax_type: any
  enum_terminations_payment_status: any
  enum_terminations_status: any
  enum_transactions_type: any
  float8: any
  json: any
  listing_statuses: any
  resource_types: any
  timestamp: any
  timestamptz: any
  type_roles: any
  uuid: any
}

export type AccountsReceiveableResp = {
  __typename?: 'AccountsReceiveableResp'
  begining_balance?: Maybe<Scalars['Int']>
  building_id: Scalars['Int']
  company?: Maybe<Scalars['String']>
  dLease?: Maybe<Scalars['timestamptz']>
  dmoveOutDate?: Maybe<Scalars['timestamptz']>
  ending_balance?: Maybe<Scalars['Int']>
  payments?: Maybe<Scalars['Int']>
  rentCharge?: Maybe<Scalars['Int']>
  tenant?: Maybe<Scalars['String']>
  unitName?: Maybe<Scalars['String']>
}

export enum ActivityLogType {
  Billing = 'BILLING',
  Reservation = 'RESERVATION',
  Transaction = 'TRANSACTION',
  Unit = 'UNIT',
}

export type AttachedFile = {
  content: Scalars['String']
  contentId: Scalars['String']
  disposition: Scalars['String']
  filename: Scalars['String']
  type: Scalars['String']
}

export type BookingResponse = {
  __typename?: 'BookingResponse'
  base_amount: Scalars['float8']
  bookingsHistories?: Maybe<Array<Maybe<Bookings_History>>>
  bookingsPromotions?: Maybe<Array<Maybe<Bookings_Promotions>>>
  currency?: Maybe<Currencies>
  currency_id: Scalars['Int']
  customer?: Maybe<Customers>
  customer_id: Scalars['Int']
  deposit_amount: Scalars['float8']
  discounted_amount?: Maybe<Scalars['float8']>
  id: Scalars['Int']
  insurance?: Maybe<Insurances>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  is_prepaid: Scalars['Boolean']
  move_in_date: Scalars['timestamptz']
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  sub_total_amount: Scalars['float8']
  total_amount: Scalars['float8']
  total_insurance_tax_amount: Scalars['float8']
  total_rent_tax_amount: Scalars['float8']
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export type CalculateTerminationDuesResp = {
  __typename?: 'CalculateTerminationDuesResp'
  currency: Scalars['String']
  currency_sign: Scalars['String']
  failed_renewals_amount: Scalars['Float']
  move_out_date: Scalars['Date']
  notice_period_amount: Scalars['Float']
  promotion_amount: Scalars['Float']
  remaining_days_amount: Scalars['Float']
  termination_date: Scalars['Date']
  total_amount: Scalars['Float']
}

export type CustomerBuys = {
  __typename?: 'CustomerBuys'
  id: Scalars['Int']
  type: PromotionBuyTypes
  value: Scalars['Int']
}

export type FileUploadResponse = {
  __typename?: 'FileUploadResponse'
  bucketUrl: Scalars['String']
  files: Scalars['json']
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

export type JsonWebToken = {
  __typename?: 'JsonWebToken'
  token: Scalars['String']
}

export type NotificationResponse = {
  __typename?: 'NotificationResponse'
  isSent: Scalars['Boolean']
}

export enum NotificationType {
  Email = 'EMAIL',
  Sms = 'SMS',
}

/** Promotions */
export enum PromotionBuyTypes {
  MinDays = 'MIN_DAYS',
  MinPrice = 'MIN_PRICE',
}

export type ReceiptDetailsResp = {
  __typename?: 'ReceiptDetailsResp'
  building_id: Scalars['Int']
  chargeId: Scalars['Int']
  dRcpt: Scalars['timestamptz']
  dcPmtAmt: Scalars['Int']
  dcPmtNonTax: Scalars['Int']
  dcRcptAmount: Scalars['Int']
  iReceiptNum: Scalars['Int']
  pmtTypeId: Scalars['Int']
  sCompany?: Maybe<Scalars['String']>
  sPmtTypeDesc?: Maybe<Scalars['String']>
  sTenant?: Maybe<Scalars['String']>
  sUnitName?: Maybe<Scalars['String']>
  sUnitType?: Maybe<Scalars['String']>
}

export type RequestOtpResult = {
  __typename?: 'RequestOTPResult'
  isSent: Scalars['Boolean']
}

export type RequestTerminationResp = {
  __typename?: 'RequestTerminationResp'
  id: Scalars['Int']
}

export type SecurityDepositLiabilitiesResp = {
  __typename?: 'SecurityDepositLiabilitiesResp'
  beginning_balance?: Maybe<Scalars['Int']>
  building_id: Scalars['Int']
  company?: Maybe<Scalars['String']>
  deposit_charges?: Maybe<Scalars['Int']>
  ending_balance?: Maybe<Scalars['Int']>
  move_in_date?: Maybe<Scalars['timestamptz']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  tenant?: Maybe<Scalars['String']>
  unitName?: Maybe<Scalars['String']>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

export type TerminationPayload = {
  booking_id: Scalars['Int']
  move_out_date: Scalars['Date']
}

export enum TerminationPayloadStatus {
  OnHold = 'ON_HOLD',
  Paid = 'PAID',
  Requested = 'REQUESTED',
  Terminated = 'TERMINATED',
}

export enum TerminationPaymentStatus {
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING',
}

export type TerminationRequestPayload = {
  booking_id: Scalars['Int']
  move_out_date: Scalars['Date']
  payment_method_id?: Maybe<Scalars['Int']>
  status: TerminationPayloadStatus
}

/** Termination related types */
export enum TerminationStatus {
  OnHold = 'ON_HOLD',
  Requested = 'REQUESTED',
  Scheduled = 'SCHEDULED',
  Terminated = 'TERMINATED',
}

export type TerminationUpdatePayload = {
  booking_id: Scalars['Int']
  payment_method_id?: Maybe<Scalars['Int']>
  status: TerminationPayloadStatus
  termination_id: Scalars['Int']
}

export type UnitHistoryResp = {
  __typename?: 'UnitHistoryResp'
  building_id: Scalars['Int']
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  dateIn?: Maybe<Scalars['timestamptz']>
  dateOut?: Maybe<Scalars['timestamptz']>
  first_name?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  unitName?: Maybe<Scalars['String']>
  unit_price_per_month?: Maybe<Scalars['Int']>
  zip?: Maybe<Scalars['String']>
}

export type UpdateTerminationResp = {
  __typename?: 'UpdateTerminationResp'
  isUpdated: Scalars['Boolean']
}

export enum UploadType {
  Buildings = 'BUILDINGS',
  Customers = 'CUSTOMERS',
  Features = 'FEATURES',
  Insurances = 'INSURANCES',
  Invoices = 'INVOICES',
  Policies = 'POLICIES',
  Promotions = 'PROMOTIONS',
  Users = 'USERS',
}

export type UploadedFile = {
  base64str: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
}

/** expression to compare columns of type _varchar. All fields are combined with logical 'AND'. */
export type _Varchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['_varchar']>
  _gt?: Maybe<Scalars['_varchar']>
  _gte?: Maybe<Scalars['_varchar']>
  _in?: Maybe<Array<Scalars['_varchar']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['_varchar']>
  _lte?: Maybe<Scalars['_varchar']>
  _neq?: Maybe<Scalars['_varchar']>
  _nin?: Maybe<Array<Scalars['_varchar']>>
}

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses'
  /** An array relationship */
  buildings: Array<Buildings>
  /** An aggregated array relationship */
  buildings_aggregate: Buildings_Aggregate
  /** An object relationship */
  city: Cities
  city_id: Scalars['Int']
  /** An array relationship */
  companies: Array<Companies>
  /** An aggregated array relationship */
  companies_aggregate: Companies_Aggregate
  /** An object relationship */
  company?: Maybe<Companies>
  company_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  country: Countries
  country_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  customers: Array<Customers>
  /** An aggregated array relationship */
  customers_aggregate: Customers_Aggregate
  id: Scalars['Int']
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  users: Array<Users>
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate
}

/** columns and relationships of "addresses" */
export type AddressesBuildingsArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesBuildings_AggregateArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Companies_Order_By>>
  where?: Maybe<Companies_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Companies_Order_By>>
  where?: Maybe<Companies_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "addresses" */
export type AddressesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  __typename?: 'addresses_aggregate'
  aggregate?: Maybe<Addresses_Aggregate_Fields>
  nodes: Array<Addresses>
}

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'addresses_aggregate_fields'
  avg?: Maybe<Addresses_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Addresses_Max_Fields>
  min?: Maybe<Addresses_Min_Fields>
  stddev?: Maybe<Addresses_Stddev_Fields>
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Fields>
  sum?: Maybe<Addresses_Sum_Fields>
  var_pop?: Maybe<Addresses_Var_Pop_Fields>
  var_samp?: Maybe<Addresses_Var_Samp_Fields>
  variance?: Maybe<Addresses_Variance_Fields>
}

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Addresses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  avg?: Maybe<Addresses_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Addresses_Max_Order_By>
  min?: Maybe<Addresses_Min_Order_By>
  stddev?: Maybe<Addresses_Stddev_Order_By>
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Order_By>
  sum?: Maybe<Addresses_Sum_Order_By>
  var_pop?: Maybe<Addresses_Var_Pop_Order_By>
  var_samp?: Maybe<Addresses_Var_Samp_Order_By>
  variance?: Maybe<Addresses_Variance_Order_By>
}

/** input type for inserting array relation for remote table "addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>
  on_conflict?: Maybe<Addresses_On_Conflict>
}

/** aggregate avg on columns */
export type Addresses_Avg_Fields = {
  __typename?: 'addresses_avg_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "addresses" */
export type Addresses_Avg_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>
  _not?: Maybe<Addresses_Bool_Exp>
  _or?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>
  buildings?: Maybe<Buildings_Bool_Exp>
  city?: Maybe<Cities_Bool_Exp>
  city_id?: Maybe<Int_Comparison_Exp>
  companies?: Maybe<Companies_Bool_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  country?: Maybe<Countries_Bool_Exp>
  country_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  customers?: Maybe<Customers_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  latitude?: Maybe<Float8_Comparison_Exp>
  longitude?: Maybe<Float8_Comparison_Exp>
  postal_code?: Maybe<String_Comparison_Exp>
  street?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey',
}

/** input type for incrementing integer column in table "addresses" */
export type Addresses_Inc_Input = {
  city_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  buildings?: Maybe<Buildings_Arr_Rel_Insert_Input>
  city?: Maybe<Cities_Obj_Rel_Insert_Input>
  city_id?: Maybe<Scalars['Int']>
  companies?: Maybe<Companies_Arr_Rel_Insert_Input>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  country?: Maybe<Countries_Obj_Rel_Insert_Input>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customers?: Maybe<Customers_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields'
  city_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  postal_code?: Maybe<Order_By>
  street?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields'
  city_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  postal_code?: Maybe<Order_By>
  street?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'addresses_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Addresses>
}

/** input type for inserting object relation for remote table "addresses" */
export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input
  on_conflict?: Maybe<Addresses_On_Conflict>
}

/** on conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint
  update_columns: Array<Addresses_Update_Column>
  where?: Maybe<Addresses_Bool_Exp>
}

/** ordering options when selecting data from "addresses" */
export type Addresses_Order_By = {
  buildings_aggregate?: Maybe<Buildings_Aggregate_Order_By>
  city?: Maybe<Cities_Order_By>
  city_id?: Maybe<Order_By>
  companies_aggregate?: Maybe<Companies_Aggregate_Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  country?: Maybe<Countries_Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  customers_aggregate?: Maybe<Customers_Aggregate_Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  postal_code?: Maybe<Order_By>
  street?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: "addresses" */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  city_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "addresses" */
export type Addresses_Stddev_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "addresses" */
export type Addresses_Stddev_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "addresses" */
export type Addresses_Stddev_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields'
  city_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "addresses" */
export type Addresses_Sum_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: 'addresses_var_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "addresses" */
export type Addresses_Var_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "addresses" */
export type Addresses_Var_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields'
  city_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "addresses" */
export type Addresses_Variance_Order_By = {
  city_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** columns and relationships of "admin_fees" */
export type Admin_Fees = {
  __typename?: 'admin_fees'
  /** An object relationship */
  company: Companies
  company_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id: Scalars['Int']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "admin_fees" */
export type Admin_Fees_Aggregate = {
  __typename?: 'admin_fees_aggregate'
  aggregate?: Maybe<Admin_Fees_Aggregate_Fields>
  nodes: Array<Admin_Fees>
}

/** aggregate fields of "admin_fees" */
export type Admin_Fees_Aggregate_Fields = {
  __typename?: 'admin_fees_aggregate_fields'
  avg?: Maybe<Admin_Fees_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Admin_Fees_Max_Fields>
  min?: Maybe<Admin_Fees_Min_Fields>
  stddev?: Maybe<Admin_Fees_Stddev_Fields>
  stddev_pop?: Maybe<Admin_Fees_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Admin_Fees_Stddev_Samp_Fields>
  sum?: Maybe<Admin_Fees_Sum_Fields>
  var_pop?: Maybe<Admin_Fees_Var_Pop_Fields>
  var_samp?: Maybe<Admin_Fees_Var_Samp_Fields>
  variance?: Maybe<Admin_Fees_Variance_Fields>
}

/** aggregate fields of "admin_fees" */
export type Admin_Fees_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Admin_Fees_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "admin_fees" */
export type Admin_Fees_Aggregate_Order_By = {
  avg?: Maybe<Admin_Fees_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Admin_Fees_Max_Order_By>
  min?: Maybe<Admin_Fees_Min_Order_By>
  stddev?: Maybe<Admin_Fees_Stddev_Order_By>
  stddev_pop?: Maybe<Admin_Fees_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Admin_Fees_Stddev_Samp_Order_By>
  sum?: Maybe<Admin_Fees_Sum_Order_By>
  var_pop?: Maybe<Admin_Fees_Var_Pop_Order_By>
  var_samp?: Maybe<Admin_Fees_Var_Samp_Order_By>
  variance?: Maybe<Admin_Fees_Variance_Order_By>
}

/** input type for inserting array relation for remote table "admin_fees" */
export type Admin_Fees_Arr_Rel_Insert_Input = {
  data: Array<Admin_Fees_Insert_Input>
  on_conflict?: Maybe<Admin_Fees_On_Conflict>
}

/** aggregate avg on columns */
export type Admin_Fees_Avg_Fields = {
  __typename?: 'admin_fees_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "admin_fees" */
export type Admin_Fees_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "admin_fees". All fields are combined with a logical 'AND'. */
export type Admin_Fees_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Admin_Fees_Bool_Exp>>>
  _not?: Maybe<Admin_Fees_Bool_Exp>
  _or?: Maybe<Array<Maybe<Admin_Fees_Bool_Exp>>>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  fee_amount?: Maybe<Float8_Comparison_Exp>
  fee_tax?: Maybe<Float8_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "admin_fees" */
export enum Admin_Fees_Constraint {
  /** unique or primary key constraint */
  AdminFeesCompanyIdUnique = 'admin_fees_company_id_unique',
  /** unique or primary key constraint */
  AdminFeesPkey = 'admin_fees_pkey',
}

/** input type for incrementing integer column in table "admin_fees" */
export type Admin_Fees_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "admin_fees" */
export type Admin_Fees_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Admin_Fees_Max_Fields = {
  __typename?: 'admin_fees_max_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "admin_fees" */
export type Admin_Fees_Max_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Admin_Fees_Min_Fields = {
  __typename?: 'admin_fees_min_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "admin_fees" */
export type Admin_Fees_Min_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "admin_fees" */
export type Admin_Fees_Mutation_Response = {
  __typename?: 'admin_fees_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Admin_Fees>
}

/** input type for inserting object relation for remote table "admin_fees" */
export type Admin_Fees_Obj_Rel_Insert_Input = {
  data: Admin_Fees_Insert_Input
  on_conflict?: Maybe<Admin_Fees_On_Conflict>
}

/** on conflict condition type for table "admin_fees" */
export type Admin_Fees_On_Conflict = {
  constraint: Admin_Fees_Constraint
  update_columns: Array<Admin_Fees_Update_Column>
  where?: Maybe<Admin_Fees_Bool_Exp>
}

/** ordering options when selecting data from "admin_fees" */
export type Admin_Fees_Order_By = {
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "admin_fees" */
export type Admin_Fees_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "admin_fees" */
export enum Admin_Fees_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FeeAmount = 'fee_amount',
  /** column name */
  FeeTax = 'fee_tax',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "admin_fees" */
export type Admin_Fees_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Admin_Fees_Stddev_Fields = {
  __typename?: 'admin_fees_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "admin_fees" */
export type Admin_Fees_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Admin_Fees_Stddev_Pop_Fields = {
  __typename?: 'admin_fees_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "admin_fees" */
export type Admin_Fees_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Admin_Fees_Stddev_Samp_Fields = {
  __typename?: 'admin_fees_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "admin_fees" */
export type Admin_Fees_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Admin_Fees_Sum_Fields = {
  __typename?: 'admin_fees_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  fee_amount?: Maybe<Scalars['float8']>
  fee_tax?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "admin_fees" */
export type Admin_Fees_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "admin_fees" */
export enum Admin_Fees_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FeeAmount = 'fee_amount',
  /** column name */
  FeeTax = 'fee_tax',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Admin_Fees_Var_Pop_Fields = {
  __typename?: 'admin_fees_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "admin_fees" */
export type Admin_Fees_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Admin_Fees_Var_Samp_Fields = {
  __typename?: 'admin_fees_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "admin_fees" */
export type Admin_Fees_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Admin_Fees_Variance_Fields = {
  __typename?: 'admin_fees_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  fee_amount?: Maybe<Scalars['Float']>
  fee_tax?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "admin_fees" */
export type Admin_Fees_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  fee_amount?: Maybe<Order_By>
  fee_tax?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** columns and relationships of "applied_taxes" */
export type Applied_Taxes = {
  __typename?: 'applied_taxes'
  booking_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  bookings?: Maybe<Bookings>
  building_tax_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  building_taxes?: Maybe<Building_Taxes>
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currencies: Currencies
  currency_id: Scalars['Int']
  id: Scalars['Int']
  insurance_tax_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  insurance_taxes?: Maybe<Insurance_Taxes>
  name_en: Scalars['String']
  name_th: Scalars['String']
  renewal_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  renewals?: Maybe<Renewals>
  tax_amount: Scalars['float8']
  type: Scalars['enum_tax_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** aggregated selection of "applied_taxes" */
export type Applied_Taxes_Aggregate = {
  __typename?: 'applied_taxes_aggregate'
  aggregate?: Maybe<Applied_Taxes_Aggregate_Fields>
  nodes: Array<Applied_Taxes>
}

/** aggregate fields of "applied_taxes" */
export type Applied_Taxes_Aggregate_Fields = {
  __typename?: 'applied_taxes_aggregate_fields'
  avg?: Maybe<Applied_Taxes_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Applied_Taxes_Max_Fields>
  min?: Maybe<Applied_Taxes_Min_Fields>
  stddev?: Maybe<Applied_Taxes_Stddev_Fields>
  stddev_pop?: Maybe<Applied_Taxes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Applied_Taxes_Stddev_Samp_Fields>
  sum?: Maybe<Applied_Taxes_Sum_Fields>
  var_pop?: Maybe<Applied_Taxes_Var_Pop_Fields>
  var_samp?: Maybe<Applied_Taxes_Var_Samp_Fields>
  variance?: Maybe<Applied_Taxes_Variance_Fields>
}

/** aggregate fields of "applied_taxes" */
export type Applied_Taxes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Applied_Taxes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "applied_taxes" */
export type Applied_Taxes_Aggregate_Order_By = {
  avg?: Maybe<Applied_Taxes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Applied_Taxes_Max_Order_By>
  min?: Maybe<Applied_Taxes_Min_Order_By>
  stddev?: Maybe<Applied_Taxes_Stddev_Order_By>
  stddev_pop?: Maybe<Applied_Taxes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Applied_Taxes_Stddev_Samp_Order_By>
  sum?: Maybe<Applied_Taxes_Sum_Order_By>
  var_pop?: Maybe<Applied_Taxes_Var_Pop_Order_By>
  var_samp?: Maybe<Applied_Taxes_Var_Samp_Order_By>
  variance?: Maybe<Applied_Taxes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "applied_taxes" */
export type Applied_Taxes_Arr_Rel_Insert_Input = {
  data: Array<Applied_Taxes_Insert_Input>
  on_conflict?: Maybe<Applied_Taxes_On_Conflict>
}

/** aggregate avg on columns */
export type Applied_Taxes_Avg_Fields = {
  __typename?: 'applied_taxes_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "applied_taxes" */
export type Applied_Taxes_Avg_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "applied_taxes". All fields are combined with a logical 'AND'. */
export type Applied_Taxes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Applied_Taxes_Bool_Exp>>>
  _not?: Maybe<Applied_Taxes_Bool_Exp>
  _or?: Maybe<Array<Maybe<Applied_Taxes_Bool_Exp>>>
  booking_id?: Maybe<Int_Comparison_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  building_tax_id?: Maybe<Int_Comparison_Exp>
  building_taxes?: Maybe<Building_Taxes_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currencies?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  insurance_tax_id?: Maybe<Int_Comparison_Exp>
  insurance_taxes?: Maybe<Insurance_Taxes_Bool_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  renewal_id?: Maybe<Int_Comparison_Exp>
  renewals?: Maybe<Renewals_Bool_Exp>
  tax_amount?: Maybe<Float8_Comparison_Exp>
  type?: Maybe<Enum_Tax_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "applied_taxes" */
export enum Applied_Taxes_Constraint {
  /** unique or primary key constraint */
  AppliedTaxesPkey = 'applied_taxes_pkey',
}

/** input type for incrementing integer column in table "applied_taxes" */
export type Applied_Taxes_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>
  building_tax_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurance_tax_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  tax_amount?: Maybe<Scalars['float8']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "applied_taxes" */
export type Applied_Taxes_Insert_Input = {
  booking_id?: Maybe<Scalars['Int']>
  bookings?: Maybe<Bookings_Obj_Rel_Insert_Input>
  building_tax_id?: Maybe<Scalars['Int']>
  building_taxes?: Maybe<Building_Taxes_Obj_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  currencies?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurance_tax_id?: Maybe<Scalars['Int']>
  insurance_taxes?: Maybe<Insurance_Taxes_Obj_Rel_Insert_Input>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  renewals?: Maybe<Renewals_Obj_Rel_Insert_Input>
  tax_amount?: Maybe<Scalars['float8']>
  type?: Maybe<Scalars['enum_tax_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Applied_Taxes_Max_Fields = {
  __typename?: 'applied_taxes_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  building_tax_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurance_tax_id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  tax_amount?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "applied_taxes" */
export type Applied_Taxes_Max_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Applied_Taxes_Min_Fields = {
  __typename?: 'applied_taxes_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  building_tax_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurance_tax_id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  tax_amount?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "applied_taxes" */
export type Applied_Taxes_Min_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "applied_taxes" */
export type Applied_Taxes_Mutation_Response = {
  __typename?: 'applied_taxes_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Applied_Taxes>
}

/** input type for inserting object relation for remote table "applied_taxes" */
export type Applied_Taxes_Obj_Rel_Insert_Input = {
  data: Applied_Taxes_Insert_Input
  on_conflict?: Maybe<Applied_Taxes_On_Conflict>
}

/** on conflict condition type for table "applied_taxes" */
export type Applied_Taxes_On_Conflict = {
  constraint: Applied_Taxes_Constraint
  update_columns: Array<Applied_Taxes_Update_Column>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** ordering options when selecting data from "applied_taxes" */
export type Applied_Taxes_Order_By = {
  booking_id?: Maybe<Order_By>
  bookings?: Maybe<Bookings_Order_By>
  building_tax_id?: Maybe<Order_By>
  building_taxes?: Maybe<Building_Taxes_Order_By>
  created_at?: Maybe<Order_By>
  currencies?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  insurance_taxes?: Maybe<Insurance_Taxes_Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  renewals?: Maybe<Renewals_Order_By>
  tax_amount?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "applied_taxes" */
export type Applied_Taxes_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "applied_taxes" */
export enum Applied_Taxes_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BuildingTaxId = 'building_tax_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceTaxId = 'insurance_tax_id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  RenewalId = 'renewal_id',
  /** column name */
  TaxAmount = 'tax_amount',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "applied_taxes" */
export type Applied_Taxes_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>
  building_tax_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurance_tax_id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  tax_amount?: Maybe<Scalars['float8']>
  type?: Maybe<Scalars['enum_tax_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Applied_Taxes_Stddev_Fields = {
  __typename?: 'applied_taxes_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "applied_taxes" */
export type Applied_Taxes_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Applied_Taxes_Stddev_Pop_Fields = {
  __typename?: 'applied_taxes_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "applied_taxes" */
export type Applied_Taxes_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Applied_Taxes_Stddev_Samp_Fields = {
  __typename?: 'applied_taxes_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "applied_taxes" */
export type Applied_Taxes_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Applied_Taxes_Sum_Fields = {
  __typename?: 'applied_taxes_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  building_tax_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurance_tax_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  tax_amount?: Maybe<Scalars['float8']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "applied_taxes" */
export type Applied_Taxes_Sum_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "applied_taxes" */
export enum Applied_Taxes_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BuildingTaxId = 'building_tax_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceTaxId = 'insurance_tax_id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  RenewalId = 'renewal_id',
  /** column name */
  TaxAmount = 'tax_amount',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Applied_Taxes_Var_Pop_Fields = {
  __typename?: 'applied_taxes_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "applied_taxes" */
export type Applied_Taxes_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Applied_Taxes_Var_Samp_Fields = {
  __typename?: 'applied_taxes_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "applied_taxes" */
export type Applied_Taxes_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Applied_Taxes_Variance_Fields = {
  __typename?: 'applied_taxes_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  building_tax_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_tax_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  tax_amount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "applied_taxes" */
export type Applied_Taxes_Variance_Order_By = {
  booking_id?: Maybe<Order_By>
  building_tax_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_tax_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  tax_amount?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** columns and relationships of "booking_contracts" */
export type Booking_Contracts = {
  __typename?: 'booking_contracts'
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  contract: Scalars['String']
  contract_hash: Scalars['String']
  created_at?: Maybe<Scalars['timestamptz']>
  created_by: Scalars['Int']
  id: Scalars['Int']
  updated_at?: Maybe<Scalars['timestamptz']>
  updated_by: Scalars['Int']
  /** An object relationship */
  user: Users
  /** An object relationship */
  userByCreatedBy: Users
}

/** columns and relationships of "booking_contracts" */
export type Booking_ContractsBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "booking_contracts" */
export type Booking_ContractsBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** aggregated selection of "booking_contracts" */
export type Booking_Contracts_Aggregate = {
  __typename?: 'booking_contracts_aggregate'
  aggregate?: Maybe<Booking_Contracts_Aggregate_Fields>
  nodes: Array<Booking_Contracts>
}

/** aggregate fields of "booking_contracts" */
export type Booking_Contracts_Aggregate_Fields = {
  __typename?: 'booking_contracts_aggregate_fields'
  avg?: Maybe<Booking_Contracts_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Booking_Contracts_Max_Fields>
  min?: Maybe<Booking_Contracts_Min_Fields>
  stddev?: Maybe<Booking_Contracts_Stddev_Fields>
  stddev_pop?: Maybe<Booking_Contracts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Booking_Contracts_Stddev_Samp_Fields>
  sum?: Maybe<Booking_Contracts_Sum_Fields>
  var_pop?: Maybe<Booking_Contracts_Var_Pop_Fields>
  var_samp?: Maybe<Booking_Contracts_Var_Samp_Fields>
  variance?: Maybe<Booking_Contracts_Variance_Fields>
}

/** aggregate fields of "booking_contracts" */
export type Booking_Contracts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Booking_Contracts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "booking_contracts" */
export type Booking_Contracts_Aggregate_Order_By = {
  avg?: Maybe<Booking_Contracts_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Booking_Contracts_Max_Order_By>
  min?: Maybe<Booking_Contracts_Min_Order_By>
  stddev?: Maybe<Booking_Contracts_Stddev_Order_By>
  stddev_pop?: Maybe<Booking_Contracts_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Booking_Contracts_Stddev_Samp_Order_By>
  sum?: Maybe<Booking_Contracts_Sum_Order_By>
  var_pop?: Maybe<Booking_Contracts_Var_Pop_Order_By>
  var_samp?: Maybe<Booking_Contracts_Var_Samp_Order_By>
  variance?: Maybe<Booking_Contracts_Variance_Order_By>
}

/** input type for inserting array relation for remote table "booking_contracts" */
export type Booking_Contracts_Arr_Rel_Insert_Input = {
  data: Array<Booking_Contracts_Insert_Input>
  on_conflict?: Maybe<Booking_Contracts_On_Conflict>
}

/** aggregate avg on columns */
export type Booking_Contracts_Avg_Fields = {
  __typename?: 'booking_contracts_avg_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "booking_contracts" */
export type Booking_Contracts_Avg_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "booking_contracts". All fields are combined with a logical 'AND'. */
export type Booking_Contracts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Booking_Contracts_Bool_Exp>>>
  _not?: Maybe<Booking_Contracts_Bool_Exp>
  _or?: Maybe<Array<Maybe<Booking_Contracts_Bool_Exp>>>
  bookings?: Maybe<Bookings_Bool_Exp>
  contract?: Maybe<String_Comparison_Exp>
  contract_hash?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  created_by?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  updated_by?: Maybe<Int_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  userByCreatedBy?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "booking_contracts" */
export enum Booking_Contracts_Constraint {
  /** unique or primary key constraint */
  BookingContractsPkey = 'booking_contracts_pkey',
}

/** input type for incrementing integer column in table "booking_contracts" */
export type Booking_Contracts_Inc_Input = {
  created_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  updated_by?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "booking_contracts" */
export type Booking_Contracts_Insert_Input = {
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  contract?: Maybe<Scalars['String']>
  contract_hash?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  created_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  updated_by?: Maybe<Scalars['Int']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  userByCreatedBy?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Booking_Contracts_Max_Fields = {
  __typename?: 'booking_contracts_max_fields'
  contract?: Maybe<Scalars['String']>
  contract_hash?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  created_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  updated_by?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "booking_contracts" */
export type Booking_Contracts_Max_Order_By = {
  contract?: Maybe<Order_By>
  contract_hash?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Booking_Contracts_Min_Fields = {
  __typename?: 'booking_contracts_min_fields'
  contract?: Maybe<Scalars['String']>
  contract_hash?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  created_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  updated_by?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "booking_contracts" */
export type Booking_Contracts_Min_Order_By = {
  contract?: Maybe<Order_By>
  contract_hash?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** response of any mutation on the table "booking_contracts" */
export type Booking_Contracts_Mutation_Response = {
  __typename?: 'booking_contracts_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Booking_Contracts>
}

/** input type for inserting object relation for remote table "booking_contracts" */
export type Booking_Contracts_Obj_Rel_Insert_Input = {
  data: Booking_Contracts_Insert_Input
  on_conflict?: Maybe<Booking_Contracts_On_Conflict>
}

/** on conflict condition type for table "booking_contracts" */
export type Booking_Contracts_On_Conflict = {
  constraint: Booking_Contracts_Constraint
  update_columns: Array<Booking_Contracts_Update_Column>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** ordering options when selecting data from "booking_contracts" */
export type Booking_Contracts_Order_By = {
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  contract?: Maybe<Order_By>
  contract_hash?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  userByCreatedBy?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "booking_contracts" */
export type Booking_Contracts_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "booking_contracts" */
export enum Booking_Contracts_Select_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  ContractHash = 'contract_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
}

/** input type for updating data in table "booking_contracts" */
export type Booking_Contracts_Set_Input = {
  contract?: Maybe<Scalars['String']>
  contract_hash?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  created_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  updated_by?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Booking_Contracts_Stddev_Fields = {
  __typename?: 'booking_contracts_stddev_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "booking_contracts" */
export type Booking_Contracts_Stddev_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Booking_Contracts_Stddev_Pop_Fields = {
  __typename?: 'booking_contracts_stddev_pop_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "booking_contracts" */
export type Booking_Contracts_Stddev_Pop_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Booking_Contracts_Stddev_Samp_Fields = {
  __typename?: 'booking_contracts_stddev_samp_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "booking_contracts" */
export type Booking_Contracts_Stddev_Samp_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Booking_Contracts_Sum_Fields = {
  __typename?: 'booking_contracts_sum_fields'
  created_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  updated_by?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "booking_contracts" */
export type Booking_Contracts_Sum_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** update columns of table "booking_contracts" */
export enum Booking_Contracts_Update_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  ContractHash = 'contract_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
}

/** aggregate var_pop on columns */
export type Booking_Contracts_Var_Pop_Fields = {
  __typename?: 'booking_contracts_var_pop_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "booking_contracts" */
export type Booking_Contracts_Var_Pop_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Booking_Contracts_Var_Samp_Fields = {
  __typename?: 'booking_contracts_var_samp_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "booking_contracts" */
export type Booking_Contracts_Var_Samp_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Booking_Contracts_Variance_Fields = {
  __typename?: 'booking_contracts_variance_fields'
  created_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  updated_by?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "booking_contracts" */
export type Booking_Contracts_Variance_Order_By = {
  created_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_by?: Maybe<Order_By>
}

/** columns and relationships of "bookings" */
export type Bookings = {
  __typename?: 'bookings'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  /** An array relationship */
  applied_taxes: Array<Applied_Taxes>
  /** An aggregated array relationship */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  auto_renewal: Scalars['Boolean']
  base_amount: Scalars['float8']
  /** An object relationship */
  booking_contract?: Maybe<Booking_Contracts>
  /** An object relationship */
  bookings_building_address: Bookings_Building_Addresses
  /** An array relationship */
  bookings_histories: Array<Bookings_History>
  /** An aggregated array relationship */
  bookings_histories_aggregate: Bookings_History_Aggregate
  /** An array relationship */
  bookings_promotions: Array<Bookings_Promotions>
  /** An aggregated array relationship */
  bookings_promotions_aggregate: Bookings_Promotions_Aggregate
  /** An object relationship */
  building: Buildings
  building_address_id: Scalars['Int']
  building_contact_name: Scalars['String']
  building_contact_number: Scalars['String']
  building_id: Scalars['Int']
  building_name?: Maybe<Scalars['String']>
  /** An object relationship */
  city?: Maybe<Cities>
  commitment_months?: Maybe<Scalars['Int']>
  /** An object relationship */
  company: Companies
  company_id: Scalars['Int']
  contract_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  country?: Maybe<Countries>
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currency: Currencies
  currency_id: Scalars['Int']
  /** An object relationship */
  customer: Customers
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_email: Scalars['String']
  customer_id: Scalars['Int']
  customer_phone: Scalars['String']
  customer_street?: Maybe<Scalars['String']>
  customer_vat_number?: Maybe<Scalars['String']>
  customer_zip_code?: Maybe<Scalars['String']>
  deposit_amount: Scalars['float8']
  deposit_refunded_date?: Maybe<Scalars['timestamptz']>
  discounted_amount: Scalars['float8']
  has_admin_fee: Scalars['Boolean']
  has_custom_price?: Maybe<Scalars['Boolean']>
  /** An array relationship */
  history_logs: Array<History_Logs>
  /** An aggregated array relationship */
  history_logs_aggregate: History_Logs_Aggregate
  id: Scalars['Int']
  /** An object relationship */
  insurance?: Maybe<Insurances>
  insurance_amount: Scalars['float8']
  insurance_id?: Maybe<Scalars['Int']>
  is_deposit_refunded: Scalars['Boolean']
  is_insured: Scalars['Boolean']
  is_prepaid: Scalars['Boolean']
  is_termination_requested?: Maybe<Scalars['Boolean']>
  move_in_date: Scalars['timestamptz']
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  /** An array relationship */
  promotions_redeems: Array<Promotions_Redeem>
  /** An aggregated array relationship */
  promotions_redeems_aggregate: Promotions_Redeem_Aggregate
  /** An array relationship */
  renewals: Array<Renewals>
  /** An aggregated array relationship */
  renewals_aggregate: Renewals_Aggregate
  show_id?: Maybe<Scalars['String']>
  status: Scalars['enum_bookings_status']
  sub_total_amount: Scalars['float8']
  /** An array relationship */
  terminations: Array<Terminations>
  /** An aggregated array relationship */
  terminations_aggregate: Terminations_Aggregate
  total_amount: Scalars['float8']
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  /** An array relationship */
  transactions: Array<Transactions>
  /** An aggregated array relationship */
  transactions_aggregate: Transactions_Aggregate
  /** An object relationship */
  unit?: Maybe<Units>
  unit_features?: Maybe<Scalars['json']>
  unit_height: Scalars['float8']
  unit_id?: Maybe<Scalars['Int']>
  unit_length: Scalars['float8']
  unit_measurement: Scalars['enum_measurement_unit']
  unit_name?: Maybe<Scalars['String']>
  unit_price_per_month: Scalars['float8']
  /** An object relationship */
  unit_subtype?: Maybe<Unit_Subtypes>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_type_name: Scalars['String']
  unit_width: Scalars['float8']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "bookings" */
export type BookingsApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsBookings_HistoriesArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsBookings_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsBookings_PromotionsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsBookings_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsPromotions_RedeemsArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsPromotions_Redeems_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsTerminationsArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsTerminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "bookings" */
export type BookingsUnit_FeaturesArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "bookings" */
export type Bookings_Aggregate = {
  __typename?: 'bookings_aggregate'
  aggregate?: Maybe<Bookings_Aggregate_Fields>
  nodes: Array<Bookings>
}

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_Fields = {
  __typename?: 'bookings_aggregate_fields'
  avg?: Maybe<Bookings_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bookings_Max_Fields>
  min?: Maybe<Bookings_Min_Fields>
  stddev?: Maybe<Bookings_Stddev_Fields>
  stddev_pop?: Maybe<Bookings_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bookings_Stddev_Samp_Fields>
  sum?: Maybe<Bookings_Sum_Fields>
  var_pop?: Maybe<Bookings_Var_Pop_Fields>
  var_samp?: Maybe<Bookings_Var_Samp_Fields>
  variance?: Maybe<Bookings_Variance_Fields>
}

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings" */
export type Bookings_Aggregate_Order_By = {
  avg?: Maybe<Bookings_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Bookings_Max_Order_By>
  min?: Maybe<Bookings_Min_Order_By>
  stddev?: Maybe<Bookings_Stddev_Order_By>
  stddev_pop?: Maybe<Bookings_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Bookings_Stddev_Samp_Order_By>
  sum?: Maybe<Bookings_Sum_Order_By>
  var_pop?: Maybe<Bookings_Var_Pop_Order_By>
  var_samp?: Maybe<Bookings_Var_Samp_Order_By>
  variance?: Maybe<Bookings_Variance_Order_By>
}

/** input type for inserting array relation for remote table "bookings" */
export type Bookings_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Insert_Input>
  on_conflict?: Maybe<Bookings_On_Conflict>
}

/** aggregate avg on columns */
export type Bookings_Avg_Fields = {
  __typename?: 'bookings_avg_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings" */
export type Bookings_Avg_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "bookings". All fields are combined with a logical 'AND'. */
export type Bookings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_Bool_Exp>>>
  _not?: Maybe<Bookings_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bookings_Bool_Exp>>>
  admin_fee_amount?: Maybe<Float8_Comparison_Exp>
  admin_fee_tax?: Maybe<Float8_Comparison_Exp>
  applied_taxes?: Maybe<Applied_Taxes_Bool_Exp>
  auto_renewal?: Maybe<Boolean_Comparison_Exp>
  base_amount?: Maybe<Float8_Comparison_Exp>
  booking_contract?: Maybe<Booking_Contracts_Bool_Exp>
  bookings_building_address?: Maybe<Bookings_Building_Addresses_Bool_Exp>
  bookings_histories?: Maybe<Bookings_History_Bool_Exp>
  bookings_promotions?: Maybe<Bookings_Promotions_Bool_Exp>
  building?: Maybe<Buildings_Bool_Exp>
  building_address_id?: Maybe<Int_Comparison_Exp>
  building_contact_name?: Maybe<String_Comparison_Exp>
  building_contact_number?: Maybe<String_Comparison_Exp>
  building_id?: Maybe<Int_Comparison_Exp>
  building_name?: Maybe<String_Comparison_Exp>
  city?: Maybe<Cities_Bool_Exp>
  commitment_months?: Maybe<Int_Comparison_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  contract_id?: Maybe<Int_Comparison_Exp>
  country?: Maybe<Countries_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currency?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  customer?: Maybe<Customers_Bool_Exp>
  customer_city_id?: Maybe<Int_Comparison_Exp>
  customer_country_id?: Maybe<Int_Comparison_Exp>
  customer_email?: Maybe<String_Comparison_Exp>
  customer_id?: Maybe<Int_Comparison_Exp>
  customer_phone?: Maybe<String_Comparison_Exp>
  customer_street?: Maybe<String_Comparison_Exp>
  customer_vat_number?: Maybe<String_Comparison_Exp>
  customer_zip_code?: Maybe<String_Comparison_Exp>
  deposit_amount?: Maybe<Float8_Comparison_Exp>
  deposit_refunded_date?: Maybe<Timestamptz_Comparison_Exp>
  discounted_amount?: Maybe<Float8_Comparison_Exp>
  has_admin_fee?: Maybe<Boolean_Comparison_Exp>
  has_custom_price?: Maybe<Boolean_Comparison_Exp>
  history_logs?: Maybe<History_Logs_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  insurance?: Maybe<Insurances_Bool_Exp>
  insurance_amount?: Maybe<Float8_Comparison_Exp>
  insurance_id?: Maybe<Int_Comparison_Exp>
  is_deposit_refunded?: Maybe<Boolean_Comparison_Exp>
  is_insured?: Maybe<Boolean_Comparison_Exp>
  is_prepaid?: Maybe<Boolean_Comparison_Exp>
  is_termination_requested?: Maybe<Boolean_Comparison_Exp>
  move_in_date?: Maybe<Timestamptz_Comparison_Exp>
  move_out_date?: Maybe<Timestamptz_Comparison_Exp>
  prepaid_months?: Maybe<Int_Comparison_Exp>
  promotions_redeems?: Maybe<Promotions_Redeem_Bool_Exp>
  renewals?: Maybe<Renewals_Bool_Exp>
  show_id?: Maybe<String_Comparison_Exp>
  status?: Maybe<Enum_Bookings_Status_Comparison_Exp>
  sub_total_amount?: Maybe<Float8_Comparison_Exp>
  terminations?: Maybe<Terminations_Bool_Exp>
  total_amount?: Maybe<Float8_Comparison_Exp>
  total_insurance_tax_amount?: Maybe<Float8_Comparison_Exp>
  total_rent_tax_amount?: Maybe<Float8_Comparison_Exp>
  transactions?: Maybe<Transactions_Bool_Exp>
  unit?: Maybe<Units_Bool_Exp>
  unit_features?: Maybe<Json_Comparison_Exp>
  unit_height?: Maybe<Float8_Comparison_Exp>
  unit_id?: Maybe<Int_Comparison_Exp>
  unit_length?: Maybe<Float8_Comparison_Exp>
  unit_measurement?: Maybe<Enum_Measurement_Unit_Comparison_Exp>
  unit_name?: Maybe<String_Comparison_Exp>
  unit_price_per_month?: Maybe<Float8_Comparison_Exp>
  unit_subtype?: Maybe<Unit_Subtypes_Bool_Exp>
  unit_subtype_id?: Maybe<Int_Comparison_Exp>
  unit_type_name?: Maybe<String_Comparison_Exp>
  unit_width?: Maybe<Float8_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** columns and relationships of "bookings_building_addresses" */
export type Bookings_Building_Addresses = {
  __typename?: 'bookings_building_addresses'
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An object relationship */
  city: Cities
  city_id: Scalars['Int']
  /** An object relationship */
  country: Countries
  country_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "bookings_building_addresses" */
export type Bookings_Building_AddressesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "bookings_building_addresses" */
export type Bookings_Building_AddressesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** aggregated selection of "bookings_building_addresses" */
export type Bookings_Building_Addresses_Aggregate = {
  __typename?: 'bookings_building_addresses_aggregate'
  aggregate?: Maybe<Bookings_Building_Addresses_Aggregate_Fields>
  nodes: Array<Bookings_Building_Addresses>
}

/** aggregate fields of "bookings_building_addresses" */
export type Bookings_Building_Addresses_Aggregate_Fields = {
  __typename?: 'bookings_building_addresses_aggregate_fields'
  avg?: Maybe<Bookings_Building_Addresses_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bookings_Building_Addresses_Max_Fields>
  min?: Maybe<Bookings_Building_Addresses_Min_Fields>
  stddev?: Maybe<Bookings_Building_Addresses_Stddev_Fields>
  stddev_pop?: Maybe<Bookings_Building_Addresses_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bookings_Building_Addresses_Stddev_Samp_Fields>
  sum?: Maybe<Bookings_Building_Addresses_Sum_Fields>
  var_pop?: Maybe<Bookings_Building_Addresses_Var_Pop_Fields>
  var_samp?: Maybe<Bookings_Building_Addresses_Var_Samp_Fields>
  variance?: Maybe<Bookings_Building_Addresses_Variance_Fields>
}

/** aggregate fields of "bookings_building_addresses" */
export type Bookings_Building_Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Aggregate_Order_By = {
  avg?: Maybe<Bookings_Building_Addresses_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Bookings_Building_Addresses_Max_Order_By>
  min?: Maybe<Bookings_Building_Addresses_Min_Order_By>
  stddev?: Maybe<Bookings_Building_Addresses_Stddev_Order_By>
  stddev_pop?: Maybe<Bookings_Building_Addresses_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Bookings_Building_Addresses_Stddev_Samp_Order_By>
  sum?: Maybe<Bookings_Building_Addresses_Sum_Order_By>
  var_pop?: Maybe<Bookings_Building_Addresses_Var_Pop_Order_By>
  var_samp?: Maybe<Bookings_Building_Addresses_Var_Samp_Order_By>
  variance?: Maybe<Bookings_Building_Addresses_Variance_Order_By>
}

/** input type for inserting array relation for remote table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Building_Addresses_Insert_Input>
  on_conflict?: Maybe<Bookings_Building_Addresses_On_Conflict>
}

/** aggregate avg on columns */
export type Bookings_Building_Addresses_Avg_Fields = {
  __typename?: 'bookings_building_addresses_avg_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Avg_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "bookings_building_addresses". All fields are combined with a logical 'AND'. */
export type Bookings_Building_Addresses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_Building_Addresses_Bool_Exp>>>
  _not?: Maybe<Bookings_Building_Addresses_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bookings_Building_Addresses_Bool_Exp>>>
  bookings?: Maybe<Bookings_Bool_Exp>
  city?: Maybe<Cities_Bool_Exp>
  city_id?: Maybe<Int_Comparison_Exp>
  country?: Maybe<Countries_Bool_Exp>
  country_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  latitude?: Maybe<Float8_Comparison_Exp>
  longitude?: Maybe<Float8_Comparison_Exp>
  postal_code?: Maybe<String_Comparison_Exp>
  street?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "bookings_building_addresses" */
export enum Bookings_Building_Addresses_Constraint {
  /** unique or primary key constraint */
  BookingsBuildingAddressesPkey = 'bookings_building_addresses_pkey',
}

/** input type for incrementing integer column in table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Inc_Input = {
  city_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Insert_Input = {
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  city?: Maybe<Cities_Obj_Rel_Insert_Input>
  city_id?: Maybe<Scalars['Int']>
  country?: Maybe<Countries_Obj_Rel_Insert_Input>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Bookings_Building_Addresses_Max_Fields = {
  __typename?: 'bookings_building_addresses_max_fields'
  city_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Max_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  postal_code?: Maybe<Order_By>
  street?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bookings_Building_Addresses_Min_Fields = {
  __typename?: 'bookings_building_addresses_min_fields'
  city_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Min_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  postal_code?: Maybe<Order_By>
  street?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Mutation_Response = {
  __typename?: 'bookings_building_addresses_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bookings_Building_Addresses>
}

/** input type for inserting object relation for remote table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Obj_Rel_Insert_Input = {
  data: Bookings_Building_Addresses_Insert_Input
  on_conflict?: Maybe<Bookings_Building_Addresses_On_Conflict>
}

/** on conflict condition type for table "bookings_building_addresses" */
export type Bookings_Building_Addresses_On_Conflict = {
  constraint: Bookings_Building_Addresses_Constraint
  update_columns: Array<Bookings_Building_Addresses_Update_Column>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** ordering options when selecting data from "bookings_building_addresses" */
export type Bookings_Building_Addresses_Order_By = {
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  city?: Maybe<Cities_Order_By>
  city_id?: Maybe<Order_By>
  country?: Maybe<Countries_Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  postal_code?: Maybe<Order_By>
  street?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "bookings_building_addresses" */
export type Bookings_Building_Addresses_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "bookings_building_addresses" */
export enum Bookings_Building_Addresses_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Set_Input = {
  city_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
  postal_code?: Maybe<Scalars['String']>
  street?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Bookings_Building_Addresses_Stddev_Fields = {
  __typename?: 'bookings_building_addresses_stddev_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Stddev_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bookings_Building_Addresses_Stddev_Pop_Fields = {
  __typename?: 'bookings_building_addresses_stddev_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Stddev_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bookings_Building_Addresses_Stddev_Samp_Fields = {
  __typename?: 'bookings_building_addresses_stddev_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Stddev_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Bookings_Building_Addresses_Sum_Fields = {
  __typename?: 'bookings_building_addresses_sum_fields'
  city_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  latitude?: Maybe<Scalars['float8']>
  longitude?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Sum_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** update columns of table "bookings_building_addresses" */
export enum Bookings_Building_Addresses_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Bookings_Building_Addresses_Var_Pop_Fields = {
  __typename?: 'bookings_building_addresses_var_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Var_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bookings_Building_Addresses_Var_Samp_Fields = {
  __typename?: 'bookings_building_addresses_var_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Var_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Bookings_Building_Addresses_Variance_Fields = {
  __typename?: 'bookings_building_addresses_variance_fields'
  city_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings_building_addresses" */
export type Bookings_Building_Addresses_Variance_Order_By = {
  city_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** unique or primary key constraints on table "bookings" */
export enum Bookings_Constraint {
  /** unique or primary key constraint */
  BookingsPkey = 'bookings_pkey',
  /** unique or primary key constraint */
  BookingsShowIdUnique = 'bookings_show_id_unique',
  /** unique or primary key constraint */
  BookingsShowIdUniqueIdx = 'bookings_show_id_unique_idx',
}

/** columns and relationships of "bookings_history" */
export type Bookings_History = {
  __typename?: 'bookings_history'
  /** An object relationship */
  booking: Bookings
  booking_id: Scalars['Int']
  changed_by: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  status: Scalars['enum_bookings_status']
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
}

/** aggregated selection of "bookings_history" */
export type Bookings_History_Aggregate = {
  __typename?: 'bookings_history_aggregate'
  aggregate?: Maybe<Bookings_History_Aggregate_Fields>
  nodes: Array<Bookings_History>
}

/** aggregate fields of "bookings_history" */
export type Bookings_History_Aggregate_Fields = {
  __typename?: 'bookings_history_aggregate_fields'
  avg?: Maybe<Bookings_History_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bookings_History_Max_Fields>
  min?: Maybe<Bookings_History_Min_Fields>
  stddev?: Maybe<Bookings_History_Stddev_Fields>
  stddev_pop?: Maybe<Bookings_History_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bookings_History_Stddev_Samp_Fields>
  sum?: Maybe<Bookings_History_Sum_Fields>
  var_pop?: Maybe<Bookings_History_Var_Pop_Fields>
  var_samp?: Maybe<Bookings_History_Var_Samp_Fields>
  variance?: Maybe<Bookings_History_Variance_Fields>
}

/** aggregate fields of "bookings_history" */
export type Bookings_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_History_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings_history" */
export type Bookings_History_Aggregate_Order_By = {
  avg?: Maybe<Bookings_History_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Bookings_History_Max_Order_By>
  min?: Maybe<Bookings_History_Min_Order_By>
  stddev?: Maybe<Bookings_History_Stddev_Order_By>
  stddev_pop?: Maybe<Bookings_History_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Bookings_History_Stddev_Samp_Order_By>
  sum?: Maybe<Bookings_History_Sum_Order_By>
  var_pop?: Maybe<Bookings_History_Var_Pop_Order_By>
  var_samp?: Maybe<Bookings_History_Var_Samp_Order_By>
  variance?: Maybe<Bookings_History_Variance_Order_By>
}

/** input type for inserting array relation for remote table "bookings_history" */
export type Bookings_History_Arr_Rel_Insert_Input = {
  data: Array<Bookings_History_Insert_Input>
  on_conflict?: Maybe<Bookings_History_On_Conflict>
}

/** aggregate avg on columns */
export type Bookings_History_Avg_Fields = {
  __typename?: 'bookings_history_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings_history" */
export type Bookings_History_Avg_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "bookings_history". All fields are combined with a logical 'AND'. */
export type Bookings_History_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_History_Bool_Exp>>>
  _not?: Maybe<Bookings_History_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bookings_History_Bool_Exp>>>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  changed_by?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  status?: Maybe<Enum_Bookings_Status_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "bookings_history" */
export enum Bookings_History_Constraint {
  /** unique or primary key constraint */
  BookingsHistoryPkey = 'bookings_history_pkey',
}

/** input type for incrementing integer column in table "bookings_history" */
export type Bookings_History_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>
  changed_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "bookings_history" */
export type Bookings_History_Insert_Input = {
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  changed_by?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['enum_bookings_status']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Bookings_History_Max_Fields = {
  __typename?: 'bookings_history_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  changed_by?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "bookings_history" */
export type Bookings_History_Max_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bookings_History_Min_Fields = {
  __typename?: 'bookings_history_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  changed_by?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "bookings_history" */
export type Bookings_History_Min_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "bookings_history" */
export type Bookings_History_Mutation_Response = {
  __typename?: 'bookings_history_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bookings_History>
}

/** input type for inserting object relation for remote table "bookings_history" */
export type Bookings_History_Obj_Rel_Insert_Input = {
  data: Bookings_History_Insert_Input
  on_conflict?: Maybe<Bookings_History_On_Conflict>
}

/** on conflict condition type for table "bookings_history" */
export type Bookings_History_On_Conflict = {
  constraint: Bookings_History_Constraint
  update_columns: Array<Bookings_History_Update_Column>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** ordering options when selecting data from "bookings_history" */
export type Bookings_History_Order_By = {
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "bookings_history" */
export type Bookings_History_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "bookings_history" */
export enum Bookings_History_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  ChangedBy = 'changed_by',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "bookings_history" */
export type Bookings_History_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>
  changed_by?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['enum_bookings_status']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Bookings_History_Stddev_Fields = {
  __typename?: 'bookings_history_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings_history" */
export type Bookings_History_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bookings_History_Stddev_Pop_Fields = {
  __typename?: 'bookings_history_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings_history" */
export type Bookings_History_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bookings_History_Stddev_Samp_Fields = {
  __typename?: 'bookings_history_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings_history" */
export type Bookings_History_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Bookings_History_Sum_Fields = {
  __typename?: 'bookings_history_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  changed_by?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "bookings_history" */
export type Bookings_History_Sum_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "bookings_history" */
export enum Bookings_History_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  ChangedBy = 'changed_by',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Bookings_History_Var_Pop_Fields = {
  __typename?: 'bookings_history_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings_history" */
export type Bookings_History_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bookings_History_Var_Samp_Fields = {
  __typename?: 'bookings_history_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings_history" */
export type Bookings_History_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Bookings_History_Variance_Fields = {
  __typename?: 'bookings_history_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  changed_by?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings_history" */
export type Bookings_History_Variance_Order_By = {
  booking_id?: Maybe<Order_By>
  changed_by?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** input type for incrementing integer column in table "bookings" */
export type Bookings_Inc_Input = {
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  building_address_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  commitment_months?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contract_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  deposit_amount?: Maybe<Scalars['float8']>
  discounted_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  prepaid_months?: Maybe<Scalars['Int']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  unit_height?: Maybe<Scalars['float8']>
  unit_id?: Maybe<Scalars['Int']>
  unit_length?: Maybe<Scalars['float8']>
  unit_price_per_month?: Maybe<Scalars['float8']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_width?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "bookings" */
export type Bookings_Insert_Input = {
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  applied_taxes?: Maybe<Applied_Taxes_Arr_Rel_Insert_Input>
  auto_renewal?: Maybe<Scalars['Boolean']>
  base_amount?: Maybe<Scalars['float8']>
  booking_contract?: Maybe<Booking_Contracts_Obj_Rel_Insert_Input>
  bookings_building_address?: Maybe<Bookings_Building_Addresses_Obj_Rel_Insert_Input>
  bookings_histories?: Maybe<Bookings_History_Arr_Rel_Insert_Input>
  bookings_promotions?: Maybe<Bookings_Promotions_Arr_Rel_Insert_Input>
  building?: Maybe<Buildings_Obj_Rel_Insert_Input>
  building_address_id?: Maybe<Scalars['Int']>
  building_contact_name?: Maybe<Scalars['String']>
  building_contact_number?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  building_name?: Maybe<Scalars['String']>
  city?: Maybe<Cities_Obj_Rel_Insert_Input>
  commitment_months?: Maybe<Scalars['Int']>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  contract_id?: Maybe<Scalars['Int']>
  country?: Maybe<Countries_Obj_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_email?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['Int']>
  customer_phone?: Maybe<Scalars['String']>
  customer_street?: Maybe<Scalars['String']>
  customer_vat_number?: Maybe<Scalars['String']>
  customer_zip_code?: Maybe<Scalars['String']>
  deposit_amount?: Maybe<Scalars['float8']>
  deposit_refunded_date?: Maybe<Scalars['timestamptz']>
  discounted_amount?: Maybe<Scalars['float8']>
  has_admin_fee?: Maybe<Scalars['Boolean']>
  has_custom_price?: Maybe<Scalars['Boolean']>
  history_logs?: Maybe<History_Logs_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  insurance?: Maybe<Insurances_Obj_Rel_Insert_Input>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  is_deposit_refunded?: Maybe<Scalars['Boolean']>
  is_insured?: Maybe<Scalars['Boolean']>
  is_prepaid?: Maybe<Scalars['Boolean']>
  is_termination_requested?: Maybe<Scalars['Boolean']>
  move_in_date?: Maybe<Scalars['timestamptz']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  promotions_redeems?: Maybe<Promotions_Redeem_Arr_Rel_Insert_Input>
  renewals?: Maybe<Renewals_Arr_Rel_Insert_Input>
  show_id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_bookings_status']>
  sub_total_amount?: Maybe<Scalars['float8']>
  terminations?: Maybe<Terminations_Arr_Rel_Insert_Input>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>
  unit?: Maybe<Units_Obj_Rel_Insert_Input>
  unit_features?: Maybe<Scalars['json']>
  unit_height?: Maybe<Scalars['float8']>
  unit_id?: Maybe<Scalars['Int']>
  unit_length?: Maybe<Scalars['float8']>
  unit_measurement?: Maybe<Scalars['enum_measurement_unit']>
  unit_name?: Maybe<Scalars['String']>
  unit_price_per_month?: Maybe<Scalars['float8']>
  unit_subtype?: Maybe<Unit_Subtypes_Obj_Rel_Insert_Input>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_type_name?: Maybe<Scalars['String']>
  unit_width?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Bookings_Max_Fields = {
  __typename?: 'bookings_max_fields'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  building_address_id?: Maybe<Scalars['Int']>
  building_contact_name?: Maybe<Scalars['String']>
  building_contact_number?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  building_name?: Maybe<Scalars['String']>
  commitment_months?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contract_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_email?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['Int']>
  customer_phone?: Maybe<Scalars['String']>
  customer_street?: Maybe<Scalars['String']>
  customer_vat_number?: Maybe<Scalars['String']>
  customer_zip_code?: Maybe<Scalars['String']>
  deposit_amount?: Maybe<Scalars['float8']>
  deposit_refunded_date?: Maybe<Scalars['timestamptz']>
  discounted_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  move_in_date?: Maybe<Scalars['timestamptz']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  show_id?: Maybe<Scalars['String']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  unit_height?: Maybe<Scalars['float8']>
  unit_id?: Maybe<Scalars['Int']>
  unit_length?: Maybe<Scalars['float8']>
  unit_name?: Maybe<Scalars['String']>
  unit_price_per_month?: Maybe<Scalars['float8']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_type_name?: Maybe<Scalars['String']>
  unit_width?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "bookings" */
export type Bookings_Max_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_contact_name?: Maybe<Order_By>
  building_contact_number?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  building_name?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_email?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  customer_phone?: Maybe<Order_By>
  customer_street?: Maybe<Order_By>
  customer_vat_number?: Maybe<Order_By>
  customer_zip_code?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  deposit_refunded_date?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  move_in_date?: Maybe<Order_By>
  move_out_date?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_name?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_type_name?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bookings_Min_Fields = {
  __typename?: 'bookings_min_fields'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  building_address_id?: Maybe<Scalars['Int']>
  building_contact_name?: Maybe<Scalars['String']>
  building_contact_number?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  building_name?: Maybe<Scalars['String']>
  commitment_months?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contract_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_email?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['Int']>
  customer_phone?: Maybe<Scalars['String']>
  customer_street?: Maybe<Scalars['String']>
  customer_vat_number?: Maybe<Scalars['String']>
  customer_zip_code?: Maybe<Scalars['String']>
  deposit_amount?: Maybe<Scalars['float8']>
  deposit_refunded_date?: Maybe<Scalars['timestamptz']>
  discounted_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  move_in_date?: Maybe<Scalars['timestamptz']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  show_id?: Maybe<Scalars['String']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  unit_height?: Maybe<Scalars['float8']>
  unit_id?: Maybe<Scalars['Int']>
  unit_length?: Maybe<Scalars['float8']>
  unit_name?: Maybe<Scalars['String']>
  unit_price_per_month?: Maybe<Scalars['float8']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_type_name?: Maybe<Scalars['String']>
  unit_width?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "bookings" */
export type Bookings_Min_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_contact_name?: Maybe<Order_By>
  building_contact_number?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  building_name?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_email?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  customer_phone?: Maybe<Order_By>
  customer_street?: Maybe<Order_By>
  customer_vat_number?: Maybe<Order_By>
  customer_zip_code?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  deposit_refunded_date?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  move_in_date?: Maybe<Order_By>
  move_out_date?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_name?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_type_name?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "bookings" */
export type Bookings_Mutation_Response = {
  __typename?: 'bookings_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bookings>
}

/** input type for inserting object relation for remote table "bookings" */
export type Bookings_Obj_Rel_Insert_Input = {
  data: Bookings_Insert_Input
  on_conflict?: Maybe<Bookings_On_Conflict>
}

/** on conflict condition type for table "bookings" */
export type Bookings_On_Conflict = {
  constraint: Bookings_Constraint
  update_columns: Array<Bookings_Update_Column>
  where?: Maybe<Bookings_Bool_Exp>
}

/** ordering options when selecting data from "bookings" */
export type Bookings_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  applied_taxes_aggregate?: Maybe<Applied_Taxes_Aggregate_Order_By>
  auto_renewal?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_contract?: Maybe<Booking_Contracts_Order_By>
  bookings_building_address?: Maybe<Bookings_Building_Addresses_Order_By>
  bookings_histories_aggregate?: Maybe<Bookings_History_Aggregate_Order_By>
  bookings_promotions_aggregate?: Maybe<Bookings_Promotions_Aggregate_Order_By>
  building?: Maybe<Buildings_Order_By>
  building_address_id?: Maybe<Order_By>
  building_contact_name?: Maybe<Order_By>
  building_contact_number?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  building_name?: Maybe<Order_By>
  city?: Maybe<Cities_Order_By>
  commitment_months?: Maybe<Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  country?: Maybe<Countries_Order_By>
  created_at?: Maybe<Order_By>
  currency?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  customer?: Maybe<Customers_Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_email?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  customer_phone?: Maybe<Order_By>
  customer_street?: Maybe<Order_By>
  customer_vat_number?: Maybe<Order_By>
  customer_zip_code?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  deposit_refunded_date?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  has_admin_fee?: Maybe<Order_By>
  has_custom_price?: Maybe<Order_By>
  history_logs_aggregate?: Maybe<History_Logs_Aggregate_Order_By>
  id?: Maybe<Order_By>
  insurance?: Maybe<Insurances_Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  is_deposit_refunded?: Maybe<Order_By>
  is_insured?: Maybe<Order_By>
  is_prepaid?: Maybe<Order_By>
  is_termination_requested?: Maybe<Order_By>
  move_in_date?: Maybe<Order_By>
  move_out_date?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  promotions_redeems_aggregate?: Maybe<Promotions_Redeem_Aggregate_Order_By>
  renewals_aggregate?: Maybe<Renewals_Aggregate_Order_By>
  show_id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  terminations_aggregate?: Maybe<Terminations_Aggregate_Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>
  unit?: Maybe<Units_Order_By>
  unit_features?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_measurement?: Maybe<Order_By>
  unit_name?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype?: Maybe<Unit_Subtypes_Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_type_name?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "bookings" */
export type Bookings_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_Promotions = {
  __typename?: 'bookings_promotions'
  /** An object relationship */
  booking: Bookings
  booking_id: Scalars['Int']
  /** An array relationship */
  bookings_promotions_customer_buys: Array<Bookings_Promotions_Customer_Buys>
  /** An aggregated array relationship */
  bookings_promotions_customer_buys_aggregate: Bookings_Promotions_Customer_Buys_Aggregate
  /** An array relationship */
  bookings_promotions_customer_gets: Array<Bookings_Promotions_Customer_Gets>
  /** An aggregated array relationship */
  bookings_promotions_customer_gets_aggregate: Bookings_Promotions_Customer_Gets_Aggregate
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  format: Scalars['enum_promotions_format']
  id: Scalars['Int']
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An object relationship */
  promotion: Promotions
  promotion_id: Scalars['Int']
  /** An array relationship */
  promotions_redeems: Array<Promotions_Redeem>
  /** An aggregated array relationship */
  promotions_redeems_aggregate: Promotions_Redeem_Aggregate
  /** An array relationship */
  renewals: Array<Renewals>
  /** An aggregated array relationship */
  renewals_aggregate: Renewals_Aggregate
  start_date: Scalars['timestamptz']
  status: Scalars['enum_promotions_status']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsBookings_Promotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsBookings_Promotions_Customer_Buys_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
    where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
  }

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsBookings_Promotions_Customer_GetsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsBookings_Promotions_Customer_Gets_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Bookings_Promotions_Customer_Gets_Order_By>>
    where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
  }

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsPromotions_RedeemsArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsPromotions_Redeems_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** columns and relationships of "bookings_promotions" */
export type Bookings_PromotionsRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** aggregated selection of "bookings_promotions" */
export type Bookings_Promotions_Aggregate = {
  __typename?: 'bookings_promotions_aggregate'
  aggregate?: Maybe<Bookings_Promotions_Aggregate_Fields>
  nodes: Array<Bookings_Promotions>
}

/** aggregate fields of "bookings_promotions" */
export type Bookings_Promotions_Aggregate_Fields = {
  __typename?: 'bookings_promotions_aggregate_fields'
  avg?: Maybe<Bookings_Promotions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bookings_Promotions_Max_Fields>
  min?: Maybe<Bookings_Promotions_Min_Fields>
  stddev?: Maybe<Bookings_Promotions_Stddev_Fields>
  stddev_pop?: Maybe<Bookings_Promotions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bookings_Promotions_Stddev_Samp_Fields>
  sum?: Maybe<Bookings_Promotions_Sum_Fields>
  var_pop?: Maybe<Bookings_Promotions_Var_Pop_Fields>
  var_samp?: Maybe<Bookings_Promotions_Var_Samp_Fields>
  variance?: Maybe<Bookings_Promotions_Variance_Fields>
}

/** aggregate fields of "bookings_promotions" */
export type Bookings_Promotions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_Promotions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings_promotions" */
export type Bookings_Promotions_Aggregate_Order_By = {
  avg?: Maybe<Bookings_Promotions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Bookings_Promotions_Max_Order_By>
  min?: Maybe<Bookings_Promotions_Min_Order_By>
  stddev?: Maybe<Bookings_Promotions_Stddev_Order_By>
  stddev_pop?: Maybe<Bookings_Promotions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Bookings_Promotions_Stddev_Samp_Order_By>
  sum?: Maybe<Bookings_Promotions_Sum_Order_By>
  var_pop?: Maybe<Bookings_Promotions_Var_Pop_Order_By>
  var_samp?: Maybe<Bookings_Promotions_Var_Samp_Order_By>
  variance?: Maybe<Bookings_Promotions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "bookings_promotions" */
export type Bookings_Promotions_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Promotions_Insert_Input>
  on_conflict?: Maybe<Bookings_Promotions_On_Conflict>
}

/** aggregate avg on columns */
export type Bookings_Promotions_Avg_Fields = {
  __typename?: 'bookings_promotions_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Avg_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "bookings_promotions". All fields are combined with a logical 'AND'. */
export type Bookings_Promotions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_Promotions_Bool_Exp>>>
  _not?: Maybe<Bookings_Promotions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bookings_Promotions_Bool_Exp>>>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
  bookings_promotions_customer_gets?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
  code?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  description_en?: Maybe<String_Comparison_Exp>
  description_th?: Maybe<String_Comparison_Exp>
  end_date?: Maybe<Timestamptz_Comparison_Exp>
  format?: Maybe<Enum_Promotions_Format_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  max?: Maybe<Int_Comparison_Exp>
  max_per_customer?: Maybe<Int_Comparison_Exp>
  max_per_day?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  promotion?: Maybe<Promotions_Bool_Exp>
  promotion_id?: Maybe<Int_Comparison_Exp>
  promotions_redeems?: Maybe<Promotions_Redeem_Bool_Exp>
  renewals?: Maybe<Renewals_Bool_Exp>
  start_date?: Maybe<Timestamptz_Comparison_Exp>
  status?: Maybe<Enum_Promotions_Status_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "bookings_promotions" */
export enum Bookings_Promotions_Constraint {
  /** unique or primary key constraint */
  BookingsPromotionsPkey = 'bookings_promotions_pkey',
}

/** columns and relationships of "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys = {
  __typename?: 'bookings_promotions_customer_buys'
  booking_promotion_id: Scalars['Int']
  /** An object relationship */
  bookings_promotion: Bookings_Promotions
  /** An object relationship */
  building?: Maybe<Buildings>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  type: Scalars['enum_promotions_customer_buys_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** aggregated selection of "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Aggregate = {
  __typename?: 'bookings_promotions_customer_buys_aggregate'
  aggregate?: Maybe<Bookings_Promotions_Customer_Buys_Aggregate_Fields>
  nodes: Array<Bookings_Promotions_Customer_Buys>
}

/** aggregate fields of "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Aggregate_Fields = {
  __typename?: 'bookings_promotions_customer_buys_aggregate_fields'
  avg?: Maybe<Bookings_Promotions_Customer_Buys_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bookings_Promotions_Customer_Buys_Max_Fields>
  min?: Maybe<Bookings_Promotions_Customer_Buys_Min_Fields>
  stddev?: Maybe<Bookings_Promotions_Customer_Buys_Stddev_Fields>
  stddev_pop?: Maybe<Bookings_Promotions_Customer_Buys_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bookings_Promotions_Customer_Buys_Stddev_Samp_Fields>
  sum?: Maybe<Bookings_Promotions_Customer_Buys_Sum_Fields>
  var_pop?: Maybe<Bookings_Promotions_Customer_Buys_Var_Pop_Fields>
  var_samp?: Maybe<Bookings_Promotions_Customer_Buys_Var_Samp_Fields>
  variance?: Maybe<Bookings_Promotions_Customer_Buys_Variance_Fields>
}

/** aggregate fields of "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Aggregate_Order_By = {
  avg?: Maybe<Bookings_Promotions_Customer_Buys_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Bookings_Promotions_Customer_Buys_Max_Order_By>
  min?: Maybe<Bookings_Promotions_Customer_Buys_Min_Order_By>
  stddev?: Maybe<Bookings_Promotions_Customer_Buys_Stddev_Order_By>
  stddev_pop?: Maybe<Bookings_Promotions_Customer_Buys_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Bookings_Promotions_Customer_Buys_Stddev_Samp_Order_By>
  sum?: Maybe<Bookings_Promotions_Customer_Buys_Sum_Order_By>
  var_pop?: Maybe<Bookings_Promotions_Customer_Buys_Var_Pop_Order_By>
  var_samp?: Maybe<Bookings_Promotions_Customer_Buys_Var_Samp_Order_By>
  variance?: Maybe<Bookings_Promotions_Customer_Buys_Variance_Order_By>
}

/** input type for inserting array relation for remote table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Promotions_Customer_Buys_Insert_Input>
  on_conflict?: Maybe<Bookings_Promotions_Customer_Buys_On_Conflict>
}

/** aggregate avg on columns */
export type Bookings_Promotions_Customer_Buys_Avg_Fields = {
  __typename?: 'bookings_promotions_customer_buys_avg_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Avg_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "bookings_promotions_customer_buys". All fields are combined with a logical 'AND'. */
export type Bookings_Promotions_Customer_Buys_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>>>
  _not?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>>>
  booking_promotion_id?: Maybe<Int_Comparison_Exp>
  bookings_promotion?: Maybe<Bookings_Promotions_Bool_Exp>
  building?: Maybe<Buildings_Bool_Exp>
  building_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  type?: Maybe<Enum_Promotions_Customer_Buys_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "bookings_promotions_customer_buys" */
export enum Bookings_Promotions_Customer_Buys_Constraint {
  /** unique or primary key constraint */
  BookingsPromotionsCustomerBuysPkey = 'bookings_promotions_customer_buys_pkey',
}

/** input type for incrementing integer column in table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Inc_Input = {
  booking_promotion_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Insert_Input = {
  booking_promotion_id?: Maybe<Scalars['Int']>
  bookings_promotion?: Maybe<Bookings_Promotions_Obj_Rel_Insert_Input>
  building?: Maybe<Buildings_Obj_Rel_Insert_Input>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Bookings_Promotions_Customer_Buys_Max_Fields = {
  __typename?: 'bookings_promotions_customer_buys_max_fields'
  booking_promotion_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Max_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bookings_Promotions_Customer_Buys_Min_Fields = {
  __typename?: 'bookings_promotions_customer_buys_min_fields'
  booking_promotion_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Min_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Mutation_Response = {
  __typename?: 'bookings_promotions_customer_buys_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bookings_Promotions_Customer_Buys>
}

/** input type for inserting object relation for remote table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Obj_Rel_Insert_Input = {
  data: Bookings_Promotions_Customer_Buys_Insert_Input
  on_conflict?: Maybe<Bookings_Promotions_Customer_Buys_On_Conflict>
}

/** on conflict condition type for table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_On_Conflict = {
  constraint: Bookings_Promotions_Customer_Buys_Constraint
  update_columns: Array<Bookings_Promotions_Customer_Buys_Update_Column>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** ordering options when selecting data from "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  bookings_promotion?: Maybe<Bookings_Promotions_Order_By>
  building?: Maybe<Buildings_Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "bookings_promotions_customer_buys" */
export enum Bookings_Promotions_Customer_Buys_Select_Column {
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Set_Input = {
  booking_promotion_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Bookings_Promotions_Customer_Buys_Stddev_Fields = {
  __typename?: 'bookings_promotions_customer_buys_stddev_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Stddev_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bookings_Promotions_Customer_Buys_Stddev_Pop_Fields = {
  __typename?: 'bookings_promotions_customer_buys_stddev_pop_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Stddev_Pop_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bookings_Promotions_Customer_Buys_Stddev_Samp_Fields = {
  __typename?: 'bookings_promotions_customer_buys_stddev_samp_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Stddev_Samp_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Bookings_Promotions_Customer_Buys_Sum_Fields = {
  __typename?: 'bookings_promotions_customer_buys_sum_fields'
  booking_promotion_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Sum_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "bookings_promotions_customer_buys" */
export enum Bookings_Promotions_Customer_Buys_Update_Column {
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Bookings_Promotions_Customer_Buys_Var_Pop_Fields = {
  __typename?: 'bookings_promotions_customer_buys_var_pop_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Var_Pop_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bookings_Promotions_Customer_Buys_Var_Samp_Fields = {
  __typename?: 'bookings_promotions_customer_buys_var_samp_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Var_Samp_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Bookings_Promotions_Customer_Buys_Variance_Fields = {
  __typename?: 'bookings_promotions_customer_buys_variance_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings_promotions_customer_buys" */
export type Bookings_Promotions_Customer_Buys_Variance_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** columns and relationships of "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets = {
  __typename?: 'bookings_promotions_customer_gets'
  booking_promotion_id: Scalars['Int']
  /** An object relationship */
  bookings_promotion: Bookings_Promotions
  created_at?: Maybe<Scalars['timestamptz']>
  for_type: Scalars['enum_promotions_customer_gets_for_type']
  for_value: Scalars['Int']
  id: Scalars['Int']
  max_amount_per_booking?: Maybe<Scalars['float8']>
  type: Scalars['enum_promotions_customer_gets_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** aggregated selection of "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Aggregate = {
  __typename?: 'bookings_promotions_customer_gets_aggregate'
  aggregate?: Maybe<Bookings_Promotions_Customer_Gets_Aggregate_Fields>
  nodes: Array<Bookings_Promotions_Customer_Gets>
}

/** aggregate fields of "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Aggregate_Fields = {
  __typename?: 'bookings_promotions_customer_gets_aggregate_fields'
  avg?: Maybe<Bookings_Promotions_Customer_Gets_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Bookings_Promotions_Customer_Gets_Max_Fields>
  min?: Maybe<Bookings_Promotions_Customer_Gets_Min_Fields>
  stddev?: Maybe<Bookings_Promotions_Customer_Gets_Stddev_Fields>
  stddev_pop?: Maybe<Bookings_Promotions_Customer_Gets_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bookings_Promotions_Customer_Gets_Stddev_Samp_Fields>
  sum?: Maybe<Bookings_Promotions_Customer_Gets_Sum_Fields>
  var_pop?: Maybe<Bookings_Promotions_Customer_Gets_Var_Pop_Fields>
  var_samp?: Maybe<Bookings_Promotions_Customer_Gets_Var_Samp_Fields>
  variance?: Maybe<Bookings_Promotions_Customer_Gets_Variance_Fields>
}

/** aggregate fields of "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Aggregate_Order_By = {
  avg?: Maybe<Bookings_Promotions_Customer_Gets_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Bookings_Promotions_Customer_Gets_Max_Order_By>
  min?: Maybe<Bookings_Promotions_Customer_Gets_Min_Order_By>
  stddev?: Maybe<Bookings_Promotions_Customer_Gets_Stddev_Order_By>
  stddev_pop?: Maybe<Bookings_Promotions_Customer_Gets_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Bookings_Promotions_Customer_Gets_Stddev_Samp_Order_By>
  sum?: Maybe<Bookings_Promotions_Customer_Gets_Sum_Order_By>
  var_pop?: Maybe<Bookings_Promotions_Customer_Gets_Var_Pop_Order_By>
  var_samp?: Maybe<Bookings_Promotions_Customer_Gets_Var_Samp_Order_By>
  variance?: Maybe<Bookings_Promotions_Customer_Gets_Variance_Order_By>
}

/** input type for inserting array relation for remote table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Promotions_Customer_Gets_Insert_Input>
  on_conflict?: Maybe<Bookings_Promotions_Customer_Gets_On_Conflict>
}

/** aggregate avg on columns */
export type Bookings_Promotions_Customer_Gets_Avg_Fields = {
  __typename?: 'bookings_promotions_customer_gets_avg_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Avg_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "bookings_promotions_customer_gets". All fields are combined with a logical 'AND'. */
export type Bookings_Promotions_Customer_Gets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>>>
  _not?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
  _or?: Maybe<Array<Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>>>
  booking_promotion_id?: Maybe<Int_Comparison_Exp>
  bookings_promotion?: Maybe<Bookings_Promotions_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  for_type?: Maybe<Enum_Promotions_Customer_Gets_For_Type_Comparison_Exp>
  for_value?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  max_amount_per_booking?: Maybe<Float8_Comparison_Exp>
  type?: Maybe<Enum_Promotions_Customer_Gets_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "bookings_promotions_customer_gets" */
export enum Bookings_Promotions_Customer_Gets_Constraint {
  /** unique or primary key constraint */
  BookingsPromotionsCustomerGetsPkey = 'bookings_promotions_customer_gets_pkey',
}

/** input type for incrementing integer column in table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Inc_Input = {
  booking_promotion_id?: Maybe<Scalars['Int']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Insert_Input = {
  booking_promotion_id?: Maybe<Scalars['Int']>
  bookings_promotion?: Maybe<Bookings_Promotions_Obj_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  for_type?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  type?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Bookings_Promotions_Customer_Gets_Max_Fields = {
  __typename?: 'bookings_promotions_customer_gets_max_fields'
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Max_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bookings_Promotions_Customer_Gets_Min_Fields = {
  __typename?: 'bookings_promotions_customer_gets_min_fields'
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Min_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Mutation_Response = {
  __typename?: 'bookings_promotions_customer_gets_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bookings_Promotions_Customer_Gets>
}

/** input type for inserting object relation for remote table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Obj_Rel_Insert_Input = {
  data: Bookings_Promotions_Customer_Gets_Insert_Input
  on_conflict?: Maybe<Bookings_Promotions_Customer_Gets_On_Conflict>
}

/** on conflict condition type for table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_On_Conflict = {
  constraint: Bookings_Promotions_Customer_Gets_Constraint
  update_columns: Array<Bookings_Promotions_Customer_Gets_Update_Column>
  where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
}

/** ordering options when selecting data from "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  bookings_promotion?: Maybe<Bookings_Promotions_Order_By>
  created_at?: Maybe<Order_By>
  for_type?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "bookings_promotions_customer_gets" */
export enum Bookings_Promotions_Customer_Gets_Select_Column {
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ForType = 'for_type',
  /** column name */
  ForValue = 'for_value',
  /** column name */
  Id = 'id',
  /** column name */
  MaxAmountPerBooking = 'max_amount_per_booking',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Set_Input = {
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  for_type?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  type?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Bookings_Promotions_Customer_Gets_Stddev_Fields = {
  __typename?: 'bookings_promotions_customer_gets_stddev_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Stddev_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bookings_Promotions_Customer_Gets_Stddev_Pop_Fields = {
  __typename?: 'bookings_promotions_customer_gets_stddev_pop_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Stddev_Pop_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bookings_Promotions_Customer_Gets_Stddev_Samp_Fields = {
  __typename?: 'bookings_promotions_customer_gets_stddev_samp_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Stddev_Samp_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Bookings_Promotions_Customer_Gets_Sum_Fields = {
  __typename?: 'bookings_promotions_customer_gets_sum_fields'
  booking_promotion_id?: Maybe<Scalars['Int']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Sum_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "bookings_promotions_customer_gets" */
export enum Bookings_Promotions_Customer_Gets_Update_Column {
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ForType = 'for_type',
  /** column name */
  ForValue = 'for_value',
  /** column name */
  Id = 'id',
  /** column name */
  MaxAmountPerBooking = 'max_amount_per_booking',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Bookings_Promotions_Customer_Gets_Var_Pop_Fields = {
  __typename?: 'bookings_promotions_customer_gets_var_pop_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Var_Pop_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bookings_Promotions_Customer_Gets_Var_Samp_Fields = {
  __typename?: 'bookings_promotions_customer_gets_var_samp_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Var_Samp_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Bookings_Promotions_Customer_Gets_Variance_Fields = {
  __typename?: 'bookings_promotions_customer_gets_variance_fields'
  booking_promotion_id?: Maybe<Scalars['Float']>
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings_promotions_customer_gets" */
export type Bookings_Promotions_Customer_Gets_Variance_Order_By = {
  booking_promotion_id?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** input type for incrementing integer column in table "bookings_promotions" */
export type Bookings_Promotions_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "bookings_promotions" */
export type Bookings_Promotions_Insert_Input = {
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Arr_Rel_Insert_Input>
  bookings_promotions_customer_gets?: Maybe<Bookings_Promotions_Customer_Gets_Arr_Rel_Insert_Input>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  format?: Maybe<Scalars['enum_promotions_format']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotion?: Maybe<Promotions_Obj_Rel_Insert_Input>
  promotion_id?: Maybe<Scalars['Int']>
  promotions_redeems?: Maybe<Promotions_Redeem_Arr_Rel_Insert_Input>
  renewals?: Maybe<Renewals_Arr_Rel_Insert_Input>
  start_date?: Maybe<Scalars['timestamptz']>
  status?: Maybe<Scalars['enum_promotions_status']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Bookings_Promotions_Max_Fields = {
  __typename?: 'bookings_promotions_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotion_id?: Maybe<Scalars['Int']>
  start_date?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Max_Order_By = {
  booking_id?: Maybe<Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  end_date?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  start_date?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Bookings_Promotions_Min_Fields = {
  __typename?: 'bookings_promotions_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotion_id?: Maybe<Scalars['Int']>
  start_date?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Min_Order_By = {
  booking_id?: Maybe<Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  end_date?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  start_date?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "bookings_promotions" */
export type Bookings_Promotions_Mutation_Response = {
  __typename?: 'bookings_promotions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Bookings_Promotions>
}

/** input type for inserting object relation for remote table "bookings_promotions" */
export type Bookings_Promotions_Obj_Rel_Insert_Input = {
  data: Bookings_Promotions_Insert_Input
  on_conflict?: Maybe<Bookings_Promotions_On_Conflict>
}

/** on conflict condition type for table "bookings_promotions" */
export type Bookings_Promotions_On_Conflict = {
  constraint: Bookings_Promotions_Constraint
  update_columns: Array<Bookings_Promotions_Update_Column>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** ordering options when selecting data from "bookings_promotions" */
export type Bookings_Promotions_Order_By = {
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  bookings_promotions_customer_buys_aggregate?: Maybe<Bookings_Promotions_Customer_Buys_Aggregate_Order_By>
  bookings_promotions_customer_gets_aggregate?: Maybe<Bookings_Promotions_Customer_Gets_Aggregate_Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  end_date?: Maybe<Order_By>
  format?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  promotion?: Maybe<Promotions_Order_By>
  promotion_id?: Maybe<Order_By>
  promotions_redeems_aggregate?: Maybe<Promotions_Redeem_Aggregate_Order_By>
  renewals_aggregate?: Maybe<Renewals_Aggregate_Order_By>
  start_date?: Maybe<Order_By>
  status?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "bookings_promotions" */
export type Bookings_Promotions_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "bookings_promotions" */
export enum Bookings_Promotions_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  MaxPerCustomer = 'max_per_customer',
  /** column name */
  MaxPerDay = 'max_per_day',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "bookings_promotions" */
export type Bookings_Promotions_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  format?: Maybe<Scalars['enum_promotions_format']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotion_id?: Maybe<Scalars['Int']>
  start_date?: Maybe<Scalars['timestamptz']>
  status?: Maybe<Scalars['enum_promotions_status']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Bookings_Promotions_Stddev_Fields = {
  __typename?: 'bookings_promotions_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bookings_Promotions_Stddev_Pop_Fields = {
  __typename?: 'bookings_promotions_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bookings_Promotions_Stddev_Samp_Fields = {
  __typename?: 'bookings_promotions_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Bookings_Promotions_Sum_Fields = {
  __typename?: 'bookings_promotions_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Sum_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** update columns of table "bookings_promotions" */
export enum Bookings_Promotions_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  Max = 'max',
  /** column name */
  MaxPerCustomer = 'max_per_customer',
  /** column name */
  MaxPerDay = 'max_per_day',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Bookings_Promotions_Var_Pop_Fields = {
  __typename?: 'bookings_promotions_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bookings_Promotions_Var_Samp_Fields = {
  __typename?: 'bookings_promotions_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Bookings_Promotions_Variance_Fields = {
  __typename?: 'bookings_promotions_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings_promotions" */
export type Bookings_Promotions_Variance_Order_By = {
  booking_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** select columns of table "bookings" */
export enum Bookings_Select_Column {
  /** column name */
  AdminFeeAmount = 'admin_fee_amount',
  /** column name */
  AdminFeeTax = 'admin_fee_tax',
  /** column name */
  AutoRenewal = 'auto_renewal',
  /** column name */
  BaseAmount = 'base_amount',
  /** column name */
  BuildingAddressId = 'building_address_id',
  /** column name */
  BuildingContactName = 'building_contact_name',
  /** column name */
  Buildingcontact_number = 'building_contact_number',
  /** column name */
  building_id = 'building_id',
  /** column name */
  BuildingName = 'building_name',
  /** column name */
  CommitmentMonths = 'commitment_months',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  CustomerCityId = 'customer_city_id',
  /** column name */
  CustomerCountryId = 'customer_country_id',
  /** column name */
  CustomerEmail = 'customer_email',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  CustomerPhone = 'customer_phone',
  /** column name */
  CustomerStreet = 'customer_street',
  /** column name */
  CustomerVatNumber = 'customer_vat_number',
  /** column name */
  CustomerZipCode = 'customer_zip_code',
  /** column name */
  DepositAmount = 'deposit_amount',
  /** column name */
  DepositRefundedDate = 'deposit_refunded_date',
  /** column name */
  DiscountedAmount = 'discounted_amount',
  /** column name */
  HasAdminFee = 'has_admin_fee',
  /** column name */
  HasCustomPrice = 'has_custom_price',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceAmount = 'insurance_amount',
  /** column name */
  InsuranceId = 'insurance_id',
  /** column name */
  IsDepositRefunded = 'is_deposit_refunded',
  /** column name */
  IsInsured = 'is_insured',
  /** column name */
  IsPrepaid = 'is_prepaid',
  /** column name */
  IsTerminationRequested = 'is_termination_requested',
  /** column name */
  MoveInDate = 'move_in_date',
  /** column name */
  MoveOutDate = 'move_out_date',
  /** column name */
  PrepaidMonths = 'prepaid_months',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubTotalAmount = 'sub_total_amount',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TotalInsuranceTaxAmount = 'total_insurance_tax_amount',
  /** column name */
  TotalRentTaxAmount = 'total_rent_tax_amount',
  /** column name */
  UnitFeatures = 'unit_features',
  /** column name */
  UnitHeight = 'unit_height',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UnitLength = 'unit_length',
  /** column name */
  UnitMeasurement = 'unit_measurement',
  /** column name */
  UnitName = 'unit_name',
  /** column name */
  UnitPricePerMonth = 'unit_price_per_month',
  /** column name */
  UnitSubtypeId = 'unit_subtype_id',
  /** column name */
  UnitTypeName = 'unit_type_name',
  /** column name */
  UnitWidth = 'unit_width',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "bookings" */
export type Bookings_Set_Input = {
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  auto_renewal?: Maybe<Scalars['Boolean']>
  base_amount?: Maybe<Scalars['float8']>
  building_address_id?: Maybe<Scalars['Int']>
  building_contact_name?: Maybe<Scalars['String']>
  building_contact_number?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  building_name?: Maybe<Scalars['String']>
  commitment_months?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contract_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_email?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['Int']>
  customer_phone?: Maybe<Scalars['String']>
  customer_street?: Maybe<Scalars['String']>
  customer_vat_number?: Maybe<Scalars['String']>
  customer_zip_code?: Maybe<Scalars['String']>
  deposit_amount?: Maybe<Scalars['float8']>
  deposit_refunded_date?: Maybe<Scalars['timestamptz']>
  discounted_amount?: Maybe<Scalars['float8']>
  has_admin_fee?: Maybe<Scalars['Boolean']>
  has_custom_price?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  is_deposit_refunded?: Maybe<Scalars['Boolean']>
  is_insured?: Maybe<Scalars['Boolean']>
  is_prepaid?: Maybe<Scalars['Boolean']>
  is_termination_requested?: Maybe<Scalars['Boolean']>
  move_in_date?: Maybe<Scalars['timestamptz']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  show_id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_bookings_status']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  unit_features?: Maybe<Scalars['json']>
  unit_height?: Maybe<Scalars['float8']>
  unit_id?: Maybe<Scalars['Int']>
  unit_length?: Maybe<Scalars['float8']>
  unit_measurement?: Maybe<Scalars['enum_measurement_unit']>
  unit_name?: Maybe<Scalars['String']>
  unit_price_per_month?: Maybe<Scalars['float8']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_type_name?: Maybe<Scalars['String']>
  unit_width?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Bookings_Stddev_Fields = {
  __typename?: 'bookings_stddev_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "bookings" */
export type Bookings_Stddev_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bookings_Stddev_Pop_Fields = {
  __typename?: 'bookings_stddev_pop_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "bookings" */
export type Bookings_Stddev_Pop_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bookings_Stddev_Samp_Fields = {
  __typename?: 'bookings_stddev_samp_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "bookings" */
export type Bookings_Stddev_Samp_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Bookings_Sum_Fields = {
  __typename?: 'bookings_sum_fields'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  building_address_id?: Maybe<Scalars['Int']>
  building_id?: Maybe<Scalars['Int']>
  commitment_months?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contract_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  customer_city_id?: Maybe<Scalars['Int']>
  customer_country_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  deposit_amount?: Maybe<Scalars['float8']>
  discounted_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  prepaid_months?: Maybe<Scalars['Int']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  unit_height?: Maybe<Scalars['float8']>
  unit_id?: Maybe<Scalars['Int']>
  unit_length?: Maybe<Scalars['float8']>
  unit_price_per_month?: Maybe<Scalars['float8']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  unit_width?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "bookings" */
export type Bookings_Sum_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** update columns of table "bookings" */
export enum Bookings_Update_Column {
  /** column name */
  AdminFeeAmount = 'admin_fee_amount',
  /** column name */
  AdminFeeTax = 'admin_fee_tax',
  /** column name */
  AutoRenewal = 'auto_renewal',
  /** column name */
  BaseAmount = 'base_amount',
  /** column name */
  BuildingAddressId = 'building_address_id',
  /** column name */
  BuildingContactName = 'building_contact_name',
  /** column name */
  Buildingcontact_number = 'building_contact_number',
  /** column name */
  building_id = 'building_id',
  /** column name */
  BuildingName = 'building_name',
  /** column name */
  CommitmentMonths = 'commitment_months',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  CustomerCityId = 'customer_city_id',
  /** column name */
  CustomerCountryId = 'customer_country_id',
  /** column name */
  CustomerEmail = 'customer_email',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  CustomerPhone = 'customer_phone',
  /** column name */
  CustomerStreet = 'customer_street',
  /** column name */
  CustomerVatNumber = 'customer_vat_number',
  /** column name */
  CustomerZipCode = 'customer_zip_code',
  /** column name */
  DepositAmount = 'deposit_amount',
  /** column name */
  DepositRefundedDate = 'deposit_refunded_date',
  /** column name */
  DiscountedAmount = 'discounted_amount',
  /** column name */
  HasAdminFee = 'has_admin_fee',
  /** column name */
  HasCustomPrice = 'has_custom_price',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceAmount = 'insurance_amount',
  /** column name */
  InsuranceId = 'insurance_id',
  /** column name */
  IsDepositRefunded = 'is_deposit_refunded',
  /** column name */
  IsInsured = 'is_insured',
  /** column name */
  IsPrepaid = 'is_prepaid',
  /** column name */
  IsTerminationRequested = 'is_termination_requested',
  /** column name */
  MoveInDate = 'move_in_date',
  /** column name */
  MoveOutDate = 'move_out_date',
  /** column name */
  PrepaidMonths = 'prepaid_months',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubTotalAmount = 'sub_total_amount',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TotalInsuranceTaxAmount = 'total_insurance_tax_amount',
  /** column name */
  TotalRentTaxAmount = 'total_rent_tax_amount',
  /** column name */
  UnitFeatures = 'unit_features',
  /** column name */
  UnitHeight = 'unit_height',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UnitLength = 'unit_length',
  /** column name */
  UnitMeasurement = 'unit_measurement',
  /** column name */
  UnitName = 'unit_name',
  /** column name */
  UnitPricePerMonth = 'unit_price_per_month',
  /** column name */
  UnitSubtypeId = 'unit_subtype_id',
  /** column name */
  UnitTypeName = 'unit_type_name',
  /** column name */
  UnitWidth = 'unit_width',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Bookings_Var_Pop_Fields = {
  __typename?: 'bookings_var_pop_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "bookings" */
export type Bookings_Var_Pop_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bookings_Var_Samp_Fields = {
  __typename?: 'bookings_var_samp_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "bookings" */
export type Bookings_Var_Samp_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Bookings_Variance_Fields = {
  __typename?: 'bookings_variance_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  building_address_id?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  commitment_months?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  contract_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_city_id?: Maybe<Scalars['Float']>
  customer_country_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discounted_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  prepaid_months?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  unit_height?: Maybe<Scalars['Float']>
  unit_id?: Maybe<Scalars['Float']>
  unit_length?: Maybe<Scalars['Float']>
  unit_price_per_month?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
  unit_width?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "bookings" */
export type Bookings_Variance_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  building_address_id?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  commitment_months?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contract_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_city_id?: Maybe<Order_By>
  customer_country_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discounted_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  prepaid_months?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  unit_height?: Maybe<Order_By>
  unit_id?: Maybe<Order_By>
  unit_length?: Maybe<Order_By>
  unit_price_per_month?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  unit_width?: Maybe<Order_By>
}

/** columns and relationships of "building_taxes" */
export type Building_Taxes = {
  __typename?: 'building_taxes'
  /** An array relationship */
  applied_taxes: Array<Applied_Taxes>
  /** An aggregated array relationship */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  building_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  buildings?: Maybe<Buildings>
  /** An object relationship */
  companies: Companies
  company_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currencies: Currencies
  currency_id: Scalars['Int']
  id: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  status: Scalars['enum_tax_status']
  type: Scalars['enum_tax_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** columns and relationships of "building_taxes" */
export type Building_TaxesApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "building_taxes" */
export type Building_TaxesApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** aggregated selection of "building_taxes" */
export type Building_Taxes_Aggregate = {
  __typename?: 'building_taxes_aggregate'
  aggregate?: Maybe<Building_Taxes_Aggregate_Fields>
  nodes: Array<Building_Taxes>
}

/** aggregate fields of "building_taxes" */
export type Building_Taxes_Aggregate_Fields = {
  __typename?: 'building_taxes_aggregate_fields'
  avg?: Maybe<Building_Taxes_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Building_Taxes_Max_Fields>
  min?: Maybe<Building_Taxes_Min_Fields>
  stddev?: Maybe<Building_Taxes_Stddev_Fields>
  stddev_pop?: Maybe<Building_Taxes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Building_Taxes_Stddev_Samp_Fields>
  sum?: Maybe<Building_Taxes_Sum_Fields>
  var_pop?: Maybe<Building_Taxes_Var_Pop_Fields>
  var_samp?: Maybe<Building_Taxes_Var_Samp_Fields>
  variance?: Maybe<Building_Taxes_Variance_Fields>
}

/** aggregate fields of "building_taxes" */
export type Building_Taxes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Building_Taxes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "building_taxes" */
export type Building_Taxes_Aggregate_Order_By = {
  avg?: Maybe<Building_Taxes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Building_Taxes_Max_Order_By>
  min?: Maybe<Building_Taxes_Min_Order_By>
  stddev?: Maybe<Building_Taxes_Stddev_Order_By>
  stddev_pop?: Maybe<Building_Taxes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Building_Taxes_Stddev_Samp_Order_By>
  sum?: Maybe<Building_Taxes_Sum_Order_By>
  var_pop?: Maybe<Building_Taxes_Var_Pop_Order_By>
  var_samp?: Maybe<Building_Taxes_Var_Samp_Order_By>
  variance?: Maybe<Building_Taxes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "building_taxes" */
export type Building_Taxes_Arr_Rel_Insert_Input = {
  data: Array<Building_Taxes_Insert_Input>
  on_conflict?: Maybe<Building_Taxes_On_Conflict>
}

/** aggregate avg on columns */
export type Building_Taxes_Avg_Fields = {
  __typename?: 'building_taxes_avg_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "building_taxes" */
export type Building_Taxes_Avg_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "building_taxes". All fields are combined with a logical 'AND'. */
export type Building_Taxes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Building_Taxes_Bool_Exp>>>
  _not?: Maybe<Building_Taxes_Bool_Exp>
  _or?: Maybe<Array<Maybe<Building_Taxes_Bool_Exp>>>
  applied_taxes?: Maybe<Applied_Taxes_Bool_Exp>
  building_id?: Maybe<Int_Comparison_Exp>
  buildings?: Maybe<Buildings_Bool_Exp>
  companies?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currencies?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  status?: Maybe<Enum_Tax_Status_Comparison_Exp>
  type?: Maybe<Enum_Tax_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "building_taxes" */
export enum Building_Taxes_Constraint {
  /** unique or primary key constraint */
  BuildingTaxesPkey = 'building_taxes_pkey',
}

/** input type for incrementing integer column in table "building_taxes" */
export type Building_Taxes_Inc_Input = {
  building_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "building_taxes" */
export type Building_Taxes_Insert_Input = {
  applied_taxes?: Maybe<Applied_Taxes_Arr_Rel_Insert_Input>
  building_id?: Maybe<Scalars['Int']>
  buildings?: Maybe<Buildings_Obj_Rel_Insert_Input>
  companies?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currencies?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_tax_status']>
  type?: Maybe<Scalars['enum_tax_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Building_Taxes_Max_Fields = {
  __typename?: 'building_taxes_max_fields'
  building_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "building_taxes" */
export type Building_Taxes_Max_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Building_Taxes_Min_Fields = {
  __typename?: 'building_taxes_min_fields'
  building_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "building_taxes" */
export type Building_Taxes_Min_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "building_taxes" */
export type Building_Taxes_Mutation_Response = {
  __typename?: 'building_taxes_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Building_Taxes>
}

/** input type for inserting object relation for remote table "building_taxes" */
export type Building_Taxes_Obj_Rel_Insert_Input = {
  data: Building_Taxes_Insert_Input
  on_conflict?: Maybe<Building_Taxes_On_Conflict>
}

/** on conflict condition type for table "building_taxes" */
export type Building_Taxes_On_Conflict = {
  constraint: Building_Taxes_Constraint
  update_columns: Array<Building_Taxes_Update_Column>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** ordering options when selecting data from "building_taxes" */
export type Building_Taxes_Order_By = {
  applied_taxes_aggregate?: Maybe<Applied_Taxes_Aggregate_Order_By>
  building_id?: Maybe<Order_By>
  buildings?: Maybe<Buildings_Order_By>
  companies?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currencies?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  status?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "building_taxes" */
export type Building_Taxes_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "building_taxes" */
export enum Building_Taxes_Select_Column {
  /** column name */
  building_id = 'building_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "building_taxes" */
export type Building_Taxes_Set_Input = {
  building_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_tax_status']>
  type?: Maybe<Scalars['enum_tax_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Building_Taxes_Stddev_Fields = {
  __typename?: 'building_taxes_stddev_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "building_taxes" */
export type Building_Taxes_Stddev_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Building_Taxes_Stddev_Pop_Fields = {
  __typename?: 'building_taxes_stddev_pop_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "building_taxes" */
export type Building_Taxes_Stddev_Pop_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Building_Taxes_Stddev_Samp_Fields = {
  __typename?: 'building_taxes_stddev_samp_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "building_taxes" */
export type Building_Taxes_Stddev_Samp_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Building_Taxes_Sum_Fields = {
  __typename?: 'building_taxes_sum_fields'
  building_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "building_taxes" */
export type Building_Taxes_Sum_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "building_taxes" */
export enum Building_Taxes_Update_Column {
  /** column name */
  building_id = 'building_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Building_Taxes_Var_Pop_Fields = {
  __typename?: 'building_taxes_var_pop_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "building_taxes" */
export type Building_Taxes_Var_Pop_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Building_Taxes_Var_Samp_Fields = {
  __typename?: 'building_taxes_var_samp_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "building_taxes" */
export type Building_Taxes_Var_Samp_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Building_Taxes_Variance_Fields = {
  __typename?: 'building_taxes_variance_fields'
  building_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "building_taxes" */
export type Building_Taxes_Variance_Order_By = {
  building_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** columns and relationships of "buildings" */
export type Buildings = {
  __typename?: 'buildings'
  /** An object relationship */
  address: Addresses
  address_id: Scalars['Int']
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An array relationship */
  bookings_promotions_customer_buys: Array<Bookings_Promotions_Customer_Buys>
  /** An aggregated array relationship */
  bookings_promotions_customer_buys_aggregate: Bookings_Promotions_Customer_Buys_Aggregate
  /** An array relationship */
  building_taxes: Array<Building_Taxes>
  /** An aggregated array relationship */
  building_taxes_aggregate: Building_Taxes_Aggregate
  /** An object relationship */
  company: Companies
  company_id: Scalars['Int']
  contact_name: Scalars['String']
  contact_number: Scalars['String']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  floors: Array<Floors>
  /** An aggregated array relationship */
  floors_aggregate: Floors_Aggregate
  id: Scalars['Int']
  images?: Maybe<Scalars['_varchar']>
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An array relationship */
  promotions_customer_buys: Array<Promotions_Customer_Buys>
  /** An aggregated array relationship */
  promotions_customer_buys_aggregate: Promotions_Customer_Buys_Aggregate
  show_id?: Maybe<Scalars['String']>
  status: Scalars['listing_statuses']
  /** An array relationship */
  unit_subtypes: Array<Unit_Subtypes>
  /** An aggregated array relationship */
  unit_subtypes_aggregate: Unit_Subtypes_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "buildings" */
export type BuildingsBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsBookings_Promotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsBookings_Promotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsBuilding_TaxesArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsBuilding_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsFloorsArgs = {
  distinct_on?: Maybe<Array<Floors_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Floors_Order_By>>
  where?: Maybe<Floors_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsFloors_AggregateArgs = {
  distinct_on?: Maybe<Array<Floors_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Floors_Order_By>>
  where?: Maybe<Floors_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsPromotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsPromotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsUnit_SubtypesArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** columns and relationships of "buildings" */
export type BuildingsUnit_Subtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** aggregated selection of "buildings" */
export type Buildings_Aggregate = {
  __typename?: 'buildings_aggregate'
  aggregate?: Maybe<Buildings_Aggregate_Fields>
  nodes: Array<Buildings>
}

/** aggregate fields of "buildings" */
export type Buildings_Aggregate_Fields = {
  __typename?: 'buildings_aggregate_fields'
  avg?: Maybe<Buildings_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Buildings_Max_Fields>
  min?: Maybe<Buildings_Min_Fields>
  stddev?: Maybe<Buildings_Stddev_Fields>
  stddev_pop?: Maybe<Buildings_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Buildings_Stddev_Samp_Fields>
  sum?: Maybe<Buildings_Sum_Fields>
  var_pop?: Maybe<Buildings_Var_Pop_Fields>
  var_samp?: Maybe<Buildings_Var_Samp_Fields>
  variance?: Maybe<Buildings_Variance_Fields>
}

/** aggregate fields of "buildings" */
export type Buildings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Buildings_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "buildings" */
export type Buildings_Aggregate_Order_By = {
  avg?: Maybe<Buildings_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Buildings_Max_Order_By>
  min?: Maybe<Buildings_Min_Order_By>
  stddev?: Maybe<Buildings_Stddev_Order_By>
  stddev_pop?: Maybe<Buildings_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Buildings_Stddev_Samp_Order_By>
  sum?: Maybe<Buildings_Sum_Order_By>
  var_pop?: Maybe<Buildings_Var_Pop_Order_By>
  var_samp?: Maybe<Buildings_Var_Samp_Order_By>
  variance?: Maybe<Buildings_Variance_Order_By>
}

/** input type for inserting array relation for remote table "buildings" */
export type Buildings_Arr_Rel_Insert_Input = {
  data: Array<Buildings_Insert_Input>
  on_conflict?: Maybe<Buildings_On_Conflict>
}

/** aggregate avg on columns */
export type Buildings_Avg_Fields = {
  __typename?: 'buildings_avg_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "buildings" */
export type Buildings_Avg_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "buildings". All fields are combined with a logical 'AND'. */
export type Buildings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Buildings_Bool_Exp>>>
  _not?: Maybe<Buildings_Bool_Exp>
  _or?: Maybe<Array<Maybe<Buildings_Bool_Exp>>>
  address?: Maybe<Addresses_Bool_Exp>
  address_id?: Maybe<Int_Comparison_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
  building_taxes?: Maybe<Building_Taxes_Bool_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  contact_name?: Maybe<String_Comparison_Exp>
  contact_number?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  floors?: Maybe<Floors_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  images?: Maybe<_Varchar_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Bool_Exp>
  show_id?: Maybe<String_Comparison_Exp>
  status?: Maybe<Listing_Statuses_Comparison_Exp>
  unit_subtypes?: Maybe<Unit_Subtypes_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "buildings" */
export enum Buildings_Constraint {
  /** unique or primary key constraint */
  BuildingsPkey = 'buildings_pkey',
  /** unique or primary key constraint */
  BuildingsShowIdUnique = 'buildings_show_id_unique',
  /** unique or primary key constraint */
  BuildingsShowIdUniqueIdx = 'buildings_show_id_unique_idx',
}

/** input type for incrementing integer column in table "buildings" */
export type Buildings_Inc_Input = {
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "buildings" */
export type Buildings_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>
  address_id?: Maybe<Scalars['Int']>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Arr_Rel_Insert_Input>
  building_taxes?: Maybe<Building_Taxes_Arr_Rel_Insert_Input>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  floors?: Maybe<Floors_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  images?: Maybe<Scalars['_varchar']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Arr_Rel_Insert_Input>
  show_id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['listing_statuses']>
  unit_subtypes?: Maybe<Unit_Subtypes_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Buildings_Max_Fields = {
  __typename?: 'buildings_max_fields'
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "buildings" */
export type Buildings_Max_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contact_name?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Buildings_Min_Fields = {
  __typename?: 'buildings_min_fields'
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "buildings" */
export type Buildings_Min_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contact_name?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "buildings" */
export type Buildings_Mutation_Response = {
  __typename?: 'buildings_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Buildings>
}

/** input type for inserting object relation for remote table "buildings" */
export type Buildings_Obj_Rel_Insert_Input = {
  data: Buildings_Insert_Input
  on_conflict?: Maybe<Buildings_On_Conflict>
}

/** on conflict condition type for table "buildings" */
export type Buildings_On_Conflict = {
  constraint: Buildings_Constraint
  update_columns: Array<Buildings_Update_Column>
  where?: Maybe<Buildings_Bool_Exp>
}

/** ordering options when selecting data from "buildings" */
export type Buildings_Order_By = {
  address?: Maybe<Addresses_Order_By>
  address_id?: Maybe<Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  bookings_promotions_customer_buys_aggregate?: Maybe<Bookings_Promotions_Customer_Buys_Aggregate_Order_By>
  building_taxes_aggregate?: Maybe<Building_Taxes_Aggregate_Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  contact_name?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  floors_aggregate?: Maybe<Floors_Aggregate_Order_By>
  id?: Maybe<Order_By>
  images?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  promotions_customer_buys_aggregate?: Maybe<Promotions_Customer_Buys_Aggregate_Order_By>
  show_id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  unit_subtypes_aggregate?: Maybe<Unit_Subtypes_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "buildings" */
export type Buildings_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "buildings" */
export enum Buildings_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  contact_number = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "buildings" */
export type Buildings_Set_Input = {
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  images?: Maybe<Scalars['_varchar']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['listing_statuses']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Buildings_Stddev_Fields = {
  __typename?: 'buildings_stddev_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "buildings" */
export type Buildings_Stddev_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Buildings_Stddev_Pop_Fields = {
  __typename?: 'buildings_stddev_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "buildings" */
export type Buildings_Stddev_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Buildings_Stddev_Samp_Fields = {
  __typename?: 'buildings_stddev_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "buildings" */
export type Buildings_Stddev_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Buildings_Sum_Fields = {
  __typename?: 'buildings_sum_fields'
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "buildings" */
export type Buildings_Sum_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "buildings" */
export enum Buildings_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  contact_number = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Buildings_Var_Pop_Fields = {
  __typename?: 'buildings_var_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "buildings" */
export type Buildings_Var_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Buildings_Var_Samp_Fields = {
  __typename?: 'buildings_var_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "buildings" */
export type Buildings_Var_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Buildings_Variance_Fields = {
  __typename?: 'buildings_variance_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "buildings" */
export type Buildings_Variance_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities'
  /** An array relationship */
  addresses: Array<Addresses>
  /** An aggregated array relationship */
  addresses_aggregate: Addresses_Aggregate
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An array relationship */
  bookings_building_addresses: Array<Bookings_Building_Addresses>
  /** An aggregated array relationship */
  bookings_building_addresses_aggregate: Bookings_Building_Addresses_Aggregate
  /** An object relationship */
  country: Countries
  country_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "cities" */
export type CitiesAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesBookings_Building_AddressesArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesBookings_Building_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate'
  aggregate?: Maybe<Cities_Aggregate_Fields>
  nodes: Array<Cities>
}

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields'
  avg?: Maybe<Cities_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Cities_Max_Fields>
  min?: Maybe<Cities_Min_Fields>
  stddev?: Maybe<Cities_Stddev_Fields>
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>
  sum?: Maybe<Cities_Sum_Fields>
  var_pop?: Maybe<Cities_Var_Pop_Fields>
  var_samp?: Maybe<Cities_Var_Samp_Fields>
  variance?: Maybe<Cities_Variance_Fields>
}

/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cities_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "cities" */
export type Cities_Aggregate_Order_By = {
  avg?: Maybe<Cities_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Cities_Max_Order_By>
  min?: Maybe<Cities_Min_Order_By>
  stddev?: Maybe<Cities_Stddev_Order_By>
  stddev_pop?: Maybe<Cities_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Cities_Stddev_Samp_Order_By>
  sum?: Maybe<Cities_Sum_Order_By>
  var_pop?: Maybe<Cities_Var_Pop_Order_By>
  var_samp?: Maybe<Cities_Var_Samp_Order_By>
  variance?: Maybe<Cities_Variance_Order_By>
}

/** input type for inserting array relation for remote table "cities" */
export type Cities_Arr_Rel_Insert_Input = {
  data: Array<Cities_Insert_Input>
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "cities" */
export type Cities_Avg_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cities_Bool_Exp>>>
  _not?: Maybe<Cities_Bool_Exp>
  _or?: Maybe<Array<Maybe<Cities_Bool_Exp>>>
  addresses?: Maybe<Addresses_Bool_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Bool_Exp>
  country?: Maybe<Countries_Bool_Exp>
  country_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint */
  CitiesPkey = 'cities_pkey',
}

/** input type for incrementing integer column in table "cities" */
export type Cities_Inc_Input = {
  country_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Arr_Rel_Insert_Input>
  country?: Maybe<Countries_Obj_Rel_Insert_Input>
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields'
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "cities" */
export type Cities_Max_Order_By = {
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields'
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "cities" */
export type Cities_Min_Order_By = {
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Cities>
}

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** on conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint
  update_columns: Array<Cities_Update_Column>
  where?: Maybe<Cities_Bool_Exp>
}

/** ordering options when selecting data from "cities" */
export type Cities_Order_By = {
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  bookings_building_addresses_aggregate?: Maybe<Bookings_Building_Addresses_Aggregate_Order_By>
  country?: Maybe<Countries_Order_By>
  country_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "cities" */
export type Cities_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  country_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "cities" */
export type Cities_Stddev_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "cities" */
export type Cities_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "cities" */
export type Cities_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields'
  country_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "cities" */
export type Cities_Sum_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "cities" */
export type Cities_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "cities" */
export type Cities_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields'
  country_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "cities" */
export type Cities_Variance_Order_By = {
  country_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies'
  /** An object relationship */
  address: Addresses
  address_id: Scalars['Int']
  /** An array relationship */
  addresses: Array<Addresses>
  /** An aggregated array relationship */
  addresses_aggregate: Addresses_Aggregate
  /** An object relationship */
  admin_fee?: Maybe<Admin_Fees>
  bank_account_number: Scalars['String']
  bank_address: Scalars['String']
  bank_code: Scalars['String']
  bank_name: Scalars['String']
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An array relationship */
  building_taxes: Array<Building_Taxes>
  /** An aggregated array relationship */
  building_taxes_aggregate: Building_Taxes_Aggregate
  /** An array relationship */
  buildings: Array<Buildings>
  /** An aggregated array relationship */
  buildings_aggregate: Buildings_Aggregate
  contact_name: Scalars['String']
  contact_number: Scalars['String']
  /** An array relationship */
  contract_templates: Array<Contract_Templates>
  /** An aggregated array relationship */
  contract_templates_aggregate: Contract_Templates_Aggregate
  created_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  customers: Array<Customers>
  /** An aggregated array relationship */
  customers_aggregate: Customers_Aggregate
  /** An array relationship */
  history_logs: Array<History_Logs>
  /** An aggregated array relationship */
  history_logs_aggregate: History_Logs_Aggregate
  id: Scalars['Int']
  /** An array relationship */
  id_counters: Array<Id_Counters>
  /** An aggregated array relationship */
  id_counters_aggregate: Id_Counters_Aggregate
  /** An array relationship */
  insurance_taxes: Array<Insurance_Taxes>
  /** An aggregated array relationship */
  insurance_taxes_aggregate: Insurance_Taxes_Aggregate
  /** An array relationship */
  insurances: Array<Insurances>
  /** An aggregated array relationship */
  insurances_aggregate: Insurances_Aggregate
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An array relationship */
  promotions: Array<Promotions>
  /** An aggregated array relationship */
  promotions_aggregate: Promotions_Aggregate
  swift_code: Scalars['String']
  /** An array relationship */
  unit_types: Array<Unit_Types>
  /** An aggregated array relationship */
  unit_types_aggregate: Unit_Types_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  user_companies: Array<User_Companies>
  /** An aggregated array relationship */
  user_companies_aggregate: User_Companies_Aggregate
}

/** columns and relationships of "companies" */
export type CompaniesAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesBuilding_TaxesArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesBuilding_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesBuildingsArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesBuildings_AggregateArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesContract_TemplatesArgs = {
  distinct_on?: Maybe<Array<Contract_Templates_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contract_Templates_Order_By>>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesContract_Templates_AggregateArgs = {
  distinct_on?: Maybe<Array<Contract_Templates_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contract_Templates_Order_By>>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesId_CountersArgs = {
  distinct_on?: Maybe<Array<Id_Counters_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Id_Counters_Order_By>>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesId_Counters_AggregateArgs = {
  distinct_on?: Maybe<Array<Id_Counters_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Id_Counters_Order_By>>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesInsurance_TaxesArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesInsurance_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesInsurancesArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesInsurances_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesUnit_TypesArgs = {
  distinct_on?: Maybe<Array<Unit_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Types_Order_By>>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesUnit_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Types_Order_By>>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesUser_CompaniesArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** columns and relationships of "companies" */
export type CompaniesUser_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate'
  aggregate?: Maybe<Companies_Aggregate_Fields>
  nodes: Array<Companies>
}

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields'
  avg?: Maybe<Companies_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Companies_Max_Fields>
  min?: Maybe<Companies_Min_Fields>
  stddev?: Maybe<Companies_Stddev_Fields>
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>
  sum?: Maybe<Companies_Sum_Fields>
  var_pop?: Maybe<Companies_Var_Pop_Fields>
  var_samp?: Maybe<Companies_Var_Samp_Fields>
  variance?: Maybe<Companies_Variance_Fields>
}

/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Companies_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "companies" */
export type Companies_Aggregate_Order_By = {
  avg?: Maybe<Companies_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Companies_Max_Order_By>
  min?: Maybe<Companies_Min_Order_By>
  stddev?: Maybe<Companies_Stddev_Order_By>
  stddev_pop?: Maybe<Companies_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Companies_Stddev_Samp_Order_By>
  sum?: Maybe<Companies_Sum_Order_By>
  var_pop?: Maybe<Companies_Var_Pop_Order_By>
  var_samp?: Maybe<Companies_Var_Samp_Order_By>
  variance?: Maybe<Companies_Variance_Order_By>
}

/** input type for inserting array relation for remote table "companies" */
export type Companies_Arr_Rel_Insert_Input = {
  data: Array<Companies_Insert_Input>
  on_conflict?: Maybe<Companies_On_Conflict>
}

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "companies" */
export type Companies_Avg_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Companies_Bool_Exp>>>
  _not?: Maybe<Companies_Bool_Exp>
  _or?: Maybe<Array<Maybe<Companies_Bool_Exp>>>
  address?: Maybe<Addresses_Bool_Exp>
  address_id?: Maybe<Int_Comparison_Exp>
  addresses?: Maybe<Addresses_Bool_Exp>
  admin_fee?: Maybe<Admin_Fees_Bool_Exp>
  bank_account_number?: Maybe<String_Comparison_Exp>
  bank_address?: Maybe<String_Comparison_Exp>
  bank_code?: Maybe<String_Comparison_Exp>
  bank_name?: Maybe<String_Comparison_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  building_taxes?: Maybe<Building_Taxes_Bool_Exp>
  buildings?: Maybe<Buildings_Bool_Exp>
  contact_name?: Maybe<String_Comparison_Exp>
  contact_number?: Maybe<String_Comparison_Exp>
  contract_templates?: Maybe<Contract_Templates_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  customers?: Maybe<Customers_Bool_Exp>
  history_logs?: Maybe<History_Logs_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  id_counters?: Maybe<Id_Counters_Bool_Exp>
  insurance_taxes?: Maybe<Insurance_Taxes_Bool_Exp>
  insurances?: Maybe<Insurances_Bool_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  promotions?: Maybe<Promotions_Bool_Exp>
  swift_code?: Maybe<String_Comparison_Exp>
  unit_types?: Maybe<Unit_Types_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user_companies?: Maybe<User_Companies_Bool_Exp>
}

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey',
}

/** input type for incrementing integer column in table "companies" */
export type Companies_Inc_Input = {
  address_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>
  address_id?: Maybe<Scalars['Int']>
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>
  admin_fee?: Maybe<Admin_Fees_Obj_Rel_Insert_Input>
  bank_account_number?: Maybe<Scalars['String']>
  bank_address?: Maybe<Scalars['String']>
  bank_code?: Maybe<Scalars['String']>
  bank_name?: Maybe<Scalars['String']>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  building_taxes?: Maybe<Building_Taxes_Arr_Rel_Insert_Input>
  buildings?: Maybe<Buildings_Arr_Rel_Insert_Input>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  contract_templates?: Maybe<Contract_Templates_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  customers?: Maybe<Customers_Arr_Rel_Insert_Input>
  history_logs?: Maybe<History_Logs_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  id_counters?: Maybe<Id_Counters_Arr_Rel_Insert_Input>
  insurance_taxes?: Maybe<Insurance_Taxes_Arr_Rel_Insert_Input>
  insurances?: Maybe<Insurances_Arr_Rel_Insert_Input>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotions?: Maybe<Promotions_Arr_Rel_Insert_Input>
  swift_code?: Maybe<Scalars['String']>
  unit_types?: Maybe<Unit_Types_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_companies?: Maybe<User_Companies_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields'
  address_id?: Maybe<Scalars['Int']>
  bank_account_number?: Maybe<Scalars['String']>
  bank_address?: Maybe<Scalars['String']>
  bank_code?: Maybe<Scalars['String']>
  bank_name?: Maybe<Scalars['String']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  swift_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "companies" */
export type Companies_Max_Order_By = {
  address_id?: Maybe<Order_By>
  bank_account_number?: Maybe<Order_By>
  bank_address?: Maybe<Order_By>
  bank_code?: Maybe<Order_By>
  bank_name?: Maybe<Order_By>
  contact_name?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  swift_code?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields'
  address_id?: Maybe<Scalars['Int']>
  bank_account_number?: Maybe<Scalars['String']>
  bank_address?: Maybe<Scalars['String']>
  bank_code?: Maybe<Scalars['String']>
  bank_name?: Maybe<Scalars['String']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  swift_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "companies" */
export type Companies_Min_Order_By = {
  address_id?: Maybe<Order_By>
  bank_account_number?: Maybe<Order_By>
  bank_address?: Maybe<Order_By>
  bank_code?: Maybe<Order_By>
  bank_name?: Maybe<Order_By>
  contact_name?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  swift_code?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Companies>
}

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input
  on_conflict?: Maybe<Companies_On_Conflict>
}

/** on conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint
  update_columns: Array<Companies_Update_Column>
  where?: Maybe<Companies_Bool_Exp>
}

/** ordering options when selecting data from "companies" */
export type Companies_Order_By = {
  address?: Maybe<Addresses_Order_By>
  address_id?: Maybe<Order_By>
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>
  admin_fee?: Maybe<Admin_Fees_Order_By>
  bank_account_number?: Maybe<Order_By>
  bank_address?: Maybe<Order_By>
  bank_code?: Maybe<Order_By>
  bank_name?: Maybe<Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  building_taxes_aggregate?: Maybe<Building_Taxes_Aggregate_Order_By>
  buildings_aggregate?: Maybe<Buildings_Aggregate_Order_By>
  contact_name?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  contract_templates_aggregate?: Maybe<Contract_Templates_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  customers_aggregate?: Maybe<Customers_Aggregate_Order_By>
  history_logs_aggregate?: Maybe<History_Logs_Aggregate_Order_By>
  id?: Maybe<Order_By>
  id_counters_aggregate?: Maybe<Id_Counters_Aggregate_Order_By>
  insurance_taxes_aggregate?: Maybe<Insurance_Taxes_Aggregate_Order_By>
  insurances_aggregate?: Maybe<Insurances_Aggregate_Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  promotions_aggregate?: Maybe<Promotions_Aggregate_Order_By>
  swift_code?: Maybe<Order_By>
  unit_types_aggregate?: Maybe<Unit_Types_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
  user_companies_aggregate?: Maybe<User_Companies_Aggregate_Order_By>
}

/** primary key columns input for table: "companies" */
export type Companies_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  BankAccountNumber = 'bank_account_number',
  /** column name */
  BankAddress = 'bank_address',
  /** column name */
  BankCode = 'bank_code',
  /** column name */
  BankName = 'bank_name',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  contact_number = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  SwiftCode = 'swift_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  address_id?: Maybe<Scalars['Int']>
  bank_account_number?: Maybe<Scalars['String']>
  bank_address?: Maybe<Scalars['String']>
  bank_code?: Maybe<Scalars['String']>
  bank_name?: Maybe<Scalars['String']>
  contact_name?: Maybe<Scalars['String']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  swift_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "companies" */
export type Companies_Stddev_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "companies" */
export type Companies_Stddev_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "companies" */
export type Companies_Stddev_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields'
  address_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "companies" */
export type Companies_Sum_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  BankAccountNumber = 'bank_account_number',
  /** column name */
  BankAddress = 'bank_address',
  /** column name */
  BankCode = 'bank_code',
  /** column name */
  BankName = 'bank_name',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  contact_number = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  SwiftCode = 'swift_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "companies" */
export type Companies_Var_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "companies" */
export type Companies_Var_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "companies" */
export type Companies_Variance_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** columns and relationships of "contract_templates" */
export type Contract_Templates = {
  __typename?: 'contract_templates'
  /** An object relationship */
  company: Companies
  company_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  name: Scalars['String']
  store_path: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "contract_templates" */
export type Contract_Templates_Aggregate = {
  __typename?: 'contract_templates_aggregate'
  aggregate?: Maybe<Contract_Templates_Aggregate_Fields>
  nodes: Array<Contract_Templates>
}

/** aggregate fields of "contract_templates" */
export type Contract_Templates_Aggregate_Fields = {
  __typename?: 'contract_templates_aggregate_fields'
  avg?: Maybe<Contract_Templates_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Contract_Templates_Max_Fields>
  min?: Maybe<Contract_Templates_Min_Fields>
  stddev?: Maybe<Contract_Templates_Stddev_Fields>
  stddev_pop?: Maybe<Contract_Templates_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Contract_Templates_Stddev_Samp_Fields>
  sum?: Maybe<Contract_Templates_Sum_Fields>
  var_pop?: Maybe<Contract_Templates_Var_Pop_Fields>
  var_samp?: Maybe<Contract_Templates_Var_Samp_Fields>
  variance?: Maybe<Contract_Templates_Variance_Fields>
}

/** aggregate fields of "contract_templates" */
export type Contract_Templates_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contract_Templates_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "contract_templates" */
export type Contract_Templates_Aggregate_Order_By = {
  avg?: Maybe<Contract_Templates_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Contract_Templates_Max_Order_By>
  min?: Maybe<Contract_Templates_Min_Order_By>
  stddev?: Maybe<Contract_Templates_Stddev_Order_By>
  stddev_pop?: Maybe<Contract_Templates_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Contract_Templates_Stddev_Samp_Order_By>
  sum?: Maybe<Contract_Templates_Sum_Order_By>
  var_pop?: Maybe<Contract_Templates_Var_Pop_Order_By>
  var_samp?: Maybe<Contract_Templates_Var_Samp_Order_By>
  variance?: Maybe<Contract_Templates_Variance_Order_By>
}

/** input type for inserting array relation for remote table "contract_templates" */
export type Contract_Templates_Arr_Rel_Insert_Input = {
  data: Array<Contract_Templates_Insert_Input>
  on_conflict?: Maybe<Contract_Templates_On_Conflict>
}

/** aggregate avg on columns */
export type Contract_Templates_Avg_Fields = {
  __typename?: 'contract_templates_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "contract_templates" */
export type Contract_Templates_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "contract_templates". All fields are combined with a logical 'AND'. */
export type Contract_Templates_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contract_Templates_Bool_Exp>>>
  _not?: Maybe<Contract_Templates_Bool_Exp>
  _or?: Maybe<Array<Maybe<Contract_Templates_Bool_Exp>>>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  store_path?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "contract_templates" */
export enum Contract_Templates_Constraint {
  /** unique or primary key constraint */
  ContractTemplatesPkey = 'contract_templates_pkey',
}

/** input type for incrementing integer column in table "contract_templates" */
export type Contract_Templates_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "contract_templates" */
export type Contract_Templates_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  store_path?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Contract_Templates_Max_Fields = {
  __typename?: 'contract_templates_max_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  store_path?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "contract_templates" */
export type Contract_Templates_Max_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  store_path?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Contract_Templates_Min_Fields = {
  __typename?: 'contract_templates_min_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  store_path?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "contract_templates" */
export type Contract_Templates_Min_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  store_path?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "contract_templates" */
export type Contract_Templates_Mutation_Response = {
  __typename?: 'contract_templates_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Contract_Templates>
}

/** input type for inserting object relation for remote table "contract_templates" */
export type Contract_Templates_Obj_Rel_Insert_Input = {
  data: Contract_Templates_Insert_Input
  on_conflict?: Maybe<Contract_Templates_On_Conflict>
}

/** on conflict condition type for table "contract_templates" */
export type Contract_Templates_On_Conflict = {
  constraint: Contract_Templates_Constraint
  update_columns: Array<Contract_Templates_Update_Column>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** ordering options when selecting data from "contract_templates" */
export type Contract_Templates_Order_By = {
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  store_path?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "contract_templates" */
export type Contract_Templates_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "contract_templates" */
export enum Contract_Templates_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StorePath = 'store_path',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "contract_templates" */
export type Contract_Templates_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  store_path?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Contract_Templates_Stddev_Fields = {
  __typename?: 'contract_templates_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "contract_templates" */
export type Contract_Templates_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Contract_Templates_Stddev_Pop_Fields = {
  __typename?: 'contract_templates_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "contract_templates" */
export type Contract_Templates_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Contract_Templates_Stddev_Samp_Fields = {
  __typename?: 'contract_templates_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "contract_templates" */
export type Contract_Templates_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Contract_Templates_Sum_Fields = {
  __typename?: 'contract_templates_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "contract_templates" */
export type Contract_Templates_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "contract_templates" */
export enum Contract_Templates_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StorePath = 'store_path',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Contract_Templates_Var_Pop_Fields = {
  __typename?: 'contract_templates_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "contract_templates" */
export type Contract_Templates_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Contract_Templates_Var_Samp_Fields = {
  __typename?: 'contract_templates_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "contract_templates" */
export type Contract_Templates_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Contract_Templates_Variance_Fields = {
  __typename?: 'contract_templates_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "contract_templates" */
export type Contract_Templates_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries'
  /** An array relationship */
  addresses: Array<Addresses>
  /** An aggregated array relationship */
  addresses_aggregate: Addresses_Aggregate
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An array relationship */
  bookings_building_addresses: Array<Bookings_Building_Addresses>
  /** An aggregated array relationship */
  bookings_building_addresses_aggregate: Bookings_Building_Addresses_Aggregate
  /** An array relationship */
  cities: Array<Cities>
  /** An aggregated array relationship */
  cities_aggregate: Cities_Aggregate
  code: Scalars['String']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currency: Currencies
  currency_id: Scalars['Int']
  id: Scalars['Int']
  /** An array relationship */
  insurances: Array<Insurances>
  /** An aggregated array relationship */
  insurances_aggregate: Insurances_Aggregate
  name_en: Scalars['String']
  name_th: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "countries" */
export type CountriesAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesBookings_Building_AddressesArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesBookings_Building_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesInsurancesArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** columns and relationships of "countries" */
export type CountriesInsurances_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate'
  aggregate?: Maybe<Countries_Aggregate_Fields>
  nodes: Array<Countries>
}

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields'
  avg?: Maybe<Countries_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Countries_Max_Fields>
  min?: Maybe<Countries_Min_Fields>
  stddev?: Maybe<Countries_Stddev_Fields>
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>
  sum?: Maybe<Countries_Sum_Fields>
  var_pop?: Maybe<Countries_Var_Pop_Fields>
  var_samp?: Maybe<Countries_Var_Samp_Fields>
  variance?: Maybe<Countries_Variance_Fields>
}

/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: Maybe<Countries_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Countries_Max_Order_By>
  min?: Maybe<Countries_Min_Order_By>
  stddev?: Maybe<Countries_Stddev_Order_By>
  stddev_pop?: Maybe<Countries_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Countries_Stddev_Samp_Order_By>
  sum?: Maybe<Countries_Sum_Order_By>
  var_pop?: Maybe<Countries_Var_Pop_Order_By>
  var_samp?: Maybe<Countries_Var_Samp_Order_By>
  variance?: Maybe<Countries_Variance_Order_By>
}

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>
  on_conflict?: Maybe<Countries_On_Conflict>
}

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
  __typename?: 'countries_avg_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Bool_Exp>>>
  _not?: Maybe<Countries_Bool_Exp>
  _or?: Maybe<Array<Maybe<Countries_Bool_Exp>>>
  addresses?: Maybe<Addresses_Bool_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Bool_Exp>
  cities?: Maybe<Cities_Bool_Exp>
  code?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currency?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  insurances?: Maybe<Insurances_Bool_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint */
  CountriesPkey = 'countries_pkey',
}

/** input type for incrementing integer column in table "countries" */
export type Countries_Inc_Input = {
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Arr_Rel_Insert_Input>
  cities?: Maybe<Cities_Arr_Rel_Insert_Input>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  insurances?: Maybe<Insurances_Arr_Rel_Insert_Input>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields'
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields'
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Countries>
}

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input
  on_conflict?: Maybe<Countries_On_Conflict>
}

/** on conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint
  update_columns: Array<Countries_Update_Column>
  where?: Maybe<Countries_Bool_Exp>
}

/** ordering options when selecting data from "countries" */
export type Countries_Order_By = {
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  bookings_building_addresses_aggregate?: Maybe<Bookings_Building_Addresses_Aggregate_Order_By>
  cities_aggregate?: Maybe<Cities_Aggregate_Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurances_aggregate?: Maybe<Insurances_Aggregate_Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "countries" */
export type Countries_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
  __typename?: 'countries_stddev_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
  __typename?: 'countries_stddev_pop_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
  __typename?: 'countries_stddev_samp_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
  __typename?: 'countries_sum_fields'
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
  __typename?: 'countries_var_pop_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
  __typename?: 'countries_var_samp_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
  __typename?: 'countries_variance_fields'
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** columns and relationships of "currencies" */
export type Currencies = {
  __typename?: 'currencies'
  /** An array relationship */
  applied_taxes: Array<Applied_Taxes>
  /** An aggregated array relationship */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An array relationship */
  building_taxes: Array<Building_Taxes>
  /** An aggregated array relationship */
  building_taxes_aggregate: Building_Taxes_Aggregate
  code: Scalars['String']
  /** An array relationship */
  countries: Array<Countries>
  /** An aggregated array relationship */
  countries_aggregate: Countries_Aggregate
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  /** An array relationship */
  insurance_taxes: Array<Insurance_Taxes>
  /** An aggregated array relationship */
  insurance_taxes_aggregate: Insurance_Taxes_Aggregate
  /** An array relationship */
  insurances: Array<Insurances>
  /** An aggregated array relationship */
  insurances_aggregate: Insurances_Aggregate
  sign: Scalars['String']
  /** An array relationship */
  terminations: Array<Terminations>
  /** An aggregated array relationship */
  terminations_aggregate: Terminations_Aggregate
  /** An array relationship */
  transactions: Array<Transactions>
  /** An aggregated array relationship */
  transactions_aggregate: Transactions_Aggregate
  /** An array relationship */
  unit_subtypes: Array<Unit_Subtypes>
  /** An aggregated array relationship */
  unit_subtypes_aggregate: Unit_Subtypes_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "currencies" */
export type CurrenciesApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesBuilding_TaxesArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesBuilding_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Countries_Order_By>>
  where?: Maybe<Countries_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Countries_Order_By>>
  where?: Maybe<Countries_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesInsurance_TaxesArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesInsurance_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesInsurancesArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesInsurances_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesTerminationsArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesTerminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesUnit_SubtypesArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** columns and relationships of "currencies" */
export type CurrenciesUnit_Subtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** aggregated selection of "currencies" */
export type Currencies_Aggregate = {
  __typename?: 'currencies_aggregate'
  aggregate?: Maybe<Currencies_Aggregate_Fields>
  nodes: Array<Currencies>
}

/** aggregate fields of "currencies" */
export type Currencies_Aggregate_Fields = {
  __typename?: 'currencies_aggregate_fields'
  avg?: Maybe<Currencies_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Currencies_Max_Fields>
  min?: Maybe<Currencies_Min_Fields>
  stddev?: Maybe<Currencies_Stddev_Fields>
  stddev_pop?: Maybe<Currencies_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Currencies_Stddev_Samp_Fields>
  sum?: Maybe<Currencies_Sum_Fields>
  var_pop?: Maybe<Currencies_Var_Pop_Fields>
  var_samp?: Maybe<Currencies_Var_Samp_Fields>
  variance?: Maybe<Currencies_Variance_Fields>
}

/** aggregate fields of "currencies" */
export type Currencies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Currencies_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "currencies" */
export type Currencies_Aggregate_Order_By = {
  avg?: Maybe<Currencies_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Currencies_Max_Order_By>
  min?: Maybe<Currencies_Min_Order_By>
  stddev?: Maybe<Currencies_Stddev_Order_By>
  stddev_pop?: Maybe<Currencies_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Currencies_Stddev_Samp_Order_By>
  sum?: Maybe<Currencies_Sum_Order_By>
  var_pop?: Maybe<Currencies_Var_Pop_Order_By>
  var_samp?: Maybe<Currencies_Var_Samp_Order_By>
  variance?: Maybe<Currencies_Variance_Order_By>
}

/** input type for inserting array relation for remote table "currencies" */
export type Currencies_Arr_Rel_Insert_Input = {
  data: Array<Currencies_Insert_Input>
  on_conflict?: Maybe<Currencies_On_Conflict>
}

/** aggregate avg on columns */
export type Currencies_Avg_Fields = {
  __typename?: 'currencies_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "currencies" */
export type Currencies_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "currencies". All fields are combined with a logical 'AND'. */
export type Currencies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Currencies_Bool_Exp>>>
  _not?: Maybe<Currencies_Bool_Exp>
  _or?: Maybe<Array<Maybe<Currencies_Bool_Exp>>>
  applied_taxes?: Maybe<Applied_Taxes_Bool_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  building_taxes?: Maybe<Building_Taxes_Bool_Exp>
  code?: Maybe<String_Comparison_Exp>
  countries?: Maybe<Countries_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  insurance_taxes?: Maybe<Insurance_Taxes_Bool_Exp>
  insurances?: Maybe<Insurances_Bool_Exp>
  sign?: Maybe<String_Comparison_Exp>
  terminations?: Maybe<Terminations_Bool_Exp>
  transactions?: Maybe<Transactions_Bool_Exp>
  unit_subtypes?: Maybe<Unit_Subtypes_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "currencies" */
export enum Currencies_Constraint {
  /** unique or primary key constraint */
  CurrenciesPkey = 'currencies_pkey',
}

/** input type for incrementing integer column in table "currencies" */
export type Currencies_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "currencies" */
export type Currencies_Insert_Input = {
  applied_taxes?: Maybe<Applied_Taxes_Arr_Rel_Insert_Input>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  building_taxes?: Maybe<Building_Taxes_Arr_Rel_Insert_Input>
  code?: Maybe<Scalars['String']>
  countries?: Maybe<Countries_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  insurance_taxes?: Maybe<Insurance_Taxes_Arr_Rel_Insert_Input>
  insurances?: Maybe<Insurances_Arr_Rel_Insert_Input>
  sign?: Maybe<Scalars['String']>
  terminations?: Maybe<Terminations_Arr_Rel_Insert_Input>
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>
  unit_subtypes?: Maybe<Unit_Subtypes_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Currencies_Max_Fields = {
  __typename?: 'currencies_max_fields'
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  sign?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "currencies" */
export type Currencies_Max_Order_By = {
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  sign?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Currencies_Min_Fields = {
  __typename?: 'currencies_min_fields'
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  sign?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "currencies" */
export type Currencies_Min_Order_By = {
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  sign?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "currencies" */
export type Currencies_Mutation_Response = {
  __typename?: 'currencies_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Currencies>
}

/** input type for inserting object relation for remote table "currencies" */
export type Currencies_Obj_Rel_Insert_Input = {
  data: Currencies_Insert_Input
  on_conflict?: Maybe<Currencies_On_Conflict>
}

/** on conflict condition type for table "currencies" */
export type Currencies_On_Conflict = {
  constraint: Currencies_Constraint
  update_columns: Array<Currencies_Update_Column>
  where?: Maybe<Currencies_Bool_Exp>
}

/** ordering options when selecting data from "currencies" */
export type Currencies_Order_By = {
  applied_taxes_aggregate?: Maybe<Applied_Taxes_Aggregate_Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  building_taxes_aggregate?: Maybe<Building_Taxes_Aggregate_Order_By>
  code?: Maybe<Order_By>
  countries_aggregate?: Maybe<Countries_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_taxes_aggregate?: Maybe<Insurance_Taxes_Aggregate_Order_By>
  insurances_aggregate?: Maybe<Insurances_Aggregate_Order_By>
  sign?: Maybe<Order_By>
  terminations_aggregate?: Maybe<Terminations_Aggregate_Order_By>
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>
  unit_subtypes_aggregate?: Maybe<Unit_Subtypes_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "currencies" */
export type Currencies_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "currencies" */
export enum Currencies_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Sign = 'sign',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "currencies" */
export type Currencies_Set_Input = {
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  sign?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Currencies_Stddev_Fields = {
  __typename?: 'currencies_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "currencies" */
export type Currencies_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Currencies_Stddev_Pop_Fields = {
  __typename?: 'currencies_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "currencies" */
export type Currencies_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Currencies_Stddev_Samp_Fields = {
  __typename?: 'currencies_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "currencies" */
export type Currencies_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Currencies_Sum_Fields = {
  __typename?: 'currencies_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "currencies" */
export type Currencies_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "currencies" */
export enum Currencies_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Sign = 'sign',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Currencies_Var_Pop_Fields = {
  __typename?: 'currencies_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "currencies" */
export type Currencies_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Currencies_Var_Samp_Fields = {
  __typename?: 'currencies_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "currencies" */
export type Currencies_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Currencies_Variance_Fields = {
  __typename?: 'currencies_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "currencies" */
export type Currencies_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers'
  /** An object relationship */
  address?: Maybe<Addresses>
  address_id?: Maybe<Scalars['Int']>
  birthdate?: Maybe<Scalars['timestamp']>
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An object relationship */
  company?: Maybe<Companies>
  company_id?: Maybe<Scalars['Int']>
  contact_number: Scalars['String']
  created_at?: Maybe<Scalars['timestamptz']>
  email: Scalars['String']
  first_name: Scalars['String']
  /** An array relationship */
  history_logs: Array<History_Logs>
  /** An aggregated array relationship */
  history_logs_aggregate: History_Logs_Aggregate
  id: Scalars['Int']
  image_url?: Maybe<Scalars['String']>
  last_name: Scalars['String']
  lead_origin?: Maybe<Scalars['String']>
  /** An array relationship */
  promotions_redeems: Array<Promotions_Redeem>
  /** An aggregated array relationship */
  promotions_redeems_aggregate: Promotions_Redeem_Aggregate
  rental_purpose?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  /** An array relationship */
  transactions: Array<Transactions>
  /** An aggregated array relationship */
  transactions_aggregate: Transactions_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
  vat_number?: Maybe<Scalars['String']>
}

/** columns and relationships of "customers" */
export type CustomersBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersPromotions_RedeemsArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersPromotions_Redeems_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "customers" */
export type CustomersTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate'
  aggregate?: Maybe<Customers_Aggregate_Fields>
  nodes: Array<Customers>
}

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields'
  avg?: Maybe<Customers_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Customers_Max_Fields>
  min?: Maybe<Customers_Min_Fields>
  stddev?: Maybe<Customers_Stddev_Fields>
  stddev_pop?: Maybe<Customers_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Customers_Stddev_Samp_Fields>
  sum?: Maybe<Customers_Sum_Fields>
  var_pop?: Maybe<Customers_Var_Pop_Fields>
  var_samp?: Maybe<Customers_Var_Samp_Fields>
  variance?: Maybe<Customers_Variance_Fields>
}

/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customers_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  avg?: Maybe<Customers_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Customers_Max_Order_By>
  min?: Maybe<Customers_Min_Order_By>
  stddev?: Maybe<Customers_Stddev_Order_By>
  stddev_pop?: Maybe<Customers_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Customers_Stddev_Samp_Order_By>
  sum?: Maybe<Customers_Sum_Order_By>
  var_pop?: Maybe<Customers_Var_Pop_Order_By>
  var_samp?: Maybe<Customers_Var_Samp_Order_By>
  variance?: Maybe<Customers_Variance_Order_By>
}

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>
  on_conflict?: Maybe<Customers_On_Conflict>
}

/** aggregate avg on columns */
export type Customers_Avg_Fields = {
  __typename?: 'customers_avg_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "customers" */
export type Customers_Avg_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customers_Bool_Exp>>>
  _not?: Maybe<Customers_Bool_Exp>
  _or?: Maybe<Array<Maybe<Customers_Bool_Exp>>>
  address?: Maybe<Addresses_Bool_Exp>
  address_id?: Maybe<Int_Comparison_Exp>
  birthdate?: Maybe<Timestamp_Comparison_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  contact_number?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  first_name?: Maybe<String_Comparison_Exp>
  history_logs?: Maybe<History_Logs_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  image_url?: Maybe<String_Comparison_Exp>
  last_name?: Maybe<String_Comparison_Exp>
  lead_origin?: Maybe<String_Comparison_Exp>
  promotions_redeems?: Maybe<Promotions_Redeem_Bool_Exp>
  rental_purpose?: Maybe<String_Comparison_Exp>
  show_id?: Maybe<String_Comparison_Exp>
  transactions?: Maybe<Transactions_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  vat_number?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey',
  /** unique or primary key constraint */
  CustomersShowIdUnique = 'customers_show_id_unique',
  /** unique or primary key constraint */
  CustomersShowIdUniqueIdx = 'customers_show_id_unique_idx',
}

/** input type for incrementing integer column in table "customers" */
export type Customers_Inc_Input = {
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>
  address_id?: Maybe<Scalars['Int']>
  birthdate?: Maybe<Scalars['timestamp']>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  history_logs?: Maybe<History_Logs_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  lead_origin?: Maybe<Scalars['String']>
  promotions_redeems?: Maybe<Promotions_Redeem_Arr_Rel_Insert_Input>
  rental_purpose?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
  vat_number?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields'
  address_id?: Maybe<Scalars['Int']>
  birthdate?: Maybe<Scalars['timestamp']>
  company_id?: Maybe<Scalars['Int']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  lead_origin?: Maybe<Scalars['String']>
  rental_purpose?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  vat_number?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  address_id?: Maybe<Order_By>
  birthdate?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  lead_origin?: Maybe<Order_By>
  rental_purpose?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  vat_number?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields'
  address_id?: Maybe<Scalars['Int']>
  birthdate?: Maybe<Scalars['timestamp']>
  company_id?: Maybe<Scalars['Int']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  lead_origin?: Maybe<Scalars['String']>
  rental_purpose?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  vat_number?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  address_id?: Maybe<Order_By>
  birthdate?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  lead_origin?: Maybe<Order_By>
  rental_purpose?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  vat_number?: Maybe<Order_By>
}

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Customers>
}

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input
  on_conflict?: Maybe<Customers_On_Conflict>
}

/** on conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint
  update_columns: Array<Customers_Update_Column>
  where?: Maybe<Customers_Bool_Exp>
}

/** ordering options when selecting data from "customers" */
export type Customers_Order_By = {
  address?: Maybe<Addresses_Order_By>
  address_id?: Maybe<Order_By>
  birthdate?: Maybe<Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  contact_number?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  history_logs_aggregate?: Maybe<History_Logs_Aggregate_Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  lead_origin?: Maybe<Order_By>
  promotions_redeems_aggregate?: Maybe<Promotions_Redeem_Aggregate_Order_By>
  rental_purpose?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
  vat_number?: Maybe<Order_By>
}

/** primary key columns input for table: "customers" */
export type Customers_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  contact_number = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  first_name = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  last_name = 'last_name',
  /** column name */
  lead_origin = 'lead_origin',
  /** column name */
  RentalPurpose = 'rental_purpose',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VatNumber = 'vat_number',
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address_id?: Maybe<Scalars['Int']>
  birthdate?: Maybe<Scalars['timestamp']>
  company_id?: Maybe<Scalars['Int']>
  contact_number?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  lead_origin?: Maybe<Scalars['String']>
  rental_purpose?: Maybe<Scalars['String']>
  show_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  vat_number?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Customers_Stddev_Fields = {
  __typename?: 'customers_stddev_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "customers" */
export type Customers_Stddev_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Customers_Stddev_Pop_Fields = {
  __typename?: 'customers_stddev_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "customers" */
export type Customers_Stddev_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Customers_Stddev_Samp_Fields = {
  __typename?: 'customers_stddev_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "customers" */
export type Customers_Stddev_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Customers_Sum_Fields = {
  __typename?: 'customers_sum_fields'
  address_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "customers" */
export type Customers_Sum_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  contact_number = 'contact_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  first_name = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  last_name = 'last_name',
  /** column name */
  lead_origin = 'lead_origin',
  /** column name */
  RentalPurpose = 'rental_purpose',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VatNumber = 'vat_number',
}

/** aggregate var_pop on columns */
export type Customers_Var_Pop_Fields = {
  __typename?: 'customers_var_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "customers" */
export type Customers_Var_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Customers_Var_Samp_Fields = {
  __typename?: 'customers_var_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "customers" */
export type Customers_Var_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Customers_Variance_Fields = {
  __typename?: 'customers_variance_fields'
  address_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "customers" */
export type Customers_Variance_Order_By = {
  address_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** expression to compare columns of type enum_availability_status. All fields are combined with logical 'AND'. */
export type Enum_Availability_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_availability_status']>
  _gt?: Maybe<Scalars['enum_availability_status']>
  _gte?: Maybe<Scalars['enum_availability_status']>
  _in?: Maybe<Array<Scalars['enum_availability_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_availability_status']>
  _lte?: Maybe<Scalars['enum_availability_status']>
  _neq?: Maybe<Scalars['enum_availability_status']>
  _nin?: Maybe<Array<Scalars['enum_availability_status']>>
}

/** expression to compare columns of type enum_bookings_status. All fields are combined with logical 'AND'. */
export type Enum_Bookings_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_bookings_status']>
  _gt?: Maybe<Scalars['enum_bookings_status']>
  _gte?: Maybe<Scalars['enum_bookings_status']>
  _in?: Maybe<Array<Scalars['enum_bookings_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_bookings_status']>
  _lte?: Maybe<Scalars['enum_bookings_status']>
  _neq?: Maybe<Scalars['enum_bookings_status']>
  _nin?: Maybe<Array<Scalars['enum_bookings_status']>>
}

/** expression to compare columns of type enum_feature_type. All fields are combined with logical 'AND'. */
export type Enum_Feature_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_feature_type']>
  _gt?: Maybe<Scalars['enum_feature_type']>
  _gte?: Maybe<Scalars['enum_feature_type']>
  _in?: Maybe<Array<Scalars['enum_feature_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_feature_type']>
  _lte?: Maybe<Scalars['enum_feature_type']>
  _neq?: Maybe<Scalars['enum_feature_type']>
  _nin?: Maybe<Array<Scalars['enum_feature_type']>>
}

/** expression to compare columns of type enum_measurement_unit. All fields are combined with logical 'AND'. */
export type Enum_Measurement_Unit_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_measurement_unit']>
  _gt?: Maybe<Scalars['enum_measurement_unit']>
  _gte?: Maybe<Scalars['enum_measurement_unit']>
  _in?: Maybe<Array<Scalars['enum_measurement_unit']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_measurement_unit']>
  _lte?: Maybe<Scalars['enum_measurement_unit']>
  _neq?: Maybe<Scalars['enum_measurement_unit']>
  _nin?: Maybe<Array<Scalars['enum_measurement_unit']>>
}

/** expression to compare columns of type enum_promotions_customer_buys_type. All fields are combined with logical 'AND'. */
export type Enum_Promotions_Customer_Buys_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  _gt?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  _gte?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  _in?: Maybe<Array<Scalars['enum_promotions_customer_buys_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  _lte?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  _neq?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  _nin?: Maybe<Array<Scalars['enum_promotions_customer_buys_type']>>
}

/** expression to compare columns of type enum_promotions_customer_gets_for_type. All fields are combined with logical 'AND'. */
export type Enum_Promotions_Customer_Gets_For_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  _gt?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  _gte?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  _in?: Maybe<Array<Scalars['enum_promotions_customer_gets_for_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  _lte?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  _neq?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  _nin?: Maybe<Array<Scalars['enum_promotions_customer_gets_for_type']>>
}

/** expression to compare columns of type enum_promotions_customer_gets_type. All fields are combined with logical 'AND'. */
export type Enum_Promotions_Customer_Gets_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  _gt?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  _gte?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  _in?: Maybe<Array<Scalars['enum_promotions_customer_gets_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  _lte?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  _neq?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  _nin?: Maybe<Array<Scalars['enum_promotions_customer_gets_type']>>
}

/** expression to compare columns of type enum_promotions_format. All fields are combined with logical 'AND'. */
export type Enum_Promotions_Format_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_promotions_format']>
  _gt?: Maybe<Scalars['enum_promotions_format']>
  _gte?: Maybe<Scalars['enum_promotions_format']>
  _in?: Maybe<Array<Scalars['enum_promotions_format']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_promotions_format']>
  _lte?: Maybe<Scalars['enum_promotions_format']>
  _neq?: Maybe<Scalars['enum_promotions_format']>
  _nin?: Maybe<Array<Scalars['enum_promotions_format']>>
}

/** expression to compare columns of type enum_promotions_status. All fields are combined with logical 'AND'. */
export type Enum_Promotions_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_promotions_status']>
  _gt?: Maybe<Scalars['enum_promotions_status']>
  _gte?: Maybe<Scalars['enum_promotions_status']>
  _in?: Maybe<Array<Scalars['enum_promotions_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_promotions_status']>
  _lte?: Maybe<Scalars['enum_promotions_status']>
  _neq?: Maybe<Scalars['enum_promotions_status']>
  _nin?: Maybe<Array<Scalars['enum_promotions_status']>>
}

/** expression to compare columns of type enum_renewals_status. All fields are combined with logical 'AND'. */
export type Enum_Renewals_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_renewals_status']>
  _gt?: Maybe<Scalars['enum_renewals_status']>
  _gte?: Maybe<Scalars['enum_renewals_status']>
  _in?: Maybe<Array<Scalars['enum_renewals_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_renewals_status']>
  _lte?: Maybe<Scalars['enum_renewals_status']>
  _neq?: Maybe<Scalars['enum_renewals_status']>
  _nin?: Maybe<Array<Scalars['enum_renewals_status']>>
}

/** expression to compare columns of type enum_renewals_type. All fields are combined with logical 'AND'. */
export type Enum_Renewals_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_renewals_type']>
  _gt?: Maybe<Scalars['enum_renewals_type']>
  _gte?: Maybe<Scalars['enum_renewals_type']>
  _in?: Maybe<Array<Scalars['enum_renewals_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_renewals_type']>
  _lte?: Maybe<Scalars['enum_renewals_type']>
  _neq?: Maybe<Scalars['enum_renewals_type']>
  _nin?: Maybe<Array<Scalars['enum_renewals_type']>>
}

/** expression to compare columns of type enum_tax_status. All fields are combined with logical 'AND'. */
export type Enum_Tax_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_tax_status']>
  _gt?: Maybe<Scalars['enum_tax_status']>
  _gte?: Maybe<Scalars['enum_tax_status']>
  _in?: Maybe<Array<Scalars['enum_tax_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_tax_status']>
  _lte?: Maybe<Scalars['enum_tax_status']>
  _neq?: Maybe<Scalars['enum_tax_status']>
  _nin?: Maybe<Array<Scalars['enum_tax_status']>>
}

/** expression to compare columns of type enum_tax_type. All fields are combined with logical 'AND'. */
export type Enum_Tax_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_tax_type']>
  _gt?: Maybe<Scalars['enum_tax_type']>
  _gte?: Maybe<Scalars['enum_tax_type']>
  _in?: Maybe<Array<Scalars['enum_tax_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_tax_type']>
  _lte?: Maybe<Scalars['enum_tax_type']>
  _neq?: Maybe<Scalars['enum_tax_type']>
  _nin?: Maybe<Array<Scalars['enum_tax_type']>>
}

/** expression to compare columns of type enum_terminations_payment_status. All fields are combined with logical 'AND'. */
export type Enum_Terminations_Payment_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_terminations_payment_status']>
  _gt?: Maybe<Scalars['enum_terminations_payment_status']>
  _gte?: Maybe<Scalars['enum_terminations_payment_status']>
  _in?: Maybe<Array<Scalars['enum_terminations_payment_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_terminations_payment_status']>
  _lte?: Maybe<Scalars['enum_terminations_payment_status']>
  _neq?: Maybe<Scalars['enum_terminations_payment_status']>
  _nin?: Maybe<Array<Scalars['enum_terminations_payment_status']>>
}

/** expression to compare columns of type enum_terminations_status. All fields are combined with logical 'AND'. */
export type Enum_Terminations_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_terminations_status']>
  _gt?: Maybe<Scalars['enum_terminations_status']>
  _gte?: Maybe<Scalars['enum_terminations_status']>
  _in?: Maybe<Array<Scalars['enum_terminations_status']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_terminations_status']>
  _lte?: Maybe<Scalars['enum_terminations_status']>
  _neq?: Maybe<Scalars['enum_terminations_status']>
  _nin?: Maybe<Array<Scalars['enum_terminations_status']>>
}

/** expression to compare columns of type enum_transactions_type. All fields are combined with logical 'AND'. */
export type Enum_Transactions_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['enum_transactions_type']>
  _gt?: Maybe<Scalars['enum_transactions_type']>
  _gte?: Maybe<Scalars['enum_transactions_type']>
  _in?: Maybe<Array<Scalars['enum_transactions_type']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['enum_transactions_type']>
  _lte?: Maybe<Scalars['enum_transactions_type']>
  _neq?: Maybe<Scalars['enum_transactions_type']>
  _nin?: Maybe<Array<Scalars['enum_transactions_type']>>
}

/** columns and relationships of "features" */
export type Features = {
  __typename?: 'features'
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  feature_type: Scalars['enum_feature_type']
  icon?: Maybe<Scalars['String']>
  id: Scalars['Int']
  is_active: Scalars['Boolean']
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An array relationship */
  unit_type_features: Array<Unit_Type_Features>
  /** An aggregated array relationship */
  unit_type_features_aggregate: Unit_Type_Features_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "features" */
export type FeaturesUnit_Type_FeaturesArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** columns and relationships of "features" */
export type FeaturesUnit_Type_Features_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** aggregated selection of "features" */
export type Features_Aggregate = {
  __typename?: 'features_aggregate'
  aggregate?: Maybe<Features_Aggregate_Fields>
  nodes: Array<Features>
}

/** aggregate fields of "features" */
export type Features_Aggregate_Fields = {
  __typename?: 'features_aggregate_fields'
  avg?: Maybe<Features_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Features_Max_Fields>
  min?: Maybe<Features_Min_Fields>
  stddev?: Maybe<Features_Stddev_Fields>
  stddev_pop?: Maybe<Features_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Features_Stddev_Samp_Fields>
  sum?: Maybe<Features_Sum_Fields>
  var_pop?: Maybe<Features_Var_Pop_Fields>
  var_samp?: Maybe<Features_Var_Samp_Fields>
  variance?: Maybe<Features_Variance_Fields>
}

/** aggregate fields of "features" */
export type Features_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Features_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "features" */
export type Features_Aggregate_Order_By = {
  avg?: Maybe<Features_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Features_Max_Order_By>
  min?: Maybe<Features_Min_Order_By>
  stddev?: Maybe<Features_Stddev_Order_By>
  stddev_pop?: Maybe<Features_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Features_Stddev_Samp_Order_By>
  sum?: Maybe<Features_Sum_Order_By>
  var_pop?: Maybe<Features_Var_Pop_Order_By>
  var_samp?: Maybe<Features_Var_Samp_Order_By>
  variance?: Maybe<Features_Variance_Order_By>
}

/** input type for inserting array relation for remote table "features" */
export type Features_Arr_Rel_Insert_Input = {
  data: Array<Features_Insert_Input>
  on_conflict?: Maybe<Features_On_Conflict>
}

/** aggregate avg on columns */
export type Features_Avg_Fields = {
  __typename?: 'features_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "features" */
export type Features_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "features". All fields are combined with a logical 'AND'. */
export type Features_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Features_Bool_Exp>>>
  _not?: Maybe<Features_Bool_Exp>
  _or?: Maybe<Array<Maybe<Features_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  description_en?: Maybe<String_Comparison_Exp>
  description_th?: Maybe<String_Comparison_Exp>
  feature_type?: Maybe<Enum_Feature_Type_Comparison_Exp>
  icon?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  is_active?: Maybe<Boolean_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  unit_type_features?: Maybe<Unit_Type_Features_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "features" */
export enum Features_Constraint {
  /** unique or primary key constraint */
  FeaturesPkey = 'features_pkey',
}

/** input type for incrementing integer column in table "features" */
export type Features_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "features" */
export type Features_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  feature_type?: Maybe<Scalars['enum_feature_type']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  is_active?: Maybe<Scalars['Boolean']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  unit_type_features?: Maybe<Unit_Type_Features_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Features_Max_Fields = {
  __typename?: 'features_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "features" */
export type Features_Max_Order_By = {
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Features_Min_Fields = {
  __typename?: 'features_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "features" */
export type Features_Min_Order_By = {
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "features" */
export type Features_Mutation_Response = {
  __typename?: 'features_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Features>
}

/** input type for inserting object relation for remote table "features" */
export type Features_Obj_Rel_Insert_Input = {
  data: Features_Insert_Input
  on_conflict?: Maybe<Features_On_Conflict>
}

/** on conflict condition type for table "features" */
export type Features_On_Conflict = {
  constraint: Features_Constraint
  update_columns: Array<Features_Update_Column>
  where?: Maybe<Features_Bool_Exp>
}

/** ordering options when selecting data from "features" */
export type Features_Order_By = {
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  feature_type?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_active?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  unit_type_features_aggregate?: Maybe<Unit_Type_Features_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "features" */
export type Features_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "features" */
export enum Features_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  FeatureType = 'feature_type',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "features" */
export type Features_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  feature_type?: Maybe<Scalars['enum_feature_type']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  is_active?: Maybe<Scalars['Boolean']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Features_Stddev_Fields = {
  __typename?: 'features_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "features" */
export type Features_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Features_Stddev_Pop_Fields = {
  __typename?: 'features_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "features" */
export type Features_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Features_Stddev_Samp_Fields = {
  __typename?: 'features_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "features" */
export type Features_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Features_Sum_Fields = {
  __typename?: 'features_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "features" */
export type Features_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "features" */
export enum Features_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  FeatureType = 'feature_type',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Features_Var_Pop_Fields = {
  __typename?: 'features_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "features" */
export type Features_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Features_Var_Samp_Fields = {
  __typename?: 'features_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "features" */
export type Features_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Features_Variance_Fields = {
  __typename?: 'features_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "features" */
export type Features_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>
  _gt?: Maybe<Scalars['float8']>
  _gte?: Maybe<Scalars['float8']>
  _in?: Maybe<Array<Scalars['float8']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['float8']>
  _lte?: Maybe<Scalars['float8']>
  _neq?: Maybe<Scalars['float8']>
  _nin?: Maybe<Array<Scalars['float8']>>
}

/** columns and relationships of "floors" */
export type Floors = {
  __typename?: 'floors'
  boxes_json?: Maybe<Scalars['String']>
  /** An object relationship */
  building: Buildings
  building_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  image_url?: Maybe<Scalars['String']>
  level: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An array relationship */
  unit_subtypes: Array<Unit_Subtypes>
  /** An aggregated array relationship */
  unit_subtypes_aggregate: Unit_Subtypes_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "floors" */
export type FloorsUnit_SubtypesArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** columns and relationships of "floors" */
export type FloorsUnit_Subtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** aggregated selection of "floors" */
export type Floors_Aggregate = {
  __typename?: 'floors_aggregate'
  aggregate?: Maybe<Floors_Aggregate_Fields>
  nodes: Array<Floors>
}

/** aggregate fields of "floors" */
export type Floors_Aggregate_Fields = {
  __typename?: 'floors_aggregate_fields'
  avg?: Maybe<Floors_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Floors_Max_Fields>
  min?: Maybe<Floors_Min_Fields>
  stddev?: Maybe<Floors_Stddev_Fields>
  stddev_pop?: Maybe<Floors_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Floors_Stddev_Samp_Fields>
  sum?: Maybe<Floors_Sum_Fields>
  var_pop?: Maybe<Floors_Var_Pop_Fields>
  var_samp?: Maybe<Floors_Var_Samp_Fields>
  variance?: Maybe<Floors_Variance_Fields>
}

/** aggregate fields of "floors" */
export type Floors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Floors_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "floors" */
export type Floors_Aggregate_Order_By = {
  avg?: Maybe<Floors_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Floors_Max_Order_By>
  min?: Maybe<Floors_Min_Order_By>
  stddev?: Maybe<Floors_Stddev_Order_By>
  stddev_pop?: Maybe<Floors_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Floors_Stddev_Samp_Order_By>
  sum?: Maybe<Floors_Sum_Order_By>
  var_pop?: Maybe<Floors_Var_Pop_Order_By>
  var_samp?: Maybe<Floors_Var_Samp_Order_By>
  variance?: Maybe<Floors_Variance_Order_By>
}

/** input type for inserting array relation for remote table "floors" */
export type Floors_Arr_Rel_Insert_Input = {
  data: Array<Floors_Insert_Input>
  on_conflict?: Maybe<Floors_On_Conflict>
}

/** aggregate avg on columns */
export type Floors_Avg_Fields = {
  __typename?: 'floors_avg_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "floors" */
export type Floors_Avg_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "floors". All fields are combined with a logical 'AND'. */
export type Floors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Floors_Bool_Exp>>>
  _not?: Maybe<Floors_Bool_Exp>
  _or?: Maybe<Array<Maybe<Floors_Bool_Exp>>>
  boxes_json?: Maybe<String_Comparison_Exp>
  building?: Maybe<Buildings_Bool_Exp>
  building_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  image_url?: Maybe<String_Comparison_Exp>
  level?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  unit_subtypes?: Maybe<Unit_Subtypes_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "floors" */
export enum Floors_Constraint {
  /** unique or primary key constraint */
  FloorsPkey = 'floors_pkey',
}

/** input type for incrementing integer column in table "floors" */
export type Floors_Inc_Input = {
  building_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  level?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "floors" */
export type Floors_Insert_Input = {
  boxes_json?: Maybe<Scalars['String']>
  building?: Maybe<Buildings_Obj_Rel_Insert_Input>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  level?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  unit_subtypes?: Maybe<Unit_Subtypes_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Floors_Max_Fields = {
  __typename?: 'floors_max_fields'
  boxes_json?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  level?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "floors" */
export type Floors_Max_Order_By = {
  boxes_json?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  level?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Floors_Min_Fields = {
  __typename?: 'floors_min_fields'
  boxes_json?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  level?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "floors" */
export type Floors_Min_Order_By = {
  boxes_json?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  level?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "floors" */
export type Floors_Mutation_Response = {
  __typename?: 'floors_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Floors>
}

/** input type for inserting object relation for remote table "floors" */
export type Floors_Obj_Rel_Insert_Input = {
  data: Floors_Insert_Input
  on_conflict?: Maybe<Floors_On_Conflict>
}

/** on conflict condition type for table "floors" */
export type Floors_On_Conflict = {
  constraint: Floors_Constraint
  update_columns: Array<Floors_Update_Column>
  where?: Maybe<Floors_Bool_Exp>
}

/** ordering options when selecting data from "floors" */
export type Floors_Order_By = {
  boxes_json?: Maybe<Order_By>
  building?: Maybe<Buildings_Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  level?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  unit_subtypes_aggregate?: Maybe<Unit_Subtypes_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "floors" */
export type Floors_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "floors" */
export enum Floors_Select_Column {
  /** column name */
  BoxesJson = 'boxes_json',
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Level = 'level',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "floors" */
export type Floors_Set_Input = {
  boxes_json?: Maybe<Scalars['String']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  level?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Floors_Stddev_Fields = {
  __typename?: 'floors_stddev_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "floors" */
export type Floors_Stddev_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Floors_Stddev_Pop_Fields = {
  __typename?: 'floors_stddev_pop_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "floors" */
export type Floors_Stddev_Pop_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Floors_Stddev_Samp_Fields = {
  __typename?: 'floors_stddev_samp_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "floors" */
export type Floors_Stddev_Samp_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Floors_Sum_Fields = {
  __typename?: 'floors_sum_fields'
  building_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  level?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "floors" */
export type Floors_Sum_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** update columns of table "floors" */
export enum Floors_Update_Column {
  /** column name */
  BoxesJson = 'boxes_json',
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Level = 'level',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Floors_Var_Pop_Fields = {
  __typename?: 'floors_var_pop_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "floors" */
export type Floors_Var_Pop_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Floors_Var_Samp_Fields = {
  __typename?: 'floors_var_samp_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "floors" */
export type Floors_Var_Samp_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Floors_Variance_Fields = {
  __typename?: 'floors_variance_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "floors" */
export type Floors_Variance_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** columns and relationships of "history_logs" */
export type History_Logs = {
  __typename?: 'history_logs'
  /** An object relationship */
  booking?: Maybe<Bookings>
  booking_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  company?: Maybe<Companies>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  customer?: Maybe<Customers>
  customer_id?: Maybe<Scalars['Int']>
  id: Scalars['Int']
  log: Scalars['String']
  /** An object relationship */
  renewal?: Maybe<Renewals>
  renewal_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  termination?: Maybe<Terminations>
  termination_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  transaction?: Maybe<Transactions>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "history_logs" */
export type History_Logs_Aggregate = {
  __typename?: 'history_logs_aggregate'
  aggregate?: Maybe<History_Logs_Aggregate_Fields>
  nodes: Array<History_Logs>
}

/** aggregate fields of "history_logs" */
export type History_Logs_Aggregate_Fields = {
  __typename?: 'history_logs_aggregate_fields'
  avg?: Maybe<History_Logs_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<History_Logs_Max_Fields>
  min?: Maybe<History_Logs_Min_Fields>
  stddev?: Maybe<History_Logs_Stddev_Fields>
  stddev_pop?: Maybe<History_Logs_Stddev_Pop_Fields>
  stddev_samp?: Maybe<History_Logs_Stddev_Samp_Fields>
  sum?: Maybe<History_Logs_Sum_Fields>
  var_pop?: Maybe<History_Logs_Var_Pop_Fields>
  var_samp?: Maybe<History_Logs_Var_Samp_Fields>
  variance?: Maybe<History_Logs_Variance_Fields>
}

/** aggregate fields of "history_logs" */
export type History_Logs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<History_Logs_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "history_logs" */
export type History_Logs_Aggregate_Order_By = {
  avg?: Maybe<History_Logs_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<History_Logs_Max_Order_By>
  min?: Maybe<History_Logs_Min_Order_By>
  stddev?: Maybe<History_Logs_Stddev_Order_By>
  stddev_pop?: Maybe<History_Logs_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<History_Logs_Stddev_Samp_Order_By>
  sum?: Maybe<History_Logs_Sum_Order_By>
  var_pop?: Maybe<History_Logs_Var_Pop_Order_By>
  var_samp?: Maybe<History_Logs_Var_Samp_Order_By>
  variance?: Maybe<History_Logs_Variance_Order_By>
}

/** input type for inserting array relation for remote table "history_logs" */
export type History_Logs_Arr_Rel_Insert_Input = {
  data: Array<History_Logs_Insert_Input>
  on_conflict?: Maybe<History_Logs_On_Conflict>
}

/** aggregate avg on columns */
export type History_Logs_Avg_Fields = {
  __typename?: 'history_logs_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "history_logs" */
export type History_Logs_Avg_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "history_logs". All fields are combined with a logical 'AND'. */
export type History_Logs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<History_Logs_Bool_Exp>>>
  _not?: Maybe<History_Logs_Bool_Exp>
  _or?: Maybe<Array<Maybe<History_Logs_Bool_Exp>>>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  customer?: Maybe<Customers_Bool_Exp>
  customer_id?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  log?: Maybe<String_Comparison_Exp>
  renewal?: Maybe<Renewals_Bool_Exp>
  renewal_id?: Maybe<Int_Comparison_Exp>
  termination?: Maybe<Terminations_Bool_Exp>
  termination_id?: Maybe<Int_Comparison_Exp>
  transaction?: Maybe<Transactions_Bool_Exp>
  transaction_id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "history_logs" */
export enum History_Logs_Constraint {
  /** unique or primary key constraint */
  HistoryLogsPkey = 'history_logs_pkey',
}

/** input type for incrementing integer column in table "history_logs" */
export type History_Logs_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "history_logs" */
export type History_Logs_Insert_Input = {
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  log?: Maybe<Scalars['String']>
  renewal?: Maybe<Renewals_Obj_Rel_Insert_Input>
  renewal_id?: Maybe<Scalars['Int']>
  termination?: Maybe<Terminations_Obj_Rel_Insert_Input>
  termination_id?: Maybe<Scalars['Int']>
  transaction?: Maybe<Transactions_Obj_Rel_Insert_Input>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type History_Logs_Max_Fields = {
  __typename?: 'history_logs_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  log?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "history_logs" */
export type History_Logs_Max_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  log?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type History_Logs_Min_Fields = {
  __typename?: 'history_logs_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  log?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "history_logs" */
export type History_Logs_Min_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  log?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "history_logs" */
export type History_Logs_Mutation_Response = {
  __typename?: 'history_logs_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<History_Logs>
}

/** input type for inserting object relation for remote table "history_logs" */
export type History_Logs_Obj_Rel_Insert_Input = {
  data: History_Logs_Insert_Input
  on_conflict?: Maybe<History_Logs_On_Conflict>
}

/** on conflict condition type for table "history_logs" */
export type History_Logs_On_Conflict = {
  constraint: History_Logs_Constraint
  update_columns: Array<History_Logs_Update_Column>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** ordering options when selecting data from "history_logs" */
export type History_Logs_Order_By = {
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  customer?: Maybe<Customers_Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  log?: Maybe<Order_By>
  renewal?: Maybe<Renewals_Order_By>
  renewal_id?: Maybe<Order_By>
  termination?: Maybe<Terminations_Order_By>
  termination_id?: Maybe<Order_By>
  transaction?: Maybe<Transactions_Order_By>
  transaction_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "history_logs" */
export type History_Logs_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "history_logs" */
export enum History_Logs_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  Log = 'log',
  /** column name */
  RenewalId = 'renewal_id',
  /** column name */
  TerminationId = 'termination_id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "history_logs" */
export type History_Logs_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  log?: Maybe<Scalars['String']>
  renewal_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type History_Logs_Stddev_Fields = {
  __typename?: 'history_logs_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "history_logs" */
export type History_Logs_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type History_Logs_Stddev_Pop_Fields = {
  __typename?: 'history_logs_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "history_logs" */
export type History_Logs_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type History_Logs_Stddev_Samp_Fields = {
  __typename?: 'history_logs_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "history_logs" */
export type History_Logs_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type History_Logs_Sum_Fields = {
  __typename?: 'history_logs_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  company_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "history_logs" */
export type History_Logs_Sum_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** update columns of table "history_logs" */
export enum History_Logs_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  Log = 'log',
  /** column name */
  RenewalId = 'renewal_id',
  /** column name */
  TerminationId = 'termination_id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type History_Logs_Var_Pop_Fields = {
  __typename?: 'history_logs_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "history_logs" */
export type History_Logs_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type History_Logs_Var_Samp_Fields = {
  __typename?: 'history_logs_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "history_logs" */
export type History_Logs_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type History_Logs_Variance_Fields = {
  __typename?: 'history_logs_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  company_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "history_logs" */
export type History_Logs_Variance_Order_By = {
  booking_id?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** columns and relationships of "id_counters" */
export type Id_Counters = {
  __typename?: 'id_counters'
  /** An object relationship */
  company: Companies
  company_id: Scalars['Int']
  company_prefix: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  last_id: Scalars['Int']
  type: Scalars['resource_types']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "id_counters" */
export type Id_Counters_Aggregate = {
  __typename?: 'id_counters_aggregate'
  aggregate?: Maybe<Id_Counters_Aggregate_Fields>
  nodes: Array<Id_Counters>
}

/** aggregate fields of "id_counters" */
export type Id_Counters_Aggregate_Fields = {
  __typename?: 'id_counters_aggregate_fields'
  avg?: Maybe<Id_Counters_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Id_Counters_Max_Fields>
  min?: Maybe<Id_Counters_Min_Fields>
  stddev?: Maybe<Id_Counters_Stddev_Fields>
  stddev_pop?: Maybe<Id_Counters_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Id_Counters_Stddev_Samp_Fields>
  sum?: Maybe<Id_Counters_Sum_Fields>
  var_pop?: Maybe<Id_Counters_Var_Pop_Fields>
  var_samp?: Maybe<Id_Counters_Var_Samp_Fields>
  variance?: Maybe<Id_Counters_Variance_Fields>
}

/** aggregate fields of "id_counters" */
export type Id_Counters_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Id_Counters_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "id_counters" */
export type Id_Counters_Aggregate_Order_By = {
  avg?: Maybe<Id_Counters_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Id_Counters_Max_Order_By>
  min?: Maybe<Id_Counters_Min_Order_By>
  stddev?: Maybe<Id_Counters_Stddev_Order_By>
  stddev_pop?: Maybe<Id_Counters_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Id_Counters_Stddev_Samp_Order_By>
  sum?: Maybe<Id_Counters_Sum_Order_By>
  var_pop?: Maybe<Id_Counters_Var_Pop_Order_By>
  var_samp?: Maybe<Id_Counters_Var_Samp_Order_By>
  variance?: Maybe<Id_Counters_Variance_Order_By>
}

/** input type for inserting array relation for remote table "id_counters" */
export type Id_Counters_Arr_Rel_Insert_Input = {
  data: Array<Id_Counters_Insert_Input>
  on_conflict?: Maybe<Id_Counters_On_Conflict>
}

/** aggregate avg on columns */
export type Id_Counters_Avg_Fields = {
  __typename?: 'id_counters_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "id_counters" */
export type Id_Counters_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "id_counters". All fields are combined with a logical 'AND'. */
export type Id_Counters_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Id_Counters_Bool_Exp>>>
  _not?: Maybe<Id_Counters_Bool_Exp>
  _or?: Maybe<Array<Maybe<Id_Counters_Bool_Exp>>>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  company_prefix?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  last_id?: Maybe<Int_Comparison_Exp>
  type?: Maybe<Resource_Types_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "id_counters" */
export enum Id_Counters_Constraint {
  /** unique or primary key constraint */
  IdCountersCompanyPrefixUnique = 'id_counters_company_prefix_unique',
  /** unique or primary key constraint */
  IdCountersPkey = 'id_counters_pkey',
}

/** input type for incrementing integer column in table "id_counters" */
export type Id_Counters_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  last_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "id_counters" */
export type Id_Counters_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  company_prefix?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  last_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['resource_types']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Id_Counters_Max_Fields = {
  __typename?: 'id_counters_max_fields'
  company_id?: Maybe<Scalars['Int']>
  company_prefix?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  last_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "id_counters" */
export type Id_Counters_Max_Order_By = {
  company_id?: Maybe<Order_By>
  company_prefix?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Id_Counters_Min_Fields = {
  __typename?: 'id_counters_min_fields'
  company_id?: Maybe<Scalars['Int']>
  company_prefix?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  last_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "id_counters" */
export type Id_Counters_Min_Order_By = {
  company_id?: Maybe<Order_By>
  company_prefix?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "id_counters" */
export type Id_Counters_Mutation_Response = {
  __typename?: 'id_counters_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Id_Counters>
}

/** input type for inserting object relation for remote table "id_counters" */
export type Id_Counters_Obj_Rel_Insert_Input = {
  data: Id_Counters_Insert_Input
  on_conflict?: Maybe<Id_Counters_On_Conflict>
}

/** on conflict condition type for table "id_counters" */
export type Id_Counters_On_Conflict = {
  constraint: Id_Counters_Constraint
  update_columns: Array<Id_Counters_Update_Column>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** ordering options when selecting data from "id_counters" */
export type Id_Counters_Order_By = {
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  company_prefix?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "id_counters" */
export type Id_Counters_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "id_counters" */
export enum Id_Counters_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CompanyPrefix = 'company_prefix',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastId = 'last_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "id_counters" */
export type Id_Counters_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  company_prefix?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  last_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['resource_types']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Id_Counters_Stddev_Fields = {
  __typename?: 'id_counters_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "id_counters" */
export type Id_Counters_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Id_Counters_Stddev_Pop_Fields = {
  __typename?: 'id_counters_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "id_counters" */
export type Id_Counters_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Id_Counters_Stddev_Samp_Fields = {
  __typename?: 'id_counters_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "id_counters" */
export type Id_Counters_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Id_Counters_Sum_Fields = {
  __typename?: 'id_counters_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  last_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "id_counters" */
export type Id_Counters_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** update columns of table "id_counters" */
export enum Id_Counters_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CompanyPrefix = 'company_prefix',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastId = 'last_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Id_Counters_Var_Pop_Fields = {
  __typename?: 'id_counters_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "id_counters" */
export type Id_Counters_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Id_Counters_Var_Samp_Fields = {
  __typename?: 'id_counters_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "id_counters" */
export type Id_Counters_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Id_Counters_Variance_Fields = {
  __typename?: 'id_counters_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "id_counters" */
export type Id_Counters_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_id?: Maybe<Order_By>
}

/** columns and relationships of "insurance_taxes" */
export type Insurance_Taxes = {
  __typename?: 'insurance_taxes'
  /** An array relationship */
  applied_taxes: Array<Applied_Taxes>
  /** An aggregated array relationship */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  /** An object relationship */
  companies: Companies
  company_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currencies: Currencies
  currency_id: Scalars['Int']
  id: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  status: Scalars['enum_tax_status']
  type: Scalars['enum_tax_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** columns and relationships of "insurance_taxes" */
export type Insurance_TaxesApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "insurance_taxes" */
export type Insurance_TaxesApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** aggregated selection of "insurance_taxes" */
export type Insurance_Taxes_Aggregate = {
  __typename?: 'insurance_taxes_aggregate'
  aggregate?: Maybe<Insurance_Taxes_Aggregate_Fields>
  nodes: Array<Insurance_Taxes>
}

/** aggregate fields of "insurance_taxes" */
export type Insurance_Taxes_Aggregate_Fields = {
  __typename?: 'insurance_taxes_aggregate_fields'
  avg?: Maybe<Insurance_Taxes_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Insurance_Taxes_Max_Fields>
  min?: Maybe<Insurance_Taxes_Min_Fields>
  stddev?: Maybe<Insurance_Taxes_Stddev_Fields>
  stddev_pop?: Maybe<Insurance_Taxes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Insurance_Taxes_Stddev_Samp_Fields>
  sum?: Maybe<Insurance_Taxes_Sum_Fields>
  var_pop?: Maybe<Insurance_Taxes_Var_Pop_Fields>
  var_samp?: Maybe<Insurance_Taxes_Var_Samp_Fields>
  variance?: Maybe<Insurance_Taxes_Variance_Fields>
}

/** aggregate fields of "insurance_taxes" */
export type Insurance_Taxes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Insurance_Taxes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "insurance_taxes" */
export type Insurance_Taxes_Aggregate_Order_By = {
  avg?: Maybe<Insurance_Taxes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Insurance_Taxes_Max_Order_By>
  min?: Maybe<Insurance_Taxes_Min_Order_By>
  stddev?: Maybe<Insurance_Taxes_Stddev_Order_By>
  stddev_pop?: Maybe<Insurance_Taxes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Insurance_Taxes_Stddev_Samp_Order_By>
  sum?: Maybe<Insurance_Taxes_Sum_Order_By>
  var_pop?: Maybe<Insurance_Taxes_Var_Pop_Order_By>
  var_samp?: Maybe<Insurance_Taxes_Var_Samp_Order_By>
  variance?: Maybe<Insurance_Taxes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "insurance_taxes" */
export type Insurance_Taxes_Arr_Rel_Insert_Input = {
  data: Array<Insurance_Taxes_Insert_Input>
  on_conflict?: Maybe<Insurance_Taxes_On_Conflict>
}

/** aggregate avg on columns */
export type Insurance_Taxes_Avg_Fields = {
  __typename?: 'insurance_taxes_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "insurance_taxes". All fields are combined with a logical 'AND'. */
export type Insurance_Taxes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Insurance_Taxes_Bool_Exp>>>
  _not?: Maybe<Insurance_Taxes_Bool_Exp>
  _or?: Maybe<Array<Maybe<Insurance_Taxes_Bool_Exp>>>
  applied_taxes?: Maybe<Applied_Taxes_Bool_Exp>
  companies?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currencies?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  status?: Maybe<Enum_Tax_Status_Comparison_Exp>
  type?: Maybe<Enum_Tax_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "insurance_taxes" */
export enum Insurance_Taxes_Constraint {
  /** unique or primary key constraint */
  InsuranceTaxesPkey = 'insurance_taxes_pkey',
}

/** input type for incrementing integer column in table "insurance_taxes" */
export type Insurance_Taxes_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "insurance_taxes" */
export type Insurance_Taxes_Insert_Input = {
  applied_taxes?: Maybe<Applied_Taxes_Arr_Rel_Insert_Input>
  companies?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currencies?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_tax_status']>
  type?: Maybe<Scalars['enum_tax_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Insurance_Taxes_Max_Fields = {
  __typename?: 'insurance_taxes_max_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Max_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Insurance_Taxes_Min_Fields = {
  __typename?: 'insurance_taxes_min_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Min_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "insurance_taxes" */
export type Insurance_Taxes_Mutation_Response = {
  __typename?: 'insurance_taxes_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Insurance_Taxes>
}

/** input type for inserting object relation for remote table "insurance_taxes" */
export type Insurance_Taxes_Obj_Rel_Insert_Input = {
  data: Insurance_Taxes_Insert_Input
  on_conflict?: Maybe<Insurance_Taxes_On_Conflict>
}

/** on conflict condition type for table "insurance_taxes" */
export type Insurance_Taxes_On_Conflict = {
  constraint: Insurance_Taxes_Constraint
  update_columns: Array<Insurance_Taxes_Update_Column>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** ordering options when selecting data from "insurance_taxes" */
export type Insurance_Taxes_Order_By = {
  applied_taxes_aggregate?: Maybe<Applied_Taxes_Aggregate_Order_By>
  companies?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currencies?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  status?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "insurance_taxes" */
export type Insurance_Taxes_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "insurance_taxes" */
export enum Insurance_Taxes_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "insurance_taxes" */
export type Insurance_Taxes_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_tax_status']>
  type?: Maybe<Scalars['enum_tax_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Insurance_Taxes_Stddev_Fields = {
  __typename?: 'insurance_taxes_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Insurance_Taxes_Stddev_Pop_Fields = {
  __typename?: 'insurance_taxes_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Insurance_Taxes_Stddev_Samp_Fields = {
  __typename?: 'insurance_taxes_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Insurance_Taxes_Sum_Fields = {
  __typename?: 'insurance_taxes_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "insurance_taxes" */
export enum Insurance_Taxes_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Insurance_Taxes_Var_Pop_Fields = {
  __typename?: 'insurance_taxes_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Insurance_Taxes_Var_Samp_Fields = {
  __typename?: 'insurance_taxes_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Insurance_Taxes_Variance_Fields = {
  __typename?: 'insurance_taxes_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "insurance_taxes" */
export type Insurance_Taxes_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** columns and relationships of "insurances" */
export type Insurances = {
  __typename?: 'insurances'
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An object relationship */
  company?: Maybe<Companies>
  company_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  country: Countries
  country_id: Scalars['Int']
  covered_amount: Scalars['float8']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currency: Currencies
  currency_id: Scalars['Int']
  icon?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  price_per_day: Scalars['float8']
  price_per_month: Scalars['float8']
  /** An array relationship */
  renewals: Array<Renewals>
  /** An aggregated array relationship */
  renewals_aggregate: Renewals_Aggregate
  terms_and_condition?: Maybe<Scalars['String']>
  third_party_partnership?: Maybe<Scalars['String']>
  third_party_provider?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "insurances" */
export type InsurancesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "insurances" */
export type InsurancesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "insurances" */
export type InsurancesRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** columns and relationships of "insurances" */
export type InsurancesRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** aggregated selection of "insurances" */
export type Insurances_Aggregate = {
  __typename?: 'insurances_aggregate'
  aggregate?: Maybe<Insurances_Aggregate_Fields>
  nodes: Array<Insurances>
}

/** aggregate fields of "insurances" */
export type Insurances_Aggregate_Fields = {
  __typename?: 'insurances_aggregate_fields'
  avg?: Maybe<Insurances_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Insurances_Max_Fields>
  min?: Maybe<Insurances_Min_Fields>
  stddev?: Maybe<Insurances_Stddev_Fields>
  stddev_pop?: Maybe<Insurances_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Insurances_Stddev_Samp_Fields>
  sum?: Maybe<Insurances_Sum_Fields>
  var_pop?: Maybe<Insurances_Var_Pop_Fields>
  var_samp?: Maybe<Insurances_Var_Samp_Fields>
  variance?: Maybe<Insurances_Variance_Fields>
}

/** aggregate fields of "insurances" */
export type Insurances_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Insurances_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "insurances" */
export type Insurances_Aggregate_Order_By = {
  avg?: Maybe<Insurances_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Insurances_Max_Order_By>
  min?: Maybe<Insurances_Min_Order_By>
  stddev?: Maybe<Insurances_Stddev_Order_By>
  stddev_pop?: Maybe<Insurances_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Insurances_Stddev_Samp_Order_By>
  sum?: Maybe<Insurances_Sum_Order_By>
  var_pop?: Maybe<Insurances_Var_Pop_Order_By>
  var_samp?: Maybe<Insurances_Var_Samp_Order_By>
  variance?: Maybe<Insurances_Variance_Order_By>
}

/** input type for inserting array relation for remote table "insurances" */
export type Insurances_Arr_Rel_Insert_Input = {
  data: Array<Insurances_Insert_Input>
  on_conflict?: Maybe<Insurances_On_Conflict>
}

/** aggregate avg on columns */
export type Insurances_Avg_Fields = {
  __typename?: 'insurances_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "insurances" */
export type Insurances_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "insurances". All fields are combined with a logical 'AND'. */
export type Insurances_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Insurances_Bool_Exp>>>
  _not?: Maybe<Insurances_Bool_Exp>
  _or?: Maybe<Array<Maybe<Insurances_Bool_Exp>>>
  bookings?: Maybe<Bookings_Bool_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  country?: Maybe<Countries_Bool_Exp>
  country_id?: Maybe<Int_Comparison_Exp>
  covered_amount?: Maybe<Float8_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currency?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  icon?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  price_per_day?: Maybe<Float8_Comparison_Exp>
  price_per_month?: Maybe<Float8_Comparison_Exp>
  renewals?: Maybe<Renewals_Bool_Exp>
  terms_and_condition?: Maybe<String_Comparison_Exp>
  third_party_partnership?: Maybe<String_Comparison_Exp>
  third_party_provider?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "insurances" */
export enum Insurances_Constraint {
  /** unique or primary key constraint */
  InsurancesPkey = 'insurances_pkey',
}

/** input type for incrementing integer column in table "insurances" */
export type Insurances_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  covered_amount?: Maybe<Scalars['float8']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  price_per_day?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "insurances" */
export type Insurances_Insert_Input = {
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  country?: Maybe<Countries_Obj_Rel_Insert_Input>
  country_id?: Maybe<Scalars['Int']>
  covered_amount?: Maybe<Scalars['float8']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  price_per_day?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  renewals?: Maybe<Renewals_Arr_Rel_Insert_Input>
  terms_and_condition?: Maybe<Scalars['String']>
  third_party_partnership?: Maybe<Scalars['String']>
  third_party_provider?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Insurances_Max_Fields = {
  __typename?: 'insurances_max_fields'
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  covered_amount?: Maybe<Scalars['float8']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  price_per_day?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  terms_and_condition?: Maybe<Scalars['String']>
  third_party_partnership?: Maybe<Scalars['String']>
  third_party_provider?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "insurances" */
export type Insurances_Max_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  terms_and_condition?: Maybe<Order_By>
  third_party_partnership?: Maybe<Order_By>
  third_party_provider?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Insurances_Min_Fields = {
  __typename?: 'insurances_min_fields'
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  covered_amount?: Maybe<Scalars['float8']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  price_per_day?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  terms_and_condition?: Maybe<Scalars['String']>
  third_party_partnership?: Maybe<Scalars['String']>
  third_party_provider?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "insurances" */
export type Insurances_Min_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  terms_and_condition?: Maybe<Order_By>
  third_party_partnership?: Maybe<Order_By>
  third_party_provider?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "insurances" */
export type Insurances_Mutation_Response = {
  __typename?: 'insurances_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Insurances>
}

/** input type for inserting object relation for remote table "insurances" */
export type Insurances_Obj_Rel_Insert_Input = {
  data: Insurances_Insert_Input
  on_conflict?: Maybe<Insurances_On_Conflict>
}

/** on conflict condition type for table "insurances" */
export type Insurances_On_Conflict = {
  constraint: Insurances_Constraint
  update_columns: Array<Insurances_Update_Column>
  where?: Maybe<Insurances_Bool_Exp>
}

/** ordering options when selecting data from "insurances" */
export type Insurances_Order_By = {
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  country?: Maybe<Countries_Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  renewals_aggregate?: Maybe<Renewals_Aggregate_Order_By>
  terms_and_condition?: Maybe<Order_By>
  third_party_partnership?: Maybe<Order_By>
  third_party_provider?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "insurances" */
export type Insurances_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "insurances" */
export enum Insurances_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CoveredAmount = 'covered_amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  PricePerDay = 'price_per_day',
  /** column name */
  PricePerMonth = 'price_per_month',
  /** column name */
  TermsAndCondition = 'terms_and_condition',
  /** column name */
  ThirdPartyPartnership = 'third_party_partnership',
  /** column name */
  ThirdPartyProvider = 'third_party_provider',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "insurances" */
export type Insurances_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  covered_amount?: Maybe<Scalars['float8']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  icon?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  price_per_day?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  terms_and_condition?: Maybe<Scalars['String']>
  third_party_partnership?: Maybe<Scalars['String']>
  third_party_provider?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Insurances_Stddev_Fields = {
  __typename?: 'insurances_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "insurances" */
export type Insurances_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Insurances_Stddev_Pop_Fields = {
  __typename?: 'insurances_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "insurances" */
export type Insurances_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Insurances_Stddev_Samp_Fields = {
  __typename?: 'insurances_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "insurances" */
export type Insurances_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Insurances_Sum_Fields = {
  __typename?: 'insurances_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  country_id?: Maybe<Scalars['Int']>
  covered_amount?: Maybe<Scalars['float8']>
  currency_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  price_per_day?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "insurances" */
export type Insurances_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** update columns of table "insurances" */
export enum Insurances_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CoveredAmount = 'covered_amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  PricePerDay = 'price_per_day',
  /** column name */
  PricePerMonth = 'price_per_month',
  /** column name */
  TermsAndCondition = 'terms_and_condition',
  /** column name */
  ThirdPartyPartnership = 'third_party_partnership',
  /** column name */
  ThirdPartyProvider = 'third_party_provider',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Insurances_Var_Pop_Fields = {
  __typename?: 'insurances_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "insurances" */
export type Insurances_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Insurances_Var_Samp_Fields = {
  __typename?: 'insurances_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "insurances" */
export type Insurances_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Insurances_Variance_Fields = {
  __typename?: 'insurances_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  country_id?: Maybe<Scalars['Float']>
  covered_amount?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  price_per_day?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "insurances" */
export type Insurances_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  country_id?: Maybe<Order_By>
  covered_amount?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  price_per_day?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
}

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>
  _gt?: Maybe<Scalars['json']>
  _gte?: Maybe<Scalars['json']>
  _in?: Maybe<Array<Scalars['json']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['json']>
  _lte?: Maybe<Scalars['json']>
  _neq?: Maybe<Scalars['json']>
  _nin?: Maybe<Array<Scalars['json']>>
}

/** expression to compare columns of type listing_statuses. All fields are combined with logical 'AND'. */
export type Listing_Statuses_Comparison_Exp = {
  _eq?: Maybe<Scalars['listing_statuses']>
  _gt?: Maybe<Scalars['listing_statuses']>
  _gte?: Maybe<Scalars['listing_statuses']>
  _in?: Maybe<Array<Scalars['listing_statuses']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['listing_statuses']>
  _lte?: Maybe<Scalars['listing_statuses']>
  _neq?: Maybe<Scalars['listing_statuses']>
  _nin?: Maybe<Array<Scalars['listing_statuses']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** perform the action: "AddNewBooking" */
  AddNewBooking?: Maybe<BookingResponse>
  /** perform the action: "FileUpload" */
  FileUpload?: Maybe<FileUploadResponse>
  /** perform the action: "Login" */
  Login?: Maybe<JsonWebToken>
  /** perform the action: "RequestOTP" */
  RequestOTP?: Maybe<RequestOtpResult>
  /** perform the action: "calculateTerminationDues" */
  calculateTerminationDues: CalculateTerminationDuesResp
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>
  /** delete data from the table: "admin_fees" */
  delete_admin_fees?: Maybe<Admin_Fees_Mutation_Response>
  /** delete single row from the table: "admin_fees" */
  delete_admin_fees_by_pk?: Maybe<Admin_Fees>
  /** delete data from the table: "applied_taxes" */
  delete_applied_taxes?: Maybe<Applied_Taxes_Mutation_Response>
  /** delete single row from the table: "applied_taxes" */
  delete_applied_taxes_by_pk?: Maybe<Applied_Taxes>
  /** delete data from the table: "booking_contracts" */
  delete_booking_contracts?: Maybe<Booking_Contracts_Mutation_Response>
  /** delete single row from the table: "booking_contracts" */
  delete_booking_contracts_by_pk?: Maybe<Booking_Contracts>
  /** delete data from the table: "bookings" */
  delete_bookings?: Maybe<Bookings_Mutation_Response>
  /** delete data from the table: "bookings_building_addresses" */
  delete_bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Mutation_Response>
  /** delete single row from the table: "bookings_building_addresses" */
  delete_bookings_building_addresses_by_pk?: Maybe<Bookings_Building_Addresses>
  /** delete single row from the table: "bookings" */
  delete_bookings_by_pk?: Maybe<Bookings>
  /** delete data from the table: "bookings_history" */
  delete_bookings_history?: Maybe<Bookings_History_Mutation_Response>
  /** delete single row from the table: "bookings_history" */
  delete_bookings_history_by_pk?: Maybe<Bookings_History>
  /** delete data from the table: "bookings_promotions" */
  delete_bookings_promotions?: Maybe<Bookings_Promotions_Mutation_Response>
  /** delete single row from the table: "bookings_promotions" */
  delete_bookings_promotions_by_pk?: Maybe<Bookings_Promotions>
  /** delete data from the table: "bookings_promotions_customer_buys" */
  delete_bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Mutation_Response>
  /** delete single row from the table: "bookings_promotions_customer_buys" */
  delete_bookings_promotions_customer_buys_by_pk?: Maybe<Bookings_Promotions_Customer_Buys>
  /** delete data from the table: "bookings_promotions_customer_gets" */
  delete_bookings_promotions_customer_gets?: Maybe<Bookings_Promotions_Customer_Gets_Mutation_Response>
  /** delete single row from the table: "bookings_promotions_customer_gets" */
  delete_bookings_promotions_customer_gets_by_pk?: Maybe<Bookings_Promotions_Customer_Gets>
  /** delete data from the table: "building_taxes" */
  delete_building_taxes?: Maybe<Building_Taxes_Mutation_Response>
  /** delete single row from the table: "building_taxes" */
  delete_building_taxes_by_pk?: Maybe<Building_Taxes>
  /** delete data from the table: "buildings" */
  delete_buildings?: Maybe<Buildings_Mutation_Response>
  /** delete single row from the table: "buildings" */
  delete_buildings_by_pk?: Maybe<Buildings>
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>
  /** delete data from the table: "contract_templates" */
  delete_contract_templates?: Maybe<Contract_Templates_Mutation_Response>
  /** delete single row from the table: "contract_templates" */
  delete_contract_templates_by_pk?: Maybe<Contract_Templates>
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>
  /** delete data from the table: "currencies" */
  delete_currencies?: Maybe<Currencies_Mutation_Response>
  /** delete single row from the table: "currencies" */
  delete_currencies_by_pk?: Maybe<Currencies>
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>
  /** delete data from the table: "features" */
  delete_features?: Maybe<Features_Mutation_Response>
  /** delete single row from the table: "features" */
  delete_features_by_pk?: Maybe<Features>
  /** delete data from the table: "floors" */
  delete_floors?: Maybe<Floors_Mutation_Response>
  /** delete single row from the table: "floors" */
  delete_floors_by_pk?: Maybe<Floors>
  /** delete data from the table: "history_logs" */
  delete_history_logs?: Maybe<History_Logs_Mutation_Response>
  /** delete single row from the table: "history_logs" */
  delete_history_logs_by_pk?: Maybe<History_Logs>
  /** delete data from the table: "id_counters" */
  delete_id_counters?: Maybe<Id_Counters_Mutation_Response>
  /** delete single row from the table: "id_counters" */
  delete_id_counters_by_pk?: Maybe<Id_Counters>
  /** delete data from the table: "insurance_taxes" */
  delete_insurance_taxes?: Maybe<Insurance_Taxes_Mutation_Response>
  /** delete single row from the table: "insurance_taxes" */
  delete_insurance_taxes_by_pk?: Maybe<Insurance_Taxes>
  /** delete data from the table: "insurances" */
  delete_insurances?: Maybe<Insurances_Mutation_Response>
  /** delete single row from the table: "insurances" */
  delete_insurances_by_pk?: Maybe<Insurances>
  /** delete data from the table: "otps" */
  delete_otps?: Maybe<Otps_Mutation_Response>
  /** delete single row from the table: "otps" */
  delete_otps_by_pk?: Maybe<Otps>
  /** delete data from the table: "payment_methods" */
  delete_payment_methods?: Maybe<Payment_Methods_Mutation_Response>
  /** delete single row from the table: "payment_methods" */
  delete_payment_methods_by_pk?: Maybe<Payment_Methods>
  /** delete data from the table: "promotions" */
  delete_promotions?: Maybe<Promotions_Mutation_Response>
  /** delete single row from the table: "promotions" */
  delete_promotions_by_pk?: Maybe<Promotions>
  /** delete data from the table: "promotions_customer_buys" */
  delete_promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Mutation_Response>
  /** delete single row from the table: "promotions_customer_buys" */
  delete_promotions_customer_buys_by_pk?: Maybe<Promotions_Customer_Buys>
  /** delete data from the table: "promotions_customer_gets" */
  delete_promotions_customer_gets?: Maybe<Promotions_Customer_Gets_Mutation_Response>
  /** delete single row from the table: "promotions_customer_gets" */
  delete_promotions_customer_gets_by_pk?: Maybe<Promotions_Customer_Gets>
  /** delete data from the table: "promotions_redeem" */
  delete_promotions_redeem?: Maybe<Promotions_Redeem_Mutation_Response>
  /** delete single row from the table: "promotions_redeem" */
  delete_promotions_redeem_by_pk?: Maybe<Promotions_Redeem>
  /** delete data from the table: "renewals" */
  delete_renewals?: Maybe<Renewals_Mutation_Response>
  /** delete single row from the table: "renewals" */
  delete_renewals_by_pk?: Maybe<Renewals>
  /** delete data from the table: "terminations" */
  delete_terminations?: Maybe<Terminations_Mutation_Response>
  /** delete single row from the table: "terminations" */
  delete_terminations_by_pk?: Maybe<Terminations>
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>
  /** delete data from the table: "unit_subtypes" */
  delete_unit_subtypes?: Maybe<Unit_Subtypes_Mutation_Response>
  /** delete single row from the table: "unit_subtypes" */
  delete_unit_subtypes_by_pk?: Maybe<Unit_Subtypes>
  /** delete data from the table: "unit_type_features" */
  delete_unit_type_features?: Maybe<Unit_Type_Features_Mutation_Response>
  /** delete single row from the table: "unit_type_features" */
  delete_unit_type_features_by_pk?: Maybe<Unit_Type_Features>
  /** delete data from the table: "unit_types" */
  delete_unit_types?: Maybe<Unit_Types_Mutation_Response>
  /** delete single row from the table: "unit_types" */
  delete_unit_types_by_pk?: Maybe<Unit_Types>
  /** delete data from the table: "units" */
  delete_units?: Maybe<Units_Mutation_Response>
  /** delete single row from the table: "units" */
  delete_units_by_pk?: Maybe<Units>
  /** delete data from the table: "user_companies" */
  delete_user_companies?: Maybe<User_Companies_Mutation_Response>
  /** delete single row from the table: "user_companies" */
  delete_user_companies_by_pk?: Maybe<User_Companies>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>
  /** insert data into the table: "admin_fees" */
  insert_admin_fees?: Maybe<Admin_Fees_Mutation_Response>
  /** insert a single row into the table: "admin_fees" */
  insert_admin_fees_one?: Maybe<Admin_Fees>
  /** insert data into the table: "applied_taxes" */
  insert_applied_taxes?: Maybe<Applied_Taxes_Mutation_Response>
  /** insert a single row into the table: "applied_taxes" */
  insert_applied_taxes_one?: Maybe<Applied_Taxes>
  /** insert data into the table: "booking_contracts" */
  insert_booking_contracts?: Maybe<Booking_Contracts_Mutation_Response>
  /** insert a single row into the table: "booking_contracts" */
  insert_booking_contracts_one?: Maybe<Booking_Contracts>
  /** insert data into the table: "bookings" */
  insert_bookings?: Maybe<Bookings_Mutation_Response>
  /** insert data into the table: "bookings_building_addresses" */
  insert_bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Mutation_Response>
  /** insert a single row into the table: "bookings_building_addresses" */
  insert_bookings_building_addresses_one?: Maybe<Bookings_Building_Addresses>
  /** insert data into the table: "bookings_history" */
  insert_bookings_history?: Maybe<Bookings_History_Mutation_Response>
  /** insert a single row into the table: "bookings_history" */
  insert_bookings_history_one?: Maybe<Bookings_History>
  /** insert a single row into the table: "bookings" */
  insert_bookings_one?: Maybe<Bookings>
  /** insert data into the table: "bookings_promotions" */
  insert_bookings_promotions?: Maybe<Bookings_Promotions_Mutation_Response>
  /** insert data into the table: "bookings_promotions_customer_buys" */
  insert_bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Mutation_Response>
  /** insert a single row into the table: "bookings_promotions_customer_buys" */
  insert_bookings_promotions_customer_buys_one?: Maybe<Bookings_Promotions_Customer_Buys>
  /** insert data into the table: "bookings_promotions_customer_gets" */
  insert_bookings_promotions_customer_gets?: Maybe<Bookings_Promotions_Customer_Gets_Mutation_Response>
  /** insert a single row into the table: "bookings_promotions_customer_gets" */
  insert_bookings_promotions_customer_gets_one?: Maybe<Bookings_Promotions_Customer_Gets>
  /** insert a single row into the table: "bookings_promotions" */
  insert_bookings_promotions_one?: Maybe<Bookings_Promotions>
  /** insert data into the table: "building_taxes" */
  insert_building_taxes?: Maybe<Building_Taxes_Mutation_Response>
  /** insert a single row into the table: "building_taxes" */
  insert_building_taxes_one?: Maybe<Building_Taxes>
  /** insert data into the table: "buildings" */
  insert_buildings?: Maybe<Buildings_Mutation_Response>
  /** insert a single row into the table: "buildings" */
  insert_buildings_one?: Maybe<Buildings>
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>
  /** insert data into the table: "contract_templates" */
  insert_contract_templates?: Maybe<Contract_Templates_Mutation_Response>
  /** insert a single row into the table: "contract_templates" */
  insert_contract_templates_one?: Maybe<Contract_Templates>
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>
  /** insert data into the table: "currencies" */
  insert_currencies?: Maybe<Currencies_Mutation_Response>
  /** insert a single row into the table: "currencies" */
  insert_currencies_one?: Maybe<Currencies>
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>
  /** insert data into the table: "features" */
  insert_features?: Maybe<Features_Mutation_Response>
  /** insert a single row into the table: "features" */
  insert_features_one?: Maybe<Features>
  /** insert data into the table: "floors" */
  insert_floors?: Maybe<Floors_Mutation_Response>
  /** insert a single row into the table: "floors" */
  insert_floors_one?: Maybe<Floors>
  /** insert data into the table: "history_logs" */
  insert_history_logs?: Maybe<History_Logs_Mutation_Response>
  /** insert a single row into the table: "history_logs" */
  insert_history_logs_one?: Maybe<History_Logs>
  /** insert data into the table: "id_counters" */
  insert_id_counters?: Maybe<Id_Counters_Mutation_Response>
  /** insert a single row into the table: "id_counters" */
  insert_id_counters_one?: Maybe<Id_Counters>
  /** insert data into the table: "insurance_taxes" */
  insert_insurance_taxes?: Maybe<Insurance_Taxes_Mutation_Response>
  /** insert a single row into the table: "insurance_taxes" */
  insert_insurance_taxes_one?: Maybe<Insurance_Taxes>
  /** insert data into the table: "insurances" */
  insert_insurances?: Maybe<Insurances_Mutation_Response>
  /** insert a single row into the table: "insurances" */
  insert_insurances_one?: Maybe<Insurances>
  /** insert data into the table: "otps" */
  insert_otps?: Maybe<Otps_Mutation_Response>
  /** insert a single row into the table: "otps" */
  insert_otps_one?: Maybe<Otps>
  /** insert data into the table: "payment_methods" */
  insert_payment_methods?: Maybe<Payment_Methods_Mutation_Response>
  /** insert a single row into the table: "payment_methods" */
  insert_payment_methods_one?: Maybe<Payment_Methods>
  /** insert data into the table: "promotions" */
  insert_promotions?: Maybe<Promotions_Mutation_Response>
  /** insert data into the table: "promotions_customer_buys" */
  insert_promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Mutation_Response>
  /** insert a single row into the table: "promotions_customer_buys" */
  insert_promotions_customer_buys_one?: Maybe<Promotions_Customer_Buys>
  /** insert data into the table: "promotions_customer_gets" */
  insert_promotions_customer_gets?: Maybe<Promotions_Customer_Gets_Mutation_Response>
  /** insert a single row into the table: "promotions_customer_gets" */
  insert_promotions_customer_gets_one?: Maybe<Promotions_Customer_Gets>
  /** insert a single row into the table: "promotions" */
  insert_promotions_one?: Maybe<Promotions>
  /** insert data into the table: "promotions_redeem" */
  insert_promotions_redeem?: Maybe<Promotions_Redeem_Mutation_Response>
  /** insert a single row into the table: "promotions_redeem" */
  insert_promotions_redeem_one?: Maybe<Promotions_Redeem>
  /** insert data into the table: "renewals" */
  insert_renewals?: Maybe<Renewals_Mutation_Response>
  /** insert a single row into the table: "renewals" */
  insert_renewals_one?: Maybe<Renewals>
  /** insert data into the table: "terminations" */
  insert_terminations?: Maybe<Terminations_Mutation_Response>
  /** insert a single row into the table: "terminations" */
  insert_terminations_one?: Maybe<Terminations>
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>
  /** insert data into the table: "unit_subtypes" */
  insert_unit_subtypes?: Maybe<Unit_Subtypes_Mutation_Response>
  /** insert a single row into the table: "unit_subtypes" */
  insert_unit_subtypes_one?: Maybe<Unit_Subtypes>
  /** insert data into the table: "unit_type_features" */
  insert_unit_type_features?: Maybe<Unit_Type_Features_Mutation_Response>
  /** insert a single row into the table: "unit_type_features" */
  insert_unit_type_features_one?: Maybe<Unit_Type_Features>
  /** insert data into the table: "unit_types" */
  insert_unit_types?: Maybe<Unit_Types_Mutation_Response>
  /** insert a single row into the table: "unit_types" */
  insert_unit_types_one?: Maybe<Unit_Types>
  /** insert data into the table: "units" */
  insert_units?: Maybe<Units_Mutation_Response>
  /** insert a single row into the table: "units" */
  insert_units_one?: Maybe<Units>
  /** insert data into the table: "user_companies" */
  insert_user_companies?: Maybe<User_Companies_Mutation_Response>
  /** insert a single row into the table: "user_companies" */
  insert_user_companies_one?: Maybe<User_Companies>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** perform the action: "requestTermination" */
  requestTermination: RequestTerminationResp
  /** perform the action: "sendNotifications" */
  sendNotifications?: Maybe<NotificationResponse>
  /** perform the action: "updateTermination" */
  updateTermination: UpdateTerminationResp
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>
  /** update data of the table: "admin_fees" */
  update_admin_fees?: Maybe<Admin_Fees_Mutation_Response>
  /** update single row of the table: "admin_fees" */
  update_admin_fees_by_pk?: Maybe<Admin_Fees>
  /** update data of the table: "applied_taxes" */
  update_applied_taxes?: Maybe<Applied_Taxes_Mutation_Response>
  /** update single row of the table: "applied_taxes" */
  update_applied_taxes_by_pk?: Maybe<Applied_Taxes>
  /** update data of the table: "booking_contracts" */
  update_booking_contracts?: Maybe<Booking_Contracts_Mutation_Response>
  /** update single row of the table: "booking_contracts" */
  update_booking_contracts_by_pk?: Maybe<Booking_Contracts>
  /** update data of the table: "bookings" */
  update_bookings?: Maybe<Bookings_Mutation_Response>
  /** update data of the table: "bookings_building_addresses" */
  update_bookings_building_addresses?: Maybe<Bookings_Building_Addresses_Mutation_Response>
  /** update single row of the table: "bookings_building_addresses" */
  update_bookings_building_addresses_by_pk?: Maybe<Bookings_Building_Addresses>
  /** update single row of the table: "bookings" */
  update_bookings_by_pk?: Maybe<Bookings>
  /** update data of the table: "bookings_history" */
  update_bookings_history?: Maybe<Bookings_History_Mutation_Response>
  /** update single row of the table: "bookings_history" */
  update_bookings_history_by_pk?: Maybe<Bookings_History>
  /** update data of the table: "bookings_promotions" */
  update_bookings_promotions?: Maybe<Bookings_Promotions_Mutation_Response>
  /** update single row of the table: "bookings_promotions" */
  update_bookings_promotions_by_pk?: Maybe<Bookings_Promotions>
  /** update data of the table: "bookings_promotions_customer_buys" */
  update_bookings_promotions_customer_buys?: Maybe<Bookings_Promotions_Customer_Buys_Mutation_Response>
  /** update single row of the table: "bookings_promotions_customer_buys" */
  update_bookings_promotions_customer_buys_by_pk?: Maybe<Bookings_Promotions_Customer_Buys>
  /** update data of the table: "bookings_promotions_customer_gets" */
  update_bookings_promotions_customer_gets?: Maybe<Bookings_Promotions_Customer_Gets_Mutation_Response>
  /** update single row of the table: "bookings_promotions_customer_gets" */
  update_bookings_promotions_customer_gets_by_pk?: Maybe<Bookings_Promotions_Customer_Gets>
  /** update data of the table: "building_taxes" */
  update_building_taxes?: Maybe<Building_Taxes_Mutation_Response>
  /** update single row of the table: "building_taxes" */
  update_building_taxes_by_pk?: Maybe<Building_Taxes>
  /** update data of the table: "buildings" */
  update_buildings?: Maybe<Buildings_Mutation_Response>
  /** update single row of the table: "buildings" */
  update_buildings_by_pk?: Maybe<Buildings>
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>
  /** update data of the table: "contract_templates" */
  update_contract_templates?: Maybe<Contract_Templates_Mutation_Response>
  /** update single row of the table: "contract_templates" */
  update_contract_templates_by_pk?: Maybe<Contract_Templates>
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>
  /** update data of the table: "currencies" */
  update_currencies?: Maybe<Currencies_Mutation_Response>
  /** update single row of the table: "currencies" */
  update_currencies_by_pk?: Maybe<Currencies>
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>
  /** update data of the table: "features" */
  update_features?: Maybe<Features_Mutation_Response>
  /** update single row of the table: "features" */
  update_features_by_pk?: Maybe<Features>
  /** update data of the table: "floors" */
  update_floors?: Maybe<Floors_Mutation_Response>
  /** update single row of the table: "floors" */
  update_floors_by_pk?: Maybe<Floors>
  /** update data of the table: "history_logs" */
  update_history_logs?: Maybe<History_Logs_Mutation_Response>
  /** update single row of the table: "history_logs" */
  update_history_logs_by_pk?: Maybe<History_Logs>
  /** update data of the table: "id_counters" */
  update_id_counters?: Maybe<Id_Counters_Mutation_Response>
  /** update single row of the table: "id_counters" */
  update_id_counters_by_pk?: Maybe<Id_Counters>
  /** update data of the table: "insurance_taxes" */
  update_insurance_taxes?: Maybe<Insurance_Taxes_Mutation_Response>
  /** update single row of the table: "insurance_taxes" */
  update_insurance_taxes_by_pk?: Maybe<Insurance_Taxes>
  /** update data of the table: "insurances" */
  update_insurances?: Maybe<Insurances_Mutation_Response>
  /** update single row of the table: "insurances" */
  update_insurances_by_pk?: Maybe<Insurances>
  /** update data of the table: "otps" */
  update_otps?: Maybe<Otps_Mutation_Response>
  /** update single row of the table: "otps" */
  update_otps_by_pk?: Maybe<Otps>
  /** update data of the table: "payment_methods" */
  update_payment_methods?: Maybe<Payment_Methods_Mutation_Response>
  /** update single row of the table: "payment_methods" */
  update_payment_methods_by_pk?: Maybe<Payment_Methods>
  /** update data of the table: "promotions" */
  update_promotions?: Maybe<Promotions_Mutation_Response>
  /** update single row of the table: "promotions" */
  update_promotions_by_pk?: Maybe<Promotions>
  /** update data of the table: "promotions_customer_buys" */
  update_promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Mutation_Response>
  /** update single row of the table: "promotions_customer_buys" */
  update_promotions_customer_buys_by_pk?: Maybe<Promotions_Customer_Buys>
  /** update data of the table: "promotions_customer_gets" */
  update_promotions_customer_gets?: Maybe<Promotions_Customer_Gets_Mutation_Response>
  /** update single row of the table: "promotions_customer_gets" */
  update_promotions_customer_gets_by_pk?: Maybe<Promotions_Customer_Gets>
  /** update data of the table: "promotions_redeem" */
  update_promotions_redeem?: Maybe<Promotions_Redeem_Mutation_Response>
  /** update single row of the table: "promotions_redeem" */
  update_promotions_redeem_by_pk?: Maybe<Promotions_Redeem>
  /** update data of the table: "renewals" */
  update_renewals?: Maybe<Renewals_Mutation_Response>
  /** update single row of the table: "renewals" */
  update_renewals_by_pk?: Maybe<Renewals>
  /** update data of the table: "terminations" */
  update_terminations?: Maybe<Terminations_Mutation_Response>
  /** update single row of the table: "terminations" */
  update_terminations_by_pk?: Maybe<Terminations>
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>
  /** update data of the table: "unit_subtypes" */
  update_unit_subtypes?: Maybe<Unit_Subtypes_Mutation_Response>
  /** update single row of the table: "unit_subtypes" */
  update_unit_subtypes_by_pk?: Maybe<Unit_Subtypes>
  /** update data of the table: "unit_type_features" */
  update_unit_type_features?: Maybe<Unit_Type_Features_Mutation_Response>
  /** update single row of the table: "unit_type_features" */
  update_unit_type_features_by_pk?: Maybe<Unit_Type_Features>
  /** update data of the table: "unit_types" */
  update_unit_types?: Maybe<Unit_Types_Mutation_Response>
  /** update single row of the table: "unit_types" */
  update_unit_types_by_pk?: Maybe<Unit_Types>
  /** update data of the table: "units" */
  update_units?: Maybe<Units_Mutation_Response>
  /** update single row of the table: "units" */
  update_units_by_pk?: Maybe<Units>
  /** update data of the table: "user_companies" */
  update_user_companies?: Maybe<User_Companies_Mutation_Response>
  /** update single row of the table: "user_companies" */
  update_user_companies_by_pk?: Maybe<User_Companies>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootAddNewBookingArgs = {
  auto_renewal: Scalars['Boolean']
  building_id: Scalars['Int']
  contact_number: Scalars['String']
  custom_price?: Maybe<Scalars['float8']>
  customer_id: Scalars['Int']
  deposit_payment_method_id?: Maybe<Scalars['Int']>
  email: Scalars['String']
  has_admin_fee: Scalars['Boolean']
  insurance_id?: Maybe<Scalars['Int']>
  is_insured: Scalars['Boolean']
  is_prepaid: Scalars['Boolean']
  move_in_date: Scalars['timestamptz']
  move_out_date?: Maybe<Scalars['timestamptz']>
  prepaid_months?: Maybe<Scalars['Int']>
  promo_code?: Maybe<Scalars['String']>
  promotion_id?: Maybe<Scalars['Int']>
  rent_payment_method_id?: Maybe<Scalars['Int']>
  unit_id: Scalars['Int']
  unit_subtype_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootFileUploadArgs = {
  files: Array<UploadedFile>
  upload_type: UploadType
}

/** mutation root */
export type Mutation_RootLoginArgs = {
  otp: Scalars['String']
}

/** mutation root */
export type Mutation_RootRequestOtpArgs = {
  email: Scalars['String']
}

/** mutation root */
export type Mutation_RootCalculateTerminationDuesArgs = {
  payload: TerminationPayload
}

/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Admin_FeesArgs = {
  where: Admin_Fees_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Admin_Fees_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Applied_TaxesArgs = {
  where: Applied_Taxes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Applied_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Booking_ContractsArgs = {
  where: Booking_Contracts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Booking_Contracts_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_BookingsArgs = {
  where: Bookings_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Building_AddressesArgs = {
  where: Bookings_Building_Addresses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Building_Addresses_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Bookings_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Bookings_HistoryArgs = {
  where: Bookings_History_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bookings_History_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Bookings_PromotionsArgs = {
  where: Bookings_Promotions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Promotions_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Promotions_Customer_BuysArgs = {
  where: Bookings_Promotions_Customer_Buys_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Promotions_Customer_Buys_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Promotions_Customer_GetsArgs = {
  where: Bookings_Promotions_Customer_Gets_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Bookings_Promotions_Customer_Gets_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Building_TaxesArgs = {
  where: Building_Taxes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Building_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_BuildingsArgs = {
  where: Buildings_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Buildings_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Contract_TemplatesArgs = {
  where: Contract_Templates_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Contract_Templates_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_CurrenciesArgs = {
  where: Currencies_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Currencies_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_FeaturesArgs = {
  where: Features_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Features_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_FloorsArgs = {
  where: Floors_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Floors_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_History_LogsArgs = {
  where: History_Logs_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_History_Logs_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Id_CountersArgs = {
  where: Id_Counters_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Id_Counters_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Insurance_TaxesArgs = {
  where: Insurance_Taxes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Insurance_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_InsurancesArgs = {
  where: Insurances_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Insurances_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_OtpsArgs = {
  where: Otps_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Otps_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Payment_MethodsArgs = {
  where: Payment_Methods_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Payment_Methods_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_PromotionsArgs = {
  where: Promotions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Promotions_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Promotions_Customer_BuysArgs = {
  where: Promotions_Customer_Buys_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Promotions_Customer_Buys_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Promotions_Customer_GetsArgs = {
  where: Promotions_Customer_Gets_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Promotions_Customer_Gets_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Promotions_RedeemArgs = {
  where: Promotions_Redeem_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Promotions_Redeem_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_RenewalsArgs = {
  where: Renewals_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Renewals_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_TerminationsArgs = {
  where: Terminations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Terminations_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Unit_SubtypesArgs = {
  where: Unit_Subtypes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Unit_Subtypes_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Unit_Type_FeaturesArgs = {
  where: Unit_Type_Features_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Unit_Type_Features_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Unit_TypesArgs = {
  where: Unit_Types_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Unit_Types_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_UnitsArgs = {
  where: Units_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Units_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_User_CompaniesArgs = {
  where: User_Companies_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Companies_By_PkArgs = {
  company_id: Scalars['Int']
  user_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>
  on_conflict?: Maybe<Addresses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input
  on_conflict?: Maybe<Addresses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Admin_FeesArgs = {
  objects: Array<Admin_Fees_Insert_Input>
  on_conflict?: Maybe<Admin_Fees_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Admin_Fees_OneArgs = {
  object: Admin_Fees_Insert_Input
  on_conflict?: Maybe<Admin_Fees_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Applied_TaxesArgs = {
  objects: Array<Applied_Taxes_Insert_Input>
  on_conflict?: Maybe<Applied_Taxes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Applied_Taxes_OneArgs = {
  object: Applied_Taxes_Insert_Input
  on_conflict?: Maybe<Applied_Taxes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Booking_ContractsArgs = {
  objects: Array<Booking_Contracts_Insert_Input>
  on_conflict?: Maybe<Booking_Contracts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Booking_Contracts_OneArgs = {
  object: Booking_Contracts_Insert_Input
  on_conflict?: Maybe<Booking_Contracts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BookingsArgs = {
  objects: Array<Bookings_Insert_Input>
  on_conflict?: Maybe<Bookings_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Building_AddressesArgs = {
  objects: Array<Bookings_Building_Addresses_Insert_Input>
  on_conflict?: Maybe<Bookings_Building_Addresses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Building_Addresses_OneArgs = {
  object: Bookings_Building_Addresses_Insert_Input
  on_conflict?: Maybe<Bookings_Building_Addresses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_HistoryArgs = {
  objects: Array<Bookings_History_Insert_Input>
  on_conflict?: Maybe<Bookings_History_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_History_OneArgs = {
  object: Bookings_History_Insert_Input
  on_conflict?: Maybe<Bookings_History_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_OneArgs = {
  object: Bookings_Insert_Input
  on_conflict?: Maybe<Bookings_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_PromotionsArgs = {
  objects: Array<Bookings_Promotions_Insert_Input>
  on_conflict?: Maybe<Bookings_Promotions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Promotions_Customer_BuysArgs = {
  objects: Array<Bookings_Promotions_Customer_Buys_Insert_Input>
  on_conflict?: Maybe<Bookings_Promotions_Customer_Buys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Promotions_Customer_Buys_OneArgs = {
  object: Bookings_Promotions_Customer_Buys_Insert_Input
  on_conflict?: Maybe<Bookings_Promotions_Customer_Buys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Promotions_Customer_GetsArgs = {
  objects: Array<Bookings_Promotions_Customer_Gets_Insert_Input>
  on_conflict?: Maybe<Bookings_Promotions_Customer_Gets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Promotions_Customer_Gets_OneArgs = {
  object: Bookings_Promotions_Customer_Gets_Insert_Input
  on_conflict?: Maybe<Bookings_Promotions_Customer_Gets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Bookings_Promotions_OneArgs = {
  object: Bookings_Promotions_Insert_Input
  on_conflict?: Maybe<Bookings_Promotions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Building_TaxesArgs = {
  objects: Array<Building_Taxes_Insert_Input>
  on_conflict?: Maybe<Building_Taxes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Building_Taxes_OneArgs = {
  object: Building_Taxes_Insert_Input
  on_conflict?: Maybe<Building_Taxes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BuildingsArgs = {
  objects: Array<Buildings_Insert_Input>
  on_conflict?: Maybe<Buildings_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Buildings_OneArgs = {
  object: Buildings_Insert_Input
  on_conflict?: Maybe<Buildings_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>
  on_conflict?: Maybe<Companies_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input
  on_conflict?: Maybe<Companies_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Contract_TemplatesArgs = {
  objects: Array<Contract_Templates_Insert_Input>
  on_conflict?: Maybe<Contract_Templates_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Contract_Templates_OneArgs = {
  object: Contract_Templates_Insert_Input
  on_conflict?: Maybe<Contract_Templates_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>
  on_conflict?: Maybe<Countries_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input
  on_conflict?: Maybe<Countries_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CurrenciesArgs = {
  objects: Array<Currencies_Insert_Input>
  on_conflict?: Maybe<Currencies_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Currencies_OneArgs = {
  object: Currencies_Insert_Input
  on_conflict?: Maybe<Currencies_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>
  on_conflict?: Maybe<Customers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input
  on_conflict?: Maybe<Customers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FeaturesArgs = {
  objects: Array<Features_Insert_Input>
  on_conflict?: Maybe<Features_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Features_OneArgs = {
  object: Features_Insert_Input
  on_conflict?: Maybe<Features_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FloorsArgs = {
  objects: Array<Floors_Insert_Input>
  on_conflict?: Maybe<Floors_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Floors_OneArgs = {
  object: Floors_Insert_Input
  on_conflict?: Maybe<Floors_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_History_LogsArgs = {
  objects: Array<History_Logs_Insert_Input>
  on_conflict?: Maybe<History_Logs_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_History_Logs_OneArgs = {
  object: History_Logs_Insert_Input
  on_conflict?: Maybe<History_Logs_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Id_CountersArgs = {
  objects: Array<Id_Counters_Insert_Input>
  on_conflict?: Maybe<Id_Counters_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Id_Counters_OneArgs = {
  object: Id_Counters_Insert_Input
  on_conflict?: Maybe<Id_Counters_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Insurance_TaxesArgs = {
  objects: Array<Insurance_Taxes_Insert_Input>
  on_conflict?: Maybe<Insurance_Taxes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Insurance_Taxes_OneArgs = {
  object: Insurance_Taxes_Insert_Input
  on_conflict?: Maybe<Insurance_Taxes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_InsurancesArgs = {
  objects: Array<Insurances_Insert_Input>
  on_conflict?: Maybe<Insurances_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Insurances_OneArgs = {
  object: Insurances_Insert_Input
  on_conflict?: Maybe<Insurances_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OtpsArgs = {
  objects: Array<Otps_Insert_Input>
  on_conflict?: Maybe<Otps_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Otps_OneArgs = {
  object: Otps_Insert_Input
  on_conflict?: Maybe<Otps_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payment_MethodsArgs = {
  objects: Array<Payment_Methods_Insert_Input>
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payment_Methods_OneArgs = {
  object: Payment_Methods_Insert_Input
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PromotionsArgs = {
  objects: Array<Promotions_Insert_Input>
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_Customer_BuysArgs = {
  objects: Array<Promotions_Customer_Buys_Insert_Input>
  on_conflict?: Maybe<Promotions_Customer_Buys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_Customer_Buys_OneArgs = {
  object: Promotions_Customer_Buys_Insert_Input
  on_conflict?: Maybe<Promotions_Customer_Buys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_Customer_GetsArgs = {
  objects: Array<Promotions_Customer_Gets_Insert_Input>
  on_conflict?: Maybe<Promotions_Customer_Gets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_Customer_Gets_OneArgs = {
  object: Promotions_Customer_Gets_Insert_Input
  on_conflict?: Maybe<Promotions_Customer_Gets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_OneArgs = {
  object: Promotions_Insert_Input
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_RedeemArgs = {
  objects: Array<Promotions_Redeem_Insert_Input>
  on_conflict?: Maybe<Promotions_Redeem_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_Redeem_OneArgs = {
  object: Promotions_Redeem_Insert_Input
  on_conflict?: Maybe<Promotions_Redeem_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RenewalsArgs = {
  objects: Array<Renewals_Insert_Input>
  on_conflict?: Maybe<Renewals_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Renewals_OneArgs = {
  object: Renewals_Insert_Input
  on_conflict?: Maybe<Renewals_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TerminationsArgs = {
  objects: Array<Terminations_Insert_Input>
  on_conflict?: Maybe<Terminations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Terminations_OneArgs = {
  object: Terminations_Insert_Input
  on_conflict?: Maybe<Terminations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Unit_SubtypesArgs = {
  objects: Array<Unit_Subtypes_Insert_Input>
  on_conflict?: Maybe<Unit_Subtypes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Unit_Subtypes_OneArgs = {
  object: Unit_Subtypes_Insert_Input
  on_conflict?: Maybe<Unit_Subtypes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Unit_Type_FeaturesArgs = {
  objects: Array<Unit_Type_Features_Insert_Input>
  on_conflict?: Maybe<Unit_Type_Features_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Unit_Type_Features_OneArgs = {
  object: Unit_Type_Features_Insert_Input
  on_conflict?: Maybe<Unit_Type_Features_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Unit_TypesArgs = {
  objects: Array<Unit_Types_Insert_Input>
  on_conflict?: Maybe<Unit_Types_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Unit_Types_OneArgs = {
  object: Unit_Types_Insert_Input
  on_conflict?: Maybe<Unit_Types_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UnitsArgs = {
  objects: Array<Units_Insert_Input>
  on_conflict?: Maybe<Units_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Units_OneArgs = {
  object: Units_Insert_Input
  on_conflict?: Maybe<Units_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_CompaniesArgs = {
  objects: Array<User_Companies_Insert_Input>
  on_conflict?: Maybe<User_Companies_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Companies_OneArgs = {
  object: User_Companies_Insert_Input
  on_conflict?: Maybe<User_Companies_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootRequestTerminationArgs = {
  payload: TerminationRequestPayload
}

/** mutation root */
export type Mutation_RootSendNotificationsArgs = {
  attachments?: Maybe<Array<AttachedFile>>
  email_custom_message?: Maybe<Scalars['String']>
  email_subject?: Maybe<Scalars['String']>
  emails?: Maybe<Array<Scalars['String']>>
  phones?: Maybe<Array<Scalars['String']>>
  sms_text?: Maybe<Scalars['String']>
  template_body?: Maybe<Scalars['json']>
  template_id?: Maybe<Scalars['String']>
  type: NotificationType
}

/** mutation root */
export type Mutation_RootUpdateTerminationArgs = {
  payload: TerminationUpdatePayload
}

/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _inc?: Maybe<Addresses_Inc_Input>
  _set?: Maybe<Addresses_Set_Input>
  where: Addresses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _inc?: Maybe<Addresses_Inc_Input>
  _set?: Maybe<Addresses_Set_Input>
  pk_columns: Addresses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Admin_FeesArgs = {
  _inc?: Maybe<Admin_Fees_Inc_Input>
  _set?: Maybe<Admin_Fees_Set_Input>
  where: Admin_Fees_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Admin_Fees_By_PkArgs = {
  _inc?: Maybe<Admin_Fees_Inc_Input>
  _set?: Maybe<Admin_Fees_Set_Input>
  pk_columns: Admin_Fees_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Applied_TaxesArgs = {
  _inc?: Maybe<Applied_Taxes_Inc_Input>
  _set?: Maybe<Applied_Taxes_Set_Input>
  where: Applied_Taxes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Applied_Taxes_By_PkArgs = {
  _inc?: Maybe<Applied_Taxes_Inc_Input>
  _set?: Maybe<Applied_Taxes_Set_Input>
  pk_columns: Applied_Taxes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Booking_ContractsArgs = {
  _inc?: Maybe<Booking_Contracts_Inc_Input>
  _set?: Maybe<Booking_Contracts_Set_Input>
  where: Booking_Contracts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Booking_Contracts_By_PkArgs = {
  _inc?: Maybe<Booking_Contracts_Inc_Input>
  _set?: Maybe<Booking_Contracts_Set_Input>
  pk_columns: Booking_Contracts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BookingsArgs = {
  _inc?: Maybe<Bookings_Inc_Input>
  _set?: Maybe<Bookings_Set_Input>
  where: Bookings_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Building_AddressesArgs = {
  _inc?: Maybe<Bookings_Building_Addresses_Inc_Input>
  _set?: Maybe<Bookings_Building_Addresses_Set_Input>
  where: Bookings_Building_Addresses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Building_Addresses_By_PkArgs = {
  _inc?: Maybe<Bookings_Building_Addresses_Inc_Input>
  _set?: Maybe<Bookings_Building_Addresses_Set_Input>
  pk_columns: Bookings_Building_Addresses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_By_PkArgs = {
  _inc?: Maybe<Bookings_Inc_Input>
  _set?: Maybe<Bookings_Set_Input>
  pk_columns: Bookings_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_HistoryArgs = {
  _inc?: Maybe<Bookings_History_Inc_Input>
  _set?: Maybe<Bookings_History_Set_Input>
  where: Bookings_History_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_History_By_PkArgs = {
  _inc?: Maybe<Bookings_History_Inc_Input>
  _set?: Maybe<Bookings_History_Set_Input>
  pk_columns: Bookings_History_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_PromotionsArgs = {
  _inc?: Maybe<Bookings_Promotions_Inc_Input>
  _set?: Maybe<Bookings_Promotions_Set_Input>
  where: Bookings_Promotions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Promotions_By_PkArgs = {
  _inc?: Maybe<Bookings_Promotions_Inc_Input>
  _set?: Maybe<Bookings_Promotions_Set_Input>
  pk_columns: Bookings_Promotions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Promotions_Customer_BuysArgs = {
  _inc?: Maybe<Bookings_Promotions_Customer_Buys_Inc_Input>
  _set?: Maybe<Bookings_Promotions_Customer_Buys_Set_Input>
  where: Bookings_Promotions_Customer_Buys_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Promotions_Customer_Buys_By_PkArgs = {
  _inc?: Maybe<Bookings_Promotions_Customer_Buys_Inc_Input>
  _set?: Maybe<Bookings_Promotions_Customer_Buys_Set_Input>
  pk_columns: Bookings_Promotions_Customer_Buys_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Promotions_Customer_GetsArgs = {
  _inc?: Maybe<Bookings_Promotions_Customer_Gets_Inc_Input>
  _set?: Maybe<Bookings_Promotions_Customer_Gets_Set_Input>
  where: Bookings_Promotions_Customer_Gets_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Bookings_Promotions_Customer_Gets_By_PkArgs = {
  _inc?: Maybe<Bookings_Promotions_Customer_Gets_Inc_Input>
  _set?: Maybe<Bookings_Promotions_Customer_Gets_Set_Input>
  pk_columns: Bookings_Promotions_Customer_Gets_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Building_TaxesArgs = {
  _inc?: Maybe<Building_Taxes_Inc_Input>
  _set?: Maybe<Building_Taxes_Set_Input>
  where: Building_Taxes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Building_Taxes_By_PkArgs = {
  _inc?: Maybe<Building_Taxes_Inc_Input>
  _set?: Maybe<Building_Taxes_Set_Input>
  pk_columns: Building_Taxes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BuildingsArgs = {
  _inc?: Maybe<Buildings_Inc_Input>
  _set?: Maybe<Buildings_Set_Input>
  where: Buildings_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Buildings_By_PkArgs = {
  _inc?: Maybe<Buildings_Inc_Input>
  _set?: Maybe<Buildings_Set_Input>
  pk_columns: Buildings_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: Maybe<Cities_Inc_Input>
  _set?: Maybe<Cities_Set_Input>
  where: Cities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: Maybe<Cities_Inc_Input>
  _set?: Maybe<Cities_Set_Input>
  pk_columns: Cities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: Maybe<Companies_Inc_Input>
  _set?: Maybe<Companies_Set_Input>
  where: Companies_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: Maybe<Companies_Inc_Input>
  _set?: Maybe<Companies_Set_Input>
  pk_columns: Companies_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Contract_TemplatesArgs = {
  _inc?: Maybe<Contract_Templates_Inc_Input>
  _set?: Maybe<Contract_Templates_Set_Input>
  where: Contract_Templates_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Contract_Templates_By_PkArgs = {
  _inc?: Maybe<Contract_Templates_Inc_Input>
  _set?: Maybe<Contract_Templates_Set_Input>
  pk_columns: Contract_Templates_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: Maybe<Countries_Inc_Input>
  _set?: Maybe<Countries_Set_Input>
  where: Countries_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _inc?: Maybe<Countries_Inc_Input>
  _set?: Maybe<Countries_Set_Input>
  pk_columns: Countries_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CurrenciesArgs = {
  _inc?: Maybe<Currencies_Inc_Input>
  _set?: Maybe<Currencies_Set_Input>
  where: Currencies_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Currencies_By_PkArgs = {
  _inc?: Maybe<Currencies_Inc_Input>
  _set?: Maybe<Currencies_Set_Input>
  pk_columns: Currencies_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _inc?: Maybe<Customers_Inc_Input>
  _set?: Maybe<Customers_Set_Input>
  where: Customers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _inc?: Maybe<Customers_Inc_Input>
  _set?: Maybe<Customers_Set_Input>
  pk_columns: Customers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_FeaturesArgs = {
  _inc?: Maybe<Features_Inc_Input>
  _set?: Maybe<Features_Set_Input>
  where: Features_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Features_By_PkArgs = {
  _inc?: Maybe<Features_Inc_Input>
  _set?: Maybe<Features_Set_Input>
  pk_columns: Features_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_FloorsArgs = {
  _inc?: Maybe<Floors_Inc_Input>
  _set?: Maybe<Floors_Set_Input>
  where: Floors_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Floors_By_PkArgs = {
  _inc?: Maybe<Floors_Inc_Input>
  _set?: Maybe<Floors_Set_Input>
  pk_columns: Floors_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_History_LogsArgs = {
  _inc?: Maybe<History_Logs_Inc_Input>
  _set?: Maybe<History_Logs_Set_Input>
  where: History_Logs_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_History_Logs_By_PkArgs = {
  _inc?: Maybe<History_Logs_Inc_Input>
  _set?: Maybe<History_Logs_Set_Input>
  pk_columns: History_Logs_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Id_CountersArgs = {
  _inc?: Maybe<Id_Counters_Inc_Input>
  _set?: Maybe<Id_Counters_Set_Input>
  where: Id_Counters_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Id_Counters_By_PkArgs = {
  _inc?: Maybe<Id_Counters_Inc_Input>
  _set?: Maybe<Id_Counters_Set_Input>
  pk_columns: Id_Counters_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Insurance_TaxesArgs = {
  _inc?: Maybe<Insurance_Taxes_Inc_Input>
  _set?: Maybe<Insurance_Taxes_Set_Input>
  where: Insurance_Taxes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Insurance_Taxes_By_PkArgs = {
  _inc?: Maybe<Insurance_Taxes_Inc_Input>
  _set?: Maybe<Insurance_Taxes_Set_Input>
  pk_columns: Insurance_Taxes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_InsurancesArgs = {
  _inc?: Maybe<Insurances_Inc_Input>
  _set?: Maybe<Insurances_Set_Input>
  where: Insurances_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Insurances_By_PkArgs = {
  _inc?: Maybe<Insurances_Inc_Input>
  _set?: Maybe<Insurances_Set_Input>
  pk_columns: Insurances_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_OtpsArgs = {
  _inc?: Maybe<Otps_Inc_Input>
  _set?: Maybe<Otps_Set_Input>
  where: Otps_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Otps_By_PkArgs = {
  _inc?: Maybe<Otps_Inc_Input>
  _set?: Maybe<Otps_Set_Input>
  pk_columns: Otps_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Payment_MethodsArgs = {
  _inc?: Maybe<Payment_Methods_Inc_Input>
  _set?: Maybe<Payment_Methods_Set_Input>
  where: Payment_Methods_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Payment_Methods_By_PkArgs = {
  _inc?: Maybe<Payment_Methods_Inc_Input>
  _set?: Maybe<Payment_Methods_Set_Input>
  pk_columns: Payment_Methods_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PromotionsArgs = {
  _inc?: Maybe<Promotions_Inc_Input>
  _set?: Maybe<Promotions_Set_Input>
  where: Promotions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_By_PkArgs = {
  _inc?: Maybe<Promotions_Inc_Input>
  _set?: Maybe<Promotions_Set_Input>
  pk_columns: Promotions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_Customer_BuysArgs = {
  _inc?: Maybe<Promotions_Customer_Buys_Inc_Input>
  _set?: Maybe<Promotions_Customer_Buys_Set_Input>
  where: Promotions_Customer_Buys_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_Customer_Buys_By_PkArgs = {
  _inc?: Maybe<Promotions_Customer_Buys_Inc_Input>
  _set?: Maybe<Promotions_Customer_Buys_Set_Input>
  pk_columns: Promotions_Customer_Buys_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_Customer_GetsArgs = {
  _inc?: Maybe<Promotions_Customer_Gets_Inc_Input>
  _set?: Maybe<Promotions_Customer_Gets_Set_Input>
  where: Promotions_Customer_Gets_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_Customer_Gets_By_PkArgs = {
  _inc?: Maybe<Promotions_Customer_Gets_Inc_Input>
  _set?: Maybe<Promotions_Customer_Gets_Set_Input>
  pk_columns: Promotions_Customer_Gets_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_RedeemArgs = {
  _inc?: Maybe<Promotions_Redeem_Inc_Input>
  _set?: Maybe<Promotions_Redeem_Set_Input>
  where: Promotions_Redeem_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_Redeem_By_PkArgs = {
  _inc?: Maybe<Promotions_Redeem_Inc_Input>
  _set?: Maybe<Promotions_Redeem_Set_Input>
  pk_columns: Promotions_Redeem_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_RenewalsArgs = {
  _inc?: Maybe<Renewals_Inc_Input>
  _set?: Maybe<Renewals_Set_Input>
  where: Renewals_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Renewals_By_PkArgs = {
  _inc?: Maybe<Renewals_Inc_Input>
  _set?: Maybe<Renewals_Set_Input>
  pk_columns: Renewals_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TerminationsArgs = {
  _inc?: Maybe<Terminations_Inc_Input>
  _set?: Maybe<Terminations_Set_Input>
  where: Terminations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Terminations_By_PkArgs = {
  _inc?: Maybe<Terminations_Inc_Input>
  _set?: Maybe<Terminations_Set_Input>
  pk_columns: Terminations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: Maybe<Transactions_Inc_Input>
  _set?: Maybe<Transactions_Set_Input>
  where: Transactions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: Maybe<Transactions_Inc_Input>
  _set?: Maybe<Transactions_Set_Input>
  pk_columns: Transactions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Unit_SubtypesArgs = {
  _inc?: Maybe<Unit_Subtypes_Inc_Input>
  _set?: Maybe<Unit_Subtypes_Set_Input>
  where: Unit_Subtypes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Unit_Subtypes_By_PkArgs = {
  _inc?: Maybe<Unit_Subtypes_Inc_Input>
  _set?: Maybe<Unit_Subtypes_Set_Input>
  pk_columns: Unit_Subtypes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Unit_Type_FeaturesArgs = {
  _inc?: Maybe<Unit_Type_Features_Inc_Input>
  _set?: Maybe<Unit_Type_Features_Set_Input>
  where: Unit_Type_Features_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Unit_Type_Features_By_PkArgs = {
  _inc?: Maybe<Unit_Type_Features_Inc_Input>
  _set?: Maybe<Unit_Type_Features_Set_Input>
  pk_columns: Unit_Type_Features_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Unit_TypesArgs = {
  _inc?: Maybe<Unit_Types_Inc_Input>
  _set?: Maybe<Unit_Types_Set_Input>
  where: Unit_Types_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Unit_Types_By_PkArgs = {
  _inc?: Maybe<Unit_Types_Inc_Input>
  _set?: Maybe<Unit_Types_Set_Input>
  pk_columns: Unit_Types_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UnitsArgs = {
  _inc?: Maybe<Units_Inc_Input>
  _set?: Maybe<Units_Set_Input>
  where: Units_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Units_By_PkArgs = {
  _inc?: Maybe<Units_Inc_Input>
  _set?: Maybe<Units_Set_Input>
  pk_columns: Units_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_CompaniesArgs = {
  _inc?: Maybe<User_Companies_Inc_Input>
  _set?: Maybe<User_Companies_Set_Input>
  where: User_Companies_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Companies_By_PkArgs = {
  _inc?: Maybe<User_Companies_Inc_Input>
  _set?: Maybe<User_Companies_Set_Input>
  pk_columns: User_Companies_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "otps" */
export type Otps = {
  __typename?: 'otps'
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at: Scalars['timestamp']
  id: Scalars['Int']
  otp_hash: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
  user_id: Scalars['Int']
}

/** aggregated selection of "otps" */
export type Otps_Aggregate = {
  __typename?: 'otps_aggregate'
  aggregate?: Maybe<Otps_Aggregate_Fields>
  nodes: Array<Otps>
}

/** aggregate fields of "otps" */
export type Otps_Aggregate_Fields = {
  __typename?: 'otps_aggregate_fields'
  avg?: Maybe<Otps_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Otps_Max_Fields>
  min?: Maybe<Otps_Min_Fields>
  stddev?: Maybe<Otps_Stddev_Fields>
  stddev_pop?: Maybe<Otps_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Otps_Stddev_Samp_Fields>
  sum?: Maybe<Otps_Sum_Fields>
  var_pop?: Maybe<Otps_Var_Pop_Fields>
  var_samp?: Maybe<Otps_Var_Samp_Fields>
  variance?: Maybe<Otps_Variance_Fields>
}

/** aggregate fields of "otps" */
export type Otps_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Otps_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "otps" */
export type Otps_Aggregate_Order_By = {
  avg?: Maybe<Otps_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Otps_Max_Order_By>
  min?: Maybe<Otps_Min_Order_By>
  stddev?: Maybe<Otps_Stddev_Order_By>
  stddev_pop?: Maybe<Otps_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Otps_Stddev_Samp_Order_By>
  sum?: Maybe<Otps_Sum_Order_By>
  var_pop?: Maybe<Otps_Var_Pop_Order_By>
  var_samp?: Maybe<Otps_Var_Samp_Order_By>
  variance?: Maybe<Otps_Variance_Order_By>
}

/** input type for inserting array relation for remote table "otps" */
export type Otps_Arr_Rel_Insert_Input = {
  data: Array<Otps_Insert_Input>
  on_conflict?: Maybe<Otps_On_Conflict>
}

/** aggregate avg on columns */
export type Otps_Avg_Fields = {
  __typename?: 'otps_avg_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "otps" */
export type Otps_Avg_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "otps". All fields are combined with a logical 'AND'. */
export type Otps_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Otps_Bool_Exp>>>
  _not?: Maybe<Otps_Bool_Exp>
  _or?: Maybe<Array<Maybe<Otps_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  expires_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  otp_hash?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "otps" */
export enum Otps_Constraint {
  /** unique or primary key constraint */
  OtpsPkey = 'otps_pkey',
}

/** input type for incrementing integer column in table "otps" */
export type Otps_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "otps" */
export type Otps_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['Int']>
  otp_hash?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Otps_Max_Fields = {
  __typename?: 'otps_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['Int']>
  otp_hash?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "otps" */
export type Otps_Max_Order_By = {
  created_at?: Maybe<Order_By>
  expires_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  otp_hash?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Otps_Min_Fields = {
  __typename?: 'otps_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['Int']>
  otp_hash?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "otps" */
export type Otps_Min_Order_By = {
  created_at?: Maybe<Order_By>
  expires_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  otp_hash?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "otps" */
export type Otps_Mutation_Response = {
  __typename?: 'otps_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Otps>
}

/** input type for inserting object relation for remote table "otps" */
export type Otps_Obj_Rel_Insert_Input = {
  data: Otps_Insert_Input
  on_conflict?: Maybe<Otps_On_Conflict>
}

/** on conflict condition type for table "otps" */
export type Otps_On_Conflict = {
  constraint: Otps_Constraint
  update_columns: Array<Otps_Update_Column>
  where?: Maybe<Otps_Bool_Exp>
}

/** ordering options when selecting data from "otps" */
export type Otps_Order_By = {
  created_at?: Maybe<Order_By>
  expires_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  otp_hash?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: "otps" */
export type Otps_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "otps" */
export enum Otps_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  OtpHash = 'otp_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "otps" */
export type Otps_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['Int']>
  otp_hash?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Otps_Stddev_Fields = {
  __typename?: 'otps_stddev_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "otps" */
export type Otps_Stddev_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Otps_Stddev_Pop_Fields = {
  __typename?: 'otps_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "otps" */
export type Otps_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Otps_Stddev_Samp_Fields = {
  __typename?: 'otps_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "otps" */
export type Otps_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Otps_Sum_Fields = {
  __typename?: 'otps_sum_fields'
  id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "otps" */
export type Otps_Sum_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "otps" */
export enum Otps_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  OtpHash = 'otp_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Otps_Var_Pop_Fields = {
  __typename?: 'otps_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "otps" */
export type Otps_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Otps_Var_Samp_Fields = {
  __typename?: 'otps_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "otps" */
export type Otps_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Otps_Variance_Fields = {
  __typename?: 'otps_variance_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "otps" */
export type Otps_Variance_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "payment_methods" */
export type Payment_Methods = {
  __typename?: 'payment_methods'
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An array relationship */
  terminations: Array<Terminations>
  /** An aggregated array relationship */
  terminations_aggregate: Terminations_Aggregate
  /** An array relationship */
  transactions: Array<Transactions>
  /** An aggregated array relationship */
  transactions_aggregate: Transactions_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "payment_methods" */
export type Payment_MethodsTerminationsArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "payment_methods" */
export type Payment_MethodsTerminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "payment_methods" */
export type Payment_MethodsTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "payment_methods" */
export type Payment_MethodsTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** aggregated selection of "payment_methods" */
export type Payment_Methods_Aggregate = {
  __typename?: 'payment_methods_aggregate'
  aggregate?: Maybe<Payment_Methods_Aggregate_Fields>
  nodes: Array<Payment_Methods>
}

/** aggregate fields of "payment_methods" */
export type Payment_Methods_Aggregate_Fields = {
  __typename?: 'payment_methods_aggregate_fields'
  avg?: Maybe<Payment_Methods_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Payment_Methods_Max_Fields>
  min?: Maybe<Payment_Methods_Min_Fields>
  stddev?: Maybe<Payment_Methods_Stddev_Fields>
  stddev_pop?: Maybe<Payment_Methods_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Payment_Methods_Stddev_Samp_Fields>
  sum?: Maybe<Payment_Methods_Sum_Fields>
  var_pop?: Maybe<Payment_Methods_Var_Pop_Fields>
  var_samp?: Maybe<Payment_Methods_Var_Samp_Fields>
  variance?: Maybe<Payment_Methods_Variance_Fields>
}

/** aggregate fields of "payment_methods" */
export type Payment_Methods_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Methods_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "payment_methods" */
export type Payment_Methods_Aggregate_Order_By = {
  avg?: Maybe<Payment_Methods_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Payment_Methods_Max_Order_By>
  min?: Maybe<Payment_Methods_Min_Order_By>
  stddev?: Maybe<Payment_Methods_Stddev_Order_By>
  stddev_pop?: Maybe<Payment_Methods_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Payment_Methods_Stddev_Samp_Order_By>
  sum?: Maybe<Payment_Methods_Sum_Order_By>
  var_pop?: Maybe<Payment_Methods_Var_Pop_Order_By>
  var_samp?: Maybe<Payment_Methods_Var_Samp_Order_By>
  variance?: Maybe<Payment_Methods_Variance_Order_By>
}

/** input type for inserting array relation for remote table "payment_methods" */
export type Payment_Methods_Arr_Rel_Insert_Input = {
  data: Array<Payment_Methods_Insert_Input>
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** aggregate avg on columns */
export type Payment_Methods_Avg_Fields = {
  __typename?: 'payment_methods_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "payment_methods" */
export type Payment_Methods_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "payment_methods". All fields are combined with a logical 'AND'. */
export type Payment_Methods_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Methods_Bool_Exp>>>
  _not?: Maybe<Payment_Methods_Bool_Exp>
  _or?: Maybe<Array<Maybe<Payment_Methods_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  terminations?: Maybe<Terminations_Bool_Exp>
  transactions?: Maybe<Transactions_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "payment_methods" */
export enum Payment_Methods_Constraint {
  /** unique or primary key constraint */
  PaymentMethodsPkey = 'payment_methods_pkey',
}

/** input type for incrementing integer column in table "payment_methods" */
export type Payment_Methods_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "payment_methods" */
export type Payment_Methods_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  terminations?: Maybe<Terminations_Arr_Rel_Insert_Input>
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Payment_Methods_Max_Fields = {
  __typename?: 'payment_methods_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "payment_methods" */
export type Payment_Methods_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Payment_Methods_Min_Fields = {
  __typename?: 'payment_methods_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "payment_methods" */
export type Payment_Methods_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "payment_methods" */
export type Payment_Methods_Mutation_Response = {
  __typename?: 'payment_methods_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Payment_Methods>
}

/** input type for inserting object relation for remote table "payment_methods" */
export type Payment_Methods_Obj_Rel_Insert_Input = {
  data: Payment_Methods_Insert_Input
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** on conflict condition type for table "payment_methods" */
export type Payment_Methods_On_Conflict = {
  constraint: Payment_Methods_Constraint
  update_columns: Array<Payment_Methods_Update_Column>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

/** ordering options when selecting data from "payment_methods" */
export type Payment_Methods_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  terminations_aggregate?: Maybe<Terminations_Aggregate_Order_By>
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "payment_methods" */
export type Payment_Methods_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "payment_methods" */
export enum Payment_Methods_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "payment_methods" */
export type Payment_Methods_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Payment_Methods_Stddev_Fields = {
  __typename?: 'payment_methods_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "payment_methods" */
export type Payment_Methods_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Payment_Methods_Stddev_Pop_Fields = {
  __typename?: 'payment_methods_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "payment_methods" */
export type Payment_Methods_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Payment_Methods_Stddev_Samp_Fields = {
  __typename?: 'payment_methods_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "payment_methods" */
export type Payment_Methods_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Payment_Methods_Sum_Fields = {
  __typename?: 'payment_methods_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "payment_methods" */
export type Payment_Methods_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "payment_methods" */
export enum Payment_Methods_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Payment_Methods_Var_Pop_Fields = {
  __typename?: 'payment_methods_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "payment_methods" */
export type Payment_Methods_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Payment_Methods_Var_Samp_Fields = {
  __typename?: 'payment_methods_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "payment_methods" */
export type Payment_Methods_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Payment_Methods_Variance_Fields = {
  __typename?: 'payment_methods_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "payment_methods" */
export type Payment_Methods_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** columns and relationships of "promotions" */
export type Promotions = {
  __typename?: 'promotions'
  /** An array relationship */
  bookings_promotions: Array<Bookings_Promotions>
  /** An aggregated array relationship */
  bookings_promotions_aggregate: Bookings_Promotions_Aggregate
  code?: Maybe<Scalars['String']>
  /** An object relationship */
  company?: Maybe<Companies>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  format: Scalars['enum_promotions_format']
  id: Scalars['Int']
  image_url?: Maybe<Scalars['String']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en: Scalars['String']
  name_th: Scalars['String']
  /** An array relationship */
  promotions_customer_buys: Array<Promotions_Customer_Buys>
  /** An aggregated array relationship */
  promotions_customer_buys_aggregate: Promotions_Customer_Buys_Aggregate
  /** An array relationship */
  promotions_customer_gets: Array<Promotions_Customer_Gets>
  /** An aggregated array relationship */
  promotions_customer_gets_aggregate: Promotions_Customer_Gets_Aggregate
  /** An array relationship */
  promotions_redeems: Array<Promotions_Redeem>
  /** An aggregated array relationship */
  promotions_redeems_aggregate: Promotions_Redeem_Aggregate
  /** An array relationship */
  renewals: Array<Renewals>
  /** An aggregated array relationship */
  renewals_aggregate: Renewals_Aggregate
  start_date: Scalars['timestamptz']
  status: Scalars['enum_promotions_status']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "promotions" */
export type PromotionsBookings_PromotionsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsBookings_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsPromotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsPromotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsPromotions_Customer_GetsArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsPromotions_Customer_Gets_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsPromotions_RedeemsArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsPromotions_Redeems_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** columns and relationships of "promotions" */
export type PromotionsRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** aggregated selection of "promotions" */
export type Promotions_Aggregate = {
  __typename?: 'promotions_aggregate'
  aggregate?: Maybe<Promotions_Aggregate_Fields>
  nodes: Array<Promotions>
}

/** aggregate fields of "promotions" */
export type Promotions_Aggregate_Fields = {
  __typename?: 'promotions_aggregate_fields'
  avg?: Maybe<Promotions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Promotions_Max_Fields>
  min?: Maybe<Promotions_Min_Fields>
  stddev?: Maybe<Promotions_Stddev_Fields>
  stddev_pop?: Maybe<Promotions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Promotions_Stddev_Samp_Fields>
  sum?: Maybe<Promotions_Sum_Fields>
  var_pop?: Maybe<Promotions_Var_Pop_Fields>
  var_samp?: Maybe<Promotions_Var_Samp_Fields>
  variance?: Maybe<Promotions_Variance_Fields>
}

/** aggregate fields of "promotions" */
export type Promotions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "promotions" */
export type Promotions_Aggregate_Order_By = {
  avg?: Maybe<Promotions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Promotions_Max_Order_By>
  min?: Maybe<Promotions_Min_Order_By>
  stddev?: Maybe<Promotions_Stddev_Order_By>
  stddev_pop?: Maybe<Promotions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Promotions_Stddev_Samp_Order_By>
  sum?: Maybe<Promotions_Sum_Order_By>
  var_pop?: Maybe<Promotions_Var_Pop_Order_By>
  var_samp?: Maybe<Promotions_Var_Samp_Order_By>
  variance?: Maybe<Promotions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "promotions" */
export type Promotions_Arr_Rel_Insert_Input = {
  data: Array<Promotions_Insert_Input>
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** aggregate avg on columns */
export type Promotions_Avg_Fields = {
  __typename?: 'promotions_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "promotions" */
export type Promotions_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "promotions". All fields are combined with a logical 'AND'. */
export type Promotions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Promotions_Bool_Exp>>>
  _not?: Maybe<Promotions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Promotions_Bool_Exp>>>
  bookings_promotions?: Maybe<Bookings_Promotions_Bool_Exp>
  code?: Maybe<String_Comparison_Exp>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  description_en?: Maybe<String_Comparison_Exp>
  description_th?: Maybe<String_Comparison_Exp>
  end_date?: Maybe<Timestamptz_Comparison_Exp>
  format?: Maybe<Enum_Promotions_Format_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  image_url?: Maybe<String_Comparison_Exp>
  max?: Maybe<Int_Comparison_Exp>
  max_per_customer?: Maybe<Int_Comparison_Exp>
  max_per_day?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Bool_Exp>
  promotions_customer_gets?: Maybe<Promotions_Customer_Gets_Bool_Exp>
  promotions_redeems?: Maybe<Promotions_Redeem_Bool_Exp>
  renewals?: Maybe<Renewals_Bool_Exp>
  start_date?: Maybe<Timestamptz_Comparison_Exp>
  status?: Maybe<Enum_Promotions_Status_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "promotions" */
export enum Promotions_Constraint {
  /** unique or primary key constraint */
  PromotionsPkey = 'promotions_pkey',
}

/** columns and relationships of "promotions_customer_buys" */
export type Promotions_Customer_Buys = {
  __typename?: 'promotions_customer_buys'
  /** An object relationship */
  building?: Maybe<Buildings>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  /** An object relationship */
  promotion: Promotions
  promotion_id: Scalars['Int']
  type: Scalars['enum_promotions_customer_buys_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** aggregated selection of "promotions_customer_buys" */
export type Promotions_Customer_Buys_Aggregate = {
  __typename?: 'promotions_customer_buys_aggregate'
  aggregate?: Maybe<Promotions_Customer_Buys_Aggregate_Fields>
  nodes: Array<Promotions_Customer_Buys>
}

/** aggregate fields of "promotions_customer_buys" */
export type Promotions_Customer_Buys_Aggregate_Fields = {
  __typename?: 'promotions_customer_buys_aggregate_fields'
  avg?: Maybe<Promotions_Customer_Buys_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Promotions_Customer_Buys_Max_Fields>
  min?: Maybe<Promotions_Customer_Buys_Min_Fields>
  stddev?: Maybe<Promotions_Customer_Buys_Stddev_Fields>
  stddev_pop?: Maybe<Promotions_Customer_Buys_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Promotions_Customer_Buys_Stddev_Samp_Fields>
  sum?: Maybe<Promotions_Customer_Buys_Sum_Fields>
  var_pop?: Maybe<Promotions_Customer_Buys_Var_Pop_Fields>
  var_samp?: Maybe<Promotions_Customer_Buys_Var_Samp_Fields>
  variance?: Maybe<Promotions_Customer_Buys_Variance_Fields>
}

/** aggregate fields of "promotions_customer_buys" */
export type Promotions_Customer_Buys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Aggregate_Order_By = {
  avg?: Maybe<Promotions_Customer_Buys_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Promotions_Customer_Buys_Max_Order_By>
  min?: Maybe<Promotions_Customer_Buys_Min_Order_By>
  stddev?: Maybe<Promotions_Customer_Buys_Stddev_Order_By>
  stddev_pop?: Maybe<Promotions_Customer_Buys_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Promotions_Customer_Buys_Stddev_Samp_Order_By>
  sum?: Maybe<Promotions_Customer_Buys_Sum_Order_By>
  var_pop?: Maybe<Promotions_Customer_Buys_Var_Pop_Order_By>
  var_samp?: Maybe<Promotions_Customer_Buys_Var_Samp_Order_By>
  variance?: Maybe<Promotions_Customer_Buys_Variance_Order_By>
}

/** input type for inserting array relation for remote table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Arr_Rel_Insert_Input = {
  data: Array<Promotions_Customer_Buys_Insert_Input>
  on_conflict?: Maybe<Promotions_Customer_Buys_On_Conflict>
}

/** aggregate avg on columns */
export type Promotions_Customer_Buys_Avg_Fields = {
  __typename?: 'promotions_customer_buys_avg_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Avg_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "promotions_customer_buys". All fields are combined with a logical 'AND'. */
export type Promotions_Customer_Buys_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Promotions_Customer_Buys_Bool_Exp>>>
  _not?: Maybe<Promotions_Customer_Buys_Bool_Exp>
  _or?: Maybe<Array<Maybe<Promotions_Customer_Buys_Bool_Exp>>>
  building?: Maybe<Buildings_Bool_Exp>
  building_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  promotion?: Maybe<Promotions_Bool_Exp>
  promotion_id?: Maybe<Int_Comparison_Exp>
  type?: Maybe<Enum_Promotions_Customer_Buys_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "promotions_customer_buys" */
export enum Promotions_Customer_Buys_Constraint {
  /** unique or primary key constraint */
  PromotionsCustomerBuysPkey = 'promotions_customer_buys_pkey',
}

/** input type for incrementing integer column in table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Inc_Input = {
  building_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Insert_Input = {
  building?: Maybe<Buildings_Obj_Rel_Insert_Input>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  promotion?: Maybe<Promotions_Obj_Rel_Insert_Input>
  promotion_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Promotions_Customer_Buys_Max_Fields = {
  __typename?: 'promotions_customer_buys_max_fields'
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Max_Order_By = {
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Promotions_Customer_Buys_Min_Fields = {
  __typename?: 'promotions_customer_buys_min_fields'
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Min_Order_By = {
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Mutation_Response = {
  __typename?: 'promotions_customer_buys_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Promotions_Customer_Buys>
}

/** input type for inserting object relation for remote table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Obj_Rel_Insert_Input = {
  data: Promotions_Customer_Buys_Insert_Input
  on_conflict?: Maybe<Promotions_Customer_Buys_On_Conflict>
}

/** on conflict condition type for table "promotions_customer_buys" */
export type Promotions_Customer_Buys_On_Conflict = {
  constraint: Promotions_Customer_Buys_Constraint
  update_columns: Array<Promotions_Customer_Buys_Update_Column>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** ordering options when selecting data from "promotions_customer_buys" */
export type Promotions_Customer_Buys_Order_By = {
  building?: Maybe<Buildings_Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion?: Maybe<Promotions_Order_By>
  promotion_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "promotions_customer_buys" */
export type Promotions_Customer_Buys_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "promotions_customer_buys" */
export enum Promotions_Customer_Buys_Select_Column {
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Set_Input = {
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_promotions_customer_buys_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Promotions_Customer_Buys_Stddev_Fields = {
  __typename?: 'promotions_customer_buys_stddev_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Stddev_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Promotions_Customer_Buys_Stddev_Pop_Fields = {
  __typename?: 'promotions_customer_buys_stddev_pop_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Stddev_Pop_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Promotions_Customer_Buys_Stddev_Samp_Fields = {
  __typename?: 'promotions_customer_buys_stddev_samp_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Stddev_Samp_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Promotions_Customer_Buys_Sum_Fields = {
  __typename?: 'promotions_customer_buys_sum_fields'
  building_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Sum_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "promotions_customer_buys" */
export enum Promotions_Customer_Buys_Update_Column {
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Promotions_Customer_Buys_Var_Pop_Fields = {
  __typename?: 'promotions_customer_buys_var_pop_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Var_Pop_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Promotions_Customer_Buys_Var_Samp_Fields = {
  __typename?: 'promotions_customer_buys_var_samp_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Var_Samp_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Promotions_Customer_Buys_Variance_Fields = {
  __typename?: 'promotions_customer_buys_variance_fields'
  building_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "promotions_customer_buys" */
export type Promotions_Customer_Buys_Variance_Order_By = {
  building_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** columns and relationships of "promotions_customer_gets" */
export type Promotions_Customer_Gets = {
  __typename?: 'promotions_customer_gets'
  created_at?: Maybe<Scalars['timestamptz']>
  for_type: Scalars['enum_promotions_customer_gets_for_type']
  for_value: Scalars['Int']
  id: Scalars['Int']
  max_amount_per_booking?: Maybe<Scalars['float8']>
  /** An object relationship */
  promotion: Promotions
  promotion_id: Scalars['Int']
  type: Scalars['enum_promotions_customer_gets_type']
  updated_at?: Maybe<Scalars['timestamptz']>
  value: Scalars['float8']
}

/** aggregated selection of "promotions_customer_gets" */
export type Promotions_Customer_Gets_Aggregate = {
  __typename?: 'promotions_customer_gets_aggregate'
  aggregate?: Maybe<Promotions_Customer_Gets_Aggregate_Fields>
  nodes: Array<Promotions_Customer_Gets>
}

/** aggregate fields of "promotions_customer_gets" */
export type Promotions_Customer_Gets_Aggregate_Fields = {
  __typename?: 'promotions_customer_gets_aggregate_fields'
  avg?: Maybe<Promotions_Customer_Gets_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Promotions_Customer_Gets_Max_Fields>
  min?: Maybe<Promotions_Customer_Gets_Min_Fields>
  stddev?: Maybe<Promotions_Customer_Gets_Stddev_Fields>
  stddev_pop?: Maybe<Promotions_Customer_Gets_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Promotions_Customer_Gets_Stddev_Samp_Fields>
  sum?: Maybe<Promotions_Customer_Gets_Sum_Fields>
  var_pop?: Maybe<Promotions_Customer_Gets_Var_Pop_Fields>
  var_samp?: Maybe<Promotions_Customer_Gets_Var_Samp_Fields>
  variance?: Maybe<Promotions_Customer_Gets_Variance_Fields>
}

/** aggregate fields of "promotions_customer_gets" */
export type Promotions_Customer_Gets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Aggregate_Order_By = {
  avg?: Maybe<Promotions_Customer_Gets_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Promotions_Customer_Gets_Max_Order_By>
  min?: Maybe<Promotions_Customer_Gets_Min_Order_By>
  stddev?: Maybe<Promotions_Customer_Gets_Stddev_Order_By>
  stddev_pop?: Maybe<Promotions_Customer_Gets_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Promotions_Customer_Gets_Stddev_Samp_Order_By>
  sum?: Maybe<Promotions_Customer_Gets_Sum_Order_By>
  var_pop?: Maybe<Promotions_Customer_Gets_Var_Pop_Order_By>
  var_samp?: Maybe<Promotions_Customer_Gets_Var_Samp_Order_By>
  variance?: Maybe<Promotions_Customer_Gets_Variance_Order_By>
}

/** input type for inserting array relation for remote table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Arr_Rel_Insert_Input = {
  data: Array<Promotions_Customer_Gets_Insert_Input>
  on_conflict?: Maybe<Promotions_Customer_Gets_On_Conflict>
}

/** aggregate avg on columns */
export type Promotions_Customer_Gets_Avg_Fields = {
  __typename?: 'promotions_customer_gets_avg_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Avg_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "promotions_customer_gets". All fields are combined with a logical 'AND'. */
export type Promotions_Customer_Gets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Promotions_Customer_Gets_Bool_Exp>>>
  _not?: Maybe<Promotions_Customer_Gets_Bool_Exp>
  _or?: Maybe<Array<Maybe<Promotions_Customer_Gets_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  for_type?: Maybe<Enum_Promotions_Customer_Gets_For_Type_Comparison_Exp>
  for_value?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  max_amount_per_booking?: Maybe<Float8_Comparison_Exp>
  promotion?: Maybe<Promotions_Bool_Exp>
  promotion_id?: Maybe<Int_Comparison_Exp>
  type?: Maybe<Enum_Promotions_Customer_Gets_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  value?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "promotions_customer_gets" */
export enum Promotions_Customer_Gets_Constraint {
  /** unique or primary key constraint */
  PromotionsCustomerGetsPkey = 'promotions_customer_gets_pkey',
}

/** input type for incrementing integer column in table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Inc_Input = {
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  promotion_id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  for_type?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  promotion?: Maybe<Promotions_Obj_Rel_Insert_Input>
  promotion_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Promotions_Customer_Gets_Max_Fields = {
  __typename?: 'promotions_customer_gets_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  promotion_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Max_Order_By = {
  created_at?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Promotions_Customer_Gets_Min_Fields = {
  __typename?: 'promotions_customer_gets_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  promotion_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Min_Order_By = {
  created_at?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Mutation_Response = {
  __typename?: 'promotions_customer_gets_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Promotions_Customer_Gets>
}

/** input type for inserting object relation for remote table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Obj_Rel_Insert_Input = {
  data: Promotions_Customer_Gets_Insert_Input
  on_conflict?: Maybe<Promotions_Customer_Gets_On_Conflict>
}

/** on conflict condition type for table "promotions_customer_gets" */
export type Promotions_Customer_Gets_On_Conflict = {
  constraint: Promotions_Customer_Gets_Constraint
  update_columns: Array<Promotions_Customer_Gets_Update_Column>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** ordering options when selecting data from "promotions_customer_gets" */
export type Promotions_Customer_Gets_Order_By = {
  created_at?: Maybe<Order_By>
  for_type?: Maybe<Order_By>
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion?: Maybe<Promotions_Order_By>
  promotion_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: "promotions_customer_gets" */
export type Promotions_Customer_Gets_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "promotions_customer_gets" */
export enum Promotions_Customer_Gets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ForType = 'for_type',
  /** column name */
  ForValue = 'for_value',
  /** column name */
  Id = 'id',
  /** column name */
  MaxAmountPerBooking = 'max_amount_per_booking',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  for_type?: Maybe<Scalars['enum_promotions_customer_gets_for_type']>
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  promotion_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_promotions_customer_gets_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
  value?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Promotions_Customer_Gets_Stddev_Fields = {
  __typename?: 'promotions_customer_gets_stddev_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Stddev_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Promotions_Customer_Gets_Stddev_Pop_Fields = {
  __typename?: 'promotions_customer_gets_stddev_pop_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Stddev_Pop_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Promotions_Customer_Gets_Stddev_Samp_Fields = {
  __typename?: 'promotions_customer_gets_stddev_samp_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Stddev_Samp_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Promotions_Customer_Gets_Sum_Fields = {
  __typename?: 'promotions_customer_gets_sum_fields'
  for_value?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max_amount_per_booking?: Maybe<Scalars['float8']>
  promotion_id?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Sum_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** update columns of table "promotions_customer_gets" */
export enum Promotions_Customer_Gets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ForType = 'for_type',
  /** column name */
  ForValue = 'for_value',
  /** column name */
  Id = 'id',
  /** column name */
  MaxAmountPerBooking = 'max_amount_per_booking',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Promotions_Customer_Gets_Var_Pop_Fields = {
  __typename?: 'promotions_customer_gets_var_pop_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Var_Pop_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Promotions_Customer_Gets_Var_Samp_Fields = {
  __typename?: 'promotions_customer_gets_var_samp_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Var_Samp_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Promotions_Customer_Gets_Variance_Fields = {
  __typename?: 'promotions_customer_gets_variance_fields'
  for_value?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_amount_per_booking?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "promotions_customer_gets" */
export type Promotions_Customer_Gets_Variance_Order_By = {
  for_value?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_amount_per_booking?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** input type for incrementing integer column in table "promotions" */
export type Promotions_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "promotions" */
export type Promotions_Insert_Input = {
  bookings_promotions?: Maybe<Bookings_Promotions_Arr_Rel_Insert_Input>
  code?: Maybe<Scalars['String']>
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  format?: Maybe<Scalars['enum_promotions_format']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  promotions_customer_buys?: Maybe<Promotions_Customer_Buys_Arr_Rel_Insert_Input>
  promotions_customer_gets?: Maybe<Promotions_Customer_Gets_Arr_Rel_Insert_Input>
  promotions_redeems?: Maybe<Promotions_Redeem_Arr_Rel_Insert_Input>
  renewals?: Maybe<Renewals_Arr_Rel_Insert_Input>
  start_date?: Maybe<Scalars['timestamptz']>
  status?: Maybe<Scalars['enum_promotions_status']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Promotions_Max_Fields = {
  __typename?: 'promotions_max_fields'
  code?: Maybe<Scalars['String']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  start_date?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "promotions" */
export type Promotions_Max_Order_By = {
  code?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  end_date?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  start_date?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Promotions_Min_Fields = {
  __typename?: 'promotions_min_fields'
  code?: Maybe<Scalars['String']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  start_date?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "promotions" */
export type Promotions_Min_Order_By = {
  code?: Maybe<Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  end_date?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  start_date?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "promotions" */
export type Promotions_Mutation_Response = {
  __typename?: 'promotions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Promotions>
}

/** input type for inserting object relation for remote table "promotions" */
export type Promotions_Obj_Rel_Insert_Input = {
  data: Promotions_Insert_Input
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** on conflict condition type for table "promotions" */
export type Promotions_On_Conflict = {
  constraint: Promotions_Constraint
  update_columns: Array<Promotions_Update_Column>
  where?: Maybe<Promotions_Bool_Exp>
}

/** ordering options when selecting data from "promotions" */
export type Promotions_Order_By = {
  bookings_promotions_aggregate?: Maybe<Bookings_Promotions_Aggregate_Order_By>
  code?: Maybe<Order_By>
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  end_date?: Maybe<Order_By>
  format?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  promotions_customer_buys_aggregate?: Maybe<Promotions_Customer_Buys_Aggregate_Order_By>
  promotions_customer_gets_aggregate?: Maybe<Promotions_Customer_Gets_Aggregate_Order_By>
  promotions_redeems_aggregate?: Maybe<Promotions_Redeem_Aggregate_Order_By>
  renewals_aggregate?: Maybe<Renewals_Aggregate_Order_By>
  start_date?: Maybe<Order_By>
  status?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "promotions" */
export type Promotions_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** columns and relationships of "promotions_redeem" */
export type Promotions_Redeem = {
  __typename?: 'promotions_redeem'
  /** An object relationship */
  booking: Bookings
  booking_id: Scalars['Int']
  booking_promotion_id: Scalars['Int']
  /** An object relationship */
  bookings_promotion: Bookings_Promotions
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  customer: Customers
  customer_id: Scalars['Int']
  id: Scalars['Int']
  /** An object relationship */
  promotion: Promotions
  promotion_id: Scalars['Int']
  /** An object relationship */
  renewal: Renewals
  renewal_id: Scalars['Int']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "promotions_redeem" */
export type Promotions_Redeem_Aggregate = {
  __typename?: 'promotions_redeem_aggregate'
  aggregate?: Maybe<Promotions_Redeem_Aggregate_Fields>
  nodes: Array<Promotions_Redeem>
}

/** aggregate fields of "promotions_redeem" */
export type Promotions_Redeem_Aggregate_Fields = {
  __typename?: 'promotions_redeem_aggregate_fields'
  avg?: Maybe<Promotions_Redeem_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Promotions_Redeem_Max_Fields>
  min?: Maybe<Promotions_Redeem_Min_Fields>
  stddev?: Maybe<Promotions_Redeem_Stddev_Fields>
  stddev_pop?: Maybe<Promotions_Redeem_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Promotions_Redeem_Stddev_Samp_Fields>
  sum?: Maybe<Promotions_Redeem_Sum_Fields>
  var_pop?: Maybe<Promotions_Redeem_Var_Pop_Fields>
  var_samp?: Maybe<Promotions_Redeem_Var_Samp_Fields>
  variance?: Maybe<Promotions_Redeem_Variance_Fields>
}

/** aggregate fields of "promotions_redeem" */
export type Promotions_Redeem_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotions_Redeem_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "promotions_redeem" */
export type Promotions_Redeem_Aggregate_Order_By = {
  avg?: Maybe<Promotions_Redeem_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Promotions_Redeem_Max_Order_By>
  min?: Maybe<Promotions_Redeem_Min_Order_By>
  stddev?: Maybe<Promotions_Redeem_Stddev_Order_By>
  stddev_pop?: Maybe<Promotions_Redeem_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Promotions_Redeem_Stddev_Samp_Order_By>
  sum?: Maybe<Promotions_Redeem_Sum_Order_By>
  var_pop?: Maybe<Promotions_Redeem_Var_Pop_Order_By>
  var_samp?: Maybe<Promotions_Redeem_Var_Samp_Order_By>
  variance?: Maybe<Promotions_Redeem_Variance_Order_By>
}

/** input type for inserting array relation for remote table "promotions_redeem" */
export type Promotions_Redeem_Arr_Rel_Insert_Input = {
  data: Array<Promotions_Redeem_Insert_Input>
  on_conflict?: Maybe<Promotions_Redeem_On_Conflict>
}

/** aggregate avg on columns */
export type Promotions_Redeem_Avg_Fields = {
  __typename?: 'promotions_redeem_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Avg_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "promotions_redeem". All fields are combined with a logical 'AND'. */
export type Promotions_Redeem_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Promotions_Redeem_Bool_Exp>>>
  _not?: Maybe<Promotions_Redeem_Bool_Exp>
  _or?: Maybe<Array<Maybe<Promotions_Redeem_Bool_Exp>>>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  booking_promotion_id?: Maybe<Int_Comparison_Exp>
  bookings_promotion?: Maybe<Bookings_Promotions_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  customer?: Maybe<Customers_Bool_Exp>
  customer_id?: Maybe<Int_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  promotion?: Maybe<Promotions_Bool_Exp>
  promotion_id?: Maybe<Int_Comparison_Exp>
  renewal?: Maybe<Renewals_Bool_Exp>
  renewal_id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "promotions_redeem" */
export enum Promotions_Redeem_Constraint {
  /** unique or primary key constraint */
  PromotionsRedeemPkey = 'promotions_redeem_pkey',
}

/** input type for incrementing integer column in table "promotions_redeem" */
export type Promotions_Redeem_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "promotions_redeem" */
export type Promotions_Redeem_Insert_Input = {
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  bookings_promotion?: Maybe<Bookings_Promotions_Obj_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion?: Maybe<Promotions_Obj_Rel_Insert_Input>
  promotion_id?: Maybe<Scalars['Int']>
  renewal?: Maybe<Renewals_Obj_Rel_Insert_Input>
  renewal_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Promotions_Redeem_Max_Fields = {
  __typename?: 'promotions_redeem_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Max_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Promotions_Redeem_Min_Fields = {
  __typename?: 'promotions_redeem_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Min_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "promotions_redeem" */
export type Promotions_Redeem_Mutation_Response = {
  __typename?: 'promotions_redeem_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Promotions_Redeem>
}

/** input type for inserting object relation for remote table "promotions_redeem" */
export type Promotions_Redeem_Obj_Rel_Insert_Input = {
  data: Promotions_Redeem_Insert_Input
  on_conflict?: Maybe<Promotions_Redeem_On_Conflict>
}

/** on conflict condition type for table "promotions_redeem" */
export type Promotions_Redeem_On_Conflict = {
  constraint: Promotions_Redeem_Constraint
  update_columns: Array<Promotions_Redeem_Update_Column>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** ordering options when selecting data from "promotions_redeem" */
export type Promotions_Redeem_Order_By = {
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  bookings_promotion?: Maybe<Bookings_Promotions_Order_By>
  created_at?: Maybe<Order_By>
  customer?: Maybe<Customers_Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion?: Maybe<Promotions_Order_By>
  promotion_id?: Maybe<Order_By>
  renewal?: Maybe<Renewals_Order_By>
  renewal_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "promotions_redeem" */
export type Promotions_Redeem_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "promotions_redeem" */
export enum Promotions_Redeem_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  RenewalId = 'renewal_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "promotions_redeem" */
export type Promotions_Redeem_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Promotions_Redeem_Stddev_Fields = {
  __typename?: 'promotions_redeem_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Promotions_Redeem_Stddev_Pop_Fields = {
  __typename?: 'promotions_redeem_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Promotions_Redeem_Stddev_Samp_Fields = {
  __typename?: 'promotions_redeem_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Promotions_Redeem_Sum_Fields = {
  __typename?: 'promotions_redeem_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Sum_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** update columns of table "promotions_redeem" */
export enum Promotions_Redeem_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  RenewalId = 'renewal_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Promotions_Redeem_Var_Pop_Fields = {
  __typename?: 'promotions_redeem_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Promotions_Redeem_Var_Samp_Fields = {
  __typename?: 'promotions_redeem_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Promotions_Redeem_Variance_Fields = {
  __typename?: 'promotions_redeem_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  renewal_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "promotions_redeem" */
export type Promotions_Redeem_Variance_Order_By = {
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_id?: Maybe<Order_By>
}

/** select columns of table "promotions" */
export enum Promotions_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Max = 'max',
  /** column name */
  MaxPerCustomer = 'max_per_customer',
  /** column name */
  MaxPerDay = 'max_per_day',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "promotions" */
export type Promotions_Set_Input = {
  code?: Maybe<Scalars['String']>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  end_date?: Maybe<Scalars['timestamptz']>
  format?: Maybe<Scalars['enum_promotions_format']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  start_date?: Maybe<Scalars['timestamptz']>
  status?: Maybe<Scalars['enum_promotions_status']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Promotions_Stddev_Fields = {
  __typename?: 'promotions_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "promotions" */
export type Promotions_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Promotions_Stddev_Pop_Fields = {
  __typename?: 'promotions_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "promotions" */
export type Promotions_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Promotions_Stddev_Samp_Fields = {
  __typename?: 'promotions_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "promotions" */
export type Promotions_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Promotions_Sum_Fields = {
  __typename?: 'promotions_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  max?: Maybe<Scalars['Int']>
  max_per_customer?: Maybe<Scalars['Int']>
  max_per_day?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "promotions" */
export type Promotions_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** update columns of table "promotions" */
export enum Promotions_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Max = 'max',
  /** column name */
  MaxPerCustomer = 'max_per_customer',
  /** column name */
  MaxPerDay = 'max_per_day',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Promotions_Var_Pop_Fields = {
  __typename?: 'promotions_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "promotions" */
export type Promotions_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Promotions_Var_Samp_Fields = {
  __typename?: 'promotions_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "promotions" */
export type Promotions_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Promotions_Variance_Fields = {
  __typename?: 'promotions_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Float']>
  max_per_customer?: Maybe<Scalars['Float']>
  max_per_day?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "promotions" */
export type Promotions_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max?: Maybe<Order_By>
  max_per_customer?: Maybe<Order_By>
  max_per_day?: Maybe<Order_By>
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** perform the action: "accounts_receiveable" */
  accounts_receiveable: Array<AccountsReceiveableResp>
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>
  /** fetch data from the table: "admin_fees" */
  admin_fees: Array<Admin_Fees>
  /** fetch aggregated fields from the table: "admin_fees" */
  admin_fees_aggregate: Admin_Fees_Aggregate
  /** fetch data from the table: "admin_fees" using primary key columns */
  admin_fees_by_pk?: Maybe<Admin_Fees>
  /** fetch data from the table: "applied_taxes" */
  applied_taxes: Array<Applied_Taxes>
  /** fetch aggregated fields from the table: "applied_taxes" */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  /** fetch data from the table: "applied_taxes" using primary key columns */
  applied_taxes_by_pk?: Maybe<Applied_Taxes>
  /** fetch data from the table: "booking_contracts" */
  booking_contracts: Array<Booking_Contracts>
  /** fetch aggregated fields from the table: "booking_contracts" */
  booking_contracts_aggregate: Booking_Contracts_Aggregate
  /** fetch data from the table: "booking_contracts" using primary key columns */
  booking_contracts_by_pk?: Maybe<Booking_Contracts>
  /** fetch data from the table: "bookings" */
  bookings: Array<Bookings>
  /** fetch aggregated fields from the table: "bookings" */
  bookings_aggregate: Bookings_Aggregate
  /** fetch data from the table: "bookings_building_addresses" */
  bookings_building_addresses: Array<Bookings_Building_Addresses>
  /** fetch aggregated fields from the table: "bookings_building_addresses" */
  bookings_building_addresses_aggregate: Bookings_Building_Addresses_Aggregate
  /** fetch data from the table: "bookings_building_addresses" using primary key columns */
  bookings_building_addresses_by_pk?: Maybe<Bookings_Building_Addresses>
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>
  /** fetch data from the table: "bookings_history" */
  bookings_history: Array<Bookings_History>
  /** fetch aggregated fields from the table: "bookings_history" */
  bookings_history_aggregate: Bookings_History_Aggregate
  /** fetch data from the table: "bookings_history" using primary key columns */
  bookings_history_by_pk?: Maybe<Bookings_History>
  /** fetch data from the table: "bookings_promotions" */
  bookings_promotions: Array<Bookings_Promotions>
  /** fetch aggregated fields from the table: "bookings_promotions" */
  bookings_promotions_aggregate: Bookings_Promotions_Aggregate
  /** fetch data from the table: "bookings_promotions" using primary key columns */
  bookings_promotions_by_pk?: Maybe<Bookings_Promotions>
  /** fetch data from the table: "bookings_promotions_customer_buys" */
  bookings_promotions_customer_buys: Array<Bookings_Promotions_Customer_Buys>
  /** fetch aggregated fields from the table: "bookings_promotions_customer_buys" */
  bookings_promotions_customer_buys_aggregate: Bookings_Promotions_Customer_Buys_Aggregate
  /** fetch data from the table: "bookings_promotions_customer_buys" using primary key columns */
  bookings_promotions_customer_buys_by_pk?: Maybe<Bookings_Promotions_Customer_Buys>
  /** fetch data from the table: "bookings_promotions_customer_gets" */
  bookings_promotions_customer_gets: Array<Bookings_Promotions_Customer_Gets>
  /** fetch aggregated fields from the table: "bookings_promotions_customer_gets" */
  bookings_promotions_customer_gets_aggregate: Bookings_Promotions_Customer_Gets_Aggregate
  /** fetch data from the table: "bookings_promotions_customer_gets" using primary key columns */
  bookings_promotions_customer_gets_by_pk?: Maybe<Bookings_Promotions_Customer_Gets>
  /** fetch data from the table: "building_taxes" */
  building_taxes: Array<Building_Taxes>
  /** fetch aggregated fields from the table: "building_taxes" */
  building_taxes_aggregate: Building_Taxes_Aggregate
  /** fetch data from the table: "building_taxes" using primary key columns */
  building_taxes_by_pk?: Maybe<Building_Taxes>
  /** fetch data from the table: "buildings" */
  buildings: Array<Buildings>
  /** fetch aggregated fields from the table: "buildings" */
  buildings_aggregate: Buildings_Aggregate
  /** fetch data from the table: "buildings" using primary key columns */
  buildings_by_pk?: Maybe<Buildings>
  /** fetch data from the table: "cities" */
  cities: Array<Cities>
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>
  /** fetch data from the table: "companies" */
  companies: Array<Companies>
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>
  /** fetch data from the table: "contract_templates" */
  contract_templates: Array<Contract_Templates>
  /** fetch aggregated fields from the table: "contract_templates" */
  contract_templates_aggregate: Contract_Templates_Aggregate
  /** fetch data from the table: "contract_templates" using primary key columns */
  contract_templates_by_pk?: Maybe<Contract_Templates>
  /** fetch data from the table: "countries" */
  countries: Array<Countries>
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>
  /** fetch data from the table: "currencies" */
  currencies: Array<Currencies>
  /** fetch aggregated fields from the table: "currencies" */
  currencies_aggregate: Currencies_Aggregate
  /** fetch data from the table: "currencies" using primary key columns */
  currencies_by_pk?: Maybe<Currencies>
  /** fetch data from the table: "customers" */
  customers: Array<Customers>
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>
  /** fetch data from the table: "features" */
  features: Array<Features>
  /** fetch aggregated fields from the table: "features" */
  features_aggregate: Features_Aggregate
  /** fetch data from the table: "features" using primary key columns */
  features_by_pk?: Maybe<Features>
  /** fetch data from the table: "floors" */
  floors: Array<Floors>
  /** fetch aggregated fields from the table: "floors" */
  floors_aggregate: Floors_Aggregate
  /** fetch data from the table: "floors" using primary key columns */
  floors_by_pk?: Maybe<Floors>
  /** fetch data from the table: "history_logs" */
  history_logs: Array<History_Logs>
  /** fetch aggregated fields from the table: "history_logs" */
  history_logs_aggregate: History_Logs_Aggregate
  /** fetch data from the table: "history_logs" using primary key columns */
  history_logs_by_pk?: Maybe<History_Logs>
  /** fetch data from the table: "id_counters" */
  id_counters: Array<Id_Counters>
  /** fetch aggregated fields from the table: "id_counters" */
  id_counters_aggregate: Id_Counters_Aggregate
  /** fetch data from the table: "id_counters" using primary key columns */
  id_counters_by_pk?: Maybe<Id_Counters>
  /** fetch data from the table: "insurance_taxes" */
  insurance_taxes: Array<Insurance_Taxes>
  /** fetch aggregated fields from the table: "insurance_taxes" */
  insurance_taxes_aggregate: Insurance_Taxes_Aggregate
  /** fetch data from the table: "insurance_taxes" using primary key columns */
  insurance_taxes_by_pk?: Maybe<Insurance_Taxes>
  /** fetch data from the table: "insurances" */
  insurances: Array<Insurances>
  /** fetch aggregated fields from the table: "insurances" */
  insurances_aggregate: Insurances_Aggregate
  /** fetch data from the table: "insurances" using primary key columns */
  insurances_by_pk?: Maybe<Insurances>
  /** fetch data from the table: "otps" */
  otps: Array<Otps>
  /** fetch aggregated fields from the table: "otps" */
  otps_aggregate: Otps_Aggregate
  /** fetch data from the table: "otps" using primary key columns */
  otps_by_pk?: Maybe<Otps>
  /** fetch data from the table: "payment_methods" */
  payment_methods: Array<Payment_Methods>
  /** fetch aggregated fields from the table: "payment_methods" */
  payment_methods_aggregate: Payment_Methods_Aggregate
  /** fetch data from the table: "payment_methods" using primary key columns */
  payment_methods_by_pk?: Maybe<Payment_Methods>
  /** fetch data from the table: "promotions" */
  promotions: Array<Promotions>
  /** fetch aggregated fields from the table: "promotions" */
  promotions_aggregate: Promotions_Aggregate
  /** fetch data from the table: "promotions" using primary key columns */
  promotions_by_pk?: Maybe<Promotions>
  /** fetch data from the table: "promotions_customer_buys" */
  promotions_customer_buys: Array<Promotions_Customer_Buys>
  /** fetch aggregated fields from the table: "promotions_customer_buys" */
  promotions_customer_buys_aggregate: Promotions_Customer_Buys_Aggregate
  /** fetch data from the table: "promotions_customer_buys" using primary key columns */
  promotions_customer_buys_by_pk?: Maybe<Promotions_Customer_Buys>
  /** fetch data from the table: "promotions_customer_gets" */
  promotions_customer_gets: Array<Promotions_Customer_Gets>
  /** fetch aggregated fields from the table: "promotions_customer_gets" */
  promotions_customer_gets_aggregate: Promotions_Customer_Gets_Aggregate
  /** fetch data from the table: "promotions_customer_gets" using primary key columns */
  promotions_customer_gets_by_pk?: Maybe<Promotions_Customer_Gets>
  /** fetch data from the table: "promotions_redeem" */
  promotions_redeem: Array<Promotions_Redeem>
  /** fetch aggregated fields from the table: "promotions_redeem" */
  promotions_redeem_aggregate: Promotions_Redeem_Aggregate
  /** fetch data from the table: "promotions_redeem" using primary key columns */
  promotions_redeem_by_pk?: Maybe<Promotions_Redeem>
  /** perform the action: "receipt_details" */
  receipt_details: Array<ReceiptDetailsResp>
  /** fetch data from the table: "renewals" */
  renewals: Array<Renewals>
  /** fetch aggregated fields from the table: "renewals" */
  renewals_aggregate: Renewals_Aggregate
  /** fetch data from the table: "renewals" using primary key columns */
  renewals_by_pk?: Maybe<Renewals>
  /** perform the action: "security_deposit_liabilities" */
  security_deposit_liabilities: Array<SecurityDepositLiabilitiesResp>
  /** fetch data from the table: "terminations" */
  terminations: Array<Terminations>
  /** fetch aggregated fields from the table: "terminations" */
  terminations_aggregate: Terminations_Aggregate
  /** fetch data from the table: "terminations" using primary key columns */
  terminations_by_pk?: Maybe<Terminations>
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>
  /** perform the action: "unit_history" */
  unit_history: Array<UnitHistoryResp>
  /** fetch data from the table: "unit_subtypes" */
  unit_subtypes: Array<Unit_Subtypes>
  /** fetch aggregated fields from the table: "unit_subtypes" */
  unit_subtypes_aggregate: Unit_Subtypes_Aggregate
  /** fetch data from the table: "unit_subtypes" using primary key columns */
  unit_subtypes_by_pk?: Maybe<Unit_Subtypes>
  /** fetch data from the table: "unit_type_features" */
  unit_type_features: Array<Unit_Type_Features>
  /** fetch aggregated fields from the table: "unit_type_features" */
  unit_type_features_aggregate: Unit_Type_Features_Aggregate
  /** fetch data from the table: "unit_type_features" using primary key columns */
  unit_type_features_by_pk?: Maybe<Unit_Type_Features>
  /** fetch data from the table: "unit_types" */
  unit_types: Array<Unit_Types>
  /** fetch aggregated fields from the table: "unit_types" */
  unit_types_aggregate: Unit_Types_Aggregate
  /** fetch data from the table: "unit_types" using primary key columns */
  unit_types_by_pk?: Maybe<Unit_Types>
  /** fetch data from the table: "units" */
  units: Array<Units>
  /** fetch aggregated fields from the table: "units" */
  units_aggregate: Units_Aggregate
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk?: Maybe<Units>
  /** fetch data from the table: "user_companies" */
  user_companies: Array<User_Companies>
  /** fetch aggregated fields from the table: "user_companies" */
  user_companies_aggregate: User_Companies_Aggregate
  /** fetch data from the table: "user_companies" using primary key columns */
  user_companies_by_pk?: Maybe<User_Companies>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

/** query root */
export type Query_RootAccounts_ReceiveableArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** query root */
export type Query_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** query root */
export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** query root */
export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootAdmin_FeesArgs = {
  distinct_on?: Maybe<Array<Admin_Fees_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_Fees_Order_By>>
  where?: Maybe<Admin_Fees_Bool_Exp>
}

/** query root */
export type Query_RootAdmin_Fees_AggregateArgs = {
  distinct_on?: Maybe<Array<Admin_Fees_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_Fees_Order_By>>
  where?: Maybe<Admin_Fees_Bool_Exp>
}

/** query root */
export type Query_RootAdmin_Fees_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** query root */
export type Query_RootApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** query root */
export type Query_RootApplied_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBooking_ContractsArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** query root */
export type Query_RootBooking_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** query root */
export type Query_RootBooking_Contracts_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** query root */
export type Query_RootBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Building_AddressesArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Building_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Building_Addresses_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBookings_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBookings_HistoryArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** query root */
export type Query_RootBookings_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** query root */
export type Query_RootBookings_History_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBookings_PromotionsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Promotions_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBookings_Promotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Promotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Promotions_Customer_Buys_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBookings_Promotions_Customer_GetsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Promotions_Customer_Gets_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
}

/** query root */
export type Query_RootBookings_Promotions_Customer_Gets_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBuilding_TaxesArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** query root */
export type Query_RootBuilding_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** query root */
export type Query_RootBuilding_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBuildingsArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** query root */
export type Query_RootBuildings_AggregateArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** query root */
export type Query_RootBuildings_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

/** query root */
export type Query_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

/** query root */
export type Query_RootCities_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Companies_Order_By>>
  where?: Maybe<Companies_Bool_Exp>
}

/** query root */
export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Companies_Order_By>>
  where?: Maybe<Companies_Bool_Exp>
}

/** query root */
export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootContract_TemplatesArgs = {
  distinct_on?: Maybe<Array<Contract_Templates_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contract_Templates_Order_By>>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** query root */
export type Query_RootContract_Templates_AggregateArgs = {
  distinct_on?: Maybe<Array<Contract_Templates_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contract_Templates_Order_By>>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** query root */
export type Query_RootContract_Templates_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Countries_Order_By>>
  where?: Maybe<Countries_Bool_Exp>
}

/** query root */
export type Query_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Countries_Order_By>>
  where?: Maybe<Countries_Bool_Exp>
}

/** query root */
export type Query_RootCountries_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootCurrenciesArgs = {
  distinct_on?: Maybe<Array<Currencies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Currencies_Order_By>>
  where?: Maybe<Currencies_Bool_Exp>
}

/** query root */
export type Query_RootCurrencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Currencies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Currencies_Order_By>>
  where?: Maybe<Currencies_Bool_Exp>
}

/** query root */
export type Query_RootCurrencies_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** query root */
export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** query root */
export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootFeaturesArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Features_Order_By>>
  where?: Maybe<Features_Bool_Exp>
}

/** query root */
export type Query_RootFeatures_AggregateArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Features_Order_By>>
  where?: Maybe<Features_Bool_Exp>
}

/** query root */
export type Query_RootFeatures_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootFloorsArgs = {
  distinct_on?: Maybe<Array<Floors_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Floors_Order_By>>
  where?: Maybe<Floors_Bool_Exp>
}

/** query root */
export type Query_RootFloors_AggregateArgs = {
  distinct_on?: Maybe<Array<Floors_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Floors_Order_By>>
  where?: Maybe<Floors_Bool_Exp>
}

/** query root */
export type Query_RootFloors_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** query root */
export type Query_RootHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** query root */
export type Query_RootHistory_Logs_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootId_CountersArgs = {
  distinct_on?: Maybe<Array<Id_Counters_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Id_Counters_Order_By>>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** query root */
export type Query_RootId_Counters_AggregateArgs = {
  distinct_on?: Maybe<Array<Id_Counters_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Id_Counters_Order_By>>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** query root */
export type Query_RootId_Counters_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootInsurance_TaxesArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** query root */
export type Query_RootInsurance_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** query root */
export type Query_RootInsurance_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootInsurancesArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** query root */
export type Query_RootInsurances_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** query root */
export type Query_RootInsurances_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootOtpsArgs = {
  distinct_on?: Maybe<Array<Otps_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Otps_Order_By>>
  where?: Maybe<Otps_Bool_Exp>
}

/** query root */
export type Query_RootOtps_AggregateArgs = {
  distinct_on?: Maybe<Array<Otps_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Otps_Order_By>>
  where?: Maybe<Otps_Bool_Exp>
}

/** query root */
export type Query_RootOtps_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootPayment_MethodsArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

/** query root */
export type Query_RootPayment_Methods_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

/** query root */
export type Query_RootPayment_Methods_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootPromotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_Customer_Buys_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootPromotions_Customer_GetsArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_Customer_Gets_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_Customer_Gets_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootPromotions_RedeemArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_Redeem_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** query root */
export type Query_RootPromotions_Redeem_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootReceipt_DetailsArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** query root */
export type Query_RootRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** query root */
export type Query_RootRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** query root */
export type Query_RootRenewals_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootSecurity_Deposit_LiabilitiesArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** query root */
export type Query_RootTerminationsArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** query root */
export type Query_RootTerminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** query root */
export type Query_RootTerminations_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** query root */
export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** query root */
export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootUnit_HistoryArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** query root */
export type Query_RootUnit_SubtypesArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** query root */
export type Query_RootUnit_Subtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** query root */
export type Query_RootUnit_Subtypes_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootUnit_Type_FeaturesArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** query root */
export type Query_RootUnit_Type_Features_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** query root */
export type Query_RootUnit_Type_Features_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootUnit_TypesArgs = {
  distinct_on?: Maybe<Array<Unit_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Types_Order_By>>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** query root */
export type Query_RootUnit_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Types_Order_By>>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** query root */
export type Query_RootUnit_Types_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootUnitsArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Units_Order_By>>
  where?: Maybe<Units_Bool_Exp>
}

/** query root */
export type Query_RootUnits_AggregateArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Units_Order_By>>
  where?: Maybe<Units_Bool_Exp>
}

/** query root */
export type Query_RootUnits_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootUser_CompaniesArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** query root */
export type Query_RootUser_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** query root */
export type Query_RootUser_Companies_By_PkArgs = {
  company_id: Scalars['Int']
  user_id: Scalars['Int']
}

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "renewals" */
export type Renewals = {
  __typename?: 'renewals'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  /** An array relationship */
  applied_taxes: Array<Applied_Taxes>
  /** An aggregated array relationship */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  base_amount: Scalars['float8']
  /** An object relationship */
  booking: Bookings
  booking_id: Scalars['Int']
  booking_promotion_id?: Maybe<Scalars['Int']>
  /** An object relationship */
  bookings_promotion?: Maybe<Bookings_Promotions>
  created_at?: Maybe<Scalars['timestamptz']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount: Scalars['float8']
  has_admin_fee: Scalars['Boolean']
  has_custom_price?: Maybe<Scalars['Boolean']>
  /** An array relationship */
  history_logs: Array<History_Logs>
  /** An aggregated array relationship */
  history_logs_aggregate: History_Logs_Aggregate
  id: Scalars['Int']
  /** An object relationship */
  insurance?: Maybe<Insurances>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  next_renewal_date?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  promotion?: Maybe<Promotions>
  promotion_id?: Maybe<Scalars['Int']>
  /** An array relationship */
  promotions_redeems: Array<Promotions_Redeem>
  /** An aggregated array relationship */
  promotions_redeems_aggregate: Promotions_Redeem_Aggregate
  renewal_end_date?: Maybe<Scalars['timestamptz']>
  renewal_paid_date?: Maybe<Scalars['timestamptz']>
  renewal_start_date?: Maybe<Scalars['timestamptz']>
  show_id?: Maybe<Scalars['String']>
  status: Scalars['enum_renewals_status']
  sub_total_amount: Scalars['float8']
  /** An array relationship */
  terminations: Array<Terminations>
  /** An aggregated array relationship */
  terminations_aggregate: Terminations_Aggregate
  total_amount: Scalars['float8']
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  /** An object relationship */
  transaction?: Maybe<Transactions>
  transaction_id?: Maybe<Scalars['Int']>
  type: Scalars['enum_renewals_type']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "renewals" */
export type RenewalsApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsPromotions_RedeemsArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsPromotions_Redeems_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsTerminationsArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** columns and relationships of "renewals" */
export type RenewalsTerminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** aggregated selection of "renewals" */
export type Renewals_Aggregate = {
  __typename?: 'renewals_aggregate'
  aggregate?: Maybe<Renewals_Aggregate_Fields>
  nodes: Array<Renewals>
}

/** aggregate fields of "renewals" */
export type Renewals_Aggregate_Fields = {
  __typename?: 'renewals_aggregate_fields'
  avg?: Maybe<Renewals_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Renewals_Max_Fields>
  min?: Maybe<Renewals_Min_Fields>
  stddev?: Maybe<Renewals_Stddev_Fields>
  stddev_pop?: Maybe<Renewals_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Renewals_Stddev_Samp_Fields>
  sum?: Maybe<Renewals_Sum_Fields>
  var_pop?: Maybe<Renewals_Var_Pop_Fields>
  var_samp?: Maybe<Renewals_Var_Samp_Fields>
  variance?: Maybe<Renewals_Variance_Fields>
}

/** aggregate fields of "renewals" */
export type Renewals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Renewals_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "renewals" */
export type Renewals_Aggregate_Order_By = {
  avg?: Maybe<Renewals_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Renewals_Max_Order_By>
  min?: Maybe<Renewals_Min_Order_By>
  stddev?: Maybe<Renewals_Stddev_Order_By>
  stddev_pop?: Maybe<Renewals_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Renewals_Stddev_Samp_Order_By>
  sum?: Maybe<Renewals_Sum_Order_By>
  var_pop?: Maybe<Renewals_Var_Pop_Order_By>
  var_samp?: Maybe<Renewals_Var_Samp_Order_By>
  variance?: Maybe<Renewals_Variance_Order_By>
}

/** input type for inserting array relation for remote table "renewals" */
export type Renewals_Arr_Rel_Insert_Input = {
  data: Array<Renewals_Insert_Input>
  on_conflict?: Maybe<Renewals_On_Conflict>
}

/** aggregate avg on columns */
export type Renewals_Avg_Fields = {
  __typename?: 'renewals_avg_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "renewals" */
export type Renewals_Avg_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "renewals". All fields are combined with a logical 'AND'. */
export type Renewals_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Renewals_Bool_Exp>>>
  _not?: Maybe<Renewals_Bool_Exp>
  _or?: Maybe<Array<Maybe<Renewals_Bool_Exp>>>
  admin_fee_amount?: Maybe<Float8_Comparison_Exp>
  admin_fee_tax?: Maybe<Float8_Comparison_Exp>
  applied_taxes?: Maybe<Applied_Taxes_Bool_Exp>
  base_amount?: Maybe<Float8_Comparison_Exp>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  booking_promotion_id?: Maybe<Int_Comparison_Exp>
  bookings_promotion?: Maybe<Bookings_Promotions_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  deposit_amount?: Maybe<Float8_Comparison_Exp>
  discount_amount?: Maybe<Float8_Comparison_Exp>
  has_admin_fee?: Maybe<Boolean_Comparison_Exp>
  has_custom_price?: Maybe<Boolean_Comparison_Exp>
  history_logs?: Maybe<History_Logs_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  insurance?: Maybe<Insurances_Bool_Exp>
  insurance_amount?: Maybe<Float8_Comparison_Exp>
  insurance_id?: Maybe<Int_Comparison_Exp>
  next_renewal_date?: Maybe<Timestamptz_Comparison_Exp>
  promotion?: Maybe<Promotions_Bool_Exp>
  promotion_id?: Maybe<Int_Comparison_Exp>
  promotions_redeems?: Maybe<Promotions_Redeem_Bool_Exp>
  renewal_end_date?: Maybe<Timestamptz_Comparison_Exp>
  renewal_paid_date?: Maybe<Timestamptz_Comparison_Exp>
  renewal_start_date?: Maybe<Timestamptz_Comparison_Exp>
  show_id?: Maybe<String_Comparison_Exp>
  status?: Maybe<Enum_Renewals_Status_Comparison_Exp>
  sub_total_amount?: Maybe<Float8_Comparison_Exp>
  terminations?: Maybe<Terminations_Bool_Exp>
  total_amount?: Maybe<Float8_Comparison_Exp>
  total_insurance_tax_amount?: Maybe<Float8_Comparison_Exp>
  total_rent_tax_amount?: Maybe<Float8_Comparison_Exp>
  transaction?: Maybe<Transactions_Bool_Exp>
  transaction_id?: Maybe<Int_Comparison_Exp>
  type?: Maybe<Enum_Renewals_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "renewals" */
export enum Renewals_Constraint {
  /** unique or primary key constraint */
  RenewalsPkey = 'renewals_pkey',
  /** unique or primary key constraint */
  RenewalsShowIdUnique = 'renewals_show_id_unique',
  /** unique or primary key constraint */
  RenewalsShowIdUniqueIdx = 'renewals_show_id_unique_idx',
}

/** input type for incrementing integer column in table "renewals" */
export type Renewals_Inc_Input = {
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transaction_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "renewals" */
export type Renewals_Insert_Input = {
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  applied_taxes?: Maybe<Applied_Taxes_Arr_Rel_Insert_Input>
  base_amount?: Maybe<Scalars['float8']>
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  bookings_promotion?: Maybe<Bookings_Promotions_Obj_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount?: Maybe<Scalars['float8']>
  has_admin_fee?: Maybe<Scalars['Boolean']>
  has_custom_price?: Maybe<Scalars['Boolean']>
  history_logs?: Maybe<History_Logs_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  insurance?: Maybe<Insurances_Obj_Rel_Insert_Input>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  next_renewal_date?: Maybe<Scalars['timestamptz']>
  promotion?: Maybe<Promotions_Obj_Rel_Insert_Input>
  promotion_id?: Maybe<Scalars['Int']>
  promotions_redeems?: Maybe<Promotions_Redeem_Arr_Rel_Insert_Input>
  renewal_end_date?: Maybe<Scalars['timestamptz']>
  renewal_paid_date?: Maybe<Scalars['timestamptz']>
  renewal_start_date?: Maybe<Scalars['timestamptz']>
  show_id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_renewals_status']>
  sub_total_amount?: Maybe<Scalars['float8']>
  terminations?: Maybe<Terminations_Arr_Rel_Insert_Input>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transaction?: Maybe<Transactions_Obj_Rel_Insert_Input>
  transaction_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_renewals_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Renewals_Max_Fields = {
  __typename?: 'renewals_max_fields'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  next_renewal_date?: Maybe<Scalars['timestamptz']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_end_date?: Maybe<Scalars['timestamptz']>
  renewal_paid_date?: Maybe<Scalars['timestamptz']>
  renewal_start_date?: Maybe<Scalars['timestamptz']>
  show_id?: Maybe<Scalars['String']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "renewals" */
export type Renewals_Max_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  next_renewal_date?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_end_date?: Maybe<Order_By>
  renewal_paid_date?: Maybe<Order_By>
  renewal_start_date?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Renewals_Min_Fields = {
  __typename?: 'renewals_min_fields'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  next_renewal_date?: Maybe<Scalars['timestamptz']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_end_date?: Maybe<Scalars['timestamptz']>
  renewal_paid_date?: Maybe<Scalars['timestamptz']>
  renewal_start_date?: Maybe<Scalars['timestamptz']>
  show_id?: Maybe<Scalars['String']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transaction_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "renewals" */
export type Renewals_Min_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  next_renewal_date?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  renewal_end_date?: Maybe<Order_By>
  renewal_paid_date?: Maybe<Order_By>
  renewal_start_date?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "renewals" */
export type Renewals_Mutation_Response = {
  __typename?: 'renewals_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Renewals>
}

/** input type for inserting object relation for remote table "renewals" */
export type Renewals_Obj_Rel_Insert_Input = {
  data: Renewals_Insert_Input
  on_conflict?: Maybe<Renewals_On_Conflict>
}

/** on conflict condition type for table "renewals" */
export type Renewals_On_Conflict = {
  constraint: Renewals_Constraint
  update_columns: Array<Renewals_Update_Column>
  where?: Maybe<Renewals_Bool_Exp>
}

/** ordering options when selecting data from "renewals" */
export type Renewals_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  applied_taxes_aggregate?: Maybe<Applied_Taxes_Aggregate_Order_By>
  base_amount?: Maybe<Order_By>
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  bookings_promotion?: Maybe<Bookings_Promotions_Order_By>
  created_at?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  has_admin_fee?: Maybe<Order_By>
  has_custom_price?: Maybe<Order_By>
  history_logs_aggregate?: Maybe<History_Logs_Aggregate_Order_By>
  id?: Maybe<Order_By>
  insurance?: Maybe<Insurances_Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  next_renewal_date?: Maybe<Order_By>
  promotion?: Maybe<Promotions_Order_By>
  promotion_id?: Maybe<Order_By>
  promotions_redeems_aggregate?: Maybe<Promotions_Redeem_Aggregate_Order_By>
  renewal_end_date?: Maybe<Order_By>
  renewal_paid_date?: Maybe<Order_By>
  renewal_start_date?: Maybe<Order_By>
  show_id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  terminations_aggregate?: Maybe<Terminations_Aggregate_Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction?: Maybe<Transactions_Order_By>
  transaction_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "renewals" */
export type Renewals_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "renewals" */
export enum Renewals_Select_Column {
  /** column name */
  AdminFeeAmount = 'admin_fee_amount',
  /** column name */
  AdminFeeTax = 'admin_fee_tax',
  /** column name */
  BaseAmount = 'base_amount',
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepositAmount = 'deposit_amount',
  /** column name */
  DiscountAmount = 'discount_amount',
  /** column name */
  HasAdminFee = 'has_admin_fee',
  /** column name */
  HasCustomPrice = 'has_custom_price',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceAmount = 'insurance_amount',
  /** column name */
  InsuranceId = 'insurance_id',
  /** column name */
  NextRenewalDate = 'next_renewal_date',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  RenewalEndDate = 'renewal_end_date',
  /** column name */
  RenewalPaidDate = 'renewal_paid_date',
  /** column name */
  RenewalStartDate = 'renewal_start_date',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubTotalAmount = 'sub_total_amount',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TotalInsuranceTaxAmount = 'total_insurance_tax_amount',
  /** column name */
  TotalRentTaxAmount = 'total_rent_tax_amount',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "renewals" */
export type Renewals_Set_Input = {
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount?: Maybe<Scalars['float8']>
  has_admin_fee?: Maybe<Scalars['Boolean']>
  has_custom_price?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  next_renewal_date?: Maybe<Scalars['timestamptz']>
  promotion_id?: Maybe<Scalars['Int']>
  renewal_end_date?: Maybe<Scalars['timestamptz']>
  renewal_paid_date?: Maybe<Scalars['timestamptz']>
  renewal_start_date?: Maybe<Scalars['timestamptz']>
  show_id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['enum_renewals_status']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transaction_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['enum_renewals_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Renewals_Stddev_Fields = {
  __typename?: 'renewals_stddev_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "renewals" */
export type Renewals_Stddev_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Renewals_Stddev_Pop_Fields = {
  __typename?: 'renewals_stddev_pop_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "renewals" */
export type Renewals_Stddev_Pop_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Renewals_Stddev_Samp_Fields = {
  __typename?: 'renewals_stddev_samp_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "renewals" */
export type Renewals_Stddev_Samp_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Renewals_Sum_Fields = {
  __typename?: 'renewals_sum_fields'
  admin_fee_amount?: Maybe<Scalars['float8']>
  admin_fee_tax?: Maybe<Scalars['float8']>
  base_amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  booking_promotion_id?: Maybe<Scalars['Int']>
  deposit_amount?: Maybe<Scalars['float8']>
  discount_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  insurance_amount?: Maybe<Scalars['float8']>
  insurance_id?: Maybe<Scalars['Int']>
  promotion_id?: Maybe<Scalars['Int']>
  sub_total_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
  total_insurance_tax_amount?: Maybe<Scalars['float8']>
  total_rent_tax_amount?: Maybe<Scalars['float8']>
  transaction_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "renewals" */
export type Renewals_Sum_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** update columns of table "renewals" */
export enum Renewals_Update_Column {
  /** column name */
  AdminFeeAmount = 'admin_fee_amount',
  /** column name */
  AdminFeeTax = 'admin_fee_tax',
  /** column name */
  BaseAmount = 'base_amount',
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  BookingPromotionId = 'booking_promotion_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepositAmount = 'deposit_amount',
  /** column name */
  DiscountAmount = 'discount_amount',
  /** column name */
  HasAdminFee = 'has_admin_fee',
  /** column name */
  HasCustomPrice = 'has_custom_price',
  /** column name */
  Id = 'id',
  /** column name */
  InsuranceAmount = 'insurance_amount',
  /** column name */
  InsuranceId = 'insurance_id',
  /** column name */
  NextRenewalDate = 'next_renewal_date',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  RenewalEndDate = 'renewal_end_date',
  /** column name */
  RenewalPaidDate = 'renewal_paid_date',
  /** column name */
  RenewalStartDate = 'renewal_start_date',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubTotalAmount = 'sub_total_amount',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TotalInsuranceTaxAmount = 'total_insurance_tax_amount',
  /** column name */
  TotalRentTaxAmount = 'total_rent_tax_amount',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Renewals_Var_Pop_Fields = {
  __typename?: 'renewals_var_pop_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "renewals" */
export type Renewals_Var_Pop_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Renewals_Var_Samp_Fields = {
  __typename?: 'renewals_var_samp_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "renewals" */
export type Renewals_Var_Samp_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Renewals_Variance_Fields = {
  __typename?: 'renewals_variance_fields'
  admin_fee_amount?: Maybe<Scalars['Float']>
  admin_fee_tax?: Maybe<Scalars['Float']>
  base_amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  booking_promotion_id?: Maybe<Scalars['Float']>
  deposit_amount?: Maybe<Scalars['Float']>
  discount_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  insurance_amount?: Maybe<Scalars['Float']>
  insurance_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
  sub_total_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
  total_insurance_tax_amount?: Maybe<Scalars['Float']>
  total_rent_tax_amount?: Maybe<Scalars['Float']>
  transaction_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "renewals" */
export type Renewals_Variance_Order_By = {
  admin_fee_amount?: Maybe<Order_By>
  admin_fee_tax?: Maybe<Order_By>
  base_amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  booking_promotion_id?: Maybe<Order_By>
  deposit_amount?: Maybe<Order_By>
  discount_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  insurance_amount?: Maybe<Order_By>
  insurance_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  sub_total_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  total_insurance_tax_amount?: Maybe<Order_By>
  total_rent_tax_amount?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** expression to compare columns of type resource_types. All fields are combined with logical 'AND'. */
export type Resource_Types_Comparison_Exp = {
  _eq?: Maybe<Scalars['resource_types']>
  _gt?: Maybe<Scalars['resource_types']>
  _gte?: Maybe<Scalars['resource_types']>
  _in?: Maybe<Array<Scalars['resource_types']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['resource_types']>
  _lte?: Maybe<Scalars['resource_types']>
  _neq?: Maybe<Scalars['resource_types']>
  _nin?: Maybe<Array<Scalars['resource_types']>>
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** perform the action: "accounts_receiveable" */
  accounts_receiveable: Array<AccountsReceiveableResp>
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>
  /** fetch data from the table: "admin_fees" */
  admin_fees: Array<Admin_Fees>
  /** fetch aggregated fields from the table: "admin_fees" */
  admin_fees_aggregate: Admin_Fees_Aggregate
  /** fetch data from the table: "admin_fees" using primary key columns */
  admin_fees_by_pk?: Maybe<Admin_Fees>
  /** fetch data from the table: "applied_taxes" */
  applied_taxes: Array<Applied_Taxes>
  /** fetch aggregated fields from the table: "applied_taxes" */
  applied_taxes_aggregate: Applied_Taxes_Aggregate
  /** fetch data from the table: "applied_taxes" using primary key columns */
  applied_taxes_by_pk?: Maybe<Applied_Taxes>
  /** fetch data from the table: "booking_contracts" */
  booking_contracts: Array<Booking_Contracts>
  /** fetch aggregated fields from the table: "booking_contracts" */
  booking_contracts_aggregate: Booking_Contracts_Aggregate
  /** fetch data from the table: "booking_contracts" using primary key columns */
  booking_contracts_by_pk?: Maybe<Booking_Contracts>
  /** fetch data from the table: "bookings" */
  bookings: Array<Bookings>
  /** fetch aggregated fields from the table: "bookings" */
  bookings_aggregate: Bookings_Aggregate
  /** fetch data from the table: "bookings_building_addresses" */
  bookings_building_addresses: Array<Bookings_Building_Addresses>
  /** fetch aggregated fields from the table: "bookings_building_addresses" */
  bookings_building_addresses_aggregate: Bookings_Building_Addresses_Aggregate
  /** fetch data from the table: "bookings_building_addresses" using primary key columns */
  bookings_building_addresses_by_pk?: Maybe<Bookings_Building_Addresses>
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>
  /** fetch data from the table: "bookings_history" */
  bookings_history: Array<Bookings_History>
  /** fetch aggregated fields from the table: "bookings_history" */
  bookings_history_aggregate: Bookings_History_Aggregate
  /** fetch data from the table: "bookings_history" using primary key columns */
  bookings_history_by_pk?: Maybe<Bookings_History>
  /** fetch data from the table: "bookings_promotions" */
  bookings_promotions: Array<Bookings_Promotions>
  /** fetch aggregated fields from the table: "bookings_promotions" */
  bookings_promotions_aggregate: Bookings_Promotions_Aggregate
  /** fetch data from the table: "bookings_promotions" using primary key columns */
  bookings_promotions_by_pk?: Maybe<Bookings_Promotions>
  /** fetch data from the table: "bookings_promotions_customer_buys" */
  bookings_promotions_customer_buys: Array<Bookings_Promotions_Customer_Buys>
  /** fetch aggregated fields from the table: "bookings_promotions_customer_buys" */
  bookings_promotions_customer_buys_aggregate: Bookings_Promotions_Customer_Buys_Aggregate
  /** fetch data from the table: "bookings_promotions_customer_buys" using primary key columns */
  bookings_promotions_customer_buys_by_pk?: Maybe<Bookings_Promotions_Customer_Buys>
  /** fetch data from the table: "bookings_promotions_customer_gets" */
  bookings_promotions_customer_gets: Array<Bookings_Promotions_Customer_Gets>
  /** fetch aggregated fields from the table: "bookings_promotions_customer_gets" */
  bookings_promotions_customer_gets_aggregate: Bookings_Promotions_Customer_Gets_Aggregate
  /** fetch data from the table: "bookings_promotions_customer_gets" using primary key columns */
  bookings_promotions_customer_gets_by_pk?: Maybe<Bookings_Promotions_Customer_Gets>
  /** fetch data from the table: "building_taxes" */
  building_taxes: Array<Building_Taxes>
  /** fetch aggregated fields from the table: "building_taxes" */
  building_taxes_aggregate: Building_Taxes_Aggregate
  /** fetch data from the table: "building_taxes" using primary key columns */
  building_taxes_by_pk?: Maybe<Building_Taxes>
  /** fetch data from the table: "buildings" */
  buildings: Array<Buildings>
  /** fetch aggregated fields from the table: "buildings" */
  buildings_aggregate: Buildings_Aggregate
  /** fetch data from the table: "buildings" using primary key columns */
  buildings_by_pk?: Maybe<Buildings>
  /** fetch data from the table: "cities" */
  cities: Array<Cities>
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>
  /** fetch data from the table: "companies" */
  companies: Array<Companies>
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>
  /** fetch data from the table: "contract_templates" */
  contract_templates: Array<Contract_Templates>
  /** fetch aggregated fields from the table: "contract_templates" */
  contract_templates_aggregate: Contract_Templates_Aggregate
  /** fetch data from the table: "contract_templates" using primary key columns */
  contract_templates_by_pk?: Maybe<Contract_Templates>
  /** fetch data from the table: "countries" */
  countries: Array<Countries>
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>
  /** fetch data from the table: "currencies" */
  currencies: Array<Currencies>
  /** fetch aggregated fields from the table: "currencies" */
  currencies_aggregate: Currencies_Aggregate
  /** fetch data from the table: "currencies" using primary key columns */
  currencies_by_pk?: Maybe<Currencies>
  /** fetch data from the table: "customers" */
  customers: Array<Customers>
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>
  /** fetch data from the table: "features" */
  features: Array<Features>
  /** fetch aggregated fields from the table: "features" */
  features_aggregate: Features_Aggregate
  /** fetch data from the table: "features" using primary key columns */
  features_by_pk?: Maybe<Features>
  /** fetch data from the table: "floors" */
  floors: Array<Floors>
  /** fetch aggregated fields from the table: "floors" */
  floors_aggregate: Floors_Aggregate
  /** fetch data from the table: "floors" using primary key columns */
  floors_by_pk?: Maybe<Floors>
  /** fetch data from the table: "history_logs" */
  history_logs: Array<History_Logs>
  /** fetch aggregated fields from the table: "history_logs" */
  history_logs_aggregate: History_Logs_Aggregate
  /** fetch data from the table: "history_logs" using primary key columns */
  history_logs_by_pk?: Maybe<History_Logs>
  /** fetch data from the table: "id_counters" */
  id_counters: Array<Id_Counters>
  /** fetch aggregated fields from the table: "id_counters" */
  id_counters_aggregate: Id_Counters_Aggregate
  /** fetch data from the table: "id_counters" using primary key columns */
  id_counters_by_pk?: Maybe<Id_Counters>
  /** fetch data from the table: "insurance_taxes" */
  insurance_taxes: Array<Insurance_Taxes>
  /** fetch aggregated fields from the table: "insurance_taxes" */
  insurance_taxes_aggregate: Insurance_Taxes_Aggregate
  /** fetch data from the table: "insurance_taxes" using primary key columns */
  insurance_taxes_by_pk?: Maybe<Insurance_Taxes>
  /** fetch data from the table: "insurances" */
  insurances: Array<Insurances>
  /** fetch aggregated fields from the table: "insurances" */
  insurances_aggregate: Insurances_Aggregate
  /** fetch data from the table: "insurances" using primary key columns */
  insurances_by_pk?: Maybe<Insurances>
  /** fetch data from the table: "otps" */
  otps: Array<Otps>
  /** fetch aggregated fields from the table: "otps" */
  otps_aggregate: Otps_Aggregate
  /** fetch data from the table: "otps" using primary key columns */
  otps_by_pk?: Maybe<Otps>
  /** fetch data from the table: "payment_methods" */
  payment_methods: Array<Payment_Methods>
  /** fetch aggregated fields from the table: "payment_methods" */
  payment_methods_aggregate: Payment_Methods_Aggregate
  /** fetch data from the table: "payment_methods" using primary key columns */
  payment_methods_by_pk?: Maybe<Payment_Methods>
  /** fetch data from the table: "promotions" */
  promotions: Array<Promotions>
  /** fetch aggregated fields from the table: "promotions" */
  promotions_aggregate: Promotions_Aggregate
  /** fetch data from the table: "promotions" using primary key columns */
  promotions_by_pk?: Maybe<Promotions>
  /** fetch data from the table: "promotions_customer_buys" */
  promotions_customer_buys: Array<Promotions_Customer_Buys>
  /** fetch aggregated fields from the table: "promotions_customer_buys" */
  promotions_customer_buys_aggregate: Promotions_Customer_Buys_Aggregate
  /** fetch data from the table: "promotions_customer_buys" using primary key columns */
  promotions_customer_buys_by_pk?: Maybe<Promotions_Customer_Buys>
  /** fetch data from the table: "promotions_customer_gets" */
  promotions_customer_gets: Array<Promotions_Customer_Gets>
  /** fetch aggregated fields from the table: "promotions_customer_gets" */
  promotions_customer_gets_aggregate: Promotions_Customer_Gets_Aggregate
  /** fetch data from the table: "promotions_customer_gets" using primary key columns */
  promotions_customer_gets_by_pk?: Maybe<Promotions_Customer_Gets>
  /** fetch data from the table: "promotions_redeem" */
  promotions_redeem: Array<Promotions_Redeem>
  /** fetch aggregated fields from the table: "promotions_redeem" */
  promotions_redeem_aggregate: Promotions_Redeem_Aggregate
  /** fetch data from the table: "promotions_redeem" using primary key columns */
  promotions_redeem_by_pk?: Maybe<Promotions_Redeem>
  /** perform the action: "receipt_details" */
  receipt_details: Array<ReceiptDetailsResp>
  /** fetch data from the table: "renewals" */
  renewals: Array<Renewals>
  /** fetch aggregated fields from the table: "renewals" */
  renewals_aggregate: Renewals_Aggregate
  /** fetch data from the table: "renewals" using primary key columns */
  renewals_by_pk?: Maybe<Renewals>
  /** perform the action: "security_deposit_liabilities" */
  security_deposit_liabilities: Array<SecurityDepositLiabilitiesResp>
  /** fetch data from the table: "terminations" */
  terminations: Array<Terminations>
  /** fetch aggregated fields from the table: "terminations" */
  terminations_aggregate: Terminations_Aggregate
  /** fetch data from the table: "terminations" using primary key columns */
  terminations_by_pk?: Maybe<Terminations>
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>
  /** perform the action: "unit_history" */
  unit_history: Array<UnitHistoryResp>
  /** fetch data from the table: "unit_subtypes" */
  unit_subtypes: Array<Unit_Subtypes>
  /** fetch aggregated fields from the table: "unit_subtypes" */
  unit_subtypes_aggregate: Unit_Subtypes_Aggregate
  /** fetch data from the table: "unit_subtypes" using primary key columns */
  unit_subtypes_by_pk?: Maybe<Unit_Subtypes>
  /** fetch data from the table: "unit_type_features" */
  unit_type_features: Array<Unit_Type_Features>
  /** fetch aggregated fields from the table: "unit_type_features" */
  unit_type_features_aggregate: Unit_Type_Features_Aggregate
  /** fetch data from the table: "unit_type_features" using primary key columns */
  unit_type_features_by_pk?: Maybe<Unit_Type_Features>
  /** fetch data from the table: "unit_types" */
  unit_types: Array<Unit_Types>
  /** fetch aggregated fields from the table: "unit_types" */
  unit_types_aggregate: Unit_Types_Aggregate
  /** fetch data from the table: "unit_types" using primary key columns */
  unit_types_by_pk?: Maybe<Unit_Types>
  /** fetch data from the table: "units" */
  units: Array<Units>
  /** fetch aggregated fields from the table: "units" */
  units_aggregate: Units_Aggregate
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk?: Maybe<Units>
  /** fetch data from the table: "user_companies" */
  user_companies: Array<User_Companies>
  /** fetch aggregated fields from the table: "user_companies" */
  user_companies_aggregate: User_Companies_Aggregate
  /** fetch data from the table: "user_companies" using primary key columns */
  user_companies_by_pk?: Maybe<User_Companies>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

/** subscription root */
export type Subscription_RootAccounts_ReceiveableArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** subscription root */
export type Subscription_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Addresses_Order_By>>
  where?: Maybe<Addresses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootAdmin_FeesArgs = {
  distinct_on?: Maybe<Array<Admin_Fees_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_Fees_Order_By>>
  where?: Maybe<Admin_Fees_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAdmin_Fees_AggregateArgs = {
  distinct_on?: Maybe<Array<Admin_Fees_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_Fees_Order_By>>
  where?: Maybe<Admin_Fees_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAdmin_Fees_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootApplied_TaxesArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootApplied_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Applied_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Applied_Taxes_Order_By>>
  where?: Maybe<Applied_Taxes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootApplied_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBooking_ContractsArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBooking_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBooking_Contracts_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Building_AddressesArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Building_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Building_Addresses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Building_Addresses_Order_By>>
  where?: Maybe<Bookings_Building_Addresses_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Building_Addresses_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBookings_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBookings_HistoryArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_History_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBookings_PromotionsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Order_By>>
  where?: Maybe<Bookings_Promotions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Promotions_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBookings_Promotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Promotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Buys_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Promotions_Customer_Buys_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBookings_Promotions_Customer_GetsArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Promotions_Customer_Gets_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Bookings_Promotions_Customer_Gets_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBookings_Promotions_Customer_Gets_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBuilding_TaxesArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBuilding_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Building_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Building_Taxes_Order_By>>
  where?: Maybe<Building_Taxes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBuilding_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBuildingsArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBuildings_AggregateArgs = {
  distinct_on?: Maybe<Array<Buildings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Buildings_Order_By>>
  where?: Maybe<Buildings_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBuildings_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Companies_Order_By>>
  where?: Maybe<Companies_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Companies_Order_By>>
  where?: Maybe<Companies_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootContract_TemplatesArgs = {
  distinct_on?: Maybe<Array<Contract_Templates_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contract_Templates_Order_By>>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** subscription root */
export type Subscription_RootContract_Templates_AggregateArgs = {
  distinct_on?: Maybe<Array<Contract_Templates_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contract_Templates_Order_By>>
  where?: Maybe<Contract_Templates_Bool_Exp>
}

/** subscription root */
export type Subscription_RootContract_Templates_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Countries_Order_By>>
  where?: Maybe<Countries_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Countries_Order_By>>
  where?: Maybe<Countries_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCountries_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootCurrenciesArgs = {
  distinct_on?: Maybe<Array<Currencies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Currencies_Order_By>>
  where?: Maybe<Currencies_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCurrencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Currencies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Currencies_Order_By>>
  where?: Maybe<Currencies_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCurrencies_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Customers_Order_By>>
  where?: Maybe<Customers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootFeaturesArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Features_Order_By>>
  where?: Maybe<Features_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFeatures_AggregateArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Features_Order_By>>
  where?: Maybe<Features_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFeatures_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootFloorsArgs = {
  distinct_on?: Maybe<Array<Floors_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Floors_Order_By>>
  where?: Maybe<Floors_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFloors_AggregateArgs = {
  distinct_on?: Maybe<Array<Floors_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Floors_Order_By>>
  where?: Maybe<Floors_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFloors_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** subscription root */
export type Subscription_RootHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** subscription root */
export type Subscription_RootHistory_Logs_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootId_CountersArgs = {
  distinct_on?: Maybe<Array<Id_Counters_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Id_Counters_Order_By>>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** subscription root */
export type Subscription_RootId_Counters_AggregateArgs = {
  distinct_on?: Maybe<Array<Id_Counters_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Id_Counters_Order_By>>
  where?: Maybe<Id_Counters_Bool_Exp>
}

/** subscription root */
export type Subscription_RootId_Counters_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootInsurance_TaxesArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootInsurance_Taxes_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Taxes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurance_Taxes_Order_By>>
  where?: Maybe<Insurance_Taxes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootInsurance_Taxes_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootInsurancesArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** subscription root */
export type Subscription_RootInsurances_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Insurances_Order_By>>
  where?: Maybe<Insurances_Bool_Exp>
}

/** subscription root */
export type Subscription_RootInsurances_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootOtpsArgs = {
  distinct_on?: Maybe<Array<Otps_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Otps_Order_By>>
  where?: Maybe<Otps_Bool_Exp>
}

/** subscription root */
export type Subscription_RootOtps_AggregateArgs = {
  distinct_on?: Maybe<Array<Otps_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Otps_Order_By>>
  where?: Maybe<Otps_Bool_Exp>
}

/** subscription root */
export type Subscription_RootOtps_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootPayment_MethodsArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPayment_Methods_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPayment_Methods_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootPromotions_Customer_BuysArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_Customer_Buys_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Buys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Buys_Order_By>>
  where?: Maybe<Promotions_Customer_Buys_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_Customer_Buys_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootPromotions_Customer_GetsArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_Customer_Gets_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Customer_Gets_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Customer_Gets_Order_By>>
  where?: Maybe<Promotions_Customer_Gets_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_Customer_Gets_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootPromotions_RedeemArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_Redeem_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Redeem_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Redeem_Order_By>>
  where?: Maybe<Promotions_Redeem_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPromotions_Redeem_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootReceipt_DetailsArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** subscription root */
export type Subscription_RootRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** subscription root */
export type Subscription_RootRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** subscription root */
export type Subscription_RootRenewals_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootSecurity_Deposit_LiabilitiesArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** subscription root */
export type Subscription_RootTerminationsArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTerminations_AggregateArgs = {
  distinct_on?: Maybe<Array<Terminations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Terminations_Order_By>>
  where?: Maybe<Terminations_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTerminations_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootUnit_HistoryArgs = {
  building_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
  end_date: Scalars['timestamptz']
  limit?: Maybe<Scalars['Int']>
  start_date: Scalars['timestamptz']
  unit_type_ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** subscription root */
export type Subscription_RootUnit_SubtypesArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnit_Subtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnit_Subtypes_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootUnit_Type_FeaturesArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnit_Type_Features_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnit_Type_Features_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootUnit_TypesArgs = {
  distinct_on?: Maybe<Array<Unit_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Types_Order_By>>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnit_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Types_Order_By>>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnit_Types_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootUnitsArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Units_Order_By>>
  where?: Maybe<Units_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnits_AggregateArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Units_Order_By>>
  where?: Maybe<Units_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUnits_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootUser_CompaniesArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUser_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUser_Companies_By_PkArgs = {
  company_id: Scalars['Int']
  user_id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "terminations" */
export type Terminations = {
  __typename?: 'terminations'
  /** An object relationship */
  booking: Bookings
  booking_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currency: Currencies
  currency_id: Scalars['Int']
  discount: Scalars['float8']
  failed_renewals_amount: Scalars['float8']
  /** An array relationship */
  history_logs: Array<History_Logs>
  /** An aggregated array relationship */
  history_logs_aggregate: History_Logs_Aggregate
  id: Scalars['Int']
  is_auto_created: Scalars['Boolean']
  is_overdue: Scalars['Boolean']
  last_renewal_id?: Maybe<Scalars['Int']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  notice_period_amount: Scalars['float8']
  /** An object relationship */
  payment_method?: Maybe<Payment_Methods>
  payment_method_id?: Maybe<Scalars['Int']>
  payment_status: Scalars['enum_terminations_payment_status']
  promotion_amount: Scalars['float8']
  remaining_days_amount: Scalars['float8']
  /** An object relationship */
  renewal?: Maybe<Renewals>
  status: Scalars['enum_terminations_status']
  termination_date?: Maybe<Scalars['timestamptz']>
  total_amount: Scalars['float8']
  /** An array relationship */
  transactions: Array<Transactions>
  /** An aggregated array relationship */
  transactions_aggregate: Transactions_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "terminations" */
export type TerminationsHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "terminations" */
export type TerminationsHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "terminations" */
export type TerminationsTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** columns and relationships of "terminations" */
export type TerminationsTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** aggregated selection of "terminations" */
export type Terminations_Aggregate = {
  __typename?: 'terminations_aggregate'
  aggregate?: Maybe<Terminations_Aggregate_Fields>
  nodes: Array<Terminations>
}

/** aggregate fields of "terminations" */
export type Terminations_Aggregate_Fields = {
  __typename?: 'terminations_aggregate_fields'
  avg?: Maybe<Terminations_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Terminations_Max_Fields>
  min?: Maybe<Terminations_Min_Fields>
  stddev?: Maybe<Terminations_Stddev_Fields>
  stddev_pop?: Maybe<Terminations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Terminations_Stddev_Samp_Fields>
  sum?: Maybe<Terminations_Sum_Fields>
  var_pop?: Maybe<Terminations_Var_Pop_Fields>
  var_samp?: Maybe<Terminations_Var_Samp_Fields>
  variance?: Maybe<Terminations_Variance_Fields>
}

/** aggregate fields of "terminations" */
export type Terminations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Terminations_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "terminations" */
export type Terminations_Aggregate_Order_By = {
  avg?: Maybe<Terminations_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Terminations_Max_Order_By>
  min?: Maybe<Terminations_Min_Order_By>
  stddev?: Maybe<Terminations_Stddev_Order_By>
  stddev_pop?: Maybe<Terminations_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Terminations_Stddev_Samp_Order_By>
  sum?: Maybe<Terminations_Sum_Order_By>
  var_pop?: Maybe<Terminations_Var_Pop_Order_By>
  var_samp?: Maybe<Terminations_Var_Samp_Order_By>
  variance?: Maybe<Terminations_Variance_Order_By>
}

/** input type for inserting array relation for remote table "terminations" */
export type Terminations_Arr_Rel_Insert_Input = {
  data: Array<Terminations_Insert_Input>
  on_conflict?: Maybe<Terminations_On_Conflict>
}

/** aggregate avg on columns */
export type Terminations_Avg_Fields = {
  __typename?: 'terminations_avg_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "terminations" */
export type Terminations_Avg_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "terminations". All fields are combined with a logical 'AND'. */
export type Terminations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Terminations_Bool_Exp>>>
  _not?: Maybe<Terminations_Bool_Exp>
  _or?: Maybe<Array<Maybe<Terminations_Bool_Exp>>>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currency?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  discount?: Maybe<Float8_Comparison_Exp>
  failed_renewals_amount?: Maybe<Float8_Comparison_Exp>
  history_logs?: Maybe<History_Logs_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  is_auto_created?: Maybe<Boolean_Comparison_Exp>
  is_overdue?: Maybe<Boolean_Comparison_Exp>
  last_renewal_id?: Maybe<Int_Comparison_Exp>
  move_out_date?: Maybe<Timestamptz_Comparison_Exp>
  notice_period_amount?: Maybe<Float8_Comparison_Exp>
  payment_method?: Maybe<Payment_Methods_Bool_Exp>
  payment_method_id?: Maybe<Int_Comparison_Exp>
  payment_status?: Maybe<Enum_Terminations_Payment_Status_Comparison_Exp>
  promotion_amount?: Maybe<Float8_Comparison_Exp>
  remaining_days_amount?: Maybe<Float8_Comparison_Exp>
  renewal?: Maybe<Renewals_Bool_Exp>
  status?: Maybe<Enum_Terminations_Status_Comparison_Exp>
  termination_date?: Maybe<Timestamptz_Comparison_Exp>
  total_amount?: Maybe<Float8_Comparison_Exp>
  transactions?: Maybe<Transactions_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "terminations" */
export enum Terminations_Constraint {
  /** unique or primary key constraint */
  TerminationsPkey = 'terminations_pkey',
}

/** input type for incrementing integer column in table "terminations" */
export type Terminations_Inc_Input = {
  booking_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  failed_renewals_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  last_renewal_id?: Maybe<Scalars['Int']>
  notice_period_amount?: Maybe<Scalars['float8']>
  payment_method_id?: Maybe<Scalars['Int']>
  promotion_amount?: Maybe<Scalars['float8']>
  remaining_days_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "terminations" */
export type Terminations_Insert_Input = {
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  failed_renewals_amount?: Maybe<Scalars['float8']>
  history_logs?: Maybe<History_Logs_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  is_auto_created?: Maybe<Scalars['Boolean']>
  is_overdue?: Maybe<Scalars['Boolean']>
  last_renewal_id?: Maybe<Scalars['Int']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  notice_period_amount?: Maybe<Scalars['float8']>
  payment_method?: Maybe<Payment_Methods_Obj_Rel_Insert_Input>
  payment_method_id?: Maybe<Scalars['Int']>
  payment_status?: Maybe<Scalars['enum_terminations_payment_status']>
  promotion_amount?: Maybe<Scalars['float8']>
  remaining_days_amount?: Maybe<Scalars['float8']>
  renewal?: Maybe<Renewals_Obj_Rel_Insert_Input>
  status?: Maybe<Scalars['enum_terminations_status']>
  termination_date?: Maybe<Scalars['timestamptz']>
  total_amount?: Maybe<Scalars['float8']>
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Terminations_Max_Fields = {
  __typename?: 'terminations_max_fields'
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  failed_renewals_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  last_renewal_id?: Maybe<Scalars['Int']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  notice_period_amount?: Maybe<Scalars['float8']>
  payment_method_id?: Maybe<Scalars['Int']>
  promotion_amount?: Maybe<Scalars['float8']>
  remaining_days_amount?: Maybe<Scalars['float8']>
  termination_date?: Maybe<Scalars['timestamptz']>
  total_amount?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "terminations" */
export type Terminations_Max_Order_By = {
  booking_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  move_out_date?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  termination_date?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Terminations_Min_Fields = {
  __typename?: 'terminations_min_fields'
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  failed_renewals_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  last_renewal_id?: Maybe<Scalars['Int']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  notice_period_amount?: Maybe<Scalars['float8']>
  payment_method_id?: Maybe<Scalars['Int']>
  promotion_amount?: Maybe<Scalars['float8']>
  remaining_days_amount?: Maybe<Scalars['float8']>
  termination_date?: Maybe<Scalars['timestamptz']>
  total_amount?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "terminations" */
export type Terminations_Min_Order_By = {
  booking_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  move_out_date?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  termination_date?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "terminations" */
export type Terminations_Mutation_Response = {
  __typename?: 'terminations_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Terminations>
}

/** input type for inserting object relation for remote table "terminations" */
export type Terminations_Obj_Rel_Insert_Input = {
  data: Terminations_Insert_Input
  on_conflict?: Maybe<Terminations_On_Conflict>
}

/** on conflict condition type for table "terminations" */
export type Terminations_On_Conflict = {
  constraint: Terminations_Constraint
  update_columns: Array<Terminations_Update_Column>
  where?: Maybe<Terminations_Bool_Exp>
}

/** ordering options when selecting data from "terminations" */
export type Terminations_Order_By = {
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  history_logs_aggregate?: Maybe<History_Logs_Aggregate_Order_By>
  id?: Maybe<Order_By>
  is_auto_created?: Maybe<Order_By>
  is_overdue?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  move_out_date?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method?: Maybe<Payment_Methods_Order_By>
  payment_method_id?: Maybe<Order_By>
  payment_status?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  renewal?: Maybe<Renewals_Order_By>
  status?: Maybe<Order_By>
  termination_date?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "terminations" */
export type Terminations_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "terminations" */
export enum Terminations_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Discount = 'discount',
  /** column name */
  FailedRenewalsAmount = 'failed_renewals_amount',
  /** column name */
  Id = 'id',
  /** column name */
  IsAutoCreated = 'is_auto_created',
  /** column name */
  IsOverdue = 'is_overdue',
  /** column name */
  LastRenewalId = 'last_renewal_id',
  /** column name */
  MoveOutDate = 'move_out_date',
  /** column name */
  NoticePeriodAmount = 'notice_period_amount',
  /** column name */
  PaymentMethodId = 'payment_method_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PromotionAmount = 'promotion_amount',
  /** column name */
  RemainingDaysAmount = 'remaining_days_amount',
  /** column name */
  Status = 'status',
  /** column name */
  TerminationDate = 'termination_date',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "terminations" */
export type Terminations_Set_Input = {
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  failed_renewals_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  is_auto_created?: Maybe<Scalars['Boolean']>
  is_overdue?: Maybe<Scalars['Boolean']>
  last_renewal_id?: Maybe<Scalars['Int']>
  move_out_date?: Maybe<Scalars['timestamptz']>
  notice_period_amount?: Maybe<Scalars['float8']>
  payment_method_id?: Maybe<Scalars['Int']>
  payment_status?: Maybe<Scalars['enum_terminations_payment_status']>
  promotion_amount?: Maybe<Scalars['float8']>
  remaining_days_amount?: Maybe<Scalars['float8']>
  status?: Maybe<Scalars['enum_terminations_status']>
  termination_date?: Maybe<Scalars['timestamptz']>
  total_amount?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Terminations_Stddev_Fields = {
  __typename?: 'terminations_stddev_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "terminations" */
export type Terminations_Stddev_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Terminations_Stddev_Pop_Fields = {
  __typename?: 'terminations_stddev_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "terminations" */
export type Terminations_Stddev_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Terminations_Stddev_Samp_Fields = {
  __typename?: 'terminations_stddev_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "terminations" */
export type Terminations_Stddev_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Terminations_Sum_Fields = {
  __typename?: 'terminations_sum_fields'
  booking_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['float8']>
  failed_renewals_amount?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  last_renewal_id?: Maybe<Scalars['Int']>
  notice_period_amount?: Maybe<Scalars['float8']>
  payment_method_id?: Maybe<Scalars['Int']>
  promotion_amount?: Maybe<Scalars['float8']>
  remaining_days_amount?: Maybe<Scalars['float8']>
  total_amount?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "terminations" */
export type Terminations_Sum_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** update columns of table "terminations" */
export enum Terminations_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Discount = 'discount',
  /** column name */
  FailedRenewalsAmount = 'failed_renewals_amount',
  /** column name */
  Id = 'id',
  /** column name */
  IsAutoCreated = 'is_auto_created',
  /** column name */
  IsOverdue = 'is_overdue',
  /** column name */
  LastRenewalId = 'last_renewal_id',
  /** column name */
  MoveOutDate = 'move_out_date',
  /** column name */
  NoticePeriodAmount = 'notice_period_amount',
  /** column name */
  PaymentMethodId = 'payment_method_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PromotionAmount = 'promotion_amount',
  /** column name */
  RemainingDaysAmount = 'remaining_days_amount',
  /** column name */
  Status = 'status',
  /** column name */
  TerminationDate = 'termination_date',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Terminations_Var_Pop_Fields = {
  __typename?: 'terminations_var_pop_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "terminations" */
export type Terminations_Var_Pop_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Terminations_Var_Samp_Fields = {
  __typename?: 'terminations_var_samp_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "terminations" */
export type Terminations_Var_Samp_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Terminations_Variance_Fields = {
  __typename?: 'terminations_variance_fields'
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
  failed_renewals_amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  last_renewal_id?: Maybe<Scalars['Float']>
  notice_period_amount?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  promotion_amount?: Maybe<Scalars['Float']>
  remaining_days_amount?: Maybe<Scalars['Float']>
  total_amount?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "terminations" */
export type Terminations_Variance_Order_By = {
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  discount?: Maybe<Order_By>
  failed_renewals_amount?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_renewal_id?: Maybe<Order_By>
  notice_period_amount?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  promotion_amount?: Maybe<Order_By>
  remaining_days_amount?: Maybe<Order_By>
  total_amount?: Maybe<Order_By>
}

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>
  _gt?: Maybe<Scalars['timestamp']>
  _gte?: Maybe<Scalars['timestamp']>
  _in?: Maybe<Array<Scalars['timestamp']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamp']>
  _lte?: Maybe<Scalars['timestamp']>
  _neq?: Maybe<Scalars['timestamp']>
  _nin?: Maybe<Array<Scalars['timestamp']>>
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions'
  amount: Scalars['float8']
  /** An object relationship */
  booking: Bookings
  booking_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currency: Currencies
  currency_id: Scalars['Int']
  /** An object relationship */
  customer: Customers
  customer_id: Scalars['Int']
  /** An array relationship */
  history_logs: Array<History_Logs>
  /** An aggregated array relationship */
  history_logs_aggregate: History_Logs_Aggregate
  id: Scalars['Int']
  memo?: Maybe<Scalars['String']>
  /** An object relationship */
  payment_method: Payment_Methods
  payment_method_id: Scalars['Int']
  /** An array relationship */
  renewals: Array<Renewals>
  /** An aggregated array relationship */
  renewals_aggregate: Renewals_Aggregate
  /** An object relationship */
  termination?: Maybe<Terminations>
  termination_id?: Maybe<Scalars['Int']>
  transaction_reference?: Maybe<Scalars['String']>
  type: Scalars['enum_transactions_type']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "transactions" */
export type TransactionsHistory_LogsArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "transactions" */
export type TransactionsHistory_Logs_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<History_Logs_Order_By>>
  where?: Maybe<History_Logs_Bool_Exp>
}

/** columns and relationships of "transactions" */
export type TransactionsRenewalsArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** columns and relationships of "transactions" */
export type TransactionsRenewals_AggregateArgs = {
  distinct_on?: Maybe<Array<Renewals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Renewals_Order_By>>
  where?: Maybe<Renewals_Bool_Exp>
}

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate'
  aggregate?: Maybe<Transactions_Aggregate_Fields>
  nodes: Array<Transactions>
}

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields'
  avg?: Maybe<Transactions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Transactions_Max_Fields>
  min?: Maybe<Transactions_Min_Fields>
  stddev?: Maybe<Transactions_Stddev_Fields>
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>
  sum?: Maybe<Transactions_Sum_Fields>
  var_pop?: Maybe<Transactions_Var_Pop_Fields>
  var_samp?: Maybe<Transactions_Var_Samp_Fields>
  variance?: Maybe<Transactions_Variance_Fields>
}

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transactions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: Maybe<Transactions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Transactions_Max_Order_By>
  min?: Maybe<Transactions_Min_Order_By>
  stddev?: Maybe<Transactions_Stddev_Order_By>
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Order_By>
  sum?: Maybe<Transactions_Sum_Order_By>
  var_pop?: Maybe<Transactions_Var_Pop_Order_By>
  var_samp?: Maybe<Transactions_Var_Samp_Order_By>
  variance?: Maybe<Transactions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>
  _not?: Maybe<Transactions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>
  amount?: Maybe<Float8_Comparison_Exp>
  booking?: Maybe<Bookings_Bool_Exp>
  booking_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currency?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  customer?: Maybe<Customers_Bool_Exp>
  customer_id?: Maybe<Int_Comparison_Exp>
  history_logs?: Maybe<History_Logs_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  memo?: Maybe<String_Comparison_Exp>
  payment_method?: Maybe<Payment_Methods_Bool_Exp>
  payment_method_id?: Maybe<Int_Comparison_Exp>
  renewals?: Maybe<Renewals_Bool_Exp>
  termination?: Maybe<Terminations_Bool_Exp>
  termination_id?: Maybe<Int_Comparison_Exp>
  transaction_reference?: Maybe<String_Comparison_Exp>
  type?: Maybe<Enum_Transactions_Type_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey',
}

/** input type for incrementing integer column in table "transactions" */
export type Transactions_Inc_Input = {
  amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  payment_method_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  amount?: Maybe<Scalars['float8']>
  booking?: Maybe<Bookings_Obj_Rel_Insert_Input>
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>
  customer_id?: Maybe<Scalars['Int']>
  history_logs?: Maybe<History_Logs_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  memo?: Maybe<Scalars['String']>
  payment_method?: Maybe<Payment_Methods_Obj_Rel_Insert_Input>
  payment_method_id?: Maybe<Scalars['Int']>
  renewals?: Maybe<Renewals_Arr_Rel_Insert_Input>
  termination?: Maybe<Terminations_Obj_Rel_Insert_Input>
  termination_id?: Maybe<Scalars['Int']>
  transaction_reference?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['enum_transactions_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields'
  amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  memo?: Maybe<Scalars['String']>
  payment_method_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_reference?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  memo?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_reference?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields'
  amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  memo?: Maybe<Scalars['String']>
  payment_method_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_reference?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  memo?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
  transaction_reference?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Transactions>
}

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint
  update_columns: Array<Transactions_Update_Column>
  where?: Maybe<Transactions_Bool_Exp>
}

/** ordering options when selecting data from "transactions" */
export type Transactions_Order_By = {
  amount?: Maybe<Order_By>
  booking?: Maybe<Bookings_Order_By>
  booking_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  customer?: Maybe<Customers_Order_By>
  customer_id?: Maybe<Order_By>
  history_logs_aggregate?: Maybe<History_Logs_Aggregate_Order_By>
  id?: Maybe<Order_By>
  memo?: Maybe<Order_By>
  payment_method?: Maybe<Payment_Methods_Order_By>
  payment_method_id?: Maybe<Order_By>
  renewals_aggregate?: Maybe<Renewals_Aggregate_Order_By>
  termination?: Maybe<Terminations_Order_By>
  termination_id?: Maybe<Order_By>
  transaction_reference?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "transactions" */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  PaymentMethodId = 'payment_method_id',
  /** column name */
  TerminationId = 'termination_id',
  /** column name */
  TransactionReference = 'transaction_reference',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  memo?: Maybe<Scalars['String']>
  payment_method_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
  transaction_reference?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['enum_transactions_type']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields'
  amount?: Maybe<Scalars['float8']>
  booking_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  payment_method_id?: Maybe<Scalars['Int']>
  termination_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  PaymentMethodId = 'payment_method_id',
  /** column name */
  TerminationId = 'termination_id',
  /** column name */
  TransactionReference = 'transaction_reference',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields'
  amount?: Maybe<Scalars['Float']>
  booking_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  customer_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  payment_method_id?: Maybe<Scalars['Float']>
  termination_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  amount?: Maybe<Order_By>
  booking_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  customer_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  payment_method_id?: Maybe<Order_By>
  termination_id?: Maybe<Order_By>
}

/** expression to compare columns of type type_roles. All fields are combined with logical 'AND'. */
export type Type_Roles_Comparison_Exp = {
  _eq?: Maybe<Scalars['type_roles']>
  _gt?: Maybe<Scalars['type_roles']>
  _gte?: Maybe<Scalars['type_roles']>
  _in?: Maybe<Array<Scalars['type_roles']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['type_roles']>
  _lte?: Maybe<Scalars['type_roles']>
  _neq?: Maybe<Scalars['type_roles']>
  _nin?: Maybe<Array<Scalars['type_roles']>>
}

/** columns and relationships of "unit_subtypes" */
export type Unit_Subtypes = {
  __typename?: 'unit_subtypes'
  area: Scalars['float8']
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  /** An object relationship */
  building: Buildings
  building_id: Scalars['Int']
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  currency: Currencies
  currency_id: Scalars['Int']
  /** An object relationship */
  floor: Floors
  floor_id: Scalars['Int']
  height: Scalars['float8']
  id: Scalars['Int']
  length: Scalars['float8']
  measurement_unit: Scalars['enum_measurement_unit']
  price_per_month: Scalars['float8']
  total_units: Scalars['Int']
  /** An object relationship */
  unit_type: Unit_Types
  unit_type_id: Scalars['Int']
  /** An array relationship */
  units: Array<Units>
  /** An aggregated array relationship */
  units_aggregate: Units_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
  width: Scalars['float8']
}

/** columns and relationships of "unit_subtypes" */
export type Unit_SubtypesBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "unit_subtypes" */
export type Unit_SubtypesBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "unit_subtypes" */
export type Unit_SubtypesUnitsArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Units_Order_By>>
  where?: Maybe<Units_Bool_Exp>
}

/** columns and relationships of "unit_subtypes" */
export type Unit_SubtypesUnits_AggregateArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Units_Order_By>>
  where?: Maybe<Units_Bool_Exp>
}

/** aggregated selection of "unit_subtypes" */
export type Unit_Subtypes_Aggregate = {
  __typename?: 'unit_subtypes_aggregate'
  aggregate?: Maybe<Unit_Subtypes_Aggregate_Fields>
  nodes: Array<Unit_Subtypes>
}

/** aggregate fields of "unit_subtypes" */
export type Unit_Subtypes_Aggregate_Fields = {
  __typename?: 'unit_subtypes_aggregate_fields'
  avg?: Maybe<Unit_Subtypes_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Unit_Subtypes_Max_Fields>
  min?: Maybe<Unit_Subtypes_Min_Fields>
  stddev?: Maybe<Unit_Subtypes_Stddev_Fields>
  stddev_pop?: Maybe<Unit_Subtypes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Unit_Subtypes_Stddev_Samp_Fields>
  sum?: Maybe<Unit_Subtypes_Sum_Fields>
  var_pop?: Maybe<Unit_Subtypes_Var_Pop_Fields>
  var_samp?: Maybe<Unit_Subtypes_Var_Samp_Fields>
  variance?: Maybe<Unit_Subtypes_Variance_Fields>
}

/** aggregate fields of "unit_subtypes" */
export type Unit_Subtypes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unit_Subtypes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "unit_subtypes" */
export type Unit_Subtypes_Aggregate_Order_By = {
  avg?: Maybe<Unit_Subtypes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Unit_Subtypes_Max_Order_By>
  min?: Maybe<Unit_Subtypes_Min_Order_By>
  stddev?: Maybe<Unit_Subtypes_Stddev_Order_By>
  stddev_pop?: Maybe<Unit_Subtypes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Unit_Subtypes_Stddev_Samp_Order_By>
  sum?: Maybe<Unit_Subtypes_Sum_Order_By>
  var_pop?: Maybe<Unit_Subtypes_Var_Pop_Order_By>
  var_samp?: Maybe<Unit_Subtypes_Var_Samp_Order_By>
  variance?: Maybe<Unit_Subtypes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "unit_subtypes" */
export type Unit_Subtypes_Arr_Rel_Insert_Input = {
  data: Array<Unit_Subtypes_Insert_Input>
  on_conflict?: Maybe<Unit_Subtypes_On_Conflict>
}

/** aggregate avg on columns */
export type Unit_Subtypes_Avg_Fields = {
  __typename?: 'unit_subtypes_avg_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Avg_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "unit_subtypes". All fields are combined with a logical 'AND'. */
export type Unit_Subtypes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Unit_Subtypes_Bool_Exp>>>
  _not?: Maybe<Unit_Subtypes_Bool_Exp>
  _or?: Maybe<Array<Maybe<Unit_Subtypes_Bool_Exp>>>
  area?: Maybe<Float8_Comparison_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  building?: Maybe<Buildings_Bool_Exp>
  building_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  currency?: Maybe<Currencies_Bool_Exp>
  currency_id?: Maybe<Int_Comparison_Exp>
  floor?: Maybe<Floors_Bool_Exp>
  floor_id?: Maybe<Int_Comparison_Exp>
  height?: Maybe<Float8_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  length?: Maybe<Float8_Comparison_Exp>
  measurement_unit?: Maybe<Enum_Measurement_Unit_Comparison_Exp>
  price_per_month?: Maybe<Float8_Comparison_Exp>
  total_units?: Maybe<Int_Comparison_Exp>
  unit_type?: Maybe<Unit_Types_Bool_Exp>
  unit_type_id?: Maybe<Int_Comparison_Exp>
  units?: Maybe<Units_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  width?: Maybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "unit_subtypes" */
export enum Unit_Subtypes_Constraint {
  /** unique or primary key constraint */
  UnitSubtypesPkey = 'unit_subtypes_pkey',
}

/** input type for incrementing integer column in table "unit_subtypes" */
export type Unit_Subtypes_Inc_Input = {
  area?: Maybe<Scalars['float8']>
  building_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  floor_id?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  length?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  total_units?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "unit_subtypes" */
export type Unit_Subtypes_Insert_Input = {
  area?: Maybe<Scalars['float8']>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  building?: Maybe<Buildings_Obj_Rel_Insert_Input>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Currencies_Obj_Rel_Insert_Input>
  currency_id?: Maybe<Scalars['Int']>
  floor?: Maybe<Floors_Obj_Rel_Insert_Input>
  floor_id?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  length?: Maybe<Scalars['float8']>
  measurement_unit?: Maybe<Scalars['enum_measurement_unit']>
  price_per_month?: Maybe<Scalars['float8']>
  total_units?: Maybe<Scalars['Int']>
  unit_type?: Maybe<Unit_Types_Obj_Rel_Insert_Input>
  unit_type_id?: Maybe<Scalars['Int']>
  units?: Maybe<Units_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
  width?: Maybe<Scalars['float8']>
}

/** aggregate max on columns */
export type Unit_Subtypes_Max_Fields = {
  __typename?: 'unit_subtypes_max_fields'
  area?: Maybe<Scalars['float8']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  floor_id?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  length?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  total_units?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  width?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Max_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Unit_Subtypes_Min_Fields = {
  __typename?: 'unit_subtypes_min_fields'
  area?: Maybe<Scalars['float8']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  floor_id?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  length?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  total_units?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  width?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Min_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** response of any mutation on the table "unit_subtypes" */
export type Unit_Subtypes_Mutation_Response = {
  __typename?: 'unit_subtypes_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Unit_Subtypes>
}

/** input type for inserting object relation for remote table "unit_subtypes" */
export type Unit_Subtypes_Obj_Rel_Insert_Input = {
  data: Unit_Subtypes_Insert_Input
  on_conflict?: Maybe<Unit_Subtypes_On_Conflict>
}

/** on conflict condition type for table "unit_subtypes" */
export type Unit_Subtypes_On_Conflict = {
  constraint: Unit_Subtypes_Constraint
  update_columns: Array<Unit_Subtypes_Update_Column>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** ordering options when selecting data from "unit_subtypes" */
export type Unit_Subtypes_Order_By = {
  area?: Maybe<Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  building?: Maybe<Buildings_Order_By>
  building_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  currency?: Maybe<Currencies_Order_By>
  currency_id?: Maybe<Order_By>
  floor?: Maybe<Floors_Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  measurement_unit?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type?: Maybe<Unit_Types_Order_By>
  unit_type_id?: Maybe<Order_By>
  units_aggregate?: Maybe<Units_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** primary key columns input for table: "unit_subtypes" */
export type Unit_Subtypes_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "unit_subtypes" */
export enum Unit_Subtypes_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  FloorId = 'floor_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  MeasurementUnit = 'measurement_unit',
  /** column name */
  PricePerMonth = 'price_per_month',
  /** column name */
  TotalUnits = 'total_units',
  /** column name */
  unit_type_id = 'unit_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Width = 'width',
}

/** input type for updating data in table "unit_subtypes" */
export type Unit_Subtypes_Set_Input = {
  area?: Maybe<Scalars['float8']>
  building_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_id?: Maybe<Scalars['Int']>
  floor_id?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  length?: Maybe<Scalars['float8']>
  measurement_unit?: Maybe<Scalars['enum_measurement_unit']>
  price_per_month?: Maybe<Scalars['float8']>
  total_units?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  width?: Maybe<Scalars['float8']>
}

/** aggregate stddev on columns */
export type Unit_Subtypes_Stddev_Fields = {
  __typename?: 'unit_subtypes_stddev_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Stddev_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Unit_Subtypes_Stddev_Pop_Fields = {
  __typename?: 'unit_subtypes_stddev_pop_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Stddev_Pop_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Unit_Subtypes_Stddev_Samp_Fields = {
  __typename?: 'unit_subtypes_stddev_samp_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Stddev_Samp_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Unit_Subtypes_Sum_Fields = {
  __typename?: 'unit_subtypes_sum_fields'
  area?: Maybe<Scalars['float8']>
  building_id?: Maybe<Scalars['Int']>
  currency_id?: Maybe<Scalars['Int']>
  floor_id?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['float8']>
  id?: Maybe<Scalars['Int']>
  length?: Maybe<Scalars['float8']>
  price_per_month?: Maybe<Scalars['float8']>
  total_units?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Sum_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** update columns of table "unit_subtypes" */
export enum Unit_Subtypes_Update_Column {
  /** column name */
  Area = 'area',
  /** column name */
  building_id = 'building_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  FloorId = 'floor_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  MeasurementUnit = 'measurement_unit',
  /** column name */
  PricePerMonth = 'price_per_month',
  /** column name */
  TotalUnits = 'total_units',
  /** column name */
  unit_type_id = 'unit_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Width = 'width',
}

/** aggregate var_pop on columns */
export type Unit_Subtypes_Var_Pop_Fields = {
  __typename?: 'unit_subtypes_var_pop_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Var_Pop_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Unit_Subtypes_Var_Samp_Fields = {
  __typename?: 'unit_subtypes_var_samp_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Var_Samp_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Unit_Subtypes_Variance_Fields = {
  __typename?: 'unit_subtypes_variance_fields'
  area?: Maybe<Scalars['Float']>
  building_id?: Maybe<Scalars['Float']>
  currency_id?: Maybe<Scalars['Float']>
  floor_id?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  length?: Maybe<Scalars['Float']>
  price_per_month?: Maybe<Scalars['Float']>
  total_units?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "unit_subtypes" */
export type Unit_Subtypes_Variance_Order_By = {
  area?: Maybe<Order_By>
  building_id?: Maybe<Order_By>
  currency_id?: Maybe<Order_By>
  floor_id?: Maybe<Order_By>
  height?: Maybe<Order_By>
  id?: Maybe<Order_By>
  length?: Maybe<Order_By>
  price_per_month?: Maybe<Order_By>
  total_units?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  width?: Maybe<Order_By>
}

/** columns and relationships of "unit_type_features" */
export type Unit_Type_Features = {
  __typename?: 'unit_type_features'
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  feature: Features
  id: Scalars['Int']
  unit_feature_id: Scalars['Int']
  /** An object relationship */
  unit_type: Unit_Types
  unit_type_id: Scalars['Int']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "unit_type_features" */
export type Unit_Type_Features_Aggregate = {
  __typename?: 'unit_type_features_aggregate'
  aggregate?: Maybe<Unit_Type_Features_Aggregate_Fields>
  nodes: Array<Unit_Type_Features>
}

/** aggregate fields of "unit_type_features" */
export type Unit_Type_Features_Aggregate_Fields = {
  __typename?: 'unit_type_features_aggregate_fields'
  avg?: Maybe<Unit_Type_Features_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Unit_Type_Features_Max_Fields>
  min?: Maybe<Unit_Type_Features_Min_Fields>
  stddev?: Maybe<Unit_Type_Features_Stddev_Fields>
  stddev_pop?: Maybe<Unit_Type_Features_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Unit_Type_Features_Stddev_Samp_Fields>
  sum?: Maybe<Unit_Type_Features_Sum_Fields>
  var_pop?: Maybe<Unit_Type_Features_Var_Pop_Fields>
  var_samp?: Maybe<Unit_Type_Features_Var_Samp_Fields>
  variance?: Maybe<Unit_Type_Features_Variance_Fields>
}

/** aggregate fields of "unit_type_features" */
export type Unit_Type_Features_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unit_Type_Features_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "unit_type_features" */
export type Unit_Type_Features_Aggregate_Order_By = {
  avg?: Maybe<Unit_Type_Features_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Unit_Type_Features_Max_Order_By>
  min?: Maybe<Unit_Type_Features_Min_Order_By>
  stddev?: Maybe<Unit_Type_Features_Stddev_Order_By>
  stddev_pop?: Maybe<Unit_Type_Features_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Unit_Type_Features_Stddev_Samp_Order_By>
  sum?: Maybe<Unit_Type_Features_Sum_Order_By>
  var_pop?: Maybe<Unit_Type_Features_Var_Pop_Order_By>
  var_samp?: Maybe<Unit_Type_Features_Var_Samp_Order_By>
  variance?: Maybe<Unit_Type_Features_Variance_Order_By>
}

/** input type for inserting array relation for remote table "unit_type_features" */
export type Unit_Type_Features_Arr_Rel_Insert_Input = {
  data: Array<Unit_Type_Features_Insert_Input>
  on_conflict?: Maybe<Unit_Type_Features_On_Conflict>
}

/** aggregate avg on columns */
export type Unit_Type_Features_Avg_Fields = {
  __typename?: 'unit_type_features_avg_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "unit_type_features" */
export type Unit_Type_Features_Avg_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "unit_type_features". All fields are combined with a logical 'AND'. */
export type Unit_Type_Features_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Unit_Type_Features_Bool_Exp>>>
  _not?: Maybe<Unit_Type_Features_Bool_Exp>
  _or?: Maybe<Array<Maybe<Unit_Type_Features_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  feature?: Maybe<Features_Bool_Exp>
  id?: Maybe<Int_Comparison_Exp>
  unit_feature_id?: Maybe<Int_Comparison_Exp>
  unit_type?: Maybe<Unit_Types_Bool_Exp>
  unit_type_id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "unit_type_features" */
export enum Unit_Type_Features_Constraint {
  /** unique or primary key constraint */
  UnitTypeFeaturesPkey = 'unit_type_features_pkey',
}

/** input type for incrementing integer column in table "unit_type_features" */
export type Unit_Type_Features_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  unit_feature_id?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "unit_type_features" */
export type Unit_Type_Features_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  feature?: Maybe<Features_Obj_Rel_Insert_Input>
  id?: Maybe<Scalars['Int']>
  unit_feature_id?: Maybe<Scalars['Int']>
  unit_type?: Maybe<Unit_Types_Obj_Rel_Insert_Input>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Unit_Type_Features_Max_Fields = {
  __typename?: 'unit_type_features_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  unit_feature_id?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "unit_type_features" */
export type Unit_Type_Features_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Unit_Type_Features_Min_Fields = {
  __typename?: 'unit_type_features_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  unit_feature_id?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "unit_type_features" */
export type Unit_Type_Features_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "unit_type_features" */
export type Unit_Type_Features_Mutation_Response = {
  __typename?: 'unit_type_features_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Unit_Type_Features>
}

/** input type for inserting object relation for remote table "unit_type_features" */
export type Unit_Type_Features_Obj_Rel_Insert_Input = {
  data: Unit_Type_Features_Insert_Input
  on_conflict?: Maybe<Unit_Type_Features_On_Conflict>
}

/** on conflict condition type for table "unit_type_features" */
export type Unit_Type_Features_On_Conflict = {
  constraint: Unit_Type_Features_Constraint
  update_columns: Array<Unit_Type_Features_Update_Column>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** ordering options when selecting data from "unit_type_features" */
export type Unit_Type_Features_Order_By = {
  created_at?: Maybe<Order_By>
  feature?: Maybe<Features_Order_By>
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type?: Maybe<Unit_Types_Order_By>
  unit_type_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "unit_type_features" */
export type Unit_Type_Features_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "unit_type_features" */
export enum Unit_Type_Features_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UnitFeatureId = 'unit_feature_id',
  /** column name */
  unit_type_id = 'unit_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "unit_type_features" */
export type Unit_Type_Features_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  unit_feature_id?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Unit_Type_Features_Stddev_Fields = {
  __typename?: 'unit_type_features_stddev_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "unit_type_features" */
export type Unit_Type_Features_Stddev_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Unit_Type_Features_Stddev_Pop_Fields = {
  __typename?: 'unit_type_features_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "unit_type_features" */
export type Unit_Type_Features_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Unit_Type_Features_Stddev_Samp_Fields = {
  __typename?: 'unit_type_features_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "unit_type_features" */
export type Unit_Type_Features_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Unit_Type_Features_Sum_Fields = {
  __typename?: 'unit_type_features_sum_fields'
  id?: Maybe<Scalars['Int']>
  unit_feature_id?: Maybe<Scalars['Int']>
  unit_type_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "unit_type_features" */
export type Unit_Type_Features_Sum_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** update columns of table "unit_type_features" */
export enum Unit_Type_Features_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UnitFeatureId = 'unit_feature_id',
  /** column name */
  unit_type_id = 'unit_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Unit_Type_Features_Var_Pop_Fields = {
  __typename?: 'unit_type_features_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "unit_type_features" */
export type Unit_Type_Features_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Unit_Type_Features_Var_Samp_Fields = {
  __typename?: 'unit_type_features_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "unit_type_features" */
export type Unit_Type_Features_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Unit_Type_Features_Variance_Fields = {
  __typename?: 'unit_type_features_variance_fields'
  id?: Maybe<Scalars['Float']>
  unit_feature_id?: Maybe<Scalars['Float']>
  unit_type_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "unit_type_features" */
export type Unit_Type_Features_Variance_Order_By = {
  id?: Maybe<Order_By>
  unit_feature_id?: Maybe<Order_By>
  unit_type_id?: Maybe<Order_By>
}

/** columns and relationships of "unit_types" */
export type Unit_Types = {
  __typename?: 'unit_types'
  /** An object relationship */
  company?: Maybe<Companies>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  measurement_units: Scalars['enum_measurement_unit']
  name_en: Scalars['String']
  name_th: Scalars['String']
  size_range_end: Scalars['float8']
  size_range_start: Scalars['float8']
  /** An array relationship */
  unit_subtypes: Array<Unit_Subtypes>
  /** An aggregated array relationship */
  unit_subtypes_aggregate: Unit_Subtypes_Aggregate
  /** An array relationship */
  unit_type_features: Array<Unit_Type_Features>
  /** An aggregated array relationship */
  unit_type_features_aggregate: Unit_Type_Features_Aggregate
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "unit_types" */
export type Unit_TypesUnit_SubtypesArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** columns and relationships of "unit_types" */
export type Unit_TypesUnit_Subtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Subtypes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Subtypes_Order_By>>
  where?: Maybe<Unit_Subtypes_Bool_Exp>
}

/** columns and relationships of "unit_types" */
export type Unit_TypesUnit_Type_FeaturesArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** columns and relationships of "unit_types" */
export type Unit_TypesUnit_Type_Features_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Type_Features_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Unit_Type_Features_Order_By>>
  where?: Maybe<Unit_Type_Features_Bool_Exp>
}

/** aggregated selection of "unit_types" */
export type Unit_Types_Aggregate = {
  __typename?: 'unit_types_aggregate'
  aggregate?: Maybe<Unit_Types_Aggregate_Fields>
  nodes: Array<Unit_Types>
}

/** aggregate fields of "unit_types" */
export type Unit_Types_Aggregate_Fields = {
  __typename?: 'unit_types_aggregate_fields'
  avg?: Maybe<Unit_Types_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Unit_Types_Max_Fields>
  min?: Maybe<Unit_Types_Min_Fields>
  stddev?: Maybe<Unit_Types_Stddev_Fields>
  stddev_pop?: Maybe<Unit_Types_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Unit_Types_Stddev_Samp_Fields>
  sum?: Maybe<Unit_Types_Sum_Fields>
  var_pop?: Maybe<Unit_Types_Var_Pop_Fields>
  var_samp?: Maybe<Unit_Types_Var_Samp_Fields>
  variance?: Maybe<Unit_Types_Variance_Fields>
}

/** aggregate fields of "unit_types" */
export type Unit_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unit_Types_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "unit_types" */
export type Unit_Types_Aggregate_Order_By = {
  avg?: Maybe<Unit_Types_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Unit_Types_Max_Order_By>
  min?: Maybe<Unit_Types_Min_Order_By>
  stddev?: Maybe<Unit_Types_Stddev_Order_By>
  stddev_pop?: Maybe<Unit_Types_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Unit_Types_Stddev_Samp_Order_By>
  sum?: Maybe<Unit_Types_Sum_Order_By>
  var_pop?: Maybe<Unit_Types_Var_Pop_Order_By>
  var_samp?: Maybe<Unit_Types_Var_Samp_Order_By>
  variance?: Maybe<Unit_Types_Variance_Order_By>
}

/** input type for inserting array relation for remote table "unit_types" */
export type Unit_Types_Arr_Rel_Insert_Input = {
  data: Array<Unit_Types_Insert_Input>
  on_conflict?: Maybe<Unit_Types_On_Conflict>
}

/** aggregate avg on columns */
export type Unit_Types_Avg_Fields = {
  __typename?: 'unit_types_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "unit_types" */
export type Unit_Types_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "unit_types". All fields are combined with a logical 'AND'. */
export type Unit_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Unit_Types_Bool_Exp>>>
  _not?: Maybe<Unit_Types_Bool_Exp>
  _or?: Maybe<Array<Maybe<Unit_Types_Bool_Exp>>>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  measurement_units?: Maybe<Enum_Measurement_Unit_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  size_range_end?: Maybe<Float8_Comparison_Exp>
  size_range_start?: Maybe<Float8_Comparison_Exp>
  unit_subtypes?: Maybe<Unit_Subtypes_Bool_Exp>
  unit_type_features?: Maybe<Unit_Type_Features_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "unit_types" */
export enum Unit_Types_Constraint {
  /** unique or primary key constraint */
  UnitTypesPkey = 'unit_types_pkey',
}

/** input type for incrementing integer column in table "unit_types" */
export type Unit_Types_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  size_range_end?: Maybe<Scalars['float8']>
  size_range_start?: Maybe<Scalars['float8']>
}

/** input type for inserting data into table "unit_types" */
export type Unit_Types_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  measurement_units?: Maybe<Scalars['enum_measurement_unit']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  size_range_end?: Maybe<Scalars['float8']>
  size_range_start?: Maybe<Scalars['float8']>
  unit_subtypes?: Maybe<Unit_Subtypes_Arr_Rel_Insert_Input>
  unit_type_features?: Maybe<Unit_Type_Features_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Unit_Types_Max_Fields = {
  __typename?: 'unit_types_max_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  size_range_end?: Maybe<Scalars['float8']>
  size_range_start?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "unit_types" */
export type Unit_Types_Max_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Unit_Types_Min_Fields = {
  __typename?: 'unit_types_min_fields'
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  size_range_end?: Maybe<Scalars['float8']>
  size_range_start?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "unit_types" */
export type Unit_Types_Min_Order_By = {
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "unit_types" */
export type Unit_Types_Mutation_Response = {
  __typename?: 'unit_types_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Unit_Types>
}

/** input type for inserting object relation for remote table "unit_types" */
export type Unit_Types_Obj_Rel_Insert_Input = {
  data: Unit_Types_Insert_Input
  on_conflict?: Maybe<Unit_Types_On_Conflict>
}

/** on conflict condition type for table "unit_types" */
export type Unit_Types_On_Conflict = {
  constraint: Unit_Types_Constraint
  update_columns: Array<Unit_Types_Update_Column>
  where?: Maybe<Unit_Types_Bool_Exp>
}

/** ordering options when selecting data from "unit_types" */
export type Unit_Types_Order_By = {
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  measurement_units?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
  unit_subtypes_aggregate?: Maybe<Unit_Subtypes_Aggregate_Order_By>
  unit_type_features_aggregate?: Maybe<Unit_Type_Features_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "unit_types" */
export type Unit_Types_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "unit_types" */
export enum Unit_Types_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MeasurementUnits = 'measurement_units',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  SizeRangeEnd = 'size_range_end',
  /** column name */
  SizeRangeStart = 'size_range_start',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "unit_types" */
export type Unit_Types_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  measurement_units?: Maybe<Scalars['enum_measurement_unit']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  size_range_end?: Maybe<Scalars['float8']>
  size_range_start?: Maybe<Scalars['float8']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Unit_Types_Stddev_Fields = {
  __typename?: 'unit_types_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "unit_types" */
export type Unit_Types_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Unit_Types_Stddev_Pop_Fields = {
  __typename?: 'unit_types_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "unit_types" */
export type Unit_Types_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Unit_Types_Stddev_Samp_Fields = {
  __typename?: 'unit_types_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "unit_types" */
export type Unit_Types_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Unit_Types_Sum_Fields = {
  __typename?: 'unit_types_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  size_range_end?: Maybe<Scalars['float8']>
  size_range_start?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "unit_types" */
export type Unit_Types_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** update columns of table "unit_types" */
export enum Unit_Types_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MeasurementUnits = 'measurement_units',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  SizeRangeEnd = 'size_range_end',
  /** column name */
  SizeRangeStart = 'size_range_start',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Unit_Types_Var_Pop_Fields = {
  __typename?: 'unit_types_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "unit_types" */
export type Unit_Types_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Unit_Types_Var_Samp_Fields = {
  __typename?: 'unit_types_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "unit_types" */
export type Unit_Types_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Unit_Types_Variance_Fields = {
  __typename?: 'unit_types_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  size_range_end?: Maybe<Scalars['Float']>
  size_range_start?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "unit_types" */
export type Unit_Types_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  size_range_end?: Maybe<Order_By>
  size_range_start?: Maybe<Order_By>
}

/** columns and relationships of "units" */
export type Units = {
  __typename?: 'units'
  availability_status: Scalars['enum_availability_status']
  /** An array relationship */
  bookings: Array<Bookings>
  /** An aggregated array relationship */
  bookings_aggregate: Bookings_Aggregate
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  id: Scalars['Int']
  min_rent_days: Scalars['Int']
  name_en: Scalars['String']
  name_th: Scalars['String']
  status: Scalars['listing_statuses']
  /** An object relationship */
  unit_subtype: Unit_Subtypes
  unit_subtype_id: Scalars['Int']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "units" */
export type UnitsBookingsArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** columns and relationships of "units" */
export type UnitsBookings_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_Order_By>>
  where?: Maybe<Bookings_Bool_Exp>
}

/** aggregated selection of "units" */
export type Units_Aggregate = {
  __typename?: 'units_aggregate'
  aggregate?: Maybe<Units_Aggregate_Fields>
  nodes: Array<Units>
}

/** aggregate fields of "units" */
export type Units_Aggregate_Fields = {
  __typename?: 'units_aggregate_fields'
  avg?: Maybe<Units_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Units_Max_Fields>
  min?: Maybe<Units_Min_Fields>
  stddev?: Maybe<Units_Stddev_Fields>
  stddev_pop?: Maybe<Units_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Units_Stddev_Samp_Fields>
  sum?: Maybe<Units_Sum_Fields>
  var_pop?: Maybe<Units_Var_Pop_Fields>
  var_samp?: Maybe<Units_Var_Samp_Fields>
  variance?: Maybe<Units_Variance_Fields>
}

/** aggregate fields of "units" */
export type Units_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Units_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "units" */
export type Units_Aggregate_Order_By = {
  avg?: Maybe<Units_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Units_Max_Order_By>
  min?: Maybe<Units_Min_Order_By>
  stddev?: Maybe<Units_Stddev_Order_By>
  stddev_pop?: Maybe<Units_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Units_Stddev_Samp_Order_By>
  sum?: Maybe<Units_Sum_Order_By>
  var_pop?: Maybe<Units_Var_Pop_Order_By>
  var_samp?: Maybe<Units_Var_Samp_Order_By>
  variance?: Maybe<Units_Variance_Order_By>
}

/** input type for inserting array relation for remote table "units" */
export type Units_Arr_Rel_Insert_Input = {
  data: Array<Units_Insert_Input>
  on_conflict?: Maybe<Units_On_Conflict>
}

/** aggregate avg on columns */
export type Units_Avg_Fields = {
  __typename?: 'units_avg_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "units" */
export type Units_Avg_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "units". All fields are combined with a logical 'AND'. */
export type Units_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Units_Bool_Exp>>>
  _not?: Maybe<Units_Bool_Exp>
  _or?: Maybe<Array<Maybe<Units_Bool_Exp>>>
  availability_status?: Maybe<Enum_Availability_Status_Comparison_Exp>
  bookings?: Maybe<Bookings_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  description_en?: Maybe<String_Comparison_Exp>
  description_th?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  min_rent_days?: Maybe<Int_Comparison_Exp>
  name_en?: Maybe<String_Comparison_Exp>
  name_th?: Maybe<String_Comparison_Exp>
  status?: Maybe<Listing_Statuses_Comparison_Exp>
  unit_subtype?: Maybe<Unit_Subtypes_Bool_Exp>
  unit_subtype_id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "units" */
export enum Units_Constraint {
  /** unique or primary key constraint */
  UnitsPkey = 'units_pkey',
}

/** input type for incrementing integer column in table "units" */
export type Units_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  min_rent_days?: Maybe<Scalars['Int']>
  unit_subtype_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "units" */
export type Units_Insert_Input = {
  availability_status?: Maybe<Scalars['enum_availability_status']>
  bookings?: Maybe<Bookings_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  min_rent_days?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['listing_statuses']>
  unit_subtype?: Maybe<Unit_Subtypes_Obj_Rel_Insert_Input>
  unit_subtype_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Units_Max_Fields = {
  __typename?: 'units_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  min_rent_days?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "units" */
export type Units_Max_Order_By = {
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Units_Min_Fields = {
  __typename?: 'units_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  min_rent_days?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "units" */
export type Units_Min_Order_By = {
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "units" */
export type Units_Mutation_Response = {
  __typename?: 'units_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Units>
}

/** input type for inserting object relation for remote table "units" */
export type Units_Obj_Rel_Insert_Input = {
  data: Units_Insert_Input
  on_conflict?: Maybe<Units_On_Conflict>
}

/** on conflict condition type for table "units" */
export type Units_On_Conflict = {
  constraint: Units_Constraint
  update_columns: Array<Units_Update_Column>
  where?: Maybe<Units_Bool_Exp>
}

/** ordering options when selecting data from "units" */
export type Units_Order_By = {
  availability_status?: Maybe<Order_By>
  bookings_aggregate?: Maybe<Bookings_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  description_en?: Maybe<Order_By>
  description_th?: Maybe<Order_By>
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  name_en?: Maybe<Order_By>
  name_th?: Maybe<Order_By>
  status?: Maybe<Order_By>
  unit_subtype?: Maybe<Unit_Subtypes_Order_By>
  unit_subtype_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "units" */
export type Units_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "units" */
export enum Units_Select_Column {
  /** column name */
  AvailabilityStatus = 'availability_status',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  Id = 'id',
  /** column name */
  MinRentDays = 'min_rent_days',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  Status = 'status',
  /** column name */
  UnitSubtypeId = 'unit_subtype_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "units" */
export type Units_Set_Input = {
  availability_status?: Maybe<Scalars['enum_availability_status']>
  created_at?: Maybe<Scalars['timestamptz']>
  description_en?: Maybe<Scalars['String']>
  description_th?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  min_rent_days?: Maybe<Scalars['Int']>
  name_en?: Maybe<Scalars['String']>
  name_th?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['listing_statuses']>
  unit_subtype_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Units_Stddev_Fields = {
  __typename?: 'units_stddev_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "units" */
export type Units_Stddev_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Units_Stddev_Pop_Fields = {
  __typename?: 'units_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "units" */
export type Units_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Units_Stddev_Samp_Fields = {
  __typename?: 'units_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "units" */
export type Units_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Units_Sum_Fields = {
  __typename?: 'units_sum_fields'
  id?: Maybe<Scalars['Int']>
  min_rent_days?: Maybe<Scalars['Int']>
  unit_subtype_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "units" */
export type Units_Sum_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** update columns of table "units" */
export enum Units_Update_Column {
  /** column name */
  AvailabilityStatus = 'availability_status',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionTh = 'description_th',
  /** column name */
  Id = 'id',
  /** column name */
  MinRentDays = 'min_rent_days',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameTh = 'name_th',
  /** column name */
  Status = 'status',
  /** column name */
  UnitSubtypeId = 'unit_subtype_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Units_Var_Pop_Fields = {
  __typename?: 'units_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "units" */
export type Units_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Units_Var_Samp_Fields = {
  __typename?: 'units_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "units" */
export type Units_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Units_Variance_Fields = {
  __typename?: 'units_variance_fields'
  id?: Maybe<Scalars['Float']>
  min_rent_days?: Maybe<Scalars['Float']>
  unit_subtype_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "units" */
export type Units_Variance_Order_By = {
  id?: Maybe<Order_By>
  min_rent_days?: Maybe<Order_By>
  unit_subtype_id?: Maybe<Order_By>
}

/** columns and relationships of "user_companies" */
export type User_Companies = {
  __typename?: 'user_companies'
  /** An object relationship */
  company: Companies
  company_id: Scalars['Int']
  user_id: Scalars['Int']
  /** An object relationship */
  users: Users
}

/** aggregated selection of "user_companies" */
export type User_Companies_Aggregate = {
  __typename?: 'user_companies_aggregate'
  aggregate?: Maybe<User_Companies_Aggregate_Fields>
  nodes: Array<User_Companies>
}

/** aggregate fields of "user_companies" */
export type User_Companies_Aggregate_Fields = {
  __typename?: 'user_companies_aggregate_fields'
  avg?: Maybe<User_Companies_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<User_Companies_Max_Fields>
  min?: Maybe<User_Companies_Min_Fields>
  stddev?: Maybe<User_Companies_Stddev_Fields>
  stddev_pop?: Maybe<User_Companies_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Companies_Stddev_Samp_Fields>
  sum?: Maybe<User_Companies_Sum_Fields>
  var_pop?: Maybe<User_Companies_Var_Pop_Fields>
  var_samp?: Maybe<User_Companies_Var_Samp_Fields>
  variance?: Maybe<User_Companies_Variance_Fields>
}

/** aggregate fields of "user_companies" */
export type User_Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Companies_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_companies" */
export type User_Companies_Aggregate_Order_By = {
  avg?: Maybe<User_Companies_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Companies_Max_Order_By>
  min?: Maybe<User_Companies_Min_Order_By>
  stddev?: Maybe<User_Companies_Stddev_Order_By>
  stddev_pop?: Maybe<User_Companies_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Companies_Stddev_Samp_Order_By>
  sum?: Maybe<User_Companies_Sum_Order_By>
  var_pop?: Maybe<User_Companies_Var_Pop_Order_By>
  var_samp?: Maybe<User_Companies_Var_Samp_Order_By>
  variance?: Maybe<User_Companies_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_companies" */
export type User_Companies_Arr_Rel_Insert_Input = {
  data: Array<User_Companies_Insert_Input>
  on_conflict?: Maybe<User_Companies_On_Conflict>
}

/** aggregate avg on columns */
export type User_Companies_Avg_Fields = {
  __typename?: 'user_companies_avg_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_companies" */
export type User_Companies_Avg_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_companies". All fields are combined with a logical 'AND'. */
export type User_Companies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Companies_Bool_Exp>>>
  _not?: Maybe<User_Companies_Bool_Exp>
  _or?: Maybe<Array<Maybe<User_Companies_Bool_Exp>>>
  company?: Maybe<Companies_Bool_Exp>
  company_id?: Maybe<Int_Comparison_Exp>
  user_id?: Maybe<Int_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "user_companies" */
export enum User_Companies_Constraint {
  /** unique or primary key constraint */
  UserCompaniesPkey = 'user_companies_pkey',
}

/** input type for incrementing integer column in table "user_companies" */
export type User_Companies_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user_companies" */
export type User_Companies_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>
  company_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
  users?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type User_Companies_Max_Fields = {
  __typename?: 'user_companies_max_fields'
  company_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "user_companies" */
export type User_Companies_Max_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Companies_Min_Fields = {
  __typename?: 'user_companies_min_fields'
  company_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "user_companies" */
export type User_Companies_Min_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_companies" */
export type User_Companies_Mutation_Response = {
  __typename?: 'user_companies_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<User_Companies>
}

/** input type for inserting object relation for remote table "user_companies" */
export type User_Companies_Obj_Rel_Insert_Input = {
  data: User_Companies_Insert_Input
  on_conflict?: Maybe<User_Companies_On_Conflict>
}

/** on conflict condition type for table "user_companies" */
export type User_Companies_On_Conflict = {
  constraint: User_Companies_Constraint
  update_columns: Array<User_Companies_Update_Column>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** ordering options when selecting data from "user_companies" */
export type User_Companies_Order_By = {
  company?: Maybe<Companies_Order_By>
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
  users?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "user_companies" */
export type User_Companies_Pk_Columns_Input = {
  company_id: Scalars['Int']
  user_id: Scalars['Int']
}

/** select columns of table "user_companies" */
export enum User_Companies_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_companies" */
export type User_Companies_Set_Input = {
  company_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type User_Companies_Stddev_Fields = {
  __typename?: 'user_companies_stddev_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_companies" */
export type User_Companies_Stddev_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Companies_Stddev_Pop_Fields = {
  __typename?: 'user_companies_stddev_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_companies" */
export type User_Companies_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Companies_Stddev_Samp_Fields = {
  __typename?: 'user_companies_stddev_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_companies" */
export type User_Companies_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type User_Companies_Sum_Fields = {
  __typename?: 'user_companies_sum_fields'
  company_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user_companies" */
export type User_Companies_Sum_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_companies" */
export enum User_Companies_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type User_Companies_Var_Pop_Fields = {
  __typename?: 'user_companies_var_pop_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_companies" */
export type User_Companies_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Companies_Var_Samp_Fields = {
  __typename?: 'user_companies_var_samp_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_companies" */
export type User_Companies_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Companies_Variance_Fields = {
  __typename?: 'user_companies_variance_fields'
  company_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_companies" */
export type User_Companies_Variance_Order_By = {
  company_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  /** An object relationship */
  address: Addresses
  address_id: Scalars['Int']
  /** An array relationship */
  bookingContractsByUpdatedBy: Array<Booking_Contracts>
  /** An aggregated array relationship */
  bookingContractsByUpdatedBy_aggregate: Booking_Contracts_Aggregate
  /** An array relationship */
  booking_contracts: Array<Booking_Contracts>
  /** An aggregated array relationship */
  booking_contracts_aggregate: Booking_Contracts_Aggregate
  /** An array relationship */
  bookings_histories: Array<Bookings_History>
  /** An aggregated array relationship */
  bookings_histories_aggregate: Bookings_History_Aggregate
  created_at?: Maybe<Scalars['timestamptz']>
  email: Scalars['String']
  first_name: Scalars['String']
  id: Scalars['Int']
  image_url: Scalars['String']
  last_name: Scalars['String']
  /** An array relationship */
  otps: Array<Otps>
  /** An aggregated array relationship */
  otps_aggregate: Otps_Aggregate
  phone_number: Scalars['String']
  role: Scalars['type_roles']
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  user_companies: Array<User_Companies>
  /** An aggregated array relationship */
  user_companies_aggregate: User_Companies_Aggregate
}

/** columns and relationships of "users" */
export type UsersBookingContractsByUpdatedByArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersBookingContractsByUpdatedBy_AggregateArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersBooking_ContractsArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersBooking_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Booking_Contracts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Booking_Contracts_Order_By>>
  where?: Maybe<Booking_Contracts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersBookings_HistoriesArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersBookings_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookings_History_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Bookings_History_Order_By>>
  where?: Maybe<Bookings_History_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersOtpsArgs = {
  distinct_on?: Maybe<Array<Otps_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Otps_Order_By>>
  where?: Maybe<Otps_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersOtps_AggregateArgs = {
  distinct_on?: Maybe<Array<Otps_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Otps_Order_By>>
  where?: Maybe<Otps_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_CompaniesArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Companies_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Companies_Order_By>>
  where?: Maybe<User_Companies_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  avg?: Maybe<Users_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
  stddev?: Maybe<Users_Stddev_Fields>
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>
  sum?: Maybe<Users_Sum_Fields>
  var_pop?: Maybe<Users_Var_Pop_Fields>
  var_samp?: Maybe<Users_Var_Samp_Fields>
  variance?: Maybe<Users_Variance_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
  stddev?: Maybe<Users_Stddev_Order_By>
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>
  sum?: Maybe<Users_Sum_Order_By>
  var_pop?: Maybe<Users_Var_Pop_Order_By>
  var_samp?: Maybe<Users_Var_Samp_Order_By>
  variance?: Maybe<Users_Variance_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>
  address?: Maybe<Addresses_Bool_Exp>
  address_id?: Maybe<Int_Comparison_Exp>
  bookingContractsByUpdatedBy?: Maybe<Booking_Contracts_Bool_Exp>
  booking_contracts?: Maybe<Booking_Contracts_Bool_Exp>
  bookings_histories?: Maybe<Bookings_History_Bool_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  first_name?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  image_url?: Maybe<String_Comparison_Exp>
  last_name?: Maybe<String_Comparison_Exp>
  otps?: Maybe<Otps_Bool_Exp>
  phone_number?: Maybe<String_Comparison_Exp>
  role?: Maybe<Type_Roles_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user_companies?: Maybe<User_Companies_Bool_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  address_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>
  address_id?: Maybe<Scalars['Int']>
  bookingContractsByUpdatedBy?: Maybe<Booking_Contracts_Arr_Rel_Insert_Input>
  booking_contracts?: Maybe<Booking_Contracts_Arr_Rel_Insert_Input>
  bookings_histories?: Maybe<Bookings_History_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  otps?: Maybe<Otps_Arr_Rel_Insert_Input>
  phone_number?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['type_roles']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_companies?: Maybe<User_Companies_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  address_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  address_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  address_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  address_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  phone_number?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  address?: Maybe<Addresses_Order_By>
  address_id?: Maybe<Order_By>
  bookingContractsByUpdatedBy_aggregate?: Maybe<Booking_Contracts_Aggregate_Order_By>
  booking_contracts_aggregate?: Maybe<Booking_Contracts_Aggregate_Order_By>
  bookings_histories_aggregate?: Maybe<Bookings_History_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  first_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_name?: Maybe<Order_By>
  otps_aggregate?: Maybe<Otps_Aggregate_Order_By>
  phone_number?: Maybe<Order_By>
  role?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_companies_aggregate?: Maybe<User_Companies_Aggregate_Order_By>
}

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  first_name = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  last_name = 'last_name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['type_roles']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields'
  address_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  first_name = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  last_name = 'last_name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields'
  address_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  address_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
}
