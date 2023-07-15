import './contact.css'
export default function Contact() {
    return (
        <>
            <section className='bg-ali pb-5'>
                <div className='con' id='contact'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="para text-center ">
                                    <h2 className=' toper-text'>Contact Me</h2>
                                    <p className=' toper-para pb-5'>I am just one message away from being <br /> the only remote developer you will ever <br /> need.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="con-left">
                                    <h3>Email me @</h3>
                                    <a href="mailto:alishandev@proton.me?subject=Mail%20from%20Website&body=Your%20Name%3A%0D%0AYour%20Contact%3A%0D%0AYour%20Message%3A"><span className='mb-3'>alishandev@proton.me</span></a>
                                    <h3>Or contact my Agency @</h3>
                                    <a href="mailto:admin@techalphalogix.com?subject=Mail%20from%20Website&body=Your%20Name%3A%0D%0AYour%20Contact%3A%0D%0AYour%20Message%3A"><span className='mb-3'>admin@techalphalogix.com</span></a>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                            <div className="con-ri">
                                    <h3>My Social Handles</h3>
                                    <a target='blank' href="https://www.upwork.com/freelancers/~014531a77a97a2ef44" className='mb-3'><span>Upwork profile </span><i className='fa-solid fa-briefcase'></i></a><br />
                                    <a target='blank'  href="https://goo.gl/maps/YqHY3sVoxf5FVKBe7" className='mb-3'><span>Office Address </span><i className='fa-solid fa-location'></i></a><br />
                                    <a target='blank'  href="https://www.linkedin.com/in/alshnkhn/" className='mb-3'><span>Linkedin profile </span><i className='fa-brands fa-linkedin'></i></a><br />
                                    <a target='blank'  href="https://techalphalogix.com/" className='mb-3'><span>Company Website </span><i className='fa-solid fa-globe'></i></a><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}