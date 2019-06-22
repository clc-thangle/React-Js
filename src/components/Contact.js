import React, { Component } from 'react';
import Redirect from "react-router-dom/Redirect";
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    
    isChange  = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;

        this.setState({
            [ten]: giatri
        })
    }

    submitForm  = (event) => {
        event.preventDefault(); //Ko cho chuyen trang
        this.setState({
            isRedirect:true
        });
    }

    isFileChange  = (event) => {
        const tenanh = event.target.files[0].name;
        this.setState({
            fAnh : tenanh
        });
    }

    getGiatri  = () => {
        var noiDung = "";
        noiDung += "Ten nhan duoc la : " + this.state.fName;
        noiDung += " / Email nhan duoc la : " + this.state.fEmail;
        noiDung += " / Phone nhan duoc la : " + this.state.fPhone;
        noiDung += " / Mess nhan duoc la : " + this.state.fMess;
        noiDung += " / ngay nhan duoc la : " + this.state.fNgay;
        noiDung += " / ngay nhan duoc la : " + this.state.fAnh;
        return noiDung;
    }

    render() {

        if (this.state.isRedirect)
        {
            console.log(this.getGiatri());
            return <Redirect to="/home" />;  
        } 

        return (
            <div>
                <div>
                    <header className="masthead news">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-6 my-auto">
                                    <div className="header-content mx-auto" style={{ textAlign: 'center' }}>
                                        <h1 className="mb-5">Lien he voi chung toi</h1>
                                        <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-auto">
                                    <div className="device-container hinhcuavy">
                                        <div className="device-mockup iphone6_plus portrait white">
                                            <div className="device">
                                                <div className="screen">
                                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                    <img src="https://avatars1.githubusercontent.com/u/46485840?s=400&amp;u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&amp;v=4" className="img-fluid"></img>
                                                </div>
                                                <div className="button">
                                                    {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin news */}
                    <section className="page-section" id="contact">
                        <div className="container">
                            {/* Contact Section Heading */}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                            {/* Icon Divider */}
                            <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="divider-custom-line" />
                            </div>
                            {/* Contact Section Form */}
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Name</label>
                                                <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Email Address</label>
                                                <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Phone Number</label>
                                                <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Message</label>
                                                <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />

                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Chọn ngày</label>
                                                  <select className="form-control" name="fNgay" onChange={(event) => this.isChange(event)} >
                                                    <option value="thu3">Ngày thứ 3</option>
                                                    <option value="thu5">Ngày thứ 5</option>
                                                    <option value="thu7">Ngày thứ 7</option>
                                                    <option value="chunhat">Ngày chủ nhật</option>    
                                                  </select>
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />

                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Chọn ngày</label>

                                                  
                                                    <input  onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fAnh"/>
                                                    
                                                 

                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />

                                        <div id="success" />
                                        <div className="form-group">
                                            <button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        );
    }
}

export default Contact;