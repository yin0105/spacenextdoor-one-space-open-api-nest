module.exports = {
  generates: {
    './src/graphql/types.ts': {
      schema: {
        'http://localhost:8090/v1/graphql': {
          headers: { 'x-hasura-admin-secret': 'helloworld' },
        },
      },
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}
