import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
            <div className="container-fluid">
            <div className="row">
                <div id="container-left" className="col-md-6 d-md-block d-none col-12">
                    
                </div>
                <div className="col-md-6 col-12">
                    <div className="mx-md-5 pt-2 pt-md-5 mx-0 mt-0" id="content-right">
                        <h3>Contact Us</h3>
                        <p id="p-send">Send us a message and we will get back to you as soon as possible</p>
                        <p className="p-label">Name<span className="red">*</span></p>
                        <div className="w-100 outer-text">
                            <img className="w-5 img-text d-md-block d-none" src={require('../ico/ico-user.png')} alt=""/>
                            <input className="float-left w-10 input-text" type="text" name="" id="nama" placeholder=""/> 
                        </div>
                        <div className="clear-float"></div>

                        <p className="p-label">Email<span className="red">*</span></p>
                        <div className="w-100 outer-text">
                            <img id="img-email" className="w-5 img-text d-md-block d-none" src={require('../ico/ico-email.png')} alt=""/>
                            <input className="float-left w-90 input-text" type="text" name="" id="nama" placeholder=""/> 
                        </div>
                        <div className="clear-float"></div>

                        <p className="p-label">Phone Number<span className="red">*</span></p>
                        <div className="w-100 outer-text">
                            <img id="img-phone" className="w-5 img-text d-md-block d-none" src={require('../ico/ico-phone.png')} alt=""/>
                            <input className="float-left w-90 input-text" type="text" name="" id="nama" placeholder=""/> 
                        </div>
                        <div className="clear-float"></div>

                        <p className="p-label">National</p>
                        <div className="">
                          <select className="w-100" name="" id="select-nation">
                            <option>Indonesia</option>
                            <option>Korea</option>
                            <option>Singapore</option>
                          </select>
                        </div>

                        <p className="p-label">Message</p>
                        <div className="">
                            <textarea className="" rows="5" id="comment"></textarea>
                        </div>
                        
                        <button type="button" name="" id="submit-button" className="btn btn-primary btn-block">Submit</button>

                
                        
                        
                    </div>
                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Contact  ;
