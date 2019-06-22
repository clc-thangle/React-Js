import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hienThiForm : false
        }
    }

    doiTrangThai  = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search ketNoi={() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} />
                            <TableData/>
                            <AddUser hienThiForm={this.state.hienThiForm}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;