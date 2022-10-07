import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'gu4iosdi',
  dataset: 'production',
  apiVersion: '2022-08-23',
  useCdn: false,
  token: 'skm8kPoEvS5CLMqyN3cBxfXxYzqjK1AuQrtlqpeblf6YVyQUkhUI339bqhuVvB4zuy6pqa6wSxDJ7NrXdcuLn1LmNKRd1re7Zub0qQj7cLLMf5pVpmoKZhjxEMGAkeDZKmwGJ93W94J226Ea6ZFz1fV95cKWftS60nAf9kkaUVaT4NpUz3q1',
});