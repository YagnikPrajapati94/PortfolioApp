import React from 'react'
import SectionLabel from '../../Layouts/Component/SectionLabel'
import ServiceCard from '../../Layouts/Component/ServiceCard'
import AccordionUsage from '../../Layouts/Component/AccordionUsage'

const Section3 = () => {
    return (
        <>

            <section>
                <div className="container-fluid bg-light      py-5">
                    <div className="container">
                        <div className="row">
                            <SectionLabel title={"Services"} />
                        </div>
                        {/* <ServiceCard/> */}
                        <div className="row justify-content-center">
                            <div className="col-xl-6  align-content-center">
                                <div className="row">
                                    <AccordionUsage Summary={"Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly."} ServiceTitle={"Responsive Design"} />
                                    <AccordionUsage Summary={"Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations."} ServiceTitle={"Website Redesign"} />
                                    <AccordionUsage Summary={"I provide thorough testing and debugging to ensure your web applications are bug-free, performant, and user-friendly."} ServiceTitle={"Testing & Debugging"} />
                                </div>
                            </div>
                            <div className="col-xl-6">
                            <img src="service.png" className='img-fluid ' alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3
