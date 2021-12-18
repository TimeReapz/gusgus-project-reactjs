import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import firebase from "../../../utils/firebase";
import { useHistory } from "react-router-dom";
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

export default function Create(props) {
  const history = useHistory();

  const initOrderSchedule = {
    id: '',
    userId: '',
    schedule: '',
    delivery: '',
    remark: '',
    orderScheduleItems: [
      {
        productId: '',
        qty: '',
      },
    ],
    totalPrice: 0
  };

  const [orderSchedule, setOrderSchedule] = useState(initOrderSchedule);
  const [userDropdown, setUserDropdown] = useState([]);
  const [productDropdownGroup, setProductDropdownGroup] = useState([]);
  const [productDropdown, setProductDropdown] = useState([]);

  useEffect(() => {
    if (props.match.params.id) {
      const modelRef = firebase
        .database()
        .ref("tbOrderSchedule")
        .child(props.match.params.id);

      modelRef.on("value", (snapshot) => {
        const model = snapshot.val();
        console.log(model)
        setOrderSchedule({ ...model, id: props.match.params.id });
      });
    }

    return () => {
      setOrderSchedule({}); // Clean up
    };
  }, [props.match.params.id]);

  useEffect(() => {
    // dropdown user
    const userRef = firebase.database().ref("tbUser").orderByChild("name");

    userRef.on("value", (snapshot) => {
      const models = snapshot.val();
      const temp = [];
      for (let id in models) {
        var obj = {
          value: id,
          label: models[id].name,
        };
        temp.push(obj);
      }
      setUserDropdown(temp);
    });
  }, []);

  useEffect(() => {
    // dropdown product
    const productRef = firebase.database().ref("tbProduct").orderByChild("name");

    productRef.on("value", (snapshot) => {
      const models = snapshot.val();
      const temp = [];
      for (let id in models) {
        var obj = {
          id: id,
          ...models[id],
        };
        temp.push(obj);
      }

      var tempArrGroup = [];
      var tempArr = [];
      temp
        .sort((a, b) => a.name - b.name)
        .forEach((item) => {
          var obj = {
            value: item.id,
            price: item.price,
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

      setProductDropdownGroup(tempArrGroup);
      setProductDropdown(tempArr);
    });
  }, []);

  const save = (e) => {
    console.log("submit");
    e.preventDefault();
    console.log(orderSchedule);
    if (orderSchedule.id !== "") {
      console.log(orderSchedule.id);

      let model = {
        userId: orderSchedule.userId,
        totalPrice: parseInt(orderSchedule.totalPrice),
        schedule: orderSchedule.schedule,
        delivery: orderSchedule.delivery,
        remark: orderSchedule.remark,
        update_date: moment().format(),
      };
      const userRef = firebase
        .database()
        .ref("tbUser")
        .child(orderSchedule.userId);
      userRef.once("value", (snap) => (model = { ...model, tbUser: snap.val() }));

      orderSchedule.orderScheduleItems.forEach((item, index) => {
        const productRef = firebase
          .database()
          .ref("tbProduct")
          .child(item.productId);
        productRef.once(
          "value",
          (snap) =>
            (orderSchedule.orderScheduleItems[index].tbProduct = snap.val())
        );
        console.log(orderSchedule.orderScheduleItems);
      });
      console.log(orderSchedule.orderScheduleItems);
      model = {
        ...model,
        orderScheduleItems: orderSchedule.orderScheduleItems,
      };

      const modelRef = firebase
        .database()
        .ref("tbOrderSchedule")
        .child(orderSchedule.id);
      modelRef.update(model);
      history.push("/manageorder-schedule");
    } else {
      let model = {
        userId: orderSchedule.userId,
        totalPrice: parseInt(orderSchedule.totalPrice),
        schedule: orderSchedule.schedule,
        delivery: orderSchedule.delivery,
        remark: orderSchedule.remark,
        create_date: moment().format(),
        isactive: 1,
      };
      const userRef = firebase
        .database()
        .ref("tbUser")
        .child(orderSchedule.userId);
      userRef.once("value", (snap) => (model = { ...model, tbUser: snap.val() }));

      orderSchedule.orderScheduleItems.forEach((item, index) => {
        const productRef = firebase
          .database()
          .ref("tbProduct")
          .child(item.productId);
        productRef.once(
          "value",
          (snap) =>
            (orderSchedule.orderScheduleItems[index].tbProduct = snap.val())
        );
        console.log(orderSchedule.orderScheduleItems);
      });
      console.log(orderSchedule.orderScheduleItems);
      model = {
        ...model,
        orderScheduleItems: orderSchedule.orderScheduleItems,
      };

      const modelRef = firebase.database().ref("tbOrderSchedule");
      modelRef.push(model);
      history.push("/manageorder-schedule");
    }
  };

  const handleOrderScheduleItemChange = (index, orderScheduleItem) => {
    if (Object.keys(orderScheduleItem).length === 0) {
      let orderScheduleItems = [...orderSchedule.orderScheduleItems];
      orderScheduleItems.splice(index, 1);
      setOrderSchedule({
        ...orderSchedule,
        orderScheduleItems: orderScheduleItems,
      });
    } else {
      // 1. Make a shallow copy of the items
      let orderScheduleItems = [...orderSchedule.orderScheduleItems];
      // 2. Make a shallow copy of the item you want to mutate
      //let item = {...orderItems[index]};
      // 3. Replace the property you're intested in
      //item.name = 'newName';
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      orderScheduleItems[index] = orderScheduleItem;
      // 5. Set the state to our new copy
      setOrderSchedule({ ...orderSchedule, orderScheduleItems });
    }
    
  };

  const addEmptyOrderScheduleItem = () => {
    let orderScheduleItems = [...orderSchedule.orderScheduleItems];
    orderScheduleItems.push({
      productId: "",
      qty: "",
    });
    setOrderSchedule({ ...orderSchedule, orderScheduleItems });
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
                        <label htmlFor="userId">ชื่อลูกค้า</label>
                        <Select
                          options={userDropdown}
                          id="userId"
                          value={userDropdown.filter(
                            (options) => options.value === orderSchedule.userId
                          )}
                          onChange={(e) => {
                            setOrderSchedule({
                              ...orderSchedule,
                              userId: e.value,
                            });
                          }}
                          isSearchable={false}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="userId">รายการสินค้า</label>
                        {orderSchedule.orderScheduleItems.map((item, index) => {
                          return (
                            <OrderScheduleItemFunc
                              key={index}
                              index={index}
                              orderScheduleItem={item}
                              productDropdownGroup={productDropdownGroup}
                              productDropdown={productDropdown}
                              onOrderScheduleItemChange={
                                handleOrderScheduleItemChange
                              }
                            />
                          );
                        })}
                        <button
                          type="button"
                          className="border text-center m-auto d-block px-3 btn btn-primary"
                          onClick={addEmptyOrderScheduleItem}
                        >
                          +
                        </button>
                      </div>
                      <div className="form-group">
                        <label htmlFor="totalPrice">ราคารวม</label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          id="totalPrice"
                          onChange={(e) => {
                            setOrderSchedule({
                              ...orderSchedule,
                              totalPrice: e.target.value,
                            });
                          }}
                          value={orderSchedule.totalPrice}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="schedule">วันที่จัดส่ง</label>
                        <Select
                          options={schedule}
                          id="schedule"
                          onChange={(e) => {
                            setOrderSchedule({
                              ...orderSchedule,
                              schedule: e.value,
                            });
                          }}
                          isSearchable={false}
                          value={schedule.filter(
                            (options) =>
                              options.value === orderSchedule.schedule
                          )}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="delivery">วิธีการจัดส่ง</label>
                        <Select
                          options={delivery}
                          id="delivery"
                          onChange={(e) => {
                            setOrderSchedule({
                              ...orderSchedule,
                              delivery: e.value,
                            });
                          }}
                          isSearchable={false}
                          value={delivery.filter(
                            (options) =>
                              options.value === orderSchedule.delivery
                          )}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="remark">หมายเหตุ</label>
                        <input
                          type="text"
                          className="form-control"
                          id="remark"
                          onChange={(e) => {
                            setOrderSchedule({
                              ...orderSchedule,
                              remark: e.target.value,
                            });
                          }}
                          value={orderSchedule.remark}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link
                        to="/manageorder-schedule"
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

function OrderScheduleItemFunc(props) {
  useEffect(() => {
    setOrderScheduleItem(props.orderScheduleItem)
  }, [props.orderScheduleItem]);
  
  const initOrderScheduleItem = {
    productId: "",
    qty: "",
  };
  const [orderScheduleItem, setOrderScheduleItem] = useState(
    initOrderScheduleItem
  );

  const removeOrderItem = (event) => {
    event.preventDefault();
    props.onOrderScheduleItemChange({}, props.index);
  };

  return (
    <div>
      <div className="row">
        <div className="col-8 mb-2 pr-0">
          <Select
            options={props.productDropdownGroup}
            id="productId"
            onChange={(e) => {
              setOrderScheduleItem({
                ...orderScheduleItem,
                productId: e.value,
              });
              props.onOrderScheduleItemChange(props.index, {
                ...orderScheduleItem,
                productId: e.value,
              });
            }}
            isSearchable={false}
            value={props.productDropdown.filter(
              (options) => options.value === props.orderScheduleItem.productId
            )}
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            min="1"
            className="form-control text-right"
            placeholder="จำนวน"
            onChange={(e) => {
              setOrderScheduleItem({
                ...orderScheduleItem,
                qty: e.target.value,
              });
              props.onOrderScheduleItemChange(props.index, {
                ...orderScheduleItem,
                qty: e.target.value,
              });
            }}
            value={props.orderScheduleItem.qty}
            pattern="[0-9]*|\s"
          />
        </div>
        <div className="col-1 pl-0">
          <button
            className="btn btn-danger btn-block px-0"
            onClick={removeOrderItem}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
