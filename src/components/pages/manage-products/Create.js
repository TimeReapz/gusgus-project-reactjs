import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { db } from "../../../utils/firebase";

import MyUploadImage from "../../genaral/MyUploadImage-v1";

export default function Create(props) {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const initProduct = {
    id: "",
    name: "",
    subType: "",
    price: "",
    thumbnail: "",
  };

  const [product, setProduct] = useState(initProduct);

  const tbProducts = db.collection("tbProducts");

  useEffect(() => {
    if (props.match.params.id) {
      tbProducts
        .doc(props.match.params.id)
        .get()
        .then((snapshot) => {
          setProduct({ ...snapshot.data(), id: props.match.params.id });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveProduct = (e) => {
    e.preventDefault();
    if (product.id !== "") {
      const model = {
        name: product.name,
        subType: product.subType,
        price: parseInt(product.price),
        thumbnail: product.thumbnail,
        updateDate: moment().format(),
      };

      tbProducts.doc(product.id).update(model);
      history.push("/manageproduct");
    } else {
      const model = {
        name: product.name,
        subType: product.subType,
        price: parseInt(product.price),
        thumbnail: product.thumbnail,
        createDate: moment().format(),
        isactive: 1,
      };

      tbProducts.add(model);
      history.push("/manageproduct");
    }
  };

  return (
    <>
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
                        <MyUploadImage
                          thumbnail={product.thumbnail}
                          setIsLoaded={setIsLoaded}
                          onThumbnailChange={(value) => {
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
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isLoaded ? "disabled" : ""}
                        >
                          {isLoaded ? " • • • " : "Submit"}
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
    </>
  );
}
