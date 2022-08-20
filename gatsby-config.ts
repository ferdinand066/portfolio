import type { GatsbyConfig } from "gatsby"

const dotenv = require('dotenv');
dotenv.config({
  path: ".env"
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image', 
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint
        headers: {
          Authorization: `Bearer ${ process.env.GITHUB_PERSONAL_ACCESS_TOKEN }`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images/`
      }
    }
  ],
}

export default config
