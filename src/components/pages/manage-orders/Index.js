import React, { useState, useEffect } from "react";
import { SwalConfirm } from "../../../lib/script";
import { Link } from "react-router-dom";
import firebase from "../../../utils/firebase";

export default function Index() {
  const [dataTable, setdataTable] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = search;
    console.log(search)
    const query = firebase
      .database()
      .ref("tbOrderSchedule")
      .orderByChild("tbUser/name")
      .startAt(q)
      .endAt(q + "\uf8ff");
    // listen every time data change in todo ref
    query.on("value", (snapshot) => {
      const models = snapshot.val();
      const temp = [];
      for (let id in models) {
        temp.push({ id, ...models[id] });
      }
      setdataTable(temp);
    });

    return () => {
      setdataTable([]);
    };
  }, [search]);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnEnter = (e) => {
    if (e.charCode === 13) {
      searchOrder();
    }
  };

  const delOrder = (id) => {
    SwalConfirm.fire({
      title: "ยืนยันการลบ",
    }).then((result) => {
      if (result.value) {
        const query = firebase.database().ref("tbOrderSchedule").child(id);
        query.remove();
      }
    });
  };

  const searchOrder = () => {
    console.log("searchOrder");
    var q = search;
    const query = firebase
      .database()
      .ref("tbOrderSchedule")
      .orderByChild("tbUser/name")
      .startAt(q)
      .endAt(q + "\uf8ff");
    // listen every time data change in todo ref
    query.on("value", (snapshot) => {
      const models = snapshot.val();
      console.log(models);
      const temp = [];
      for (let id in models) {
        temp.push({ id, ...models[id] });
      }
      setdataTable(temp);
    });
  };

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
                        onChange={handleOnChange}
                        onKeyPress={handleOnEnter}
                      />
                      <div className="input-group-append">
                        <button
                          type="submit"
                          className="btn btn-default"
                          onClick={() => searchOrder()}
                        >
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-tools">
                    <Link
                      to="/manageorder-schedule-create"
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
                      {dataTable
                        ? dataTable
                            .sort((a, b) => (a.name > b.name ? 1 : -1))
                            .map((item) => (
                              <tr key={item.id}>
                                <td className="align-middle">
                                  {item.tbUser.name}
                                </td>
                                <td className="align-middle">
                                  {item.schedule}
                                </td>
                                <td className="align-middle">
                                  {item.delivery}
                                </td>
                                <td className="align-middle">
                                  <Link
                                    to={{
                                      pathname: `manageorder-schedule-create/${item.id}`,
                                    }}
                                    className="btn btn-primary mr-2"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => delOrder(item.id)}
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
