import React from 'react'
import Layout from '../../Layout'
import Section1 from '../Sections/Section1'
import SocialSpeedDial from '../../Layouts/Component/SocialSpeedDial'

const Home = () => {
  return (
    <>
      <Layout>
        <SocialSpeedDial/>
        <Section1/>
      </Layout>
    </>
  )
}

export default Home
