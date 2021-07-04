import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const schedule = [
  { value: "ทุกพระ 8,15", label: "ทุกพระ 8,15" },
  { value: "ทุกพระ 8", label: "ทุกพระ 8" },
  { value: "ทกุพระ 15", label: "ทุกพระ 15" },
  { value: "วันโกน", label: "วันโกน" },
  { value: "วันพฤหัส", label: "วันพฤหัส" },
  { value: "วันอาทิตย์", label: "วันอาทิตย์" },
];

const delivery = [
  { value: "ไปส่งที่บ้าน", label: "ไปส่งที่บ้าน" },
  { value: "มาเอาที่ตลาด", label: "มาเอาที่ตลาด" },
];

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id ?? 0,
      userDropdown: [],
      productDropdownGroup: [],
      productDropdown: [],
      productList: [],
      userId: "",
      schedule: "",
      delivery: "",
      orderItems: [
        {
          productId: "",
          qty: "",
        },
      ],
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleScheduleChange = this.handleScheduleChange.bind(this);
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const id = this.state.id;
    if (id) {
      axios.get(process.env.HOST_API + `/api/order/${id}`).then((response) => {
        console.log(response)
        this.setState({
          userId: response.data.userId,
          orderItems: response.data.orderItems,
          schedule: response.data.schedule,
          delivery: response.data.delivery,
        });
        this.totalPrice.value = response.data.totalPrice
      });
    }

    // get user
    axios.get(process.env.HOST_API + `/api/user?q=`).then((response) => {
      var tempArr = [];
      response.data.forEach((item) => {
        var obj = {
          value: item.id,
          label: item.name,
        };
        tempArr.push(obj);
      });

      this.setState({
        userDropdown: tempArr,
      });
    });

    // get product
    axios.get(process.env.HOST_API + `/api/product?q=`).then((response) => {
      var tempArrGroup = [];
      var tempArr = [];
      response.data
        .sort((a, b) => a.name - b.name)
        .forEach((item) => {
          var obj = {
            value: item.id,
            label:
              item.name +
              (item.subType !== "" ? "(" + item.subType + ")" : "") +
              " " +
              item.price +
              "฿",
          };

          var temp = tempArrGroup.find((x) => x.label === item.name);
          if (temp) {
            temp.options.push(obj);
          } else {
            tempArrGroup.push({
              label: item.name,
              options: [obj],
            });
          }

          tempArr.push(obj);
        });

      this.setState({
        productDropdownGroup: tempArrGroup,
        productDropdown: tempArr,
        productList: response.data,
      });
    });
  }

  // handleChange(evt) {
  //   console.log(evt)
  //   const value =
  //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
  //   this.setState({
  //     ...this.state,
  //     [evt.target.name]: value
  //   });
  // }

  handleUserChange(e) {
    this.setState({
      userId: e.value,
    });
  }

  handleScheduleChange(e) {
    this.setState({
      schedule: e.value,
    });
  }

  handleDeliveryChange(e) {
    this.setState({
      delivery: e.value,
    });
  }

  handleOrderItemChange = (orderItem, index) => {
    if (orderItem.length === 0) {
      let orderItems = [...this.state.orderItems];
      orderItems.splice(index, 1);
      this.setState({ orderItems });
    } else {
      // 1. Make a shallow copy of the items
      let orderItems = [...this.state.orderItems];
      // 2. Make a shallow copy of the item you want to mutate
      //let item = {...orderItems[index]};
      // 3. Replace the property you're intested in
      //item.name = 'newName';
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      orderItems[index] = orderItem;
      // 5. Set the state to our new copy
      this.setState({ orderItems });
    }
  };

  addEmptyOrderItem = () => {
    let orderItems = [...this.state.orderItems];
    orderItems.push({
      productId: "",
      qty: "",
    });
    this.setState({ orderItems });
  };

  saveOrder = (e) => {
    e.preventDefault();
    var id = this.state.id;

    var model = {
      userId: this.state.userId,
      orderItems: this.state.orderItems,
      totalPrice: parseInt(this.totalPrice.value ?? 0),
      delivery: this.state.delivery,
      schedule: this.state.schedule,
      remark: this.remark.value
    };

    if (id !== 0) {
      // update
      axios.patch(`/api/order/${id}`, model).then((response) => {
        this.props.history.push("/manageorder");
      });
    } else {
      // insert
      axios.post(`/api/order`, model).then((response) => {
        this.props.history.push("/manageorder");
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
                    <form onSubmit={this.saveOrder}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="userId">ชื่อลูกค้า</label>
                          <Select
                            options={this.state.userDropdown}
                            id="userId"
                            value={this.state.userDropdown.filter(
                              (options) => options.value === this.state.userId)
                            }
                            onChange={this.handleUserChange}
                            isSearchable={false}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="userId">รายการสินค้า</label>
                          {this.state.orderItems.map((item, index) => {
                            return (
                              <OrderItemCart
                                key={index}
                                index={index}
                                orderItem={item}
                                productDropdown={this.state.productDropdown}
                                productDropdownGroup={
                                  this.state.productDropdownGroup
                                }
                                onOrderItemChange={this.handleOrderItemChange}
                              />
                            );
                          })}
                          <button
                            type="button"
                            className="border text-center m-auto d-block px-3 btn btn-primary"
                            onClick={this.addEmptyOrderItem}
                          >
                            +
                          </button>
                        </div>
                        <div className="form-group">
                          <label htmlFor="totalPrice">ราคารวม</label>
                          <input
                            type="number"
                            className="form-control"
                            id="totalPrice"
                            ref={(input) => (this.totalPrice = input)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="schedule">วันที่จัดส่ง</label>
                          <Select
                            options={schedule}
                            id="schedule"
                            onChange={this.handleScheduleChange}
                            isSearchable={false}
                            value={schedule.filter(
                              (options) => options.value === this.state.schedule)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="delivery">วิธีการจัดส่ง</label>
                          <Select
                            options={delivery}
                            id="delivery"
                            onChange={this.handleDeliveryChange}
                            isSearchable={false}
                            value={delivery.filter(
                              (options) => options.value === this.state.delivery)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="remark">หมายเหตุ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="remark"
                            ref={(input) => (this.remark = input)}
                          />
                        </div>
                      </div>
                      <div className="card-footer">
                        <Link to="/manageorder" className="btn btn-danger mr-2">
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

class OrderItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.orderItem.productId ?? "",
      qty: this.props.orderItem.qty ?? 0,
    };

    this.onProductChange = this.onProductChange.bind(this);
    this.onQtyChange = this.onQtyChange.bind(this);
    this.removeOrderItem = this.removeOrderItem.bind(this);
  }

  onProductChange(event) {
    this.setState({
      productId: event.value,
    });

    var obj = {
      productId: event.value,
      qty: this.state.qty,
    };

    this.props.onOrderItemChange(obj, this.props.index);
  }

  onQtyChange(event) {
    this.setState({
      qty: event.target.value,
    });

    var obj = {
      productId: this.state.productId,
      qty: parseInt(event.target.value ?? 0),
    };

    this.props.onOrderItemChange(obj, this.props.index);
  }

  removeOrderItem(event) {
    event.preventDefault();
    this.props.onOrderItemChange([], this.props.index);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-8 mb-2 pr-0">
            <Select
              value={this.props.productDropdown.filter(
                (options) => options.value === this.props.orderItem.productId
              )}
              options={this.props.productDropdownGroup}
              id="productId"
              onChange={this.onProductChange}
              isSearchable={false}
            />
          </div>
          <div className="col-3">
            <input
              type="number"
              className="form-control text-right"
              placeholder="จำนวน"
              onChange={this.onQtyChange}
              value={this.props.orderItem.qty}
              pattern="[0-9]*|\s"
            />
          </div>
          <div className="col-1 pl-0">
            <button
              className="btn btn-danger btn-block px-0"
              onClick={this.removeOrderItem}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
