import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'EasyRabbitFashion'
const FALLBACK_SITE_URL = 'https://easyrabbitfashion.vercel.app'
const SITE_URL = (import.meta.env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/$/, '')
const FALLBACK_IMAGE = '/favicon.svg'

function toAbsoluteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString()
}

export default function Seo({
  title,
  description,
  path = '/',
  image = FALLBACK_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const canonicalUrl = toAbsoluteUrl(path)
  const ogImage = image.startsWith('http') ? image : toAbsoluteUrl(image)

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  )
}
