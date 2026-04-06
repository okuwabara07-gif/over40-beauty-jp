import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '40代美容Lab',
  description: '40代・50代の美容情報',
  openGraph: { title: '40代美容Lab', description: '40代・50代の美容情報', type: 'website', locale: 'ja_JP', siteName: '40代美容Lab' },
  twitter: { card: 'summary_large_image', title: '40代美容Lab', description: '40代・50代の美容情報' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="xpdiFRYHloMJxfhCT-IMD08p5na4v9WUqvPY9OrDsHs" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "40代美容Lab", "description": "40代・50代の美容情報", "url": "https://over40-beauty-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}