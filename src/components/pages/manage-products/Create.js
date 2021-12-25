import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import firebase from "../../../utils/firebase";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Create(props) {
  const history = useHistory();
  const initProduct = {
    id: "",
    name: "",
    subType: "",
    price: "",
    thumbnail: "",
  };

  const [product, setProduct] = useState(initProduct);

  useEffect(() => {
    if (props.match.params.id) {
      const modelRef = firebase
        .database()
        .ref("tbProduct")
        .child(props.match.params.id);

      modelRef.on("value", (snapshot) => {
        const model = snapshot.val();
        console.log(model);
        setProduct({ ...model, id: props.match.params.id });
      });
    }
  }, [props.match.params.id]);

  const saveProduct = (e) => {
    console.log("submit");
    e.preventDefault();
    if (product.id !== "") {
      console.log(product.id);
      const modelRef = firebase.database().ref("tbProduct").child(product.id);
      const model = {
        name: product.name,
        subType: product.subType,
        price: parseInt(product.price),
        thumbnail: product.thumbnail,
        update_date: moment().format(),
      };

      modelRef.update(model);
      history.push("/manageproduct");
    } else {
      const modelRef = firebase.database().ref("tbProduct");
      const model = {
        name: product.name,
        subType: product.subType,
        price: parseInt(product.price),
        thumbnail: product.thumbnail,
        create_date: moment().format(),
        isactive: 1,
      };

      modelRef.push(model);
      history.push("/manageproduct");
    }
  };

  return (
    <div>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายชื่อสินค้า</h1>
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
                    <h3 className="card-title">รายชื่อสินค้า</h3>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <form onSubmit={saveProduct}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">ชื่อสินค้า</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="ชื่อสินค้า"
                          value={product.name}
                          onChange={(e) => {
                            setProduct({ ...product, name: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subType">ประเภท</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subType"
                          placeholder="ประเภท"
                          value={product.subType}
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              subType: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="price">ราคา</label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          id="price"
                          placeholder="ราคา"
                          value={product.price}
                          onChange={(e) => {
                            setProduct({ ...product, price: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="image">รูปสินค้า</label>
                        <UploadPreview
                          thumbnail={product.thumbnail}
                          onthumbnailChange={(value) => {
                            setProduct({ ...product, thumbnail: value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link to="/manageproduct" className="btn btn-danger mr-2">
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

function UploadPreview(props) {
  const onChange = (e) => {
    //upload
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`images/`);
    const fileRef = storageRef.child(
      uuidv4() + "." + file.name.split(".").pop()
    );
    fileRef.put(file).then((e) => {
      fileRef.getDownloadURL().then((url) => {
        props.onthumbnailChange(url);
      });
    });
  };

  return (
    <div>
      <div
        className="text-center position-relative"
        style={{
          width: "100px",
          height: "100px",
          border: "1px dashed rgb(182 186 189)",
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          onChange={onChange}
          className="custom-file-input h-100"
        />
        {props.thumbnail && (
          <button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 20,
              border: 0,
              background: "transparent",
              zIndex: 3,
            }}
            onClick={(e) => {
              props.onthumbnailChange("");
            }}
          >
            X
          </button>
        )}
        <img
          src={props.thumbnail}
          className="w-100 position-absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          alt=""
        />
        {!props.thumbnail && (
          <i
            className="fas fa-plus position-absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></i>
        )}
      </div>
    </div>
  );
}
