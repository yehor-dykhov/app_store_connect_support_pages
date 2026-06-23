import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://dykhov.com';

/**
 * SEOHead — Declarative <head> manager for per-page SEO.
 *
 * Injects title, meta description, Open Graph, Twitter Cards,
 * canonical URL, and optional JSON-LD structured data.
 *
 * @param {object}  props
 * @param {string}  props.title         — Page <title>
 * @param {string}  props.description   — Meta description (max ~155 chars)
 * @param {string}  [props.keywords]    — Comma-separated keywords
 * @param {string}  [props.canonicalPath] — Path portion, e.g. "/resume-validator"
 * @param {string}  [props.ogTitle]     — Open Graph title override
 * @param {string}  [props.ogDescription] — OG description override
 * @param {string}  [props.ogImage]     — Absolute URL to OG image (1200×630)
 * @param {string}  [props.ogType]      — OG type, defaults to "website"
 * @param {string}  [props.twitterCard] — "summary_large_image" | "summary"
 * @param {object|object[]}  [props.jsonLd]     — JSON-LD structured data object(s)
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  jsonLd,
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;
  const resolvedOgImage = ogImage || `${SITE_URL}/assets/og-default.png`;

  // Support single object or array of JSON-LD schemas
  const jsonLdScripts = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:site_name" content="Yehor Dykhov" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* JSON-LD Structured Data */}
      {jsonLdScripts.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
