import React from 'react'
import SectionLabel from '../../Layouts/Component/SectionLabel'
const Section4 = () => {
    const skills = [
        { icon: "skills/html.svg" },
        { icon: "skills/css.svg" },
        { icon: "skills/bootstrap.svg" },
        { icon: "skills/js.svg" },
        { icon: "skills/react.svg" },
        { icon: "skills/materialui.svg" }
    ]
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <SectionLabel title={"Skills"} />
                    </div>
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div className="col-6 col-md-4 col-lg-2" key={index}>
                                <div className="skill-card text-center">
                                    <img src={skill.icon}  className="img-fluid skill-img mb-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4
