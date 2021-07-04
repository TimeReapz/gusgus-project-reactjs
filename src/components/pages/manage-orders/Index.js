import axios from "axios";
import React, { Component } from "react";
import { SwalConfirm } from "../../../lib/script";
import { Link } from "react-router-dom";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryName: "",
      dataTable: [],
    };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    var q = this.queryName.value;
    axios.get(process.env.HOST_API + `/api/order?name=${q}`).then((response) => {
      if (response.data != null) {
        console.log(response.data)

        this.setState({
          dataTable: response.data,
        });
      } else {
        this.setState({
          dataTable: [],
        });
      }
    });
  };

  delOrder = (id) => {
    SwalConfirm.fire({
      title: "ยืนยันการลบ",
    }).then((result) => {
      if (result.value) {
        axios.delete(process.env.HOST_API + `/api/order/${id}`).then((response) => {
          this.getOrders();
        });
      }
    });
  };

  render() {
    const { dataTable } = this.state;
    return (
      <div>
        <section className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>รายการจัดส่ง</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}
                      >
                        <input
                          type="text"
                          name="queryName"
                          className="form-control"
                          placeholder="Search"
                          ref={(input) => (this.queryName = input)}
                          onChange={this.getOrders}
                        />
                        <div className="input-group-append">
                          <button
                            type="submit"
                            className="btn btn-default"
                            onClick={() => this.getOrders()}
                          >
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card-tools">
                      <Link
                        to="/manageorder-create"
                        className="btn btn-warning float-right d-inline"
                      >
                        เพิ่ม
                      </Link>
                    </div>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>ชื่อ</th>
                          <th>วันที่จัดส่ง</th>
                          <th>วิธีการจัดส่ง</th>
                          <th width="1" className="text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataTable.map((item) => (
                          <tr key={item._id}>
                            <td>{item.userModel.name}</td>
                            <td>{item.schedule}</td>
                            <td>{item.delivery}</td>
                            <td>
                              <Link
                                to={{
                                  pathname: `manageorder-create/${item._id}`
                                }}
                                className="btn btn-primary mr-2"
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => this.delOrder(item.id)}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
