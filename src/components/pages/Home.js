import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Vmc from '../inc/vmc';
import service1 from '../images/33109.jpg';


function Home(){
    return(
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Main Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy 
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* Our vision */}
            <Vmc />

            {/* Our services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Services</h3>
                            <div className="underline mx-auto"></div>                                                     
                        </div>
                        <div className="col-md-4 text-center">
                            <div className='card shadow'>
                                <img src={service1} className="w-100 border-bottom" alt="Services" />
                                <div classNmae="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more...</Link>
                                </div>
                            </div>                           
                        </div>
                        <div className="col-md-4 text-center">
                            <div className='card shadow'>
                                <img src={service1} className="w-100 border-bottom" alt="Services" />
                                <div classNmae="card-body">
                                    <h6>Services 2</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more...</Link>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 text-center">
                            <div className='card shadow'>
                                <img src={service1} className="w-100 border-bottom" alt="Services" />
                                <div classNmae="card-body">
                                    <h6>Services 3</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more...</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;