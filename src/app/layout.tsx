import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Helper - AI Task Automation',
  description: 'Revolutionize your healthcare tasks with AI-powered automation. Streamline processes, reduce errors, and save valuable time with intelligent task agents designed specifically for healthcare.',
  keywords: 'healthcare automation, AI healthcare, medical task automation, healthcare efficiency',
  openGraph: {
    title: 'Healthcare Helper - AI Task Automation',
    description: 'Revolutionize your healthcare tasks with AI-powered automation',
    url: 'https://helper.peoplecare.ai',
    siteName: 'Healthcare Helper',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Healthcare Helper'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Helper - AI Task Automation',
    description: 'Revolutionize your healthcare tasks with AI-powered automation',
    images: ['/og-image.png']
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Healthcare Helper',
  description: 'AI-powered healthcare task automation platform',
  applicationCategory: 'HealthcareApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/ComingSoon'
  },
  featureList: [
    'Automated insurance verification',
    'Medical record requests',
    'Appointment scheduling',
    'Claim contestation'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
