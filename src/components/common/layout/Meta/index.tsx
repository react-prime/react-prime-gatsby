import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const Meta: React.FC<MetaProps> = ({
  title, description, image, pathname, article = false,
}) => {
  const data = useStaticQuery<GatsbyTypes.MetaQuery>(
    graphql`
      query Meta {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const seo = {
    title: title || data.site?.siteMetadata?.defaultTitle,
    description: description || data.site?.siteMetadata?.defaultDescription,
    image: `${data.site?.siteMetadata?.siteUrl}${image || data.site?.siteMetadata?.defaultImage}`,
    url: `${data.site?.siteMetadata?.siteUrl}${pathname || '/'}`,
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={data.site?.siteMetadata?.titleTemplate}
        htmlAttributes={{
          lang: 'nl',
        }}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {data.site?.siteMetadata?.twitterUsername && (
          <meta name="twitter:creator" content={data.site?.siteMetadata?.twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  );
};

type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
};
