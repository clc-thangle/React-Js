import React, { Component } from 'react';

class AddUser extends Component {

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tel = event.target.value;
        const Permission = event.target.value;
        console.log(name);
        console.log(value);
        
        
    }

    kiemTraTrangThai  = () => {
        if(this.props.hienThiForm === true)
        {
            return (
                <div className="col">
                <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                         <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" onChange={(event) => this.isChange(event)} name="Permission" required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">Thêm mới</div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
    }

    render() {
        
        return (
            
            <div>
                    {this.kiemTraTrangThai()}
            </div>
          
          
        );
    }
}

export default AddUser;