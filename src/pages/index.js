import Head from 'next/head'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>
    </div>
  )
}
