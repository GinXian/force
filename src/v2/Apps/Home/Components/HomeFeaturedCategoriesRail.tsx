import {
  Box,
  Flex,
  Image,
  Shelf,
  Spacer,
  Skeleton,
  SkeletonBox,
  SkeletonText,
  Text,
} from "@artsy/palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { useSystemContext } from "v2/System"
import { SystemQueryRenderer } from "v2/System/Relay/SystemQueryRenderer"
import { cropped } from "v2/Utils/resized"
import { HomeFeaturedCategoriesRail_marketingCollections } from "v2/__generated__/HomeFeaturedCategoriesRail_marketingCollections.graphql"
import { HomeFeaturedCategoriesRailQuery } from "v2/__generated__/HomeFeaturedCategoriesRailQuery.graphql"
import { RouterLink } from "v2/System/Router/RouterLink"

interface HomeFeaturedCategoriesRailProps {
  marketingCollections: HomeFeaturedCategoriesRail_marketingCollections
}

export const HomeFeaturedCategoriesRail: React.FC<HomeFeaturedCategoriesRailProps> = ({
  marketingCollections,
}) => {
  if (marketingCollections.length === 0) return null

  return (
    <Shelf>
      {marketingCollections.map(collection => {
        const image = collection.thumbnail
          ? cropped(collection.thumbnail, {
              width: 325,
              height: 244,
            })
          : null

        return (
          <RouterLink
            key={collection.slug}
            to={`/gene/${collection.slug}`}
            style={{
              display: "block",
              textDecoration: "none",
            }}
          >
            {image ? (
              <Image
                src={image.src}
                srcSet={image.srcSet}
                width={325}
                height={244}
                lazyLoad
                alt=""
                style={{ display: "block" }}
              />
            ) : (
              <Box width={325} height={244} bg="black10" />
            )}

            <Spacer mt={2} />

            <Text variant="lg">{collection.title}</Text>

            <Spacer mt={0.5} />

            <Text variant="md" overflowEllipsis width={325}>
              {SUBTITLES[collection.slug]}
            </Text>
          </RouterLink>
        )
      })}
    </Shelf>
  )
}

export const HomeFeaturedCategoriesRailFragmentContainer = createFragmentContainer(
  HomeFeaturedCategoriesRail,
  {
    marketingCollections: graphql`
      fragment HomeFeaturedCategoriesRail_marketingCollections on MarketingCollection
        @relay(plural: true) {
        slug
        title
        thumbnail
      }
    `,
  }
)

const HomeFeaturedCategories: React.FC = ({ children }) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Text variant="xl">Featured Categories</Text>

        <Text variant="md">
          <RouterLink to="/categories">View all categories</RouterLink>
        </Text>
      </Flex>

      <Spacer mt={4} />

      {children}
    </>
  )
}

const HomeFeaturedCategoriesRailPlaceholder: React.FC = () => {
  return (
    <Skeleton>
      <Shelf>
        {[...new Array(8)].map((_, i) => {
          return (
            <React.Fragment key={i}>
              <SkeletonBox width={325} height={244} />

              <Spacer mt={2} />

              <SkeletonText variant="lg">Collection Title</SkeletonText>

              <Spacer mt={0.5} />

              <SkeletonText variant="md" overflowEllipsis width={325}>
                Collection description which happens to be longer.
              </SkeletonText>
            </React.Fragment>
          )
        })}
      </Shelf>
    </Skeleton>
  )
}

const PLACEHOLDER = (
  <HomeFeaturedCategories>
    <HomeFeaturedCategoriesRailPlaceholder />
  </HomeFeaturedCategories>
)

export const HomeFeaturedCategoriesRailQueryRenderer: React.FC = () => {
  const { relayEnvironment } = useSystemContext()

  return (
    <SystemQueryRenderer<HomeFeaturedCategoriesRailQuery>
      environment={relayEnvironment}
      query={graphql`
        query HomeFeaturedCategoriesRailQuery {
          marketingHubCollections {
            ...HomeFeaturedCategoriesRail_marketingCollections
          }
        }
      `}
      placeholder={PLACEHOLDER}
      render={({ error, props }) => {
        if (error) {
          console.error(error)
          return null
        }

        if (!props) {
          return PLACEHOLDER
        }

        if (props.marketingHubCollections) {
          return (
            <HomeFeaturedCategories>
              <HomeFeaturedCategoriesRailFragmentContainer
                marketingCollections={props.marketingHubCollections}
              />
            </HomeFeaturedCategories>
          )
        }

        return null
      }}
    />
  )
}

const SUBTITLES = {
  contemporary: "Today’s leading artists and emerging talents",
  "post-war": "From Abstract Expressionism to Pop Art",
  "impressionist-and-modern": "The birth of abstraction, Surrealism, and Dada",
  "pre-20th-century": "Ancient Rome, the Renaissance, Baroque, and more",
  photography: "Through the lens—from daguerreotypes to digital",
  "street-art": "The rise of graffiti, vinyl toys, and skate culture",
}
