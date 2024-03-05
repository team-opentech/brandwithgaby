// NOTE: https://shopify.dev/docs/api/storefront/latest/queries/cart
export const CART_QUERY_FRAGMENT = `#graphql
  fragment Money on MoneyV2 {
    currencyCode
    amount
  }
  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalDutyAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }
` as const;

export const PRODUCT_QUERY = `#graphql
fragment ProductDetails on Product {
  id
  handle
  description
  descriptionHtml
  priceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
  }
  metafields(
    identifiers: [{namespace: "custom", key: "price_text"}, {namespace: "custom", key: "date_delivery"}, {namespace: "custom", key: "subtitle"}]
  ) {
    id
    namespace
    key
    value
  }
  variants(first: 10) {
    nodes {
      id
    }
  }
}

query ProductsQuery($country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
  products(first: 10, sortKey: UPDATED_AT, reverse: false) {
    nodes {
      ...ProductDetails
    }
  }
}

` as const;

export const CREATE_CART_MUTATION = `#graphql
mutation MyMutation {
  cartCreate {
    cart {
      checkoutUrl
      id
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
      totalQuantity
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
                price {
                  amount
                  currencyCode
                }
              }
            }
            quantity
          }
        }
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
` as const;
