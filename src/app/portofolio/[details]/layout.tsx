import { Metadata } from 'next'
import { portofolio } from '@/constants/portofolio'

// Helper function to find portfolio by slug
const findPortfolioBySlug = (slug: string) => {
  const allPortfolios = [...portofolio.company, ...portofolio.personal]
  return allPortfolios.find(
    (item) => item.name.toLowerCase().replace(/ /g, '-') === slug
  )
}

// Generate metadata for SEO and social sharing
export async function generateMetadata({
  params,
}: {
  params: Promise<{ details: string }>
}): Promise<Metadata> {
  const { details } = await params
  const portfolioItem = findPortfolioBySlug(details)

  if (!portfolioItem) {
    return {
      title: 'Diko | Portfolio',
      description: 'Portfolio detail page',
    }
  }

  const portfolioName = portfolioItem.name
  // Strip HTML tags and limit description length
  const portfolioDescription =
    portfolioItem.about
      ?.replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .substring(0, 160) || `Check out ${portfolioName} - ${portfolioItem.role}`

  const siteUrl = 'https://cocome.vercel.app'
  const portfolioUrl = `${siteUrl}/portofolio/${details}`

  // Ensure image URL is absolute (required for social media platforms)
  const portfolioImagePath = portfolioItem.images || '/me.jpg'
  const portfolioImage = portfolioImagePath.startsWith('http')
    ? portfolioImagePath
    : `${siteUrl}${portfolioImagePath}`

  return {
    title: `Diko | ${portfolioName}`,
    description: portfolioDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: `${portfolioName} | Diko Mahendra`,
      description: portfolioDescription,
      url: portfolioUrl,
      siteName: 'Diko Mahendra - Portfolio',
      images: [
        {
          url: portfolioImage,
          width: 1200,
          height: 630,
          alt: portfolioName,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${portfolioName} | Diko Mahendra`,
      description: portfolioDescription,
      images: [portfolioImage],
    },
  }
}

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
