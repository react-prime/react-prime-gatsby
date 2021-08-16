module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_SITE_URL,
    title: 'react-prime-gatsby',
    titleTemplate: '%s - Nowatch Website',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     host: process.env.CONTENTFUL_HOST,
    //     environment: process.env.CONTENTFUL_ENVIRONMENT,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: process.env.GA_TRACKING_ID,
    //   },
    // },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'react-prime-gatsby',
        short_name: 'gatsby',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
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
    // {
    //   resolve: 'gatsby-plugin-typegen',
    //   options: {
    //     outputPath: 'src/__generated__/gatsby-types.d.ts',
    //     emitSchema: {
    //       'src/__generated__/gatsby-schema.graphql': true,
    //       'src/__generated__/gatsby-introspection.json': true,
    //     },
    //     emitPluginDocuments: {
    //       'src/__generated__/gatsby-plugin-documents.graphql': true,
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          common: './components/common',
          modules: './components/modules',
          pages: './pages',
          styles: './styles',
          services: './services',
          ducks: './ducks',
          selectors: './selectors',
          templates: './templates',
          images: './assets/images',
          fonts: './assets/fonts',
          videos: './assets/videos',
          vectors: './assets/vectors',
          css: './assets/css',
          types: './types',
          static: {
            root: './public',
            alias: './static',
          },
        },
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
