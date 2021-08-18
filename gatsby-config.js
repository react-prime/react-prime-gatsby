/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const tsJson = require('./tsconfig.json');

const activeEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

console.log(`NOTE: Using environment config: '${activeEnv}'`);

module.exports = {
  siteMetadata: {
    title: 'react-prime-gatsby',
    titleTemplate: '%s - react-prime-gatsby',
    description: 'Gatsby boilerplate',
    image: 'src/assets/images/favicon.png',
    siteUrl: process.env.GATSBY_SITE_URL,
    twitterUsername: '@labela',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'react-prime-gatsby',
        short_name: 'gatsby',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#e7ff00',
        display: 'standalone',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: tsJson.compilerOptions.baseUrl,
        aliases: Object.entries(tsJson.compilerOptions.paths).reduce((aliases, entry) => {
          const [key, value] = entry;
          const path = value[0];

          if (path.includes('index')) {
            return aliases;
          }

          const newKey = key.replace('/*', '');
          const newPath = `./${path.replace('/*', '')}`;

          aliases[newKey] = newPath;

          return aliases;
        }, {}),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/vectors/`,
        },
      },
    },
  ],
};
