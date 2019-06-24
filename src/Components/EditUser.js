import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="row">
          <div className="col">
            <form method="post">
              <div className="card text-white bg-warning mb-3">
                <div className="card-header text-center">Sửa thông tin user</div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" defaultValue={this.props.userEditObject.name}
                      name="name" className="form-control" placeholder="Tên user" />
                  </div>
                  <div className="form-group">
                    <input type="text" defaultValue={this.props.userEditObject.tel}
                      name="tel" className="form-control" placeholder="Điện thoại" />
                  </div>
                  <hr />
                  <div className="form-group">
                    <select
                    defaultValue={this.props.userEditObject.Permission}
                      className="custom-select" name="Permission" required>
                      <option value>Chọn quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Nomal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="button"
                      className="btn btn-block btn-danger"
                      value="Lưu  " onClick={() => this.saveButton()} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        );
    }
}

export default EditUser;