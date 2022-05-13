import {gql} from '@apollo/client';

export const CHARACTER_QUERY = gql`
  query character_query($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        gender
        type
        status
        image
      }
    }
    location(id: 1) {
      id
    }
  }
`;
