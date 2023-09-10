import Head from "next/head"
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import OurExpertsPageComponent from "../../components/website/ourStaff/OurExpertsPageComponent"


const getStaticProps = makeStaticProps(['common'])

export { getStaticPaths, getStaticProps }



const OurProgramsPage = () => {
  return(
    <>
      <Head>
        <title>Therapedia - Our Experts</title>
      </Head>
      <OurExpertsPageComponent />
    </>
  )
  }

export default OurProgramsPage