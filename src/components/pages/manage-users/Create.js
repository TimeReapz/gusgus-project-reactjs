import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { db } from "../../../utils/firebase";

export default function Create(props) {
  const history = useHistory();
  const initUser = {
    id: "",
    name: "",
  };

  const [user, setUser] = useState(initUser);

  const tbUsers = db.collection("tbUsers");

  useEffect(() => {
    if (props.match.params.id) {
      tbUsers
        .doc(props.match.params.id)
        .get()
        .then((snapshot) => {
          setUser({ ...snapshot.data(), id: props.match.params.id });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = (e) => {
    e.preventDefault();
    if (user.id !== "") {
      const model = {
        name: user.name,
        updateDate: moment().format(),
      };

      tbUsers.doc(user.id).update(model);
      history.push("/manageuser");
    } else {
      const model = {
        name: user.name,
        createDate: moment().format(),
        isactive: 1,
      };

      tbUsers.add(model);
      history.push("/manageuser");
    }
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
              <div className="card card-outline card-primary">
                <div className="card-header">
                  <div className="card-title">
                    <h3 className="card-title">เพิ่มรายชื่อลูกค้า</h3>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <form onSubmit={save}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">ชื่อ</label>
                        <input
                          type="name"
                          className="form-control"
                          id="name"
                          placeholder="ชื่อลูกค้า"
                          value={user.name}
                          onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link to="/manageuser" className="btn btn-danger mr-2">
                        Back
                      </Link>
                      <div className="float-right">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
