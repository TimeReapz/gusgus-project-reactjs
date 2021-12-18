import React, { useState, useEffect } from "react";
import firebase from "../../../utils/firebase";
import { SwalConfirm } from "../../../lib/script";
import moment from "moment";

const schedule = [
  { value: "ทุกพระ 8", label: "ทุกพระ 8" },
  { value: "ทกุพระ 15", label: "ทุกพระ 15" },
  { value: "วันโกน", label: "วันโกน" },
  { value: "วันพฤหัส", label: "วันพฤหัส" },
  { value: "วันอาทิตย์", label: "วันอาทิตย์" },
];

export default function Home() {
  const [dataTable, setDataTable] = useState([]);
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8");

  useEffect(() => {
    const q = dataSchedule;

    const query = firebase
      .database()
      .ref("tbOrderSchedule")
      .orderByChild("schedule")
      .startAt(q)
      .endAt(q + "\uf8ff");
    // listen every time data change in todo ref
    query.on("child_added", (osSnap) => {
      const id = osSnap.key;

      const tbOrder = firebase
        .database()
        .ref("tbOrder")
        .orderByChild("tbOrderScheduleId")
        .equalTo(id);
      tbOrder.on("value", function (orderSnap) {
        var orders = orderSnap.val();
        var isDeliver = false;

        for (let id in orders) {
          var obj = orders[id];
          var isSameDate =
            moment(obj.create_date, "YYYY-MM-DD").format("YYYY-MM-DD") ===
            moment().format("YYYY-MM-DD");
          if (obj.orderTypeId === 1 && obj.isactive === 1 && isSameDate) {
            isDeliver = true;
            break;
          }
        }

        setDataTable([]);
        if (!isDeliver) {
          let temp = {
            id,
            ...osSnap.val(),
          };
          setDataTable((prev) => [...prev, temp]);
        }
      });
    });

    return () => {
      console.log(1)
      setDataTable([]);
    };
  }, [dataSchedule]);

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
                {schedule.map((item, index) => {
                  return (
                    <label
                      className={
                        "btn btn-info mb-1 " +
                        (item.value === dataSchedule ? "active" : "")
                      }
                      key={index}
                    >
                      <input
                        type="radio"
                        name="options"
                        autoComplete="off"
                        onClick={() => setDataSchedule(item.value)}
                      />
                      {item.label}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              {dataTable.map((item) => (
                <OrderScheduleBox item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function OrderScheduleBox({ item }) {
  const deliver = () => {
    SwalConfirm.fire({
      title: "ยืนยันการจัดส่ง",
    }).then((result) => {
      if (result.value) {
        let model = {
          create_date: moment().format(),
          isactive: 1,
          orderTypeId: 1,
          orderTypeName: "ลูกค้าประจำ",
          tbOrderScheduleId: item.id,
          tbOrderSchedule: item,
        };
        const modelRef = firebase.database().ref("tbOrder");
        modelRef.push(model);
      }
    });
  };
  return (
    <div>
      <div className="card card-outline card-primary">
        <div className="card-body">
          <div className="row">
            <div className="col-8 text-lg text-bold">{item.tbUser.name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {item.orderScheduleItems.map((orderScheduleItem, index) => (
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
                        orderScheduleItem.tbProduct.thumbnail &&
                        orderScheduleItem.tbProduct.thumbnail
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
                      {orderScheduleItem.tbProduct.name +
                        (orderScheduleItem.tbProduct.subType !== ""
                          ? " (" + orderScheduleItem.tbProduct.subType + ")"
                          : "")}
                    </span>
                    <span className="info-box-number">
                      {orderScheduleItem.tbProduct.price} ฿
                    </span>
                  </div>
                  <div className="info-box-content">
                    <span className="info-box-text text-xl text-right">
                      x {orderScheduleItem.qty}
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
              <button className="btn btn-primary btn-block" onClick={deliver}>
                จัดส่ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
