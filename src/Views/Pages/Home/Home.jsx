import React, { useRef } from 'react'
import Layout from '../../Layout'
import Section1 from '../Sections/Section1'
import SocialSpeedDial from '../../Layouts/Component/SocialSpeedDial'
import CustomCursor from '../../Layouts/Component/CustomCursor'
import Section2 from '../Sections/Section2'

const Home = () => {
 

    return (
        <>
            <Layout >
                <CustomCursor />
                <SocialSpeedDial />
                <Section1   />
                <Section2   />
            </Layout>
        </>
    )
}

export default Home
