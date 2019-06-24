import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hienThiForm : false,
            data : DataUser,
            searchText : '',
            editUserStatus : false   ,
            userEditObject : {}
        }
    }

    changeEditUserStatus  = () => {
        this.setState({
            editUserStatus : !this.state.editUserStatus
        });
    }

    getUserEditInfoApp  = (info) => {
        this.state.data.forEach((value,key) => {
            if(value.id === info.id)
            {
                value.name=info.name;
                value.tel=info.tel;
                value.Permission=info.Permission;
            }
        })
    }

    editUser  = (user) => {
        this.setState({
            userEditObject:user
        });
           
    }

    getNewUserDate = (name,tel,Permission) => {

        var item = {};
        item.id= uuidv1();
        item.name= name;
        item.tel=tel;
        item.Permission=Permission
        var items = this.state.data;
        items.push(item);
        this.setState({
            data:items
        });
        
        console.log(this.state.data);
        console.log('ket noi ok');
    }

    doiTrangThai  = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    getTextSearch  = (dl) => {
        this.setState({
            searchText:dl
        });
    }

    render() {
        
        var ketQua = [];
        this.state.data.forEach((item) => {
            if(item.name.indexOf(this.state.searchText) !== -1)
            {
                ketQua.push(item);
            }
        })
        //console.log(ketQua);
        
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search
                            getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                            userEditObject={this.state.userEditObject}
                            checkConnectProps={(dl) => {this.getTextSearch(dl)}}
                             ketNoi={() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm}
                             editUserStatus={this.state.editUserStatus}
                             changeEditUserStatus = {() => this.changeEditUserStatus()} />
                            <TableData
                            changeEditUserStatus = {() => this.changeEditUserStatus()}
                             dataUserProps={ketQua} 
                            editFun={(user)=> this.editUser(user)}/>
                            <AddUser add={(name,tel,Permission) => this.getNewUserDate(name,tel,Permission  )} hienThiForm={this.state.hienThiForm}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;