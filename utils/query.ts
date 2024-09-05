import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query Events {
    evenimentes {
      data {
        id
        attributes {
          location
          persons
          eventType
          date
          pictures {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_EVENT = gql`
  query Events($id: ID!) {
    evenimente(id: $id) {
      data {
        id
        attributes {
          location
          persons
          eventType
          date
          pictures {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Product {
    products {
      data {
        id
        attributes {
          productName
          slug
          personNumber
          weight
          price
          description
          pictures {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($slug: String!) {
    products(filters: { slug: { contains: $slug } }) {
      data {
        id
        attributes {
          productName
          slug
          personNumber
          weight
          price
          description
          pictures {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_RELATEDPRODUCT = gql`
  query Product($id: ID!) {
    products(filters: { id: { ne: $id } }) {
      data {
        id
        attributes {
          productName
          slug
          pictures {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
