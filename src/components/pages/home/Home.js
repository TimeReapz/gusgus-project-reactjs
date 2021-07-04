import axios from "axios";
import React, { Component } from "react";

const schedule = [
  { value: "ทุกพระ 8,15", label: "ทุกพระ 8,15" },
  { value: "ทุกพระ 8", label: "ทุกพระ 8" },
  { value: "ทกุพระ 15", label: "ทุกพระ 15" },
  { value: "วันโกน", label: "วันโกน" },
  { value: "วันพฤหัส", label: "วันพฤหัส" },
  { value: "วันอาทิตย์", label: "วันอาทิตย์" },
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTableMain: [],
      dataTable: [],
      dataSchedule: 1,
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_HOST_API + `/api/order?name=`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
     }).then((response) => {
      this.setState({
        dataTableMain: response.data,
        dataTable: response.data.filter((f) => f.schedule === "ทุกพระ 8,15"),
      });
    });
  }

  changeDataSchedule = (dataSchedule) => {
    var dataTableMain = this.state.dataTableMain;
    this.setState({
      dataTable: dataTableMain.filter((f) => f.schedule === dataSchedule),
    });

    this.forceUpdate();
  };

  getOrders = () => {};

  render() {
    return (
      <div>
        <section className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>รายการ</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div
                  className="btn-group btn-group-toggle flex-wrap"
                  data-toggle="buttons"
                >
                  {schedule.map((item, index) => (
                    <label
                      className={
                        "btn btn-info mb-1 " + (index === 0 ? "active" : "")
                      }
                      key={index}
                    >
                      <input
                        type="radio"
                        name="options"
                        autoComplete="off"
                        onClick={() => this.changeDataSchedule(item.value)}
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                {this.state.dataTable.map((item) => (
                  <div
                    className="card card-outline card-primary"
                    key={item._id}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-8 text-lg text-bold">
                          {item.userModel.name}
                        </div>
                        {/* <div className="col-4 text-right text-lg">
                          {item.totalPrice} ฿
                        </div> */}
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          {item.orderItems.map((orderItem, index) => (
                            <div className="info-box" key={index}>
                              <div
                                className="position-relative d-inline-block"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src={
                                    orderItem.productModel.thumbnail &&
                                    "http://localhost:8080/" +
                                      orderItem.productModel.thumbnail
                                  }
                                  className="w-100 position-absolute"
                                  style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  alt=""
                                />
                              </div>
                              <div className="info-box-content">
                                <span
                                  className="info-box-text text-md"
                                  style={{ width: "220px" }}
                                >
                                  {orderItem.productModel.name +
                                    " (" +
                                    orderItem.productModel.subType +
                                    ")"}
                                </span>
                                <span className="info-box-number">
                                  {orderItem.productModel.price} ฿
                                </span>
                              </div>
                              <div className="info-box-content">
                                <span className="info-box-text text-xl text-right">
                                  x {orderItem.qty}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 text-lg d-table">
                          <div className="d-table-cell align-middle">
                            ราคารวม <b>{item.totalPrice} ฿</b> 
                          </div>
                        </div>
                        <div className="col-6">
                          <button className="btn btn-primary btn-block">
                            จัดส่งแล้ว
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
