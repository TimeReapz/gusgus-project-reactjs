import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

axios.defaults.headers['Access-Control-Allow-Origin'] = "*";
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id ?? 0,
      file: "",
    };
  }

  componentDidMount() {
    const id = this.state.id;
    if (id) {
      axios.get(process.env.REACT_APP_HOST_API + `/api/product/${id}`).then((response) => {
        this.name.value = response.data.name;
        this.subType.value = response.data.subType;
        this.price.value = response.data.price;

        this.setState({
          file: response.data.thumbnail,
        });
      });
    }
  }

  handleFileChange = (file) => {
    this.setState({ file });
  };

  saveProduct = (e) => {
    e.preventDefault();
    var id = this.state.id;

    var model = {
      name: this.name.value,
      subType: this.subType.value,
      price: parseInt(this.price.value),
      thumbnail: this.state.file,
    };
    
    if (id !== 0) {
      // update
      axios.patch(process.env.REACT_APP_HOST_API + `/api/product/${id}`, model).then((response) => {
        this.props.history.push("/manageproduct");
      });
    } else {
      // insert
      axios.post(process.env.REACT_APP_HOST_API + `/api/product`, model).then((response) => {
        this.props.history.push("/manageproduct");
      });
    }
  };

  render() {
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
                    <form onSubmit={this.saveProduct}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="name">ชื่อสินค้า</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="ชื่อสินค้า"
                            ref={(input) => (this.name = input)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="subType">ประเภท</label>
                          <input
                            type="text"
                            className="form-control"
                            id="subType"
                            placeholder="ประเภท"
                            ref={(input) => (this.subType = input)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="price">ราคา</label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder="ราคา"
                            ref={(input) => (this.price = input)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="image">รูปสินค้า</label>
                          <UploadPreview
                            file={this.state.file}
                            onFileChange={this.handleFileChange}
                          />
                        </div>
                      </div>
                      <div className="card-footer">
                        <Link
                          to="/manageproduct"
                          className="btn btn-danger mr-2"
                        >
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
}

class UploadPreview extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }

  onChange(event) {
    //upload
    var formData = new FormData();
    formData.append("image", event.target.files[0]);
    axios
      .post(process.env.REACT_APP_HOST_API + `/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        this.props.onFileChange(response.data);
      });
  }

  resetFile(event) {
    event.preventDefault();
    this.props.onFileChange(null);
  }
  render() {
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
            onChange={this.onChange}
            className="custom-file-input h-100"
          />
          {this.props.file && (
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
              onClick={this.resetFile}
            >
              X
            </button>
          )}
          <img
            src={this.props.file && ("http://localhost:8080/" + this.props.file)}
            className="w-100 position-absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            alt=""
          />
          {!this.props.file && (
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
}
