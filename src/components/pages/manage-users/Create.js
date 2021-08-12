import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../utils/firebase";

export default function Create() {
  const [name, setName] = useState('');

  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(process.env.REACT_APP_HOST_API + `/api/user/${id}`)
  //       .then((response) => {
  //         this.name.value = response.data.name;
  //       });
  //   }
  // }, []);

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const saveUser = () => {
    const modelRef = firebase.database().ref('User');
    const model = {
      NAME: name,
      CREATE_DATE: new Date(),
      ISACTIVE: 1,
      complete: false,
    };

    modelRef.push(model);
  };

  // const saveUser = (e) => {
  //   e.preventDefault();
  //   var id = this.state.id;
  //   if (id !== 0) {
  //     // update
  //     axios
  //       .patch(process.env.REACT_APP_HOST_API + `/api/user/${id}`, {
  //         name: this.name.value,
  //       })
  //       .then((response) => {
  //         this.props.history.push("/manageuser");
  //       });
  //   } else {
  //     // insert
  //     axios
  //       .post(process.env.REACT_APP_HOST_API + `/api/user`, {
  //         name: this.name.value,
  //       })
  //       .then((response) => {
  //         this.props.history.push("/manageuser");
  //       });
  //   }
  // };

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
                  <form onSubmit={saveUser}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">ชื่อ</label>
                        <input
                          type="name"
                          className="form-control"
                          id="name"
                          placeholder="ชื่อลูกค้า"
                          value={name} 
                          onChange={handleOnChange}
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
