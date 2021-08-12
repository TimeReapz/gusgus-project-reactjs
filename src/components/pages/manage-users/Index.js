import axios from "axios";
import React, { useState, useEffect } from "react";
import { SwalConfirm } from "../../../lib/script";
import { Link } from "react-router-dom";
import firebase from "../../../utils/firebase";

export default function Index() {
  const [dataTable, setdataTable] = useState([]);

  useEffect(() => {
    const modelRef = firebase.database().ref("User");
    // listen every time data change in todo ref
    modelRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setdataTable(todoList);
    });
  }, []);

  const delUser = (id) => {
    SwalConfirm.fire({
      title: "ยืนยันการลบ",
    }).then((result) => {
      if (result.value) {
        const modelRef = firebase.database().ref("User").child(id);
        modelRef.remove();
      }
    });
  };

  return (
    <div>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายชื่อลูกค้า</h1>
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
                      {/* <input
                        type="text"
                        name="queryName"
                        className="form-control"
                        placeholder="Search"
                        ref={(input) => (this.queryName = input)}
                        onChange={this.getUsers}
                      />
                      <div className="input-group-append">
                        <button
                          type="submit"
                          className="btn btn-default"
                          onClick={() => this.getUsers()}
                        >
                          <i className="fas fa-search" />
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-tools">
                    <Link
                      to="/manageuser-create"
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
                        <th width="1" className="text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTable
                        ? dataTable.map((item) => (
                            <tr key={item.id}>
                              <td className="align-middle">{item.name}</td>
                              <td>
                                <Link
                                  to={{
                                    pathname: `manageuser-create/${item.id}`,
                                  }}
                                  className="btn btn-primary mr-2"
                                >
                                  <i className="fas fa-edit"></i>
                                </Link>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => delUser(item.id)}
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        : ""}
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
