import React, { Component } from 'react';
import NewItem from './NewItem';

class News extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="masthead news">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-6 my-auto">
                                    <div className="header-content mx-auto" style={{ textAlign: 'center' }}>
                                        <h1 className="mb-5">News Page</h1>
                                        <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-auto">
                                    <div className="device-container hinhcuavy">
                                        <div className="device-mockup iphone6_plus portrait white">
                                            <div className="device">
                                                <div className="screen">
                                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                    <img src="https://avatars1.githubusercontent.com/u/46485840?s=400&amp;u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&amp;v=4" class="img-fluid"></img>
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


                    <div>
                        <header className="masthead tintuc">
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-lg-12 my-auto">
                                        <div className="header-content mx-auto">
                                            <h1>Trang danh sach tin</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/* begin tintuc */}
                        <div className="container">
                            <div className="row mt-3">
                                <NewItem anh="https://avatars1.githubusercontent.com/u/46485840?s=400&u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&v=4" tieuDe="nho dep trai" trichDan="ae dai hoc spdn da~ cong nhan nho dep trai"/>
                                <NewItem anh="https://avatars1.githubusercontent.com/u/46485840?s=400&u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&v=4" tieuDe="nho dep trai" trichDan="ae dai hoc spdn da~ cong nhan nho dep trai"/>
                                <NewItem anh="https://avatars1.githubusercontent.com/u/46485840?s=400&u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&v=4" tieuDe="nho dep trai" trichDan="ae dai hoc spdn da~ cong nhan nho dep trai"/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default News;