import Head from "next/head"
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import OurProgramsPageComponent from "../../components/website/ourPrograms/OurProgramsPageComponent.js";


const getStaticProps = makeStaticProps(['common'])

export { getStaticPaths, getStaticProps }



const OurProgramsPage = () => {
  return(
    <>
      <Head>
        <title>Therapedia - Our Programs</title>
      </Head>
      <OurProgramsPageComponent />
    </>
  )
  }

export default OurProgramsPage