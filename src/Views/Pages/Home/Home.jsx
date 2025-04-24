import React, { useRef } from 'react'
import Layout from '../../Layout'
import Section1 from '../Sections/Section1'
import SocialSpeedDial from '../../Layouts/Component/SocialSpeedDial'
import CustomCursor from '../../Layouts/Component/CustomCursor'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'

const Home = () => {
 

    return (
        <>
            <Layout >
                <CustomCursor />
                <SocialSpeedDial />
                <Section1   />
                {/* About Section  */}
                <Section2   />
                {/* Service Section  */}
                <Section3/>
                {/* Skills Section  */}
                <Section4/>
            </Layout>
        </>
    )
}

export default Home
