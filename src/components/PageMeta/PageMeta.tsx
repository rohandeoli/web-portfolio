import { Helmet } from "react-helmet-async";
import { portfolioData } from "../../portfolioData";

interface PageMetaProps {
  pageTitle: string;
  description: string;
  path: string;
}

const PageMeta = ({ pageTitle, description, path }: PageMetaProps) => {
  const { greeting } = portfolioData;
  const fullTitle = `${greeting.full_name} | ${pageTitle}`;
  const url = `${greeting.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default PageMeta;
