import React from 'react';
import {Link} from 'react-router-dom';



function Footer(){
    return(
        <div> 
            <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Our Company</h3> 
                            <hr/>
                            <p className='text-white'>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry.                                 
                            </p>                           
                        </div>
                        <div className="col-md-4">
                            <h3 className="">Quick Links</h3>                         
                            <hr/>
                           <div><Link to="/">Home</Link></div>  
                           <div><Link to="/about">About</Link></div>                      
                           <div><Link to="/contact">Contact</Link></div>                      
                           <div><Link to="/">Blog</Link></div>                     

                        </div>
                        <div className="col-md-4">
                            <h3 className="">Contact Us</h3>  
                            <hr/>                       
                            <div className="t mb-1"><p>Address</p></div>        
                            <div className="t mb-1"><p>+919999999</p></div>    
                            <div className="t mb-1"><p>sd@gmail.com</p></div>   
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;