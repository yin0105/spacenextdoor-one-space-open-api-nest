import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  FetchResult,
  InMemoryCache,
  MutationOptions,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import 'cross-fetch/polyfill'
import { AuthHeaders } from '../../auth/auth.headers'

@Injectable()
export class ApolloClientService {
  private client: ApolloClient<NormalizedCacheObject>

  constructor(private readonly configService: ConfigService) {
    const httpLink = createHttpLink({
      uri: this.configService.get('URL_HASURA'),
    })
    const authLink = setContext((request, { headers }) => ({
      headers: {
        ...headers,
        'x-hasura-admin-secret': this.configService.get(
          'X_HASURA_ADMIN_SECRET',
        ),
        'x-hasura-default-role': 'OPERATOR',
      },
    }))
    this.client = new ApolloClient({
      uri: this.configService.get('URL_HASURA'),
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
    })
  }

  query<T = any, TVariables = OperationVariables>(
    options: QueryOptions<TVariables, T>,
    headers?: AuthHeaders,
  ): Promise<ApolloQueryResult<T>> {
    return this.client.query({
      ...options,
      context: {
        headers: headers || {},
      },
    })
  }

  mutate<T = any, TVariables = OperationVariables>(
    options: MutationOptions<T, TVariables>,
    headers?: AuthHeaders,
  ): Promise<FetchResult<T>> {
    return this.client.mutate({
      ...options,
      context: {
        headers: headers || {},
      },
    })
  }
}
