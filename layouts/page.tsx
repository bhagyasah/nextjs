import { ReactNode } from 'react'
import Head from 'next/head'
// import SEO, { SEOProps } from '@components/seo'
import Header from '@components/header'
// import { metadata as siteMeta } from 'config'
import HeaderComponent from '@components/header'
import Navigation from '@components/navigation'

type PageProps = {
  // meta?: SEOProps,
  children?: ReactNode
}

const Page = ({ children }): PageProps => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <Navigation />
      {children}
    </>
  )
}

export default Page