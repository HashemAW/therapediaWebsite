import Head from "next/head"
import HomePageComponent from "../../components/website/main/HomePageComponent"
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])

export { getStaticPaths, getStaticProps }

const HomePage = () => {
  return(
    <>
      <Head>
        <title>Therapedia - Home</title>
      </Head>
      <HomePageComponent />
    </>
  )
  }

export default HomePage