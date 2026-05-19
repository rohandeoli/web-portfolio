import { Helmet } from "react-helmet-async";
import { portfolioData } from "../../portfolioData";

interface PageMetaProps {
  pageTitle: string;
  description: string;
  path: string;
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = "/og-image.png";
const OG_IMAGE_ALT = "Rohan Deoli — Senior Full Stack Engineer";

const PageMeta = ({ pageTitle, description, path, ogImage }: PageMetaProps) => {
  const { greeting } = portfolioData;
  const fullTitle = `${greeting.full_name} | ${pageTitle}`;
  const url = `${greeting.siteUrl}${path}`;
  const imageUrl = `${greeting.siteUrl}${ogImage ?? DEFAULT_OG_IMAGE}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
    </Helmet>
  );
};

export default PageMeta;
