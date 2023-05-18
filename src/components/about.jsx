import './about.css'
import solid from '../assets/social/solid.png'
import svelte from '../assets/social/svelte.png'
import Githubimg from '../assets/social/git.png'
import tail from '../assets/social/tailwind.png'
import next from '../assets/social/next.png'
import jsimg from '../assets/social/js.png'
export default function About() {
    return (
        <>
            <section className='bg-ali'>
                <div className='about py-5' id='about'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="para mt-5">
                                    <h2 className='pt-5 para-text'>ABOUT ME</h2>
                                    <p className='pt-3 para-para'>As a seasoned web developer with expertise in HTML, CSS, JavaScript, React, Git, and Jest testing, I have honed my skills through hands-on experience in various organizations. Having worked as a web developer in two companies, I bring a wealth of knowledge and practical insights to my current role as a blockchain developer.</p>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="para text-end mt-5">
                                    <h2 className='pt-5 para-text pb-4'>TECH STACK</h2>
                                    <div className="row para-soc">
                                        <div className="col-2">
                                            <img src={solid} alt="" />
                                        </div>
                                        <div className="col-2">
                                            <img src={svelte} alt="" />
                                        </div>
                                        <div className="col-2">
                                            <img src={Githubimg} alt="" />
                                        </div>
                                        <div className="col-2">
                                            <img src={tail} alt="" />
                                        </div>
                                        <div className="col-2">
                                            <img src={next} alt="" />
                                        </div>
                                        <div className="col-2">
                                            <img src={jsimg} alt="" />
                                        </div>
                                    </div>
                                    <div className="progresses pt-5">
                                        <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="34" aria-valuemin="40" aria-valuemax="100">
                                            <div className="progress-bar w-90 bg-pinkk">React JS</div>
                                        </div>
                                        <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="34" aria-valuemin="40" aria-valuemax="100">
                                            <div className="progress-bar w-94 bg-pinkk">Javascript</div>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="34" aria-valuemin="40" aria-valuemax="100">
                                            <div className="progress-bar w-80 bg-pinkk">Solidity</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}