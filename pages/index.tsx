import Head from 'next/head'

import { request } from '../lib/datocms'

import { HOMEPAGE_QUERY } from '../lib/queries/home'

export async function getStaticProps() {
  const content = await request({
    query: HOMEPAGE_QUERY
  })

  console.log(content)

  return {
    props: { content }
  }
}

export default function Home({ content }) {
  const accommodations: any[] = content.homePage.accommodations

  const accommodationsList = (
    <ul>
      { accommodations.length > 0 && accommodations.map(acc => <li key={acc.name} >{acc.name}</li>) }
    </ul>
  )


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-lg">
        <h1>Project Brebis</h1>
        {accommodationsList}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
