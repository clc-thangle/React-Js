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
            data : [],
            searchText : '',
            editUserStatus : false   ,
            userEditObject : {}
        }
    }

    
    componentWillMount() {
        //kiem  tra xem co localStorage chay chua
        if (localStorage.getItem('userData') == null){
          localStorage.setItem('userData',JSON.stringify(DataUser));
        }else{
          var temp = JSON.parse(localStorage.getItem('userData'));
          this.setState({
            data:temp
          });
        }   
      }
    

    deleteUser = (idUser) => {
       var tempData = this.state.data.filter(item => item.id !== idUser)
       this.setState({
           data:tempData
       });
       localStorage.setItem('userData',JSON.stringify(tempData));
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
        localStorage.setItem('userData',JSON.stringify(this.state.data));
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
        localStorage.setItem('userData',JSON.stringify(items));
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
    //    localStorage.setItem('userData',JSON.stringify(DataUser));
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
                            deleteUser = {(idUser) => this.deleteUser(idUser)}
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