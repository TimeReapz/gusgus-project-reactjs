import React, { useState, useEffect } from "react";
import firebase from "../../../utils/firebase";
import { SwalConfirm, SwalToast } from "../../../lib/script";
import moment from "moment";
import Select from "react-select";

export default function Home() {
  const [dataTable, setDataTable] = useState([]);
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8");

  const schedule = [
    { value: "ทุกพระ 8", label: "ทุกพระ 8" },
    { value: "ทกุพระ 15", label: "ทุกพระ 15" },
    { value: "วันโกน", label: "วันโกน" },
    { value: "วันพฤหัส", label: "วันพฤหัส" },
    { value: "วันอาทิตย์", label: "วันอาทิตย์" },
  ];

  useEffect(() => {
    const q = dataSchedule;

    const query = firebase
      .database()
      .ref("tbOrderSchedule")
      .orderByChild("schedule")
      .startAt(q)
      .endAt(q + "\uf8ff");
    // listen every time data change in todo ref
    query.on("value", (osSnap) => {
      var models = osSnap.val();

      const temp = [];
      for (let id in models) {
        var isSameDate =
          moment(models[id].deliverTime, "YYYY-MM-DD").format("YYYY-MM-DD") ===
          moment().format("YYYY-MM-DD");
        if (!isSameDate) {
          temp.push({ id, ...models[id] });
        }
      }
      setDataTable(temp);
    });

    return () => {
      console.log(1);
      setDataTable([]);
    };
  }, [dataSchedule]);

  return (
    <div>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายการจัดส่ง</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Select
                options={schedule}
                id="schedule"
                onChange={(e) => {
                  setDataSchedule(e.value);
                }}
                isSearchable={false}
                value={schedule.filter(
                  (options) => options.value === dataSchedule
                )}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-right">
              <span className="text-sm">ทั้งหมด {dataTable.length} รายการ</span>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12">
              {dataTable.length > 0
                ? dataTable.map((item) => (
                    <OrderScheduleBox item={item} key={item.id} />
                  ))
                : "ไม่พบข้อมูล"}
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
        // insert tbOrder
        let modelOrder = {
          create_date: moment().format(),
          isactive: 1,
          orderTypeId: 1,
          orderTypeName: "ลูกค้าประจำ",
          tbOrderScheduleId: item.id,
          tbOrderSchedule: item,
        };
        const modelOrderRef = firebase.database().ref("tbOrder");
        modelOrderRef.push(modelOrder);

        // insert tbHistory
        const modelOrderScheduleRef = firebase
          .database()
          .ref("tbOrderSchedule")
          .child(item.id);
        modelOrderScheduleRef.update({ deliverTime: moment().format() });
        SwalToast.fire();
      }
    });
  };
  return (
    <div>
      <div className="card card-outline card-primary">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8 text-lg text-bold">{item.tbUser.name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {item.orderScheduleItems.map((orderScheduleItem, index) => (
                <div className="info-box" key={index}>
                  <span className="info-box-icon">
                    <img
                      src={
                        orderScheduleItem.tbProduct.thumbnail &&
                        orderScheduleItem.tbProduct.thumbnail
                      }
                      alt={orderScheduleItem.tbProduct.name}
                    />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text text-md">
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
