const siteUrl = 'https://cocome.vercel.app'

const baseMetadata = {
  title: 'Diko |',
  description:
    'Hi, I am Diko Mahendra. Frontend Engineer experience using NextJs, React Js and also React Native',
  openGraph: {
    title: `Hi, I'am Diko Mahendra`,
    description:
      'Hi, I am Diko Mahendra. Frontend Engineer experience using NextJs, React Js and also React Native',
    siteName: 'My Profile',
    images: [
      {
        url: `${siteUrl}/meme.png`,
        width: 1200,
        height: 630,
        alt: 'Diko Mahendra - Frontend Engineer',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hi, I'am Diko Mahendra`,
    description:
      'Hi, I am Diko Mahendra. Frontend Engineer experience using NextJs, React Js and also React Native',
    images: [`${siteUrl}/meme.png`],
  },
}

export const metadataPortofolioPage = {
  ...baseMetadata,
  title: 'Diko | Portofolio',
  metadataBase: new URL(siteUrl),
  description:
    'These are some of the applications that I have developed while studying and working',
  openGraph: {
    ...baseMetadata.openGraph,
    url: `${siteUrl}/portofolio`,
    title: 'Diko | Portofolio',
    description:
      'These are some of the applications that I have developed while studying and working',
    images: [
      {
        url: `${siteUrl}/meme.png`,
        width: 1200,
        height: 630,
        alt: 'Diko Mahendra - Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diko | Portofolio',
    description:
      'These are some of the applications that I have developed while studying and working',
    images: [`${siteUrl}/meme.png`],
  },
}

export const metadataAssistantPage = {
  ...baseMetadata,
  title: 'Diko | Assistant',
  metadataBase: new URL(siteUrl),
  description:
    'This is a tool that I often use when developing applications from the Frontend side',
  openGraph: {
    ...baseMetadata.openGraph,
    url: `${siteUrl}/assistant`,
    title: 'Diko | Assistant',
    description:
      'This is a tool that I often use when developing applications from the Frontend side',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diko | Assistant',
    description:
      'This is a tool that I often use when developing applications from the Frontend side',
    images: [`${siteUrl}/meme.png`],
  },
}

export const metadataMainPage = {
  ...baseMetadata,
  title: 'Diko | Profile',
  metadataBase: new URL(siteUrl),
  description: 'Here is a little brief information about me',
  openGraph: {
    ...baseMetadata.openGraph,
    url: siteUrl,
    title: 'Diko | Profile',
    description: 'Here is a little brief information about me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diko | Profile',
    description: 'Here is a little brief information about me',
    images: [`${siteUrl}/meme.png`],
  },
}
