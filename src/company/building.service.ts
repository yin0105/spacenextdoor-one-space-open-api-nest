import { Injectable } from '@nestjs/common'
import { ApolloClientService } from 'src/graphql/apollo-client/apollo-client.service'
import { GET_BUILDING_INVENTORY_QUERY } from 'src/graphql/query/building.query'
import { BuildingResponse } from './responses/building.response'

@Injectable()
export class BuildingService {
  constructor(private apolloClientService: ApolloClientService) {}
  async getBuildings(companyId: number): Promise<BuildingResponse[]> {
    const { data } = await this.apolloClientService.query<{
      buildings: BuildingResponse[]
    }>({
      query: GET_BUILDING_INVENTORY_QUERY,
      variables: { companyId },
    })
    return data.buildings
  }
}
