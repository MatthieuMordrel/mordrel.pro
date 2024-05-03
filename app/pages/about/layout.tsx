import React from 'react'
import Head from 'next/head'

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <Head>
        <title>About Me</title>
      </Head>
      <div className="">{children}</div>
    </div>
  )
}
