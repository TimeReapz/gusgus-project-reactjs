/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { db } from "../../../utils/firebase";
import Select from "react-select";

const schedule = [
  { value: "ทุกพระ 8,15", label: "ทุกพระ 8,15" },
  { value: "ทุกพระ 8", label: "ทุกพระ 8" },
  { value: "ทุกพระ 15", label: "ทุกพระ 15" },
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
    id: "",
    tbUser_ID: "",
    schedule: "",
    delivery: "",
    remark: "",
    orderScheduleItems: [
      {
        tbProduct_ID: "",
        qty: "",
      },
    ],
    totalPrice: "",
  };

  const [orderSchedule, setOrderSchedule] = useState(initOrderSchedule);
  const [userDropdown, setUserDropdown] = useState([]);
  const [productDropdownGroup, setProductDropdownGroup] = useState([]);
  const [productDropdown, setProductDropdown] = useState([]);

  const tbOrderSchedules = db.collection("tbOrderSchedules");
  const tbProducts = db.collection("tbProducts");
  const tbUsers = db.collection("tbUsers");

  useEffect(() => {
    async function getDropDownUsers() {
      const snapshot = await tbUsers.orderBy("name").get();

      setUserDropdown(
        snapshot.docs.map((doc) => ({
          value: doc.id,
          label: doc.data().name,
        }))
      );
    }

    async function getDropDownProducts() {
      const snapshot = await tbProducts.orderBy("name").get();

      const productList = snapshot.docs.map((doc) => ({
        value: doc.id,
        label:
          doc.data().name +
          (doc.data().subType !== "" ? "(" + doc.data().subType + ")" : "") +
          " " +
          doc.data().price +
          "฿",
        price: doc.data().price,
        nameGroup: doc.data().name,
      }));
      setProductDropdown(productList);

      const nameGroupArr = productList.map((x) => x.nameGroup);
      const unique = [...new Set(nameGroupArr)];
      console.log(productList);
      const productGroup = unique
        .sort((a, b) => a - b)
        .map((doc) => ({
          label: doc,
          options: productList.filter((x) => x.nameGroup === doc),
        }));
      console.log(productGroup);
      setProductDropdownGroup(productGroup);
    }

    getDropDownUsers();
    getDropDownProducts();

    if (props.match.params.id) {
      tbOrderSchedules
        .doc(props.match.params.id)
        .get()
        .then((snapshot) => {
          setOrderSchedule({ ...snapshot.data(), id: props.match.params.id });
        });
    }

    return () => {
      setOrderSchedule({}); // Clean up
    };
  }, [props.match.params.id]);

  const save = (e) => {
    console.log("submit");
    e.preventDefault();
    console.log(orderSchedule);
    if (orderSchedule.id !== "") {
      // update
      console.log(orderSchedule.id);

      let model = {
        tbUser_ID: orderSchedule.tbUser_ID,
        totalPrice: parseInt(orderSchedule.totalPrice),
        schedule: orderSchedule.schedule,
        delivery: orderSchedule.delivery,
        remark: orderSchedule.remark,
        update_date: moment().format(),
      };
      const userRef = tbUsers.doc(orderSchedule.tbUser_ID);
      userRef.get().then((snap) => (model = { ...model, tbUser: snap.data() }));

      orderSchedule.orderScheduleItems.forEach((item, index) => {
        const productRef = tbProducts.doc(item.tbProduct_ID);
        productRef
          .get()
          .then(
            (snap) =>
              (orderSchedule.orderScheduleItems[index].tbProduct = snap.data())
          );
        console.log(orderSchedule.orderScheduleItems);
      });
      console.log(orderSchedule.orderScheduleItems);
      model = {
        ...model,
        orderScheduleItems: orderSchedule.orderScheduleItems,
      };

      const modelRef = tbOrderSchedules.doc(orderSchedule.id);
      modelRef.update(model);
      history.push("/manageorder-schedule");
    } else {
      // create
      let model = {
        tbUser_ID: orderSchedule.tbUser_ID,
        totalPrice: parseInt(orderSchedule.totalPrice),
        schedule: orderSchedule.schedule,
        delivery: orderSchedule.delivery,
        remark: orderSchedule.remark,
        create_date: moment().format(),
        isactive: 1,
      };
      const userRef = tbUsers.doc(orderSchedule.tbUser_ID);
      userRef.get().then((doc) => (model = { ...model, tbUser: doc.data() }));

      orderSchedule.orderScheduleItems.forEach((item, index) => {
        const productRef = tbProducts.doc(item.tbProduct_ID);
        productRef
          .get()
          .then(
            (snap) =>
              (orderSchedule.orderScheduleItems[index].tbProduct = snap.data())
          );
      });
      model = {
        ...model,
        orderScheduleItems: orderSchedule.orderScheduleItems,
      };

      console.log(model);
      const modelRef = tbOrderSchedules;
      modelRef.add(model);
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
      tbProduct_ID: "",
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
                        <label htmlFor="tbUser_ID">ชื่อลูกค้า</label>
                        <Select
                          options={userDropdown}
                          id="tbUser_ID"
                          value={userDropdown.filter(
                            (options) =>
                              options.value === orderSchedule.tbUser_ID
                          )}
                          onChange={(e) => {
                            setOrderSchedule({
                              ...orderSchedule,
                              tbUser_ID: e.value,
                            });
                          }}
                          isSearchable={false}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="tbUser_ID">รายการสินค้า</label>
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
    setOrderScheduleItem(props.orderScheduleItem);
  }, [props.orderScheduleItem]);

  const initOrderScheduleItem = {
    tbProduct_ID: "",
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
            id="tbProduct_ID"
            onChange={(e) => {
              setOrderScheduleItem({
                ...orderScheduleItem,
                tbProduct_ID: e.value,
              });
              props.onOrderScheduleItemChange(props.index, {
                ...orderScheduleItem,
                tbProduct_ID: e.value,
              });
            }}
            isSearchable={false}
            value={props.productDropdown.filter(
              (options) =>
                options.value === props.orderScheduleItem.tbProduct_ID
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
          <div
            className="btn btn-danger btn-block px-0"
            onClick={removeOrderItem}
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
}
