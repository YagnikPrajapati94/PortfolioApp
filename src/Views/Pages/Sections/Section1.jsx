import React from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DownloadIcon from '@mui/icons-material/Download';


const Section1 = () => {


    return (
        <>
            <section>
                <div className="container-fluid bgcolor py-5">
                    <div className="container py-5 ">
                        <div className="row py-5 justify-content-center">
                            <div className="col-11  text-center">
                                {/* <p className='fs-4'>Hello There! 👋</p> */}
                                <p className=' text-uppercase text-highlight '>
                                    Hi, I'm <span className='text-highlight-white'>Yagnik Prajapati</span> — a frontend developer
                                </p>
                            </div>
                            <div className="col-12 my-3 text-center">
                                <p className='text-success fw-bold'><span style={{ padding: "1px 10px" }} className='me-2 bg-success rounded-circle'></span>Available for Freelancing</p>
                            </div>
                            <div className="col-10  justify-content-center d-flex">
                                {/* <!-- From Uiverse.io by mrhyddenn -->  */}
                                <button className="button me-2">
                                    <span className="button_lg">
                                        <span className="button_sl"></span>
                                        <span className="button_text">
                                            Hire Me <PersonAddAltIcon style={{ fontSize: '18px', marginLeft: '6px' , marginBottom:"4px" }} />
                                        </span>
                                    </span>
                                </button>

                                <button className="button ms-2">
                                    <span className="button_lg">
                                        <span className="button_sl"></span>
                                        <span className="button_text">
                                            Download CV <DownloadIcon style={{ fontSize: '18px', marginLeft: '6px' }} />
                                        </span>
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
