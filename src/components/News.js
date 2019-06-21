import React, { Component } from 'react';
import NewItem from './NewItem';
import dl from './dulieu.json';

class News extends Component {
    render() {
        return (
            <div>
                <div>
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
                                {
                                dl.map((value,key) => {
                                    return (
                                    <NewItem key={key} 
                                    tinId={value.id}
                                    anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan}/>  )
                                } 
                                    
                                )}
                                
                                <NewItem anh="https://avatars1.githubusercontent.com/u/46485840?s=400&u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&v=4" tieuDe="nho dep trai" trichDan="ae dai hoc spdn da~ cong nhan nho dep trai" />
                                <NewItem anh="https://avatars1.githubusercontent.com/u/46485840?s=400&u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&v=4" tieuDe="nho dep trai" trichDan="ae dai hoc spdn da~ cong nhan nho dep trai" />
                                <NewItem anh="https://avatars1.githubusercontent.com/u/46485840?s=400&u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&v=4" tieuDe="nho dep trai" trichDan="ae dai hoc spdn da~ cong nhan nho dep trai" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default News;