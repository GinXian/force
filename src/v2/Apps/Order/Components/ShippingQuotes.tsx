import React from "react"
import { BorderedRadio, BoxProps, Flex, RadioGroup, Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { ShippingQuotes_shippingQuotes } from "v2/__generated__/ShippingQuotes_shippingQuotes.graphql"
import { compact } from "lodash"

const shippingQuoteDescriptions = {
  ground: "Delivers in 3-5 days once shipped.",
  "second day air": "Delivers in 2 business days once shipped.",
  "next day air": "Delivers the following business day once shipped. ",
  select:
    "Consolidated transportation including blanket wrap and transit packing with white glove handling at collection and delivery.",
  premium:
    "Specialized climate controlled transportation and museum quality packing, handled by trained technicians from wall to wall.",
}

export interface ShippingQuotesProps extends BoxProps {
  onSelect: (shippingOptionId: string) => void
  shippingQuotes: ShippingQuotes_shippingQuotes
  selectedShippingQuoteId?: string
}

export const ShippingQuotes: React.FC<ShippingQuotesProps> = ({
  onSelect,
  shippingQuotes,
  selectedShippingQuoteId,
  ...rest
}) => {
  if (!shippingQuotes) {
    return null
  }

  const quotes = compact(shippingQuotes.map(quote => quote.node))

  return (
    <RadioGroup
      {...rest}
      onSelect={onSelect}
      defaultValue={selectedShippingQuoteId}
    >
      {quotes.map(shippingQuote => {
        const { id, name, priceCents, priceCurrency, tier } = shippingQuote
        const shippingQuoteName = name || tier
        const description =
          shippingQuoteDescriptions[shippingQuoteName.toLowerCase()]

        return (
          <BorderedRadio value={id} key={id} position="relative">
            <Flex flexDirection="column">
              <Text textTransform="capitalize">
                {shippingQuoteName} ({priceCurrency}
                {priceCents})
              </Text>
              <Text textColor="black60">{description}</Text>
            </Flex>
          </BorderedRadio>
        )
      })}
    </RadioGroup>
  )
}

export const ShippingQuotesFragmentContainer = createFragmentContainer(
  ShippingQuotes,
  {
    shippingQuotes: graphql`
      fragment ShippingQuotes_shippingQuotes on CommerceShippingQuoteEdge
        @relay(plural: true) {
        node {
          id
          tier
          name
          isSelected
          priceCents
          priceCurrency
        }
      }
    `,
  }
)
