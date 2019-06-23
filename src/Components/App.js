import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hienThiForm : false,
            data : DataUser
        }
    }

    doiTrangThai  = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    checkConnect  = () => {
        alert('ket noi thanh cong')
        
    }

    render() {        
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search
                            checkConnect={() => {this.checkConnect()}}
                             ketNoi={() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} />
                            <TableData dataUserProps={this.state.data}/>
                            <AddUser hienThiForm={this.state.hienThiForm}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;