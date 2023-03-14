import { gql } from "@apollo/client";

export const GET_NEWS = gql`
  query {
    blog(first: 26) {
      id
      author
      category
      heading
      time
      image {
        url
      }
      newsContent
    }
  }
`;
