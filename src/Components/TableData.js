import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
  .<table className="table table-striped table-inverse table-hover">
    <thead>
      <tr>
        <th>STT </th>
        <th>Tên </th>
        <th>Điện thoại </th>
        <th>Quyền </th>
        <th>Thao tác </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td >1</td>
        <td>Lê Nho Thắng</td>
        <td>6545645623</td>
        <td>Moderator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-delete    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >2</td>
        <td>Trần Duy Chương</td>
        <td>6545645623</td>
        <td>Moderator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-delete    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >3</td>
        <td>Phạm Minh Oanh</td>
        <td>6545645623</td>
        <td>Moderator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-delete   "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >4</td>
        <td>Hà Huy</td>
        <td>6545645623</td>
        <td>Moderator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-delete   "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >5</td>
        <td>Hồ Ngân</td>
        <td>6545645623</td>
        <td>Moderator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-delete    "> Xóa </i>
          </div>
        </td>
      </tr>
      <tr>
        <td >6</td>
        <td>Hồ Quốc Thanh</td>
        <td>6545645623</td>
        <td>Moderator</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit    "> Sửa </i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-delete    "> Xóa </i>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;