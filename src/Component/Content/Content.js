import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThai:0
        }
    }

    thongbao = () => {alert('cach xu ly tuong tac trong react js');}
    thongbao2 = () => {alert('thong bao so 2');}

    renderButton = () => { // la rang a// dung viet theo kieu arrow func á// da rua de e thu lai 
        return (
        <div className="row">
                <div className="btn btn-group">
                <div className="btn btn-info" onClick={() => this.editClick()}> Edit </div>
                <div className="btn btn-warning"onClick={this.thongbao2}> Remove </div>
                </div>
        </div>
        );
    }
    renderForm  = () => {
        return (
        <div className="row"> 
                <div className="form-group">
                    <input defaultValue={this.props.tieude} type="text" name="ten" className="form-control" />
                </div>
                <div className="form-group">
                    <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
                </div>
        </div>
        );
    }

    displayCheck  = () => {
        if(this.state.trangThai===0)
        {
            return this.renderButton();
        }
        else
            return this.renderForm();

    }

    editClick  = () => {
        this.setState({trangThai:1});
    }

    saveClick  = () => {
        this.setState({trangThai:0});
    }
    
    render() {
        return (
                    <div className="col-lg-4">
                        <div className="row">
                            <div className={"col-lg-5 "}>
                                <div className="p-1">
                                    <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-1">
                                    <h2 className="display-6">{this.props.tieude}</h2>
                                    <p>
                                        {this.props.trichdan}
                                    </p>
                                    {this.displayCheck()}
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Content;