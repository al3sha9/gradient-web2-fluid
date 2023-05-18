import '../components/projects.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="paraa text-center mt-5 ">
                            <h2 className='pt-5 toper-text'>About Me</h2>
                            <p className='pt-3 toper-para pb-5'>These are some of my best projects that i have worked on!</p>
                        </div>
                    </div>
                    <div className="col-md-12 text-center pb-5">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={false}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <div className="image pt-3">
                                        <img className='img-fluid' src={img1} alt="" />
                                    </div>
                                    <div className="card-title pt-3 pb-3">
                                        <h3>Cardano Defi Project</h3>
                                        <p className='px-2'>This is a cardano Defi Project that is currently under construction</p>
                                    </div>
                                    <a href="ibex-dao.vercel.app">Visit <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="image pt-3">
                                        <img className='img-fluid' src={img2} alt="" />
                                    </div>
                                    <div className="card-title pt-3 pb-3">
                                        <h3>Company Website</h3>
                                        <p className='px-2'>This is my company website that is currently used at my agency</p>
                                    </div>
                                    <a href="ibex-dao.vercel.app">Visit <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="image pt-3">
                                        <img className='img-fluid' src={img3} alt="" />
                                    </div>
                                    <div className="card-title pt-3 pb-3">
                                        <h3>NFT MARKETPLACE</h3>
                                        <p className='px-2'>A Cool NFT Market place that is one of a kind in Gilgit Baltistan</p>
                                    </div>
                                    <a href="ibex-dao.vercel.app">Visit <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="image pt-3">
                                        <img className='img-fluid' src={img2} alt="" />
                                    </div>
                                    <div className="card-title pt-3 pb-3">
                                        <h3>Cardano Defi Project</h3>
                                        <p className='px-2'>This is a cardano Defi Project that is currently under construction</p>
                                    </div>
                                    <a href="ibex-dao.vercel.app">Visit <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}