import React from 'react'
import SectionLabel from '../../Layouts/Component/SectionLabel'

const Section2 = () => {
    return (
        <>
            <section>
                <div className="container-fluid      py-5">
                    <div className="container">
                        <div className="row">
                            <SectionLabel title={"About Us"} />
                            <div className="col-lg-6 d-xl-block d-none  ">
                                <video src="about.mp4" autoPlay muted loop className=''></video>
                            </div>
                            <div className="col-xl-6 text-center align-content-center text-secondary fs-5">
                                <p>
                                    Hello! I'm a passionate <strong>Frontend Developer</strong> with a strong foundation in <strong>HTML, CSS, Bootstrap, JavaScript</strong>, and <strong>React.js</strong>. As a fresher, I bring a fresh perspective, a strong willingness to learn, and a deep curiosity for building clean, user-friendly interfaces.
                                </p>

                                <p>
                                    I enjoy translating designs into responsive and interactive web pages that not only look good but perform well across devices. During my learning journey, I've built multiple projects that reflect my ability to solve real-world problems using modern frontend technologies.
                                </p>

                                <p>
                                    I’m actively seeking opportunities where I can contribute, grow, and collaborate with experienced developers while continuing to level up my skills in web development.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2
